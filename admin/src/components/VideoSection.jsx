// import "antd/dist/antd.css";
// import { Button, Table, Modal, Input } from "antd";
// import { useState } from "react";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import SideBar from "./SideBar.jsx"
// function VideoSection() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingStudent, setEditingStudent] = useState(null);
//   const [dataSource, setDataSource] = useState([
//     {
//       id: 1,
//       link: "",
//       channel: "Mr Beast",
//       title: "",
//     },
//   ]);
//   const columns = [
//     {
//       key: "1",
//       title: "ID",
//       dataIndex: "id",
//     },
//     {
//       key: "2",
//       title: "Link",
//       dataIndex: "link",
//     },
//     {
//       key: "3",
//       title: "Channel",
//       dataIndex: "channel",
//     },
//     {
//       key: "4",
//       title: "Title",
//       dataIndex: "title",
//     },
//     {
//       key: "5",
//       title: "Actions",
//       render: (record) => {
//         return (
//           <>

//             <EditOutlined
//               onClick={() => {
//                 onEditStudent(record);
//               }}
//             />
//             <DeleteOutlined
//               onClick={() => {
//                 onDeleteStudent(record);
//               }}
//               style={{ color: "red", marginLeft: 12 }}
//             />
//           </>
//         );
//       },
//     },
//   ];
//   var [count, setCount] = useState(2);
//   const onAddStudent = () => {
//     setCount(count + 1);  
//     const newStudent = {
//       id: count,
//       link: "Edit and Enter Link ",
//       channel: "Edit and Enter channel ",
//       title: "Edit and Enter Title ",
//     };
//     setDataSource((pre) => {
//       return [...pre, newStudent];
//     });
//   };
//   const onDeleteStudent = (record) => {
//     Modal.confirm({
//       title: "Are you sure, you want to delete this student record?",
//       okText: "Yes",
//       okType: "danger",
//       onOk: () => {
//         setDataSource((pre) => {
//           return pre.filter((student) => student.id !== record.id);
//         });
//       },
//     });
//   };
//   const onEditStudent = (record) => {
//     setIsEditing(true);
//     setEditingStudent({ ...record });
//   };
//   const resetEditing = () => {
//     setIsEditing(false);
//     setEditingStudent(null);
//   };
//   return (
//     <>
//       <div className="app" style={{ display: "flex" }}>
//         <div style={{ flex: "1" }}>
//           <SideBar />
//         </div>
//         <header className="app-header" style={{ flex: "6", padding: "30px" }}>
//           <Button onClick={onAddStudent} className="mb-4">Add a new Video</Button>
//           <Table columns={columns} dataSource={dataSource}></Table>
//           <Modal
//             title="Edit Info"
//             visible={isEditing}
//             okText="Save"
//             onCancel={() => {
//               resetEditing();
//             }}
//             onOk={() => {
//               setDataSource((pre) => {
//                 return pre.map((student) => {
//                   if (student.id === editingStudent.id) {
//                     return editingStudent;
//                   } else {
//                     return student;
//                   }
//                 });
//               });
//               resetEditing();
//             }}
//           >
//             <Input
//               value={editingStudent?.link}
//               onChange={(e) => {
//                 setEditingStudent((pre) => {
//                   return { ...pre, link: e.target.value };
//                 });
//               }}
//             />
//             <Input
//               value={editingStudent?.channel}
//               onChange={(e) => {
//                 setEditingStudent((pre) => {
//                   return { ...pre, channel: e.target.value };
//                 });
//               }}
//             />
//             <Input
//               value={editingStudent?.title}
//               onChange={(e) => {
//                 setEditingStudent((pre) => {
//                   return { ...pre, title: e.target.value };
//                 });
//               }}
//             />
//           </Modal>
//         </header>
//       </div>
//     </>
//   );
// }

// export default VideoSection;


import "antd/dist/antd.css";
import { Button, Table, Modal, Input, Upload, message } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import SideBar from "./SideBar.jsx";
import axios from "../api/axios.js";
import AddEvent from "./pages/AddVideos.jsx";

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
            {/* <CheckOutlined onClick={postData} style={{ marginLeft: 10 }} /> */}
          </>
        );
      },
    },
  ];
  
  const onDeleteStudent = async (record) => {
  
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
          <a href="/addevent">
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
