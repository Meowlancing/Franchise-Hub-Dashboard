import "antd/dist/antd.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import SideBar from "./SideBar.jsx"
function VideoSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      link: "",
      channel: "Mr Beast",
      date: "01/01/2000",
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
      title: "Link",
      dataIndex: "link",
    },
    {
      key: "3",
      title: "Channel",
      dataIndex: "channel",
    },
    {
      key: "4",
      title: "Date",
      dataIndex: "date",
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
              style={{ color: "red", marginLeft: 12 }}
            />
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
      link: "Edit and Enter Link ",
      channel: "Edit and Enter channel ",
      date: "Edit and Enter Date ",
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
  return (
    <>
      <div className="app" style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <SideBar />
        </div>
        <header className="app-header" style={{ flex: "6", padding: "30px" }}>
          <Button onClick={onAddStudent} className="mb-4">Add a new Video</Button>
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
              value={editingStudent?.link}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, link: e.target.value };
                });
              }}
            />
            <Input
              value={editingStudent?.channel}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, channel: e.target.value };
                });
              }}
            />
            <Input
              value={editingStudent?.date}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, date: e.target.value };
                });
              }}
            />
          </Modal>
        </header>
      </div>
    </>
  );
}

export default VideoSection;