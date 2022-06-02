import React from 'react'
import "./styles/new.scss"
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"
function New() {
  return (
    <div classNmae='new'>
    <SideBar/>
      <div className='newContainer'>
        <Navbar/>
        <div className='top'>
          <h1>Add new user</h1>
        </div>
        <div className='bottom'>
          <div className='left'>left</div>
          <div className='right'>right</div>
        </div>
      </div>
    </div>
  )
}

export default New