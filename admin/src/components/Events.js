import "antd/dist/antd.css";
import { Button, Table, Modal, Input, Upload, message } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import SideBar from "./SideBar.jsx";
import axios from "../api/axios.js";

function Events() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      content: {
        event_banner: "",
        event_title: "",
        event_link: "",
      },
    },
  ]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
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
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 10 }}
            />
            <CheckOutlined onClick={postData} style={{ marginLeft: 10 }} />
          </>
        );
      },
    },
  ];

  var [count, setCount] = useState(2);
  const onAddStudent = () => {
    setCount(count + 1);
    const newStudent = {
      id: count,
      event_banner: "Edit and Enter Poster Link",
      event_title: "Edit and Enter Title",
      event_link: "Edit and Enter Link ",
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  // // uploading the poster
  // const [file, setFile] = useState([]);

  // function uploadSingleFile(e) {
  //   setFile([...file, URL.createObjectURL(e.target.files[0])]);
  //   console.log("file", file);
  //   console.log(e.target.value)
  // }

  // post api will be there
  async function postData() {
    try {
      const response = await axios({
        method: "post",
        url: "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/web/events/new",
        data: dataSource,
      });
      console.log(dataSource);
      console.log(response.data);
      // return  response;
    } catch (error) {
      console.log("error");
      return [];
    }
  }

  return (
    <>
      <div className="app" style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <SideBar />
        </div>
        <header className="app-header" style={{ flex: "6", padding: "30px" }}>
          <Button onClick={onAddStudent} className="mb-4">
            Add a new Event
          </Button>
          <Table columns={columns} dataSource={dataSource}></Table>
          <Modal
            title="Edit Info"
            visible={isEditing}
            okText="Save"
            onCancel={() => {
              resetEditing();
            }}
            onOk={() => {
              setDataSource((pre) => {
                return pre.map((student) => {
                  if (student.id === editingStudent.id) {
                    return editingStudent;
                  } else {
                    return student;
                  }
                });
              });
              resetEditing();
            }}
          >
            <Input
              value={editingStudent?.event_banner}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, event_banner: e.target.value };
                });
              }}
              style={{ marginBottom: "10px" }}
            />
            <Input
              value={editingStudent?.event_title}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, event_title: e.target.value };
                });
              }}
              style={{ marginBottom: "10px" }}
            />
            <Input
              value={editingStudent?.event_link}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, event_link: e.target.value };
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

export default Events;
