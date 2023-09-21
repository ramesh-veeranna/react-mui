import React, { useState } from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'

const MuiSwitch = () => {
    const [darkMode, setDarkMode] = useState(false)
    console.log({darkMode})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(event.target.checked)
    }
  return (
    <Box>
      <FormControlLabel label='Dark Mode' control={<Switch checked={darkMode} onChange={handleChange} />} />
    </Box>
  )
}

export default MuiSwitch
