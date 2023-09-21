import React from 'react'
import { Box } from '@mui/material'

const MuiBox = () => {
  return (
    <>
      <Box>Default Box Component</Box>
      <Box component={'span'}>Span Component</Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        height: '100px',
        width: '100px',
        padding: '16px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'primary.light'
        }
      }}>
        Customize the Box component by using xs props
      </Box>

      <Box display={'flex'} height={'100px'} width={'100px'} bgcolor={'success.light'} p={2}>
      Customize the Box component by using direct props
      </Box>
    </>
  )
}

export default MuiBox
