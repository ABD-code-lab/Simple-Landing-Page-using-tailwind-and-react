import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full bg-sky-500 py-5 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
            <div className='h-[200px]'>
                <h1 className='text-3xl font-bold pb-3 text-black'>Code With HMA</h1>
                <p className='pb-3 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                <div className='flex gap-7 text-2xl text-white'>
                <FaFacebookSquare />
                <FaTwitter />
                <FaSquareInstagram />
                <FaLinkedin />
                </div>
            </div>
            <div className='h-[200px] pl-6'>
                <p className='text-black font-bold py-3'>Solutions</p>
                <ul className='text-white'>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
            </div>
            <div className='h-[200px] pl-6'>
                <p className='text-black font-bold py-3'>Support</p>
                <ul className='text-white'>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API status</li>
                </ul>
            </div>
            <div className='h-[200px] pl-6'>
                <p className='text-black font-bold py-3'>Company</p>
                <ul className='text-white'>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Press</li>
                    <li>Feedback</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer