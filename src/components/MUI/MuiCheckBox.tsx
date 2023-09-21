import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
 
const MuiCheckBox = () => {
    const [agree, setAgree] = useState(false)
    const [skills, setSkills] = useState<string[]>([])
    console.log({agree, skills})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgree(event.target.checked)
    }
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if(index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }
  return (
    <Box>
      <Box>
        <FormControlLabel label='I accept the terms and conditions' control={<Checkbox checked={agree} onChange={handleChange} />} />
      </Box>
      <Box>
        <Checkbox icon={<StarBorderOutlinedIcon />} checkedIcon={<StarOutlinedIcon />} checked={agree} onChange={handleChange} />
      </Box>
      <Box>
        <FormControl>
            <FormLabel>
                Technical Skills:
            </FormLabel>
            <FormGroup row>
                <FormControlLabel label='React' control={<Checkbox value={'react'} checked={skills.includes('react')} onChange={handleSkillChange} />} />
                <FormControlLabel label='Python' control={<Checkbox value={'python'} checked={skills.includes('python')} onChange={handleSkillChange} />} />
                <FormControlLabel label='PHP' control={<Checkbox value={'php'} checked={skills.includes('php')} onChange={handleSkillChange} />} />
                <FormControlLabel label='Java' control={<Checkbox value={'java'} checked={skills.includes('java')} onChange={handleSkillChange} />} />
                <FormControlLabel label='Node JS' control={<Checkbox value={'node-js'} checked={skills.includes('node-js')} onChange={handleSkillChange} />} />
            </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckBox
