import React from 'react'
import "./styles/list.scss"
import SideBar from "../components/SideBar"
import DataTable1 from '../components/FreeAdData'
function FreeAd() {
  return (
    <div className='list'>
      <SideBar/>
      <div className='listContainer'>
        <DataTable1/>
      </div>
    </div>
  )
}

export default FreeAd