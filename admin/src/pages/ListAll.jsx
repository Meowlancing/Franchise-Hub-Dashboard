import React from 'react'
import "./styles/list.scss"
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"
import DataTable1 from '../components/DataTable1'
function ListAll() {
  return (
    <div className='list'>
      <SideBar/>
      <div className='listContainer'>
        <Navbar/>
        <DataTable1/>
      </div>
    </div>
  )
}

export default ListAll