import React, { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

type SkillType = {
    id: number
    label: string
}

const skills = ['React', 'Python', 'Java', 'PHP', 'Laravel', 'TypeScript', 'Node JS']
const languagesOptions = skills.map((skill, index) => ({
        id: index + 1,
        label: skill,
}))

const MuiAutocomplete = () => {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
    const [languages, setLanguages] = useState<SkillType | null>(null)
    console.log({selectedSkill, languages})
  return (
    <Stack spacing={2} width={250}>
        <Autocomplete 
            options={skills} 
            renderInput={(params) => <TextField {...params} label='Skills' />} 
            value={selectedSkill} 
            onChange={(event: any, newSelectedSkill: string | null) => setSelectedSkill(newSelectedSkill)} />
        
        <Autocomplete 
            options={languagesOptions} 
            renderInput={(params) => <TextField {...params} label='Languages' />} 
            value={languages} 
            onChange={(event: any, newLanguage: SkillType | null) => setLanguages(newLanguage)} />
    </Stack>
  )
}

export default MuiAutocomplete
