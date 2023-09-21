import React from 'react'
import { Box, Card, CardContent,Typography, CardActions, Button, CardMedia, Stack } from '@mui/material'

const MuiCard = () => {
  return (
    <Stack direction={'row'} spacing={4}>
    <Box width={'300px'}>
      <Card>
        <CardMedia component={'img'} height={140} image='https://source.unsplash.com/random' alt='unsplash image' />
        <CardContent>
            <Typography gutterBottom variant='h5' component={'div'}>
                React
            </Typography>
            <Typography variant='body2' color={'text.secondary'}>
            React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. 
            </Typography>
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
    <Box width={'300px'}>
      <Card>
        <CardMedia component={'img'} height={140} image='https://source.unsplash.com/random' alt='unsplash image' />
        <CardContent>
            <Typography gutterBottom variant='h5' component={'div'}>
                React
            </Typography>
            <Typography variant='body2' color={'text.secondary'}>
            React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. 
            </Typography>
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
    </Stack>
  )
}

export default MuiCard
