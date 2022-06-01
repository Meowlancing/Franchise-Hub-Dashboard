import React from 'react'
import "./styles/sidebar.scss"
import { Dashboard, OndemandVideo,StarBorderPurple500, HowToReg, Newspaper, Lightbulb, Person, AccessibilityNew, VisibilityOff,Logout } from '@mui/icons-material'
function SideBar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span>Franchise Hub</span>
        </div>
        <hr/>
        <div className='center'>
            <ul>
               <p className='title'>Website Content</p> <li><Dashboard className='icon'/><span>DashBoard</span></li>
               <li><OndemandVideo className='icon'/><span>Trending Videos</span></li>
               <li><StarBorderPurple500 className='icon'/><span>Top Franchise Opportunities</span></li>
               <li><OndemandVideo className='icon'/><span>All Franchise </span></li>
               <p className='title'>FORMS</p>
               <li><HowToReg className='icon'/><span>Franchisor Registration</span></li>
               <li><Newspaper className='icon'/><span>Newsletter Subscribers</span></li>
               <li><Lightbulb className='icon'/><span>Free Advice</span></li>
               <p className='title'>ADMIN ACCESS</p><li><Person className='icon'/><span>Profile</span></li>
               <li><AccessibilityNew className='icon'/><span>Change Access</span></li>
               <li><VisibilityOff className='icon'/><span>Change Password</span></li>
               <p className='title'>User</p><li><Logout className='icon'/><span>LogOut</span></li>
            </ul>
        </div>
        <div className='bottom'>
          <div className='coloroptions'></div>
          <div className='coloroptions'></div>
        </div>
    </div>
  )
}

export default SideBar