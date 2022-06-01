import React from 'react'
import "./styles/datatable.scss"

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns , userRows } from '../DataTableSource';

export default function DataTable() {

  const actionColumn = [
    {field:"action", headerName:"Action",width:200, renderCell:()=>{
      return(
        <div className='cellAction'>
          <div className='viewButton'>View</div>
          <div className='deleteButton'>Delete</div>
        </div>
      )
    }}
  ]
  return (
    <div className='datatable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}