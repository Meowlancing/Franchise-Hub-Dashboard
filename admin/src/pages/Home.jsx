import React, { useState } from 'react'
import "./styles/home.scss";
import SideBar from "../components/SideBar"
import { Button, Card, Form } from 'react-bootstrap';
import axios from "axios"
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  
  function handleFormInput(event) {
    setFormData({ ...formData, [event.target.name] : event.target.value });
  }

  async function postData() {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/api/v1/admin/login",
        data: formData,
      });

      if (response.data.success) {
        if (response.data.token)
          localStorage.setItem('token', response.data.token)
        navigate('/users');
      }
      // return  response;
    } catch (error) {
      alert('Invalid credential(s)');
    }
  }

  return (
    <div className='home'>
        <div className='homeContainer'>
           <Card id="HomeCardContainer" border="danger" style={{textAlign: "center" , width: "24rem"}} className="home-card">
             <Card.Header>
               <Card.Title style={{fontSize: "2rem"}}>
                 LogIn
               </Card.Title>
               <Card.Body>
                 <Form>
                   <Form.Group className='mb-3'>
                     <Form.Control 
                       type="text"
                       name="username"
                       placeholder="Enter UserName"
                       onChange={handleFormInput}
                     />
                   </Form.Group>
                   
                   <Form.Group className='mb-3'>
                     <Form.Control 
                       name="password"
                       type="password"
                       placeholder="Enter Password"
                       onChange={handleFormInput}
                     />
                   </Form.Group>
                   <Button variant='danger' onClick={postData}>Submit</Button>
                  
                 </Form>
               </Card.Body>
             </Card.Header>
           </Card>
        </div>
    </div>
  )
}

export default Home