import React from 'react'
import "./styles/navbar.scss"
import { ChatBubbleOutlined, DarkModeOutlined, FullscreenExitOutlined, ListAltOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
         <div className='search'>
           <input type='text' placeholder='search'/>
           <SearchOutlined className='icon'/>
         </div>
         <div className='items'>
           <div className='item'>
             <FullscreenExitOutlined className='icon'/>
           </div>
           <div className='item'>
             <ListAltOutlined className='icon'/>
           </div>
           <div className='item'>
             <Avatar className='avatar'/>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar