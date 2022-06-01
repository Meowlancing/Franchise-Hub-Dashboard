import React from 'react'
import "./styles/list.scss"
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"
import DataTable from '../components/DataTable'
function List() {
  return (
    <div className='list'>
      <SideBar/>
      <div className='listContainer'>
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List