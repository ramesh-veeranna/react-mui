import React from 'react'
import { Stack, Divider } from '@mui/material'

const MuiStack = () => {
  return (
    <Stack sx={{ border: '1px solid #ddd', my: 4}}>

        <Stack direction={'row'} spacing={4} divider={<Divider orientation='vertical' flexItem />}  sx={{ border: '1px solid #ddd', m: 8}}>
            <Stack>Stack 1</Stack>
            <Stack>Stack 2</Stack>
            <Stack>Stack 3</Stack>
            <Stack>Stack 4</Stack>
            <Stack>Stack 5</Stack>
        </Stack>
        <Stack direction={'row-reverse'} spacing={8}>
            <Stack>Stack 1</Stack>
            <Stack>Stack 2</Stack>
            <Stack>Stack 3</Stack>
        </Stack>
        <Stack spacing={4}>
            <Stack>Stack 1</Stack>
            <Stack>Stack 2</Stack>
            <Stack>Stack 3</Stack>
            <Stack>Stack 4</Stack>
        </Stack>
        <Stack direction={'column-reverse'} spacing={2}>
            <Stack>Stack 1</Stack>
            <Stack>Stack 2</Stack>
            <Stack>Stack 3</Stack>
            <Stack>Stack 4</Stack>
        </Stack>
      
    </Stack>
  )
}

export default MuiStack
