import { Stack } from '@mui/material'
import React, { useState } from 'react'
import MenuBar from './MenuBar'
import Content from './Content'



function Feed({ menu ,
  setSelectedCatagory,
  selectedCatagory,
 }) {
  // const [selectedCatagory, setSelectedCatagory] = useState('New')

  return (
    <Stack className='bg-black w-[100vw] h-[90vh]' direction={'row'}>
      <div>
        <MenuBar selectedCatagory={selectedCatagory} setSelectedCatagory={e => setSelectedCatagory(e)} menu={menu} />
      </div>
      <div>
        <Content selectedCatagory={selectedCatagory} />


      </div>
    </Stack>
  )
}

export default Feed