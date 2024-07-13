import React from 'react'
import { MdOutlineWebStories } from "react-icons/md";
import { GrAccessibility } from "react-icons/gr";
import { Md3dRotation } from "react-icons/md";

const Plans = () => {
  return (
    <div className='py-[100px] px-3'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3'>
            <div className='shadow-xl h-[500px] hover:scale-110 duration-500 mb-3 text-center py-4 leading-8'>
                <MdOutlineWebStories className='mx-auto text-8xl mb-4' />
                <h1 className='text-3xl font-semibold mb-4'>Web Development</h1>
                <h1 className='text-3xl font-bold mb-4'>$149</h1>
                <p>Lorem Ipsu dolor color</p>
                <p>Lorem Ipsu dolor color and also we works ont his</p>
                <p>Lorem Ipsum works really</p>
                <button className='bg-green-400 px-5 py-2 rounded text-black font-bold hover:bg-white hover:border border-green-400 duration-500 mt-4'>
                    Start Trial</button>
            </div>
            <div className='shadow-xl h-[500px] hover:scale-110 duration-500 mb-3 text-center py-4 leading-8 bg-gray-100'>
                <GrAccessibility className='mx-auto text-8xl mb-4' />
                <h1 className='text-3xl font-semibold mb-4'>Digital Marketing</h1>
                <h1 className='text-3xl font-bold mb-4'>$129</h1>
                <p>Lorem Ipsu dolor color</p>
                <p>Lorem Ipsu dolor color and also we works ont his</p>
                <p>Lorem Ipsum works really</p>
                <button className='bg-green-400 px-5 py-2 rounded text-black font-bold hover:bg-white hover:border border-green-400 duration-500 mt-4'>
                    Start Trial</button>
            </div>
            <div className='shadow-xl h-[500px] hover:scale-110 duration-500 mb-3 text-center py-4 leading-8'>
                <Md3dRotation className='mx-auto text-8xl mb-4' />
                <h1 className='text-3xl font-semibold mb-4'>Graphic Designing</h1>
                <h1 className='text-3xl font-bold mb-4'>$99</h1>
                <p>Lorem Ipsu dolor color</p>
                <p>Lorem Ipsu dolor color and also we works ont his</p>
                <p>Lorem Ipsum works really</p>
                <button className='bg-green-400 px-5 py-2 rounded text-black font-bold hover:bg-white hover:border border-green-400 duration-500 mt-4'>
                    Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Plans