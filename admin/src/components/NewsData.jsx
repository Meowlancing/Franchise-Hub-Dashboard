import React, { useEffect, useState } from 'react'
import "./styles/datatable.scss"
import { Link } from 'react-router-dom';
// import { DataGrid, GridColDef, GridValueGetterParams, GridRowsProp } from '@mui/x-data-grid';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { userColumns, userRows } from '../NewsTable';
import axios from 'axios';

export default function DataTable() {

  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200, renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className='viewButton' style={{ display: "none" }}>View</div>
            </Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
            <div className='approveButton' style={{ display: "none" }}>Approve</div>
          </div>
        )
      }
    }
  ]

  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/newsletter-subscribers/1?quantity=9"
      )
      .then((res) => {
        setNews(res.data.payload)
        console.log(res.data.payload);
      })
      .catch((err) => console.log(err));

  }, []);
console.log(news);
  const rows = news.map((item) => item);
  const [data, setData] = useState(rows)
  const getRowId = params => params.news._id;
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  };
  console.log(rows);
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Subscribers
      </div>

      <DataGrid
        getRowId= {r => r._id}
        rows={rows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}