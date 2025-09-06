import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'

const App = () => {


  const [showLogin,setShowLogin]= useState(false)
  const isOwnberPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
     {!isOwnberPath && <Navbar setShowLogin={setShowLogin}/>}
     <Routes>
      <Route path ='/' element={<Home/>}/>
       <Route path ='/car-details/:id' element={<CarDetails/>}/>
        <Route path ='/cars' element={<Cars/>}/>
         <Route path ='/my-bookings' element={<MyBookings/>}/>
     </Routes>



    </>
  )
}

export default App
