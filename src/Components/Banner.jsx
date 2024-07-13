import React from 'react'
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className='bg-sky-500 w-full'>
        <div className='max-w-[1240px] text-center h-[88vh] flex flex-col items-center justify-center mx-auto'>
            <div className='md:text-4xl font-bold py-2'>Learn With Us</div>
            <div className='md:text-5xl text-white font-bold py-2'>Grow With Us</div>
            <div className='md:text-4xl font-bold py-2 text-white'>Learn &nbsp;
            <ReactTyped strings={[
                " Web Development",
                " Digital Marketing",
                " Graphic Designing"
            ]} typeSpeed={40} backSpeed={50} loop  />
            </div>
            <button className='bg-black px-5 py-2 mt-4 text-white rounded md:text-2xl hover:bg-sky-500'>Read More</button>
        </div>
    </div>
  )
}

export default Banner