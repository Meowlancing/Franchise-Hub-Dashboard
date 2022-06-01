import React from 'react'
import "./styles/home.scss";
import SideBar from "../components/SideBar"
import Navbar from '../components/Navbar';
import Widgets from "../components/Widgets"
import { FeaturedChart } from '../components/FeaturedChart';
import Chart2 from '../components/Chart2';

const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <div className='homeContainer'>
          <Navbar/>
           <div className='widgets'>
             <Widgets type="franchise"/>
             <Widgets type="investment"/>
             <Widgets type="industry"/>
             <Widgets type="location"/>
           </div>
           <div className='charts'>
             <FeaturedChart/>
             <Chart2/>
           </div>
        </div>
    </div>
  )
}

export default Home