import React, { useState } from 'react'
import Stack from "@mui/material/Stack"
import { logo } from "../utils/constants"
import ScarchBar from './ScarchBar'
import { Subject } from '@mui/icons-material'
import { IconButton } from '@mui/material'
function Navbar({setMenu}) {

  return (
    <Stack
      direction="row"
      alignItems="center"
      className="top-0 py-2 sm:py-3 lg:py-4 sticky bg-black " sx={{ justifyContent: 'space-between' }} >
      <div
        className='flex gap-2 '>
        <div
          className='sm:block block md:hidden'>
          <IconButton
            onClick={(e) => setMenu(e)}
            sx={{ color: 'white', }}>
            <Subject />
          </IconButton>
        </div>
        <img
          src={logo}
          alt=""
          className='hidden sm:block h-[45px] md:pl-5 sm:pl-1' />
      </div>
      <ScarchBar setScarchInput={e=>setScarchInput(e)} />

    </Stack>
  )

}

export default Navbar