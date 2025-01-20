import React from 'react'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export default function Home() {
  return (
    <>
      <div className='h-screen grid items-center jusity-center mb-3'>
        <div className="header text-center">
          <h1 className='text-3xl font-bold p-2 m-2'>All-in-One AI Tools for all your needs</h1>
          <h5 className='text-md font-medium p-2'>Absolutely Free - No Credits No Subsctiption</h5>
        <div className="cta-btn text-center">
          <button className='m-2 p-2 bg-blue-600 rounded text-white'>Explore</button>
          <button className='m-2 p-2 bg-blue-600 rounded text-white'>Sign In</button>
        </div>
        </div>
      </div>

      <div className="list-of-tools grid grid-cols-3 gap-4 m-2 p-2">
        <div className='bg-slate-400 shadow-md p-3 m-2 rounded hover:shadow-lg flex justify-evenly  itmes-center'>
          <span><AutoFixHighIcon/></span>
          <span className=''>Text-to-Image Generator 
            <br /> <small>
              Generate image from the text
              </small>
          </span>

        </div>
        <div className='bg-slate-400 shadow-md p-2 m-2 rounded hover:shadow-lg'>2</div>
        <div className='bg-slate-400 shadow-md p-2 m-2 rounded hover:shadow-lg'>3</div>
        <div className='bg-slate-400 shadow-md p-2 m-2 rounded hover:shadow-lg'>4</div>
        <div className='bg-slate-400 shadow-md p-2 m-2 rounded hover:shadow-lg'>5</div>
        <div className='bg-slate-400 shadow-md p-2 m-2 rounded hover:shadow-lg'>6</div>
      </div>
    </>
  )
}
