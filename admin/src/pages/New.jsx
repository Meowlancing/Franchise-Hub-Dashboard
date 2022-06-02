import React from 'react'
import "./styles/new.scss"
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"
import { DriveFolderUploadOutlined } from '@mui/icons-material'
function New() {
  return (
    <div className='new'>
    <SideBar/>
      <div className='newContainer'>
        <Navbar/>
        <div className='top'>
          <h1>Add new investor</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src='https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg'></img>
          </div>
          <div className='right'>
            <form>
            <div className='formInput'>
                <label htmlFor='file'>Image:<DriveFolderUploadOutlined className='icon'/></label>
                <input type='file' id='file' style={{display:"none"}}/>
              </div>
              <div className='formInput'>
                <label>Username</label>
                <input type='text' placeholder='sc_30' />
              </div>
              <div className='formInput'>
                <label>Name and Surname</label>
                <input type='text' placeholder='Steph Curry' />
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input type='email' placeholder='wardellcurry@gmail.com' />
              </div>
              <div className='formInput'>
                <label>Phone</label>
                <input type='text' placeholder='+1 234 567 89' />
              </div>
              <div className='formInput'>
                <label>Password</label>
                <input type='password'/>
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input type='text' placeholder='Akron, Ohio' />
              </div>
              <div className='formInput'>
                <label>Country</label>
                <input type='text' placeholder='USA' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New