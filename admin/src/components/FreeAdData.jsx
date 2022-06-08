import React, { useState } from 'react'
import "./styles/datatable.scss"
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns , userRows } from '../FreeAdTable';

export default function DataTable() {
  const [data,setData]=useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id))
  };
  const actionColumn = [
    {field:"action", headerName:"",width:200, renderCell:(params)=>{
      return(
        <div className='cellAction'>
          <Link to="/users/test" style={{textDecoration:"none"}}>
          <div style={{display:"none"}} className='viewButton'>View</div>
          </Link>
          <div style={{display:"none"}} className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
          <div style={{display:"none"}} className='approveButton'>Approve</div>
        </div>
      )
    }}
  ]
  return (
    <div className='datatable'>
    <div className='datatableTitle'>
      Advices
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