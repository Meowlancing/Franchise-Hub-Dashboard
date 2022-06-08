import React from 'react'
import "./styles/sidebar.scss"
import { Dashboard, OndemandVideo,StarBorderPurple500, HowToReg, Newspaper, Lightbulb, Person, AccessibilityNew, VisibilityOff,Logout, FolderSpecial } from '@mui/icons-material'
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
               
               <Link to="/events" style={{textDecoration:"none"}}>  <li><StarBorderPurple500 className='icon'/><span>Events</span></li></Link>
               <Link to="/videos" style={{textDecoration:"none"}}><li><OndemandVideo className='icon'/><span>Trending Videos </span></li></Link>
               <p className='title'>FORMS</p>
               <Link to="/users/franchisor-reg" style={{textDecoration:"none"}}><li><HowToReg className='icon'/><span>Franchisor Registration</span></li></Link>
               <Link to="/newsletter" style={{textDecoration:"none"}}><li><Newspaper className='icon'/><span>NewsLetter Subscribers</span></li></Link>
               <Link to="/free" style={{textDecoration:"none"}}><li><FolderSpecial className='icon'/><span>Free Advice</span></li></Link>
               
               <p className='title'>ADMIN ACCESS</p>
               {/* <Link to="/users/userId" style={{textDecoration:"none"}}><li><Person className='icon'/><span>Profile</span></li></Link> */}
               <Link to="/users/access" style={{textDecoration:"none"}}><li><AccessibilityNew className='icon'/><span>Change UserName</span></li></Link>
               <Link to="/users/access" style={{textDecoration:"none"}}><li><VisibilityOff className='icon'/><span>Change Password</span></li></Link>
               <p className='title'>User</p><li><Logout className='icon'/><span>LogOut</span></li>
            </ul>
        </div>
        <div className='bottom'>
        </div>
    </div>
  )
}

export default SideBar