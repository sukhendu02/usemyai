import React from 'react'


import { NavLink, Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <nav className='sidenav text-sm h-screen fixed shadow-md dark:bg-slate-700'>
      <NavLink
          to="/"
          style={({isActive})=>({
            color: isActive ? "#fff" : "",
            background: isActive ? "#38BDF8" : "",
          })}
          className="block p-3 m-1 hover:bg-slate-100 rounded-2xl">
          Home
      </NavLink>
      <NavLink
          to="/Project-1"
          style={({isActive})=>({
            color: isActive ? "#fff" : "",
            background: isActive ? "#38BDF8" : "",
          })}
          className="block p-3 m-1 hover:bg-slate-100 rounded-2xl">
          Project-1
      </NavLink>
      <NavLink
          to="/Project-2"
          style={({isActive})=>({
            color: isActive ? "#fff" : "",
            background: isActive ? "#38BDF8" : "",
          })}
          className="block p-3 m-1 hover:bg-slate-100 rounded-2xl">
          Project-2
      </NavLink>
      <NavLink
          to="/Project-3"
          style={({isActive})=>({
            color: isActive ? "#fff" : "",
            background: isActive ? "#38BDF8" : "",
          })}
          className="block p-3 m-1 hover:bg-slate-100 rounded-2xl">
          Project3
      </NavLink>
      </nav>
    
    </>

  )
}
