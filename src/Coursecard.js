import React from 'react'
import { FaStar } from "react-icons/fa";

const Coursecard = () => {
  return (
    <div className='relative'>
        <div className='h-[300px] w-[300px] border-[3px] border-secondary-blue rounded-xl px-[20px] py-[40px] z-10 bg-white space-y-3'>
            <h1 className='text-[25px] text-blue-900'>HTML and CSS</h1>
            <p className='text-[16px] text-black text-opacity-65'>Learn web development from scratch with our beginner friendly HTML and CSS Course with 50+ exercises and 5 Projects.</p>
            <p>5.5K+ Learners</p>
            <div className='flex justify-between items-center'>
                <h2 className='text-primary-pink '>Free Certificate</h2>
                <div className='flex'>
                  <div className='flex items-center justify-center space-x-1'>
                <h2>4.5</h2>
                <FaStar className='text-yellow-500 mb-1'/>
                  </div>
                </div>
            </div>
        </div>
        <div className='h-[310px] w-[310px]  bg-secondary-blue rounded-xl px-[20px] py-[40px] absolute top-0 z-[-10] rotate-[-7deg] translate-x-[-30px]'></div>
    </div>
  )
}

export default Coursecard