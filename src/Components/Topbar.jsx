import React from 'react'
import IconButton from '@mui/material/IconButton';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

export default function Topbar() {
  return (
    <>
    <nav className='p-1 border-sm shadow-sm'>
      <div className="flex justify-between items-center py-4">

        {/* <Link to="/">Logo</Link> */}
        <div className="">  
          <span className="sm:hidden">

            <MenuIcon className="mx-1.5 cursor-pointer "/>
          </span>
            <a className='mx-1' href="">Logo</a>
        </div>

        <div className="">
            <button className='px-2 mx-2'>Light</button>
            <button className='px-2 mx-2'>Profile</button>
        </div>
      </div>
    </nav>
    <Sidebar/>

    
    </>
  )
}
