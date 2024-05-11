import { Box, CardContent,CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function ChannelCard({channel}) {
  const {id}=useParams()
  return (
    <Box sx={{boxShadow:'none' , borderRadius:'20px'}}>
    <Link className='cursor-default' to={`/channel/${(channel.id.channelId)?channel.id.channelId:id}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'center',textAlign:'center',color:'#fff'}}>
        <CardMedia sx={{borderRadius:'50%', height:'180px', width:'180px', border:'1px solid #e3e3e3',mb:2}} image={channel.snippet.thumbnails.high.url}
        />
        <Typography variant='h6' sx={{width:'180px'}}>
            {
                channel.snippet.title
              }
        </Typography>
{
  channel.statistics?.subscriberCount&&(
    <Typography>
      {parseInt(channel.statistics.subscriberCount)} Subscribers
    </Typography>
  )
}
            </CardContent>
    </Link>
    </Box>
  )
}

export default ChannelCard