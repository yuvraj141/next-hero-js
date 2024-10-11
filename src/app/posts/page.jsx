import next from 'next'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import React from 'react'
const getPosts=async()=>{
 const res=await fetch('https://jsonplaceholder.typicode.com/posts')
 const data=res.json()
 console.log(data);
//  if(data){
//   redirect(`/posts/${data[0].data.id}`)
// }
return data
}
const getTime=async()=>{
  const res=await fetch('http://localhost:3000/time',{cache:'no-store'},
   // {next:{revalidate: 5}} means after every 5 sec it will refreshes
  )
  const data=await res.json()
  return data.currentTime
}
const postsPage =async()=> {
    const postsData=await getPosts()
    console.log(postsData);
    const currentTime=await getTime()
  return (
    <div>
        <h6 className='text-center font-semibold text-2xl'>posts Page</h6>
        <h6 className='text-center font-semibold text-2xl'>Current Time : {currentTime}</h6>
        <div className='grid grid-cols-4 gap-5'>
   {
    postsData.slice(0,20).map(post =>(
        <div key={post.id} className='border-2 gap-3 p-6 py-2'>
            <h5><span className='font-bold'>Title :</span>{post.title}</h5>
            <h5 className=''><span className='font-bold'>Description :</span>{post.body}</h5>
            <button>
              <Link href={`/posts/${post.id}`}>See Details</Link>
            </button>
        </div>
    ))
   }
        </div>
    </div>
  )
}
export default postsPage
