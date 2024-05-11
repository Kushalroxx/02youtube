import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MenuBar from './MenuBar'
import {useVideo} from '../utils/APIreq'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


function ScarchFeed({menu,
   setSelectedCatagory,
   SelectedCatagory
}) {

  const {scarchturm}=useParams()
  const [videos, setVideos] = useState(null)


  useEffect(() => {
  useVideo(`search?part=snippet&q=${scarchturm}`).then(e=>{
setVideos(e.data.items)

  })
  }, [scarchturm])

  
  return (
    <div className='flex bg-black w-[100vw] h-[90vh]'>
      <MenuBar selectedCatagory={SelectedCatagory} menu={menu} setSelectedCatagory={e=>setSelectedCatagory(e)}/>
      <div style={{justifyContent:'center'}} className='pl-3 flex gap-2 flex-wrap overflow-auto'>
      {
        videos ? videos.map((e,idx)=>{
           if (e.id.videoId) { return <VideoCard key={idx} videos={e} /> }
        else if (e.id.channelId) { return <ChannelCard key={idx} channel={e} /> }
        else{
          return
        }}) : <h1>loading...</h1>
      }
      </div>
          </div>
  )
}

export default ScarchFeed