import React from 'react'

const Coursecard = () => {
  return (
    <div className='relative'>
        <div className='h-[300px] w-[300px] border-[3px] border-primary-blue rounded-xl px-[20px] py-[40px]'>
            <h1 className='text-[25px]'>HTML and CSS</h1>
            <p className='text-[16px]'>Learn web development from scratch with our beginner friendly HTML and CSS Course with 50+ exercises and 5 Projects.</p>
            <p>5.5K+ Learners</p>
            <div className='flex justify-between items-center'>
                <h2>Free Certificate</h2>
                <div className='flex'>
                <h2>4.5</h2>
                <img src="" alt="" />
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Coursecard