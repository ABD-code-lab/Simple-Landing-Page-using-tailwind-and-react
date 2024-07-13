import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full p-4 bg-sky-500'>
        <div className='max-w-[1240px] md:flex mx-auto justify-between py-5'>
            <div className='w-[50%] md:p-9 text-white'>
                <h1 className='md:text-4xl font-bold'>Want to Learn IT Courses?</h1>
                <p>Sign up to get hot deals on this channel</p>
            </div>
            <div className='w-[50%] text-white md:pl-[50px] pt-[30px]'>
                <input placeholder='Enter Email' className='h-[50px] w-[260px] rounded px-2 text-1xl outline-none text-black mb-2' />
                <button className='text-white bg-black rounded px-4 py-[14px] md:mt-3 w-[150px] hover:bg-white md:mx-2'>Notify Me</button>
                <br></br>
                <p>We care about your data and our main point is security</p>
                <a href='#' className='text-blue-800 hover:border-b border-blue-800 duration-300'>Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Newsletter