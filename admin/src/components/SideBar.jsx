import React from 'react'
import "./styles/sidebar.scss"
function SideBar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span>Franchise Hub</span>
        </div>
        <div className='center'>
            <ul>
                <li>DashBoard</li>
                <li>DashBoard</li>
                <li>DashBoard</li>
                <li>DashBoard</li>
            </ul>
        </div>
        <div className='bottom'>color options</div>
    </div>
  )
}

export default SideBar