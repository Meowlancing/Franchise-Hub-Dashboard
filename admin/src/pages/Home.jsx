import React from 'react'
import "./styles/home.scss";
import SideBar from "../components/SideBar"
const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <div className='homeContainer'>Container</div>
    </div>
  )
}

export default Home