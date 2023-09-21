import React from 'react'
import MuiTypography from './MUI/MuiTypography'
import MuiButton from './MUI/MuiButton'
import MuiTextField from './MUI/MuiTextField'
// import ResponsiveAppBar from './CustomizedUI/ResponsiveAppBar'
import MuiSelect from './MUI/MuiSelect'
import MuiRadioButton from './MUI/MuiRadioButton'
import MuiCheckBox from './MUI/MuiCheckBox'
import MuiSwitch from './MUI/MuiSwitch'
import MuiRating from './MUI/MuiRating'
import MuiAutocomplete from './MUI/MuiAutocomplete'
import MuiBox from './MUI/MuiBox'

import { Box } from '@mui/material'
import MuiStack from './MUI/MuiStack'
import MuiGrid from './MUI/MuiGrid'
import MuiPaper from './MUI/MuiPaper'
import MuiCard from './MUI/MuiCard'

const Home = () => {
  return (
    <Box m={4}>
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutocomplete />
      <MuiBox />
      <MuiStack />
      <MuiGrid />
      <MuiPaper />
      <MuiCard />

      {/* <ResponsiveAppBar /> */}
    </Box>
  )
}

export default Home
