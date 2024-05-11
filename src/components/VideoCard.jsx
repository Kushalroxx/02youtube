import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function VideoCard({ videos }) {
  console.log(videos);
  return (
    <Card className='mt-3'>
      <Link className='cursor-default' to={`/video/${videos.id.videoId}`}>
        <CardMedia className='lg:w-[345px] md:w-[360px] h-[180px]' image={videos.snippet.thumbnails.high?.url} />
      </Link>
      <CardContent className='lg:w-[345px] md:w-[360px] h-[180px]' sx={{ backgroundColor: '#1e1e1e', }}>
        <Link to={`/video/${videos.id.videoId}`}>

          <h1 className='text-white h-12 font-extrabold text-xl'>


            {videos.snippet.title}


          </h1>
        </Link>
        <Link to={`/channel/${videos.snippet.channelId}`}>
          

            <Typography mt={9} fontSize={12} className='text-slate-300'>{videos.snippet.channelTitle
            }</Typography>
          
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard