import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [toggle, settoggle] = useState(false)
  return (
    <div className='bg-sky-500 p-6'>
        <div className='flex justify-between items-center'>
            <div className='md:text-3xl font-bold text-black'>
                Code With HMA
            </div>
                {
                    toggle ?
            <AiOutlineClose className='text-2xl text-black font-bold md:hidden block' onClick={()=>{settoggle(!toggle)}} />
                    :
            <AiOutlineMenu className='text-black font-bold text-2xl cursor-pointer md:hidden block' onClick={()=>{settoggle(!toggle)}} />
                }
            <ul className='md:flex gap-8 hidden'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Services
                </li>
                <li>
                    Feedback
                </li>
            </ul>

            {/* Responsive */}

            <ul className={` duration-500 block gap-8 md:hidden fixed top-[84px] bg-gray-400 w-full text-center h-screen 
                ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='py-4 px-5'>
                    Home
                </li>
                <li className='py-4 px-5'>
                    About
                </li>
                <li className='py-4 px-5'>
                    Contact
                </li>
                <li className='py-4 px-5'>
                    Services
                </li>
                <li className='py-4 px-5'>
                    Feedback
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar