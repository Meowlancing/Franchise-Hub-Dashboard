import "antd/dist/antd.css";
import { Button, Table, Modal, Input, Upload, message } from "antd";
import { useEffect, useState, } from "react";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import SideBar from "./SideBar.jsx";
import axios from "../api/axios.js";
import { useNavigate } from "react-router-dom";


function FranRegData() {
        let navigate = useNavigate();
  // api get
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const data = await axios({
        method: 'get',
        url: "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/franchisor-registration/all/1?quantity=1000",
        headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
      console.log(data.data);
      if (!(data.data.success)) {
        alert('Session timed out and your authentication token expired. Please login again.')
        return navigate('/');
      }
      setEvents(data.data.payload);
    } catch (e) {
      console.log(e);
    }
    console.log(events);
  };

  useEffect(() => {
    getEvents();
  }, []);

const brandname = events.map(item => item.content.personal_details.brand_name);
console.log(brandname);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "_id",
    },
    {
      key: "2",
      title: "Brand Name",
      dataIndex: "brand_name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email_id",
    },

    {
      key: "4",
      title: "Mobile No",
      dataIndex: "mobile",
    },
    {
      key: "5",
      title: "Industry",
      dataIndex: "industry",
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            {/* <Link to={{
              pathname: '/updatevideos/' + `${id}`
            }}>
              <EditOutlined
                onClick={() => {
                  onEditStudent();
                }}
              />
            </Link> */}

            <DeleteOutlined
              onClick={(e) => {
                PostDelete(record._id, e)
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
    console.log(_id);
    axios.delete(`https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/franchisor-registration/${_id}`)
      .then(res => {
        console.log("Deleted", res)
      }).catch(err => console.log(err))
  }

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
