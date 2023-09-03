import React from 'react'
import { Grid } from '@mui/material'
import {Box} from '@mui/material'
import {Avatar} from '@mui/material'
import {Rating} from '@mui/material'
const ProductReviewCard = () => {
  return (
    <div>
     <Grid container spacing={2} gap={3}>

        <Grid item xs={1}>
            <Box>
                <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
            </Box>
        </Grid>

        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Ram</p>
                    <p className='opacity-70'>April 5 , 2023</p>
                </div>
            </div>

            <Rating value={4.5} name="half rating" readOnly precision={0.5}/>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, deleniti magni, reiciendis consequuntur possimus nobis corrupti dolorum non odio, mollitia voluptatibus beatae voluptates quaerat distinctio cum accusantium quo ea repellat?</p>
           
        </Grid>
     </Grid>
    </div>
  )
}

export default ProductReviewCard
