
import {Box, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react'

const MuiSelect = () => {
    const [age, setAge] = useState('');
    console.log({age})
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
  
    return (
      <Box sx={{ width: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
}

export default MuiSelect
