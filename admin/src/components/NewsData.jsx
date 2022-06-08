import React, { useEffect, useState } from 'react'
import "./styles/datatable.scss"
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../NewsTable';
import axios from 'axios';

export default function DataTable() {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  };
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
// export const userRows = [...new Set(data.map((item) => item.news))];
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/newsletter-subscribers/1?quantity=9"
      )
      .then((res) => {
        setNews(res.data)
        console.log(res.data);
      })
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Subscribers
      </div>

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