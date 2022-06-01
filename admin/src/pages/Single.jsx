import React from 'react'
import "./styles/single.scss"
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"
import Chart2 from "../components/Chart2"
import TableMain from "../components/TableMain"
function Single() {
  return (
    <div className='single'>
      <SideBar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='top'>
          <div className='left'>
          <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src='https://phantom-marca.unidadeditorial.es/552514302ed2f0578b5ad5bff5b5ade0/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/13/16471637135445.jpg' className='itemImg'/>
              <div className='details'>
                <h1 className='itemTitle'>Kobe Bryant</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>kobe@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+1 2345 67 89</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>MARS</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>Country</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart2 aspect={3 / 1} title="User Investment"/>
          </div>
        </div>
        <div className='bottom'>
        <h1 className='title'>Latest Investors</h1>
          <TableMain/>
        </div>
      </div>
    </div>
  )
}

export default Single