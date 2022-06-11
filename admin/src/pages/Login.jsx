import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button, Col, Form, Row } from "react-bootstrap"
import axios from '../../api/axios'

function SignIn() {
  const [form, setForm] = useState(
    {
      username: "",
      password: "",
    },
  )

  const handleForm = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setForm((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    console.log(value);
  };


  async function postData() {
    try {
      const response = await axios({
        method: "post",
        url: "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/web/trending-videos/new",
        data: form,
      });

      console.log(response.data);
      // return  response;
    } catch (error) {
      console.log("error");
      return [];
    }
    console.log(form);
  }

  return (
    <>
      <div className="app" style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <SideBar />
        </div>
        <header className="app-header" style={{ flex: "6", padding: "30px" }}>
          <Form>
            <Row>
              <Col lg="6">
              <Form.Group className="mb-3">
                <h4>Enter UserName:</h4>
                <Form.Control
                  type='text'
                  placeholder='Enter UserName'
                  onChange={handleForm("username")}
                />
              </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="mb-3">
                  <h4>Enter Password:</h4>
                  <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    onChange={handleForm("password")}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant='primary' style={{ textAlign: "center" }} onClick={postData}>Submit</Button>
          </Form>
        </header>
      </div>
    </>
  )
}

export default SignIn