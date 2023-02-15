import React from 'react'
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Nav from "./Nav"

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname)
  let navigate = useNavigate()

  const actions = {
    goHome: () => {
      navigate('/')
    },
    goToPostAvatar: ()=>{
      navigate('/create')
    },
    goToPrompts: ()=>{
      navigate('/prompts')
    }
  }

  return (
    <div className='overflow-x-hidden bg-gray-900 text-gray-200 transition-all duration-300 ease-out '>
      <nav className='h-[10vh]'>
      <Nav {...actions}/>
      </nav>
  
      <main className=''>
      <Outlet />
      </main>
 
    </div>
  )
}

export default Layout