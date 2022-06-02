import React from 'react'
import "./styles/new.scss"
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'
function New({inputs, title}) {

  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className='new'>
    <SideBar/>
      <div className='newContainer'>
        <Navbar/>
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={file ? URL.createObjectURL(file):"https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg"}></img>
          </div>
          <div className='right'>
            <form>
            <div className='formInput'>
                <label htmlFor='file'>Image:<DriveFolderUploadOutlined className='icon'/></label>
                <input type='file' id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              <div className='formInput'>
                <label>Username</label>
                <input type='text' placeholder='sc_30' />
              </div>
              {inputs.map((input)=>(
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New