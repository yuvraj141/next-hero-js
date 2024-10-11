import AboutComponents from "@/components/AboutComponents";
export const metadata = {
    title: {
        absolute:"About"//so that the default nxt hero will be disappear
    },
    description:"About Page"
}
const getTime=async()=>{
    const res=await fetch('http://localhost:3000/time')
    const data=await res.json()
    return data.currentTime
}
const aboutPage=async()=>{
   
  const currentTime=await getTime()
    return(
        <div>
        <h3 className='text-blue-500'>About page page</h3>
        <h3 className='text-blue-500'>Current Time :{currentTime}</h3>
        <AboutComponents></AboutComponents>
        </div>
    )
}
export default aboutPage