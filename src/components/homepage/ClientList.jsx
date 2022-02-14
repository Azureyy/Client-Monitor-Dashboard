import * as React from 'react';
import { DataGrid,  GridToolbarContainer,
  GridToolbarFilterButton, getGridNumericOperators, } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { Box, ThemeProvider, createTheme } from '@mui/system';

const columns = [
  { field: 'id', headerName: 'Name', width: 150 },
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
  { id: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  { id: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },

];



const CustomToolbar = ({ setFilterButtonEr }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEr} />
    <TextField
        placeholder="Search…"
        size = "small"

      />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};


const filterOperators = getGridNumericOperators().filter(
  (operator) => null,
);


export default function DataGridDemo() {
  const [filterButtonEr, setFilterButtonEr] = React.useState(null);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Box sx={{ margin: 2 }} />
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
          
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
         
      />
    </div>
  );
}