import * as React from 'react';
import { DataGrid,  GridToolbarContainer,
  GridToolbarFilterButton, getGridNumericOperators, } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Box} from '@mui/system';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'id', type: 'number', width: 150 },
  { field: 'name', headerName: 'Name', width: 250 },
  {
    field: 'transaction',
    headerName: 'Last Transaction',
    type: Date,
    width: 150,
    editable: true,
  },
  {
    field: 'net',
    headerName: 'Net Promoter Score',
    type: 'number',
    width: 200,
    
    editable: true,
  },
  {
    field: 'contact',
    headerName: 'Contact',
    type: 'number',
    width: 110,
    editable: true,
  },
 
];

const rows = [
  { id:1, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id:2, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id:3, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id:4, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id:5, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id:6, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id:7, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },

];



const CustomToolbar = ({ setFilterButtonEr }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEr}  />
    <TextField
        placeholder="Search…"
        size = "small"
        justifyContent = "flex-end"
      />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,

};

// const addClient = () => {
//   setRows((prevRows) => [...prevRows, createClient()])
// }

const filterOperators = getGridNumericOperators().filter(
  (operator) => null,
);


export default function DataGridDemo() {
  const [filterButtonEr, setFilterButtonEr] = React.useState(null);
  const name = "All Clients";
  // const [addClient, setAddClient] = React.useState({
  //   firstname: '',
  //   lastname: '',
  //   contact:''
  // })
  // const handleAddClient = (event) =>{
  //   const newFormClient = {...addClient};
  //   newFormClient[name] = this.firstname.current.value + this.lastname.current.value;
  //   setAddClient(newFormClient);
  // }

  return (
    <div style={{ height: '40%', paddingRight: '3%', paddingLeft: '3%', textAlign:"left"}}>
      <Box sx={{ margin: 2 }} />

      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
          
        }}
        initialState={{
          columns:{
            columnVisibilityModel:{
              id:false,
            }
          }
        }}
        componentsProps={{
          panel: {
            anchorEr: filterButtonEr,
          },
          toolbar: {
            setFilterButtonEr,
          },
        }}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        
        disableColumnMenu
         
      />
       

    </div>
    
    



  );
}