import React from 'react'
import "./styles/list.scss"
import SideBar from "../components/SideBar"
import DataTable2 from '../components/NewsData'
function FreeAd() {
  return (
    <div className='list'>
      <SideBar/>
      <div className='listContainer'>
        <DataTable2/>
      </div>
    </div>
  )
}

export default FreeAd