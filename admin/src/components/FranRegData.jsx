import React, { useState } from 'react'
import "./styles/datatable.scss"
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns , userRows } from '../FranchisorRegTable';

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
          <div className='viewButton'>View</div>
          </Link>
          <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
          <div className='approveButton'>Approve</div>
        </div>
      )
    }}
  ]
  return (
    <div className='datatable'>
    <div className='datatableTitle'>
      Franchisee List
      <Link to="/users/reg-form" className='link'>
        Add New
      </Link>
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