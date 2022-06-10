// import React, { useState } from 'react'
// import "./styles/datatable.scss"
// import { Link } from 'react-router-dom';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { userColumns , userRows } from '../FranchisorRegTable';

// export default function DataTable() {
//   const [data,setData]=useState(userRows)

//   const handleDelete = (id)=>{
//     setData(data.filter(item=>item.id !== id))
//   };
//   const actionColumn = [
//     {field:"action", headerName:"Action",width:200, renderCell:(params)=>{
//       return(
//         <div className='cellAction'>
//           <Link to="/users/test" style={{textDecoration:"none"}}>
//           <div className='viewButton'>View</div>
//           </Link>
//           <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
//           <div className='approveButton'>Approve</div>
//         </div>
//       )
//     }}
//   ]
//   return (
//     <div className='datatable'>
//     <div className='datatableTitle'>
//       Franchisee List
//       <Link to="/users/reg-form" className='link'>
//         Add New
//       </Link>
//     </div>
//       <DataGrid
//         rows={data}
//         columns={userColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

import "antd/dist/antd.css";
import { Button, Table, Modal, Input, Upload, message } from "antd";
import { useEffect, useState, } from "react";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import SideBar from "./SideBar.jsx";
import axios from "../api/axios.js";
import AddEvent from "./pages/AddVideos.jsx";
import { useNavigate, Link } from "react-router-dom";


function FranRegData() {
  // api get
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const data = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/franchisor-registration/all/1?quantity=1000"
      );
      console.log(data.data.payload);
      setEvents(data.data.payload);
    } catch (e) {
      console.log(e);
    }
    console.log(events);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const id = events.map((item) => item._id);
  // api post
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);


  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "_id",
      width: "2rem"
    },
    {
      key: "2",
      title: "Brand Name",
      dataIndex: "personal_details.email_id",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "personal_details.email_id",
    },

    {
      key: "4",
      title: "Mobile No",
      dataIndex: "content.personal_details.mobile",
    },
    {
      key: "5",
      title: "Industry",
      dataIndex: "thumbnail_link",
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Link to={{
              pathname: '/updatevideos/' + `${id}`
            }}>
              <EditOutlined
                onClick={() => {
                  onEditStudent();
                }}
              />
            </Link>

            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 10 }}
            />
            {/* <CheckOutlined onClick={postData} style={{ marginLeft: 10 }} /> */}
          </>
        );
      },
    },
  ];

  const onDeleteStudent = async (record) => {

  };
  const navigate = useNavigate();
  const onEditStudent = () => {
    
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  return (
    <>
      <div className="app" style={{ display: "flex" }}>
        
        <header className="app-header" style={{ flex: "6", padding: "30px" }}>
          <a href="/users/reg-form">
            <Button className="mb-4">
              Add New
            </Button>
          </a>
          <Table columns={columns} dataSource={events}></Table>
          {/* <Modal
            title="Edit Info"
            visible={isEditing}
            okText="Save"
            onCancel={() => {
              resetEditing();
            }}
          // onOk={() => {
          //   setDataSource((pre) => {
          //     return pre.map((student) => {
          //       if (student.id === editingStudent.id) {
          //         return editingStudent;
          //       } else {
          //         return student;
          //       }
          //     });
          //   });
          //   resetEditing();
          // }}
          >
            {/* <Input
              value={editingStudent?.channel}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, channel: e.target.value };
                });
              }}
              style={{ marginBottom: "10px" }}
            /> */}
            {/* <Input
              value={editingStudent?.title}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, title: e.target.value };
                });
              }}
              style={{ marginBottom: "10px" }}
            />
            <Input
              value={editingStudent?.thumbnail_link}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, thumbnail_link: e.target.value };
                });
              }}
              style={{ marginBottom: "10px" }}
            /> */}

            {/* <Form.Group>
              <input
                type="file"
                className="form-control"
                onClick={uploadSingleFile}
                value={editingStudent?.poster}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, poster: e.target.value };
                  });
                }}
              />
            </Form.Group> */}
          {/* </Modal> */}
        </header> 
      </div>
    </>
  );
}

export default FranRegData;
