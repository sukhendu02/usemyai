import React from 'react'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


export default function Project1() {
  return (
    <>
    <div className='m-5'>
    <div className='text-center m-5 p-2'>
      <h3 className='text-3xl'>Text-to-Image Generator</h3>
      <small>Generate image from text</small>
    </div>
    <div className="input-container p-2 m-3">
      <div className="input"> 
        <textarea className='w-full p-3' rows="5" name="promt" id="promt"></textarea>
      </div>
      <div className="generate-btn text-center m-3">
        <button className='border-neutral-600 bg-slate-400 p-3 rounded-md w-2/4 shadow-md'>Genereate <AutoFixHighIcon/></button>
      </div>
    </div>
    </div>
    </>
    
  )
}
