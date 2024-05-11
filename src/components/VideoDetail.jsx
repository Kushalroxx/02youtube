import React, { useEffect, useState } from 'react'
import MenuBar from './MenuBar'
import { useParams } from 'react-router-dom'
import { useVideo } from '../utils/APIreq'
import ReactPlayer from 'react-player'
import VideoCard from './VideoCard'
import { Stack, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


function VideoDetail({
  selectedCatagory,
  setSelectedCatagory,
  menu
}) {


  const [videoDetail, setVideoDetail] = useState(null)
  const [suggestedVideos, setSuggestedVideos] = useState(null)

  
  const { id } = useParams()
  useEffect(() => {
    useVideo(`videos?part='contentDetails,snippet&id=${id}`).then(e => setVideoDetail(e.data.items[0]))
    useVideo(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(e => setSuggestedVideos(e.data.items))

  }, [id])
  if ((videoDetail === null) && (suggestedVideos === null)) {
    return (<h1>Loading...</h1>)
  } else {

    return (
      <div className='flex bg-black'>
        <MenuBar menu={menu} setSelectedCatagory={e => setSelectedCatagory(e)} selectedCatagory={selectedCatagory} />
        <div className='ml-14 py-2 lg:flex md:overflow-auto overflow-auto lg:overflow-auto h-[100vh] gap-14'>
          <div>

            <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${id}`} />

            <Typography color={'white'} sx={{ marginTop: '8px', marginLeft: "3px" }}>

              {videoDetail.statistics.viewCount}  views
            </Typography>
            <div style={{ justifyContent: 'space-between' }} className='flex '>
              <Typography sx={{ fontSize: '25px', color: 'white', marginTop: '20px', width: '34vw' }}>
                {videoDetail.snippet.title}
              </Typography>
              <Stack>

                <Typography color={'white'} sx={{ paddingTop: '23px' }}>
                  <ThumbUpIcon sx={{ color: 'white', marginRight: '7px' }} />
                  {videoDetail.statistics.likeCount}
                </Typography>

              </Stack>
            </div>

          </div>
          <div className='h-[90vh] overflow-auto'>
            {suggestedVideos ? suggestedVideos.map(e => <VideoCard videos={e} />) : <h1>Loading...</h1>}
          </div>
        </div>
      </div>

    )
  }
}

export default VideoDetail