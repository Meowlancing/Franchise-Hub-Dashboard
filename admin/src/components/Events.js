import "antd/dist/antd.css";
import { Button, Table, Modal, Input, Upload, message } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import SideBar from "./SideBar.jsx";
import axios from "../api/axios.js";
import AddEvent from "./pages/AddEvent.jsx";


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

  return (
    <>
      <div className="app" style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <SideBar />
        </div>
        <header className="app-header" style={{ flex: "6", padding: "30px" }}>
          <a href="/addevent">
            <Button className="mb-4">
              Add a new Event
            </Button>
          </a>
          <Table columns={columns} dataSource={events} style={{width:"85%"}}></Table>        
       </header>
      </div>
    </>
  );
}

export default Events;
