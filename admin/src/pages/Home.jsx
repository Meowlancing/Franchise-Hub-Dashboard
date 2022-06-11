import React from 'react'
import "./styles/home.scss";
import SideBar from "../components/SideBar"
import { Button, Card, Form } from 'react-bootstrap';
import axios from "axios"

const Home = () => {

  async function postData() {
    try {
      const response = await axios({
        method: "post",
        url: "https://franchise-hub-server.herokuapp.com/api/v1/admin/login",
        data: "",
      });

      console.log(response.data);
      // return  response;
    } catch (error) {
      console.log("error");
      return [];
    }
    console.log("");
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
                       placeholder="Enter UserName"
                     />
                   </Form.Group>
                   
                   <Form.Group className='mb-3'>
                     <Form.Control 
                       type="password"
                       placeholder="Enter Password"
                     />
                   </Form.Group>
                   <a href="/users">
                   <Button variant='danger'>Submit</Button>
                   </a>
                  
                 </Form>
               </Card.Body>
             </Card.Header>
           </Card>
        </div>
    </div>
  )
}

export default Home