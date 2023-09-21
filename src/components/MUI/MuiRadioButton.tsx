import React, { useState } from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'

const MuiRadioButton = () => {
    const [gender, setGender] = useState('')
    console.log({gender})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value)
    }
  return (
    <Box>
      <FormControl>
        <FormLabel id='radio-button'>
            Gender
        </FormLabel>
            <RadioGroup name='gender' aria-labelledby='radio-button' value={gender} onChange={handleChange} row>
                <FormControlLabel control={<Radio />} label='Male' value={'male'} />
                <FormControlLabel control={<Radio />} label='Female' value={'female'} />
                <FormControlLabel control={<Radio />} label='Other' value={'other'} />
            </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton
