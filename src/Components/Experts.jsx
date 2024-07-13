import React from 'react'
import Computer from '../Assets/img/Computer.png'

const Experts = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 my-[50px] grid-cols-1 md:text-left'>
        <div className='col-span-1 w-[100%] md:w-[90%] mx-auto'>
            <img src={Computer} alt="" className='mx-auto md:mx-0' />
        </div>
        <div className='col-span-1 flex flex-col justify-center text-center md:text-left'>
            <h1 className='text-green-400 px-3 font-bold pb-3'>LEARN FROM EXPERTS</h1>
            <p className='text-justify px-3'>Lorem Ipsum dolor world of the meaning to say that we are the living organisms that lives on the earth havig a ot of computers. These devices aand mainly computers help you to work on the real time ptojects.</p>
            <button className='text-white md:mx-0 bg-black rounded px-4 py-2 mt-3 w-[150px] mx-auto hover:bg-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Experts