import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import { useState } from 'react'
import "./clientList.css"

export default function ClientCreate(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [contact, setContact] = useState('')
    const [buttonColor, setButtonColor] = useState('#E0E0E0')
    const [fontColor, setFontColor] = useState('#fff')
    const [hoverColor, setHoverColor] = useState('#E0E0E0')

    useEffect(()=>{
        // check if input are set
        if(firstName !== '' && lastName!=='' && contact!==''){
            setButtonColor("#44597D")
            setFontColor("#fff")
            setHoverColor("#2B3240")
        }
        else{
            setButtonColor("#E0E0E0")
            setFontColor('#A6A6A6')
        }
    },[firstName, lastName, contact])

    return (
        <div className="insert">
            
            <Box sx = {{width: 945, height: 250, 
                ml:8/2, mt:7/2, border:1, borderColor: 'grey.300'}}> 
            <Typography sx = {{ml:2.5, mt:2.5, 
                fontSize:25, color: '#6B6B6C'}}>Creat New Client</Typography>
            
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
                    value={firstName}
                    onChange={(input)=>{
                        setFirstName(input.target.value)
                    }}
                    
                    />
                </div>
                <div>
                    <TextField
                    id="outlined-textarea"
                    label="Last Name"
                    placeholder="Last Name"
                    multiline
                    value={lastName}
                    onChange={(input)=>{
                        setLastName(input.target.value)
                    }}
                    />
                </div>
                <div>
                    <TextField
                    id="outlined-textarea"
                    label="Contact Number"
                    placeholder="Contact Number"
                    multiline
                    value={contact}
                    onChange={(input)=>{
                        setContact(input.target.value)
                    }}
                    />
                </div>
                <div>
                    <Button 
                    onClick={()=>{
                        props.handleOnClick(firstName, lastName, contact)
                        setFirstName('')
                        setLastName('')
                        setContact('')
                    }}
                    variant = "contained" sx={{ml:2, mt:2, bgcolor:buttonColor,
                        ':hover':{bgcolor: hoverColor}}}>
                        <div style={{color: fontColor}}>CREATE</div>
                    </Button>
                </div>
                </Box >
            </Box >
        </div>
            
    )
  }