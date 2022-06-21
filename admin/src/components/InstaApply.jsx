import "antd/dist/antd.css";
import {  Table, } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined} from "@ant-design/icons";
import SideBar from "./SideBar.jsx";
import axios from "../api/axios.js";
import { useNavigate } from "react-router-dom";


function InstaApply() {
  // api get
  let navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const data = await axios({
        url: "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/franchisee-application/all/1?1000",
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }

      );
      console.log(data.data.payload);
      setEvents(data.data.payload);
      if (!(data.data.success)) {
        alert('Session timed out and your authentication token expired. Please login again.')
        return navigate('/');
      }
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
      title: "Name",
      dataIndex: ["content","name"],
    },
    {
      key: "3",
      title: "Email",
      dataIndex: ["content","email"],
    },

    {
      key: "4",
      title: "Mobile",
      dataIndex: ["content","mobile"],
    },

    {
      key: "5",
      title: "Investment",
      dataIndex: ["content","inv"],
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <DeleteOutlined
              onClick={(e) => { console.log("enough"); PostDelete(record._id, e) }}
              style={{ color: "red", marginLeft: 10 }}
            ></DeleteOutlined>
            {/* <CheckOutlined onClick={postData} style={{ marginLeft: 10 }} /> */}
          </>
        );
      },
    }
  ];


  const PostDelete = (_id, e) => {
    e.preventDefault();
    axios.delete(`https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/franchisee-application/${_id}`)
      .then(res => {
        console.log("Deleted", res)
      }).catch(err => console.log(err))
  }

  return (
    <>
      <div className="app" style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <SideBar />
        </div>
        <header className="app-header" style={{ flex: "6", padding: "30px" }}>
          <Table columns={columns} dataSource={events} style={{ width: "85%" }}></Table>
        </header>
      </div>
    </>
  );
}

export default InstaApply;
