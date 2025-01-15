import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Topbar() {

const [mode,setmode] =useState("dark")


const changemode=()=>{
  setmode(mode==="dark"? "light" : "dark")
}

useEffect(()=>{
  if(mode==='dark'){
    document.querySelector('html')?.classList.add('dark');
  }
  else{
    document.querySelector('html')?.classList.remove('dark');
    
  }
  
},[mode])


  return (
    <>
    <nav className='border-sm shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-200'>
      <div className="flex justify-between items-center py-4">

        {/* <Link to="/">Logo</Link> */}
        <div className="">  
          <span className="sm:hidden">

            <MenuIcon className="mx-1.5 cursor-pointer "/>
          </span>
            <a className='mx-1' href="">Logo</a>
        </div>

        <div className="">
            <button onClick={changemode} className='px-2 mx-2 dark:text-slate-50 '>
              <LightModeIcon className='text-blue-600 dark:text-gray-300'/>
            </button>
            <button className='mx-2 px-2 '>Profile</button>
        </div>
      </div>
    </nav>
    <Sidebar/>

    
    </>
  )
}
