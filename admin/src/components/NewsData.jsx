import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/datatable.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";

const NewsData = () => {
        let navigate = useNavigate();
  const [emails, setEmail] = useState([]);

  const getEmailData = async () => {
    try {
      const data = await axios({
        url: "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/newsletter-subscribers/1?quantity=1000",
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
      setEmail(data.data.payload);
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    { dataField: "_id", text: "ID" },
    { dataField: "content.email", text: "Email Id" },
  ];

  useEffect(() => {
    getEmailData();
  }, []);

  return (
    <div style={{ padding: "10px 20px" }}>
    <div className="datatableTitle">Newsletter</div>
      <BootstrapTable
        keyField="id"
        data={emails}
        columns={columns}
        pagination={paginationFactory()}
        selectRow={{ mode: "checkbox" }}
        tabIndexCell
      />
    </div>
  );
};

export default NewsData;
