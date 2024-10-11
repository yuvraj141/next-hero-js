"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function NavBar(){
  const pathName=usePathname()
  const router=useRouter()
const links=[
  {
    title:'Home',
    path:'/'
  },
  {
    title:'Blogs',
    path:'/blogs'
  },
  // {
  //   title:'Meals',
  //   path:'/meals'
  // },
  {
    title:'Posts',
    path:'/posts'
  },
  {
    title:'Services',
    path:'/services'
  },
  {
    title:'About',
    path:'/about'
  },
  {
    title:'Dashboard',
    path:'/dashboard'
  },
  {
    title:'Categories',
    path:'/categories'
  },
]
const handler=()=>{
  router.push('/login')
}
if(pathName.includes('/dashboard')){
  return(
    <div className='bg-cyan-950 text-white p-6 text-2xl text-center'>
      dashboard layout
    </div>
  )
}
    return(
        <div className='bg-blue-500 text-white font-semibold flex px-10 items-center justify-between '>
          <h3 className='text-3xl'>Next <span className='text-black '>Hero</span></h3>
              <nav >
          < ul className='flex p-4 gap-5 justify-between'>
            {
              links.map(link=><Link className={`${pathName===link.path && 'text-green-500'}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
        </nav>
        <button onClick={handler} className='bg-pink-500'> Login</button>
        </div>
    )
}