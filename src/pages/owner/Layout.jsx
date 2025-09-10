import React from 'react'
import NavbarOwner from './NavbarOwner'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <NavbarOwner/>
      <div>
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
