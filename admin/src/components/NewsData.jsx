import React, { useState, useEffect } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from "react-bootstrap"

const NewsData = () => {
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(false); 
  const getEmailData = async()=>{
    try{
      const data = await axios.get(
        "http://localhost:4000"
      )
      console.log(data);
      setEmail(data.data);
    }
    catch (e){
      console.log(e)
    } 
  }

  const columns = [
    { dataField:"id", text:"ID"},
    { dataField:"email", text:"Email Id"},
  ]

  useEffect(()=>{
    getEmailData();
  },[]);

  return (
    <div className='Contain'>
      <BootstrapTable keyField='id' data={email} columns={columns} pagination={paginationFactory()} />
    </div>
  )
}

export default NewsData