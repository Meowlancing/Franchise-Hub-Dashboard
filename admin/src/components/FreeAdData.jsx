import React, { useEffect, useState } from 'react'
import "./styles/datatable.scss"
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../FreeAdTable';
import axios from '../api/axios';

export default function DataTable() {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  };
  const actionColumn = [
    {
      field: "action", headerName: "", width: 200, renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div style={{ display: "none" }} className='viewButton'>View</div>
            </Link>
            <div style={{ display: "none" }} className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
            <div style={{ display: "none" }} className='approveButton'>Approve</div>
          </div>
        )
      }
    }
  ]

  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAdviceData = async () => {
    try {
      const data = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/newsletter-subscribers/1?quantity=10"
      )
      console.log(data.data.payload);
      setAdvice(data.data.payload);
    }
    catch (e) {
      console.log(e)
    }

  }
  useEffect(() => {
    getAdviceData();
  }, []);

const columns = [
    { field: '_id', headerName: 'ID', width: 70 },
    // { field: 'username', headerName: 'User', width: 230, },
    {
      field: "content.email", headerName: "Email", width: 230,
    },
    // {
    //   field: "mobile", headerName: "Mobile No.", width: 100,
    // },
    // {
    //   field: "advice", headerName: "Advice on", width: 2000,
    // },
  ]
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Advices
      </div>
      <DataGrid
        getRowId={r => r._id}
        rows={advice}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}