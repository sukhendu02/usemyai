import React from 'react'
import { Link } from 'react-router-dom'
export default function Category(){
    return(
        <>
            <div className='dark:bg-slate-700'>
                <ul className='flex p-2 text-slate-100 text-sm justify-evenly'>
                    <li className='px-2 py-1 border rounded-full border-blue-300'>
                        <Link>First</Link>
                    </li>
                    <li className='px-2 py-1 border rounded-full border-blue-300'>
                        <Link>seconde</Link>
                    </li>
                    <li className='px-2 py-1 border rounded-full border-blue-300'>
                        <Link>third</Link>
                    </li>
                    <li className='px-2 py-1 border rounded-full border-blue-300'>
                        <Link>Fourth</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}