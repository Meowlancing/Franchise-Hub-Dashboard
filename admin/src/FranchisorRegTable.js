export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'User', width: 230, renderCell:(params)=>{
      return(
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img}/>
            {params.row.username}
          </div>
      )
  } },
  {
    field:"email", headerName:"Email", width:230,
  },
  {
    field:"age", headerName:"Age", width:100,
  },
  {
    field:"status", headerName:"Status", width:160, renderCell:(params)=>{ return (<div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>)}
  },
]
export const userRows = [
    { id: 1, img: "https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg", username: 'Snow', status:"active", email:"snowman@gmail.com", age: 35 },
    { id: 2, img: "https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg", username: 'Lannister', status:"pending", email:"golderstate@gmail.com", age: 42 },
    { id: 3, img: "https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg", username: 'Lannister', status:"passive", email:"onepac@gmail.com", age: 45 },
    { id: 4, img: "https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg", username: 'Stark', status:"pending", email:"mouseman@gmail.com", age: 16 },
    { id: 5, img: "https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg", username: 'Targaryen', status:"active", email:"meow@gmail.com", age: null },
    { id: 6, img: "https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg", username: 'Melisandre', status:"passive", email:"lemonjems@gmail.com", age: 150 },
    { id: 7, img: "https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg", username: 'Clifford', status:"passive", email:"hevestarvey@gmail.com", age: 44 },
    { id: 8, img: "https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg", username: 'Frances', status:"active", email:"baltsae@gmail.com", age: 36 },
    { id: 9, img: "https://i.ytimg.com/vi/ddgwxE_J1GE/maxresdefault.jpg", username: 'Roxie', status:"pending", email:"taklu@gmail.com", age: 65 },
  ];