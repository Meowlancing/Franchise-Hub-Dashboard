import React from 'react'
import "./styles/table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableMain() {

  const rows = [
    {id:69, img:"https://podcastnotes.org/wp-content/uploads/2020/01/kobe-1.jpg", industry:"Education", investor:"Kobe Bryant", date:"1 March", investment:585, location:"Los Angeles", status:"Approved",},
    {id:100, img:"https://podcastnotes.org/wp-content/uploads/2020/01/kobe-1.jpg", industry:"Sports", investor:"Black Mamba", date:"1 May", investment:685, location:"Kolkata", status:"Approved",},
    {id:404, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2J_5wF0Orh2K91p2Iki_EwVIyEFxx08QAw&usqp=CAU", industry:"News", investor:"West Brick", date:"1 June", investment:785, location:"Germany", status:"Approved",},
    {id:420, img:"https://i1.sndcdn.com/avatars-000096962298-hjq1ug-t240x240.jpg", industry:"Meow", investor:"Lemon Gems", date:"1 July", investment:985, location:"UK", status:"Pending",},
  ];
  
    return (
        <TableContainer component={Paper} className='table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='tableCell'>Id</TableCell>
              <TableCell className='tableCell'>Inudstry</TableCell>
              <TableCell className='tableCell'>Investor</TableCell>
              <TableCell className='tableCell'>Date</TableCell>
              <TableCell className='tableCell'>Investment</TableCell>
              <TableCell className='tableCell'>Location</TableCell>
              <TableCell className='tableCell'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell className='tableCell'>{row.industry}</TableCell>
                <TableCell className='tableCell'><div className='cellWrapper'>
                  <img src={row.img} className='image'/>
                  {row.investor}
                </div></TableCell>
                <TableCell className='tableCell'>{row.date}</TableCell>
                <TableCell className='tableCell'>{row.investment}</TableCell>
                <TableCell className='tableCell'>{row.location}</TableCell>
                <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>
                    {row.status}
                </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TableMain