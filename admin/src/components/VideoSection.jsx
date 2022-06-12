import "antd/dist/antd.css";
import { Button, Table, Modal, Input, Upload, message } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import SideBar from "./SideBar.jsx";
import axios from "../api/axios.js";


function VideoSection() {
  // api get
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const data = await axios.get(
        "http://localhost:4000/api/v1/admin/dashboard/web/trending-videos/1?quantity=1000"
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
      title: "Title",
      dataIndex: "title",
    },

    {
      key: "3",
      title: "Video Link",
      dataIndex: "thumbnail_link",
    },

    {
      key: "4",
      title: "Actions",
      render: (record) => {
        return (
          <>
      
            <DeleteOutlined
              onClick={(e) => {
                console.log("enough");
                PostDelete(record._id, e);
              }}
              style={{ color: "red", marginLeft: 10 }}
            />
            {/* <CheckOutlined onClick={postData} style={{ marginLeft: 10 }} /> */}
          </>
        );
      },
    },
  ];

  const PostDelete = (_id, e) => {
    e.preventDefault();
    axios
      .delete(
        `http://localhost:4000/api/v1/admin/dashboard/web/trending-videos/${_id}`
      )
      .then((res) => {
        console.log("Deleted", res);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div className="app" style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <SideBar />
        </div>
        <header className="app-header" style={{ flex: "6", padding: "30px" }}>
          <a href="/addvideos">
            <Button className="mb-4">Add a Video</Button>
          </a>
          <Table
            columns={columns}
            dataSource={events}
            style={{ width: "85%" }}
          ></Table>
        </header>
      </div>
    </>
  );
}

export default VideoSection;
