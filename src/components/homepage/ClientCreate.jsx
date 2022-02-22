import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import "./clientList.css"

export default function ClientCreate() {
    return (
        <div className="insert">
            
            <Box sx = {{width: 945, height: 250, 
                ml:8/2, mt:7/2, border:1, borderColor: 'grey.300'}}> 
            <Typography sx = {{ml:2.5, mt:2.5, 
                fontSize:30, color: '#6B6B6C'}}>Creat New Client</Typography>
            
                <Box
                    component="form"
                    sx={{p:1.5,
                    '& .MuiTextField-root': { m: 1,  width: '30ch' },
                    display:'flex'
                    }}
                    noValidate
                    autoComplete="off"
                >
                <div>
                    <TextField
                    id="outlined-textarea"
                    label="First Name"
                    placeholder="First Name"
                    multiline
                    />
                </div>
                <div>
                    <TextField
                    id="outlined-textarea"
                    label="Last Name"
                    placeholder="Last Name"
                    multiline
                    />
                </div>
                <div>
                    <TextField
                    id="outlined-textarea"
                    label="Contact Number"
                    placeholder="Contact Number"
                    multiline
                    />
                </div>
                <div>
                    <Button variant = "contained" sx={{ml:2, mt:2}}
                    style = {{backgroundColor: "#2F3D55"}}>
                        CREATE
                    </Button>
                </div>
                </Box >
            </Box >
        </div>
            
    )
  }