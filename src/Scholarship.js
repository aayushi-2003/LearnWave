import React from 'react'

const Scholarship = () => {
  return (
    <div className='w-full h-auto flex items-center justify-center flex-col pb-10 px-6'>
        <h1 className='text-[18px] md:text-[24px] lg:text-[32px] text-center'>Get Scholarships and Unlock Premium Courses. Hurry Up!</h1>
        <h2 className='text-[16px] md:text-[20px] lg:text-[28px] text-center text-[#023C72]'>LWSAT starting in 10 days</h2>
        <button className='bg-secondary-blue round-full py-1 md:py-2 px-6 rounded-full text-white mt-4 lg:mt-8 hover:bg-opacity-85'>
            <span className='text-[14px] md:text-base'>Register Now</span>
        </button>
    </div>
  )
}

export default Scholarship