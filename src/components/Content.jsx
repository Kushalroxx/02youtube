import React, { useEffect, useState } from 'react'
import { useVideo } from '../utils/APIreq'
import Video from './Video'
function Content({ selectedCatagory }) {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const json = useVideo(`search?part=snippet&q=${selectedCatagory.toLowerCase()}`)
    json.then(e => {
      setVideos(e.data.items)
      
    })

  }, [selectedCatagory])
  return (
    <>
      <Video videos={videos} />
    </>
  )
}

export default Content