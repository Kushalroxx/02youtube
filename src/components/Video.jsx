import React, { useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'
import Playlist from './Playlist'



function Video({ videos }) {

  
  return (
    <>
      <Stack direction={'row'} flexWrap={'wrap'} sx={{width:'full', height:'90vh' ,overflow:'auto'}} gap={2} justifyContent={'center'} className='pt-5'>
        {
          console.log(videos)}{
          videos.map((items, idx) => {
            if (items.id.videoId) { return <VideoCard key={idx} videos={items} /> }
            else if (items.id.channelId) { return <ChannelCard key={idx} channel={items} /> }
            else if(items.id.playlistId){
              <Playlist videos={items}/>
            }
            else{
              return
            }
          })}
      </Stack>
    </>
  )
}

export default Video