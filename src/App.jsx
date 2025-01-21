import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import Topbar from './Components/Topbar';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';
import Home from './Components/Home';

import { Routes,Route } from "react-router-dom"
import Category from './Components/Category';

function App() {
  

  return (
    <>
    <Topbar className=""/>
    <main className='dark:'>
      <div className="catagory-container">
        {/* <Category/> */}
      </div>

    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/project-1"  element={<Project1/>} />
      <Route path="/project-2"  element={<Project2/>} />
      <Route path="/project-3"  element={<Project3/>} />
      {/* <Route path="/project-4"  element={<Project4/>} /> */}
      {/* <Route path="/project-5"  element={<Project5/>} /> */}
    </Routes>
    </main>
    </>
  )
}

export default App
