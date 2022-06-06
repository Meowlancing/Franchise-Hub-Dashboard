// import React from 'react'
// import {Upload} from 'antd';
// import "antd/dist/antd.css";

// const Events = () => {
//   return (
//     <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
//         <Upload action={"http://localhost:3000/"}>
//             <p>Drag Files</p>
//         </Upload>
//     </div>
//   )
// }

// export default Events

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SideBar from "./SideBar";
import "./styles/Events.css"

const Events = () => {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }

  return (
    <div className="container">
    <h1 className="header">Upload Events</h1>
    <div className="left">
        <SideBar/>
    </div>
    <div className="right">
    <Form>
      <Form.Group className="form-group preview">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div key={item}>
                <img src={item} alt="" />
                <Button className="button" type="button" onClick={() => deleteFile(index)}>
                  delete
                </Button>
              </div>
            );
          })}
      </Form.Group>

      <Form.Group className="formGroup">
        <input
          type="file"
          disabled={file.length === 5}
          className="form-control"
          onChange={uploadSingleFile}
        />
      </Form.Group>
      <Button
        type="button"
        className="btn btn-primary btn-block"
        onClick={upload}
      >
        Upload
      </Button>
    </Form>
    </div>
    </div>
  );
};

export default Events;