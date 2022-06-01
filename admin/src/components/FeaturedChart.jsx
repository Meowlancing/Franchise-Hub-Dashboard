import React from 'react'
import "./styles/featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export const FeaturedChart = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Investments</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className='bottom'>
        <div className='featureChart'>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={1}/>
        </div>
        <p className='title'>Total Registrations</p>
        <p className='amount'>$12.4k</p>
        <p className='investment-details'>All Investments till now.</p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Total</div>
            <div className='itemResult positive'>
              <KeyboardArrowUp fontSize='small'/> 
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Investors</div>
            <div className='itemResult negative'>
              <div className='resultAmount'>12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
