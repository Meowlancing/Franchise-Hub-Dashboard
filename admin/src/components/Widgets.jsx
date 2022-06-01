import { Category, FmdGood, KeyboardArrowUp, ListAltOutlined, LocationCityOutlined, MonetizationOn, PersonOutlined } from '@mui/icons-material'
import React from 'react'
import "./styles/widget.scss"
const Widgets=({type})=> {
  let data;
  const amount=100;
  const diff = 20;

  switch(type){
    case "franchise":
    data={title:"FRANCHISE", isMoney:false, link:" SEE ALL FRANCHISE", icon:<PersonOutlined className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>,};
    break;
    case "investment":
    data={title:"INVESTMENT", isMoney:true, link:" VIEW ALL INVESTMENTS", icon:<MonetizationOn className='icon' style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>,};
    break;
    case "industry":
    data={title:"INDUSTRY", isMoney:false, link:" SEE ALL INDUSTRIES", icon:<LocationCityOutlined className='icon' style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>,};
    break;
    case "location":
    data={title:"LOCATION", isMoney:false, link:" SEE ALL FRANCHISE", icon:<FmdGood className='icon' style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>,};
    break;
    default:
      break;
  }



  return (
    <div className='widget'>
      <div className='left'>
       <span className='title'>{data.title}</span>
       <span className='counter'>{data.isMoney && "$"}{amount}</span>
       <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'><KeyboardArrowUp/>20%</div>
        {diff}%
      {/* <PersonOutlined className='icon'/> */}
      </div>
      {data.icon}
    </div>
  )
}

export default Widgets