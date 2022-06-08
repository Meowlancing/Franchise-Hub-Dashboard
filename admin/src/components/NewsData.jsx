import React, { useState } from 'react'
import "./styles/datatable.scss"
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns , userRows } from '../NewsTable';

export default function DataTable() {
  const [data,setData]=useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id))
  };
  const actionColumn = [
    {field:"action", headerName:"Action",width:200, renderCell:(params)=>{
      return(
        <div className='cellAction'>
          <Link to="/users/test" style={{textDecoration:"none"}}>
          <div className='viewButton' style={{display:"none"}}>View</div>
          </Link>
          <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
          <div className='approveButton' style={{display:"none"}}>Approve</div>
        </div>
      )
    }}
  ]
  return (
    <div className='datatable'>
    <div className='datatableTitle'>
      Subscribers
    </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}