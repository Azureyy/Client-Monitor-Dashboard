import * as React from 'react';
import { DataGrid,  GridToolbarContainer,
  GridToolbarFilterButton, getGridNumericOperators, } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Box} from '@mui/system';
import { Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'id', type: 'number', width: 150 },
  { field: 'name', headerName: 'Name', width: 250 },
  {
    field: 'transaction',
    headerName: 'Last Transaction',
    type: Date,
    width: 200,
  },
  {
    field: 'net',
    headerName: 'Net Promoter Score',
    width: 170,
  },
  {
    field: 'contact',
    headerName: 'Contact',
    type: 'number',
    width: 130,

  },
 
];



const CustomToolbar = ({ setFilterButtonEr }) => (
  <GridToolbarContainer>
    <Typography sx = {{ml:2, mt:2, 
                fontSize:25, color: '#6B6B6C'}}>All Clients</Typography>
    <GridToolbarFilterButton sx={{ml:45}}ref={setFilterButtonEr}  />
    <TextField
        placeholder="Search…"
        size = "small"
        justifyContent = "flex-end"
        border="none"
        sx={{ml:2, height: 1/10, width: 1.5/5, 
          '& .MuiTextField-root': {width: '15ch' },
          bgcolor:"#EAEAEA"}}
      />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,

};



const filterOperators = getGridNumericOperators().filter(
  (operator) => null,
);


export default function DataGridDemo(props) {
  const [filterButtonEr, setFilterButtonEr] = React.useState(null);

  return (
    <div style={{ height: '40%', paddingRight: '3%', paddingLeft: '3%', textAlign:"left"}}>
      <Box sx={{ margin: 2 }} />

      <DataGrid
        rows={props.rows}
        columns={[...columns, {field:'id', filterable:false}]}
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