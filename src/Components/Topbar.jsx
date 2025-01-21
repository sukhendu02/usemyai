import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import HomeIcon from '@mui/icons-material/Home';
// import  from '../Components/Topbar'

import { NavLink } from "react-router-dom";


import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Topbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);
    
  const togglenav = () => {
    setIsNavOpen(!isNavOpen);

  };



  const [mode, setmode] = useState("dark")

  const changemode = () => {
    setmode(mode === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    if (mode === 'dark') {
      document.querySelector('html')?.classList.add('dark');
    }
    else {
      document.querySelector('html')?.classList.remove('dark');

    }

  }, [mode])


  return (
    <>

    <div>

   
      <nav className= {`border-sm z-0  shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-200 `}    
      // ''
      >
        <div className="flex justify-between items-center py-4">

          {/* <Link to="/">Logo</Link> */}
          <div className="basis-2/4">
            <span className="sm:hidden">

              <MenuIcon onClick={togglenav} className="mx-1.5 cursor-pointer " />
            </span>
            <a className='mx-1' href="">Logo</a>
          </div>

            <div className="other-links hidden sm:block ">
              <Link className='px-3 text-sm '>Buy me coffee</Link>
              <Link className='px-3 text-sm '>Contribute</Link>
              <Link className='px-3 text-sm '>Blogs</Link>
              <Link className='px-3 text-sm '>About Us</Link>
            </div>
          <div className="">
            <button onClick={changemode} className='px-2 mx-2 dark:text-slate-50 '>
              <LightModeIcon className='text-blue-600 dark:text-gray-300' />
            </button>
            {/* <button className='mx-2 px-2 '>Profile</button> */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="px-2">
                  <AccountCircleIcon className='' />
                  {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" /> */}
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-slate-700 dark:text-slate-100"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none dark:text-slate-100 dark:data-[focus]:bg-slate-500 dark:data-[focus]:text-slate-50"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none dark:text-slate-100 dark:data-[focus]:bg-slate-500 dark:data-[focus]:text-slate-50"
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 dark:data-[focus]:bg-slate-500 data-[focus]:text-gray-900 dark:data-[focus]:text-slate-50 data-[focus]:outline-none dark:text-slate-100 dark:data-[focus]:text-slate-50"
                    >
                      License
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none dark:text-slate-100 dark:data-[focus]:bg-slate-500 dark:data-[focus]:text-slate-50"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
            <Menu as="div" className="relative inline-block text-left block sm:hidden">
              <div>
                <MenuButton className="px-2">
                  
              <MoreVertIcon className=''/>
               
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-slate-700 dark:text-slate-100"
              >
                <div className="py-1">
                  <MenuItem>
                <Link className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 dark:data-[focus]:bg-slate-500 data-[focus]:text-gray-900 dark:data-[focus]:text-slate-50 data-[focus]:outline-none dark:text-slate-100 dark:data-[focus]:text-slate-50'>Buy me coffee</Link>
                   
                  </MenuItem>
                  <MenuItem>
              <Link className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 dark:data-[focus]:bg-slate-500 data-[focus]:text-gray-900 dark:data-[focus]:text-slate-50 data-[focus]:outline-none dark:text-slate-100 dark:data-[focus]:text-slate-50'>Blogs</Link>
                 
                  </MenuItem>
                  <MenuItem>
              <Link className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 dark:data-[focus]:bg-slate-500 data-[focus]:text-gray-900 dark:data-[focus]:text-slate-50 data-[focus]:outline-none dark:text-slate-100 dark:data-[focus]:text-slate-50'>Contribute</Link>
                   
                  </MenuItem>
                  <MenuItem>
              <Link className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 dark:data-[focus]:bg-slate-500 data-[focus]:text-gray-900 dark:data-[focus]:text-slate-50 data-[focus]:outline-none dark:text-slate-100 dark:data-[focus]:text-slate-50'>About Us</Link>
   
                  </MenuItem>
             
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </nav>


      {/* SIDE NAV BAAR */}

      <nav className={`sidenav  fixed top-0 h-full sm:w-1/4 z-10 shadow-md bg-white dark:bg-slate-800 dark:text-white  sm:block
     transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 w-full sm:w-1/4
       `}>


       <div className='sticky top-0 p-2 backdrop-blur-lg'>
         <div className="logo p-3 m-2 text-center hidden sm:block">
           Logo Here
         </div>
       <div className='text-center '>
         <input className='p-2 rounded-lg border border-solid dark:bg-slate-300 dark:border-slate-600' placeholder="Quick Search" type="text" />
       </div>

       <div className="close absolute p-2 right-1 top-0 text-lg sm:hidden  " onClick={togglenav}>
        X
    </div>
       </div>


      
     <NavLink
         to="/"
         style={({isActive})=>({
           color: isActive ? "#3490dc" : "",
           background: isActive ? "#f1f5f9" : "",
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

     </div>
    </>
  )
}
