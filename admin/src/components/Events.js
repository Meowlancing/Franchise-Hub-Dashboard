import "antd/dist/antd.css";
import { Button, Table, Modal, Input, Upload, message } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import SideBar from "./SideBar.jsx";
import axios from "../api/axios.js";
import AddEvent from "./pages/AddEvent.jsx";
import { Axios } from "axios";

function Events() {
  // api get
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const data = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/web/events/1?quantity=1000"
      );
      console.log(data.data.payload);
      setEvents(data.data.payload);
    } catch (e) {
      console.log(e);
    }
    console.log(events._id);
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
    },
    {
      key: "2",
      title: "Banner",
      dataIndex: "event_banner",
    },
    {
      key: "3",
      title: "Title",
      dataIndex: "event_title",
    },

    {
      key: "4",
      title: "Registration Link",
      dataIndex: "event_link",
    },

    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <DeleteOutlined
              onClick={(e) =>{ console.log("enough"); PostDelete(record._id,e)}}
              style={{ color: "red", marginLeft: 10 }}
            ></DeleteOutlined>
            {/* <CheckOutlined onClick={postData} style={{ marginLeft: 10 }} /> */}
          </>
        );
      },
    },
  ];
  

  const PostDelete = (_id,e) => {
    e.preventDefault();
    axios.delete(`https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/web/events/${_id}`)
    .then(res=>{
      console.log("Deleted",res)
    }).catch(err=> console.log(err))
  }



  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  return (
    <>
      <div className="app" style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <SideBar />
        </div>
        <header className="app-header" style={{ flex: "6",}}>
          <a href="/addevent">
            <Button className="mb-4">
              Add a new Event
            </Button>
          </a>
          <Table columns={columns} dataSource={events}></Table>
          <Modal
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
            <Input
              value={editingStudent?.event_banner}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, event_banner: e.target.value };
                });
              }}
              style={{ marginBottom: "10px" , width:"10vw" }}
            />
            <Input
              value={editingStudent?.event_title}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, event_title: e.target.value };
                });
              }}
              style={{ marginBottom: "10px" , width:"10vw" }}
            />
            <Input
              value={editingStudent?.event_link}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, event_link: e.target.value };
                });
              }}
              style={{ marginBottom: "10px" , width:"10vw" }}
            />
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
          </Modal>
        </header>
      </div>
    </>
  );
}

export default Events;
