import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Feed, VideoDetail, ChannelDetail, Navbar, ScarchFeed } from "./components"
import { useEffect, useState } from 'react'
import Error from './components/Error'


function App() {
  const [menu, SetMenu] = useState(false)
  const [width, setwidth] = useState()
  const [selectedCatagory, setSelectedCatagory] = useState('New')
  const [selected, setSelected] = useState("New")


  useEffect(e => {
    const displayWidth = window.innerWidth;
    setwidth(displayWidth)
    if (width > 640) {
      SetMenu(true)
    }
    
  }, [width])
  



  const menuHandler = () => {
    if (menu === true) {
      SetMenu(false)
    } else {
      SetMenu(true)
    }
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar setMenu={e => menuHandler(e)} />
        <Feed menu={menu} setSelectedCatagory={e => setSelectedCatagory(e)} selectedCatagory={selectedCatagory} /></div>,
        errorElement:<Error/>
    },
    {
      path: "/video/:id",
      element: <div>
        <Navbar setMenu={e => menuHandler(e)} />
        <VideoDetail selectedCatagory={selectedCatagory} menu={menu} setSelectedCatagory={e => setSelectedCatagory(e)} />
      </div>,
        errorElement:<Error/>
      
    },
    {
      path: "/channel/:id",
      element: <div>
        <Navbar setMenu={e => menuHandler(e)} />
        <ChannelDetail SelectedCatagory={selectedCatagory} menu={menu} setSelectedCatagory={e => setSelectedCatagory(e)} />
      </div>,
        errorElement:<Error/>
    },
    {
      path: "/scarch/:scarchturm",
      element:
        <div>
          <Navbar setMenu={e => menuHandler(e)} />
          <ScarchFeed SelectedCatagory={selectedCatagory} menu={menu} setSelectedCatagory={e => setSelectedCatagory(e)} />
        </div>,
        errorElement:<Error/>
    },
  ])



  return (
    < div className='w-[100vw] overflow-x-hidden'>

      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
