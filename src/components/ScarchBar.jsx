import { IconButton, Input, Paper } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { Search } from '@mui/icons-material'


function ScarchBar() {

  const navigate=useNavigate()
  
  const [input, setInput] = useState('')
  const handleNavigation=()=>{
    let inputValue=input.toLowerCase()
    // input.split('').forEach(e=>{
    //   if(e===' '){
    //     inputValue+="+"
    //   }
    //   else{
    //     inputValue+=e.toLowerCase()
    //   }
    // })
navigate(`/scarch/${inputValue}`)
  }

  
  return (
    <Paper
      component="form"
      onSubmit={(e) => { 
        e.preventDefault()
       handleNavigation()
        
         }}
      className='pl-2 mr-5 h-[42px] lg:mr-14'
      sx={{ border: '1px solid #e3e3e3', borderRadius: '20px' }}
    >
      <Input
        className='w-[300px] md:w-[450px]  lg:w-[680px] h-11 '
        placeholder='Search...'
        value={input}
        onChange={(e) => {
          setInput(e.target.value) }} />

      <IconButton
     type='submit' onClick={e=>(`/video/${input}`)} >    
        <Search />
      </IconButton>
      
    </Paper>
    
  )
}

export default ScarchBar