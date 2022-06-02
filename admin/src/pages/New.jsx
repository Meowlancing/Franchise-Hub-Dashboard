import React from 'react'
import "./styles/list.scss"
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"
import DataTable1 from '../components/DataTable1'
import DataApproved from '../components/DataApproved'
function ListApproved() {
  return (
    <div className='list'>
      <SideBar/>
      <div className='listContainer'>
        <Navbar/>
        <DataApproved/>
      </div>
    </div>
  )
}

export default ListApproved