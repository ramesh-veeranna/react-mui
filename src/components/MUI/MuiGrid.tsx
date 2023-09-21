import React from 'react'
import { Grid } from '@mui/material'

const MuiGrid = () => {
  return (
    <>
        <Grid container>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={2}>Grid Size 2</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={4}>Grid Size 4</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={4}>Grid Size 4</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={2}>Grid Size 2</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={9}>Grid Size 9</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={3}>Grid Size 3</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={4}>Grid Size 4</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={8}>Grid Size 8</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={12}>Grid Size 12</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={7}>Grid Size 7</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={5}>Grid Size 5</Grid>
        </Grid>
        <Grid container>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
        </Grid>
        <Grid container>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
        </Grid>
        <Grid container>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
        </Grid>
        <Grid container>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs={6}>Grid 6</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
            <Grid item border={'1px solid #fff'} bgcolor={'primary.light'}  p={2} xs>Auto Adjust</Grid>
        </Grid>
    </>
  )
}

export default MuiGrid
