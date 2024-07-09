import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Head from './Head'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (<>
    <div className="">
    <Head></Head>
    </div>
    <div className='flex flex-col sm:flex-row w-full'>
    <Sidebar className='w-full sm:w-1/4 lg:w-1/5 xl:w-1/6'></Sidebar>
    <Outlet className='w-full sm:w-3/4 lg:w-4/5 xl:w-5/6'></Outlet>
  </div>
  </>
  
  )
}

export default Body