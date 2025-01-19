import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

import { NavLink, Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <nav className='sidenav h-screen fixed shadow-md dark:bg-slate-800 dark:text-white hidden sm:block'>
        <div className='text-center my-5'>
          <input className='p-2 rounded-lg border border-solid dark:bg-slate-300 dark:border-slate-600' placeholder="Quick Search" type="text" />
        </div>
      <NavLink
          to="/"
          style={({isActive})=>({
            color: isActive ? "#3490dc" : "",
            // background: isActive ? "#38BDF8" : "",
            fontWeight: isActive ?"600":"600",
          })}
          className="block p-2 m-1 hover:bg-slate-100 dark:hover:bg-transparent dark:text-slate-300 rounded-2xl">

            <span className='flex items-center'  >

            <HomeIcon className='mx-1 p-1 rounded  dark:bg-slate-100 active:bg-black'/>
              <span className='p-2'>
                Home <br />
                <small className='text-gray-400'>Dashbord to all the feature we had</small>
              </span>
            </span>
      </NavLink>
      <NavLink
          to="/Project-1"
          style={({isActive})=>({

            color: isActive ? "#3490dc" : "",
            // background: isActive ? "#38BDF8" : "",
            fontWeight: isActive ?"600":"600",

            // background: isActive ? "#38BDF8" : "",
          })}
          className="block p-2 m-1 hover:bg-slate-100 dark:hover:bg-transparent dark:text-slate-300 rounded-2xl">

          
          <span className='flex items-center'  >

<HomeIcon className='mx-1 p-1 rounded  dark:bg-slate-100 active:bg-black'/>
  <span className='p-2'>
          Text-to-Image<br />
    <small className='text-gray-400'>Generate image from text</small>
  </span>
</span>
      </NavLink>
      <NavLink
          to="/Project-2"
          style={({isActive})=>({
            color: isActive ? "#3490dc" : "",
            fontWeight: isActive ?"600":"600",
            // background: isActive ? "#38BDF8" : "",
          })}
          className="block p-2 m-1 hover:bg-slate-100 dark:hover:bg-transparent dark:text-slate-300 rounded-2xl">
            
            <span className='flex items-center'  >

            <HomeIcon className='mx-1 p-1 rounded  dark:bg-slate-100 active:bg-black'/>
              <span className='p-2'>
          Upscale Image<br />
                <small className='text-gray-400'>Upscale Image quality </small>
              </span>
            </span>
      </NavLink>
      <NavLink
          to="/Project-3"
          style={({isActive})=>({
            color: isActive ? "#3490dc" : "",
            // background: isActive ? "#38BDF8" : "",
            fontWeight: isActive ?"600":"600",
           
            // background: isActive ? "#38BDF8" : "",
          })}
          className="block p-2 m-1 hover:bg-slate-100 dark:hover:bg-transparent dark:text-slate-300 rounded-2xl">
          Project3
      </NavLink>
      </nav>
    
    </>

  )
}
