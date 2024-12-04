import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from '../Components/About.jsx'
import Home from '../Components/Home.jsx'
import Projects from '../Components/Projects.jsx'
import App from '../App.jsx'

function Routing() {
    return (
        
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/project' element={<Projects/>} />
        </Routes> 

    
  )
}

export default Routing