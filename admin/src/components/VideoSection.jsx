import "antd/dist/antd.css";
import { Button, Table, Modal, Input, Upload, message } from "antd";
import { useEffect, useState, } from "react";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import SideBar from "./SideBar.jsx";
import axios from "../api/axios.js";
import AddEvent from "./pages/AddVideos.jsx";
import { useNavigate, Link } from "react-router-dom";


function VideoSection() {
  // api get
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const data = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/web/trending-videos/1?quantity=1000"
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
              onClick={(e) =>{ console.log("enough"); PostDelete(record._id,e)}}
              style={{ color: "red", marginLeft: 10 }}
            />
            {/* <CheckOutlined onClick={postData} style={{ marginLeft: 10 }} /> */}
          </>
        );
      },
    },
  ];

  const PostDelete = (_id,e) => {
    e.preventDefault();
    axios.delete(`https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/web/trending-videos/${_id}`)
    .then(res=>{
      console.log("Deleted",res)
    }).catch(err=> console.log(err))
  }


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
        <div style={{ flex: "1" }}>
          <SideBar />
        </div>
        <header className="app-header" style={{ flex: "6", padding: "30px" }}>
          <a href="/addvideos">
            <Button className="mb-4">
              Add a Video
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
            {/* <Input
              value={editingStudent?.channel}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, channel: e.target.value };
                });
              }}
              style={{ marginBottom: "10px" }}
            /> */}
            <Input
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

export default VideoSection;
