import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { categories } from '../utils/constants'
import { Link } from 'react-router-dom'


function MenuBar({ menu ,
setSelectedCatagory,
selectedCatagory,
}) {
  

  return (
    <div
      className=' hidden lg:block md-block sm:block'
      style={{ display: menu ? 'block' : 'none' }} >

      <Stack
        className='bg-black h-[90vh] w-40 lg:w-60 md:w-52 '
        direction={"column"}>
        <Box
          sx={{ overflowY: 'scroll' }}>
          {
            categories.map((e) => (
              <div
                key={e.name}
                className='text-center'>
              <Link to={'/'}>
                <button
                  onClick={() => {
                    setSelectedCatagory(e.name)
                  }}
                  style={{ background: e.name === selectedCatagory && 'red', fontSize: e.name === selectedCatagory && '17px', fontWeight: e.name === selectedCatagory && '500' }}
                  className='transition-all px-3 pr-[18px] rounded-full my-2 py-1 hover:text-white hover:bg-slate-800' >
                  <span
                    style={{ color: e.name === selectedCatagory ? 'white' : 'red' }}
                    className='pr-1 transition-all delay-75'>
                    {e.icon}
                  </span>
                  <span
                    className='text-white'  >
                    {e.name}
                  </span>
                </button>
              </Link>
              </div>
            ))
          }
        </Box>
      </Stack>
    </div>
  )
}

export default MenuBar