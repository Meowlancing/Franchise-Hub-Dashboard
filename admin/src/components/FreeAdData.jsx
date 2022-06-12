import React, { useEffect, useState } from "react";
import "./styles/datatable.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function DataTable() {
  let navigate = useNavigate();
  const [advice, setAdvice] = useState([]);

  const getAdviceData = async () => {
    try {
      const data = await axios({
        url: "http://localhost:4000/api/v1/admin/dashboard/forms/free-advice/all/1?quantity=1000",
        method: 'get',
        headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        });
      console.log(data.data.payload);
      if (!(data.data.success)) {
        alert('Session timed out and your authentication token expired. Please login again.')
        return navigate('/');
      }
      setAdvice(data.data.payload);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAdviceData();
  }, []);
console.log(advice);
  const columns = [
    { dataField: "_id", text: "ID", width: 70 },
    {
      dataField: "content.email",
      text: "Email",
      width: 230,
    },
    {
      dataField: "content.phone_no",
      text: "Mobile No.",
      width: 100,
    },
    {
      dataField: "content.advise_on",
      text: "Advice on",
      width: 2000,
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Advices</div>
      <BootstrapTable
        keyField="id"
        data={advice}
        columns={columns}
        pagination={paginationFactory()}
        selectRow={{ mode: "checkbox" }}
        tabIndexCell
      />
    </div>
  );
}
