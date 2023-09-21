import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {
    const [star, setStar] = useState<number|null>(null)
    const [heart, setHeart] = useState<number|null>(null)
    console.log({star,heart})
    const handleStarChange = (_event: React.ChangeEvent<{}>, newStar: number | null) => {
        setStar(newStar)
    }
    const handleHeartChange = (_event: React.ChangeEvent<{}>, newHeart: number | null) => {
        setHeart(newHeart)
    }
  return (
    <Stack spacing={2}>
        <Rating 
            value={star} 
            onChange={handleStarChange} 
            precision={0.5} 
            />
        <Rating 
            value={heart} 
            onChange={handleHeartChange} 
            precision={0.5} 
            icon={<FavoriteIcon fontSize='inherit' color='error' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
            />
    </Stack>
  )
}

export default MuiRating
