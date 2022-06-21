import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button, Col, Form, Row } from "react-bootstrap"
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'

function AddEvent() {
  let navigate = useNavigate();
  const [form, setForm] = useState(
    {
      event_banner: "",
      event_title: "",
      event_link: "",
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
        url: "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/web/events/new",
        data: form,
        headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      console.log(response.data);
      alert("Form submitted sucessfully!");
      if (!(form.data.success)) {
        alert('Session timed out and your authentication token expired. Please login again.')
        return navigate('/');
      }
      // return  response;
    } catch (error) {
      alert("Oops! Something went wrong");
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
                  <h4>Enter Image:</h4>
                  <Form.Control
                    type='text'
                    placeholder='Enter the link of the image'
                    onChange={handleForm("event_banner")}
                  />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="mb-3">
                  <h4>Enter Title:</h4>
                  <Form.Control
                    type='text'
                    placeholder='Enter the link of the title'
                    onChange={handleForm("event_title")}
                  />
                </Form.Group>
              </Col>
              <Form.Group className="mb-3">
                <h4>Enter Link:</h4>
                <Form.Control
                  type='text'
                  placeholder='Enter the link'
                  onChange={handleForm("event_link")}
                />
              </Form.Group>
            </Row>
            <Button variant='primary' style={{ textAlign: "center" }} onClick={postData}>Submit</Button>
          </Form>
        </header>
      </div>
    </>
  )
}

export default AddEvent