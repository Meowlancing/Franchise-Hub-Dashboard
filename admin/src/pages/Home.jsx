import React from 'react'
import "./styles/home.scss";
import SideBar from "../components/SideBar"
import TableMain from '../components/TableMain';

const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <div className='homeContainer'>
           <div className='charts'>
           </div>
           <div className='listContainer'>
             <div className='listTitle'>Latest Transactions</div>
             <TableMain/>
           </div>
        </div>
    </div>
  )
}

export default Home