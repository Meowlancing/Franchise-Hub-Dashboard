import React, { useState } from 'react'
import "./styles/home.scss";
import SideBar from "../components/SideBar"
import { Button, Card, Form } from 'react-bootstrap';
import axios from "axios"

const Home = () => {

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })

  async function postData() {
    try {
      const response = await axios({
        method: "post",
        url: "https://franchise-hub-server.herokuapp.com/api/v1/admin/login",
        data: loginData,
      });

      console.log(response.data);
      // return  response;
    } catch (error) {
      console.log("error");
      return [];
    }
  }

  const handleFormData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setLoginData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    console.log(value);
  };
  console.log(loginData);

  return (
    <div className='home'>
      <div className='homeContainer'>
        <Card id="HomeCardContainer" border="danger" style={{ textAlign: "center", width: "24rem" }} className="home-card">
          <Card.Header>
            <Card.Title style={{ fontSize: "2rem" }}>
              LogIn
            </Card.Title>
            <Card.Body>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Control
                    type="text"
                    placeholder="Enter UserName"
                    onChange={handleFormData("username")}
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    onChange={handleFormData("password")}
                  />
                </Form.Group>
                <a href="/users">
                  <Button variant='danger' onClick={postData}>Submit</Button>
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