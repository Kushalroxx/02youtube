import React, { useEffect, useState } from 'react'
import {json, useParams} from 'react-router-dom'
import { useVideo } from '../utils/APIreq'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'
import MenuBar from './MenuBar'
function ChannelDetail({setSelectedCatagory,
  menu,
  SelectedCatagory
}) {
const [channels,setChannels]=useState(null)
const [videos,setVideos]=useState(null)
  let {id}=useParams()
// console.log(videos);
// console.log(channels);

  useEffect(() => {
     useVideo(`channels?part=snippet&id=${id}`).then(e=>{setChannels(e.data.items[0])})
     useVideo(`search?channelId=${id}&part=snippet&order=date`).then(e=>setVideos(e.data.items))
  }, [id])
  

  return (
    <div className='flex bg-black w-[100vw]'>
      <div className='sticky left-1'>
    <MenuBar selectedCatagory={SelectedCatagory} menu={menu} setSelectedCatagory={e=>setSelectedCatagory(e)}/>
    </div>
    <div className='bg-black h-[90vh] overflow-auto'>
      {channels&&(<ChannelCard channel={channels}/>)}
      <div style={{justifyContent:'center'}} className='flex gap-2 flex-wrap'>
     {videos&&videos.map(e=>(<VideoCard videos={e}/>))}
     </div>
    </div>
   
    </div>
  )
}

export default ChannelDetail