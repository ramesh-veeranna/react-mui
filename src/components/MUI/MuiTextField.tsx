import { Stack, TextField, InputAdornment } from "@mui/material"
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from "react";

const MuiTextField = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    console.log({phoneNumber})
    const handlePasswordVisibility = () => {
        
    }
  return (
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={2}>
            <TextField label="First Name" variant="outlined" />
            <TextField label="Middle Name" variant="filled" />
            <TextField label="Last Name" variant="standard" />
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <TextField label='Small Secondary' size="small" color="secondary" />
            <TextField label='Small Success' size="small" color="success" />
            <TextField label='Small Warning' size="small" color="warning" />
            <TextField label='Small Error' size="small" color="error" />
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <TextField label="Phone Number" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} error={!phoneNumber} helperText={ !phoneNumber ? 'Required' : ''} />
            <TextField label="Password" type="password" helperText="Password contains minimum 8 characters" InputProps={{
                endAdornment: <InputAdornment position="end" onChange={handlePasswordVisibility}><VisibilityOffOutlinedIcon /></InputAdornment>
            }}/>
            <TextField label="Confirm Password" type="password" disabled />
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <TextField label="Agreed" InputProps={{ readOnly: true}} />
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <TextField label="Amount" InputProps={{
                startAdornment: <InputAdornment position="start">&#8377;</InputAdornment>
            }} />
            <TextField label="Weight" InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>
            }} />
        </Stack>
    </Stack>
  )
}

export default MuiTextField
