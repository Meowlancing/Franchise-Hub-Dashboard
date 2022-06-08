import React, { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const NewsData = () => {
  const [emails, setEmail] = useState([]);

  const getEmailData = async () => {
    try {
      const data = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/newsletter-subscribers/1?quantity=1000"
      );
      console.log(data.data.payload);
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
