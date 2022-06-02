import React from 'react'
import "./styles/sidebar.scss"
import { Dashboard, OndemandVideo,StarBorderPurple500, HowToReg, Newspaper, Lightbulb, Person, AccessibilityNew, VisibilityOff,Logout } from '@mui/icons-material'
import {Link} from "react-router-dom"

function SideBar() {
  return (
    <div className='sidebar'>
        <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}> 
            <span>Franchise Hub</span>
            </Link>
        </div>
        <hr/>
        <div className='center'>
            <ul>
               <p className='title'>Website Content</p>
               <Link to="/" style={{textDecoration:"none"}}><li><Dashboard className='icon'/><span>DashBoard</span></li></Link>
               
               <Link to="/products" style={{textDecoration:"none"}}>  <li><StarBorderPurple500 className='icon'/><span>Top Franchise Opportunities</span></li></Link>
               <Link to="/users" style={{textDecoration:"none"}}><li><OndemandVideo className='icon'/><span>All Franchise </span></li></Link>
               <p className='title'>FORMS</p>
               <Link to="/users/new" style={{textDecoration:"none"}}><li><HowToReg className='icon'/><span>Franchisor Registration</span></li></Link>
               <li><Newspaper className='icon'/><span>Newsletter Subscribers</span></li>
               
               <p className='title'>ADMIN ACCESS</p>
               <Link to="/users/userId" style={{textDecoration:"none"}}><li><Person className='icon'/><span>Profile</span></li></Link>
               <li><AccessibilityNew className='icon'/><span>Change Access</span></li>
               <li><VisibilityOff className='icon'/><span>Change Password</span></li>
               <p className='title'>User</p><li><Logout className='icon'/><span>LogOut</span></li>
            </ul>
        </div>
        <div className='bottom'>
        </div>
    </div>
  )
}

export default SideBar