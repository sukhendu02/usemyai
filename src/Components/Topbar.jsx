import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
      <nav className='border-sm shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-200'>
        <div className="flex justify-between items-center py-4">

          {/* <Link to="/">Logo</Link> */}
          <div className="basis-2/4">
            <span className="sm:hidden">

              <MenuIcon onClick={togglenav} className="mx-1.5 cursor-pointer " />
            </span>
            <a className='mx-1' href="">Logo</a>
          </div>

            <div className="other-links">
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
          </div>
        </div>
      </nav>
      <Sidebar />


    </>
  )
}
