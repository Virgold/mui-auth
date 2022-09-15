import * as React from 'react';
// import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicButtons from './Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function BasicTextFields({title,setPassword, setEmail, handleAction}) {



    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
            <div className='heading-container' style={{ textAlign: 'center' }}>
                <h3>{title} Form</h3>
            </div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="email" 
                    label="Enter Email" 
                    variant="outlined" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <ToastContainer />
                <TextField 
                    id="password" 
                    label="Enter Password" 
                    variant="outlined" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </Box>
            <div>
                <BasicButtons title={title} handleAction={handleAction}/>
            </div>
        </div>
    );
}


