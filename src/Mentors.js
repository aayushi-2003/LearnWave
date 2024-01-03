import mentor from './assets/mentor.svg';
const Mentors = () => {
  return (
    <div className="section flex items-center justify-center ">
        <div className="content-box  w-full md:w-[650px] lg:w-[900px] xl:w-[1200px] bg-gradient-to-b from-[#0285FF] to-[#264DE4] md:rounded-3xl flex items-center justify-center px-[50px] md:px-[80px] lg:px-[100px] py-[20px] md:py-[50px] md:space-x-20 flex-col lg:flex-row space-y-10 lg:space-y-0">
            <div className='space-y-6 lg:space-y-10 md:w-[650px] md:px-[80px] lg:px-0 mt-10 lg:mt-0 flex items-center justify-center flex-col'>
                <h1 className='text-[22px] md:text-[32px] lg:text-[50px] text-white text-center lg:text-left'>Learn From Top Industry Experts and Certified Mentors</h1>
                <div className='w-[300px] md:w-[500px] xl:w-[650px] h-[120px] md:h-[80px] lg:h-[50px] xl:h-[70px] bg-white rounded-[10px] xl:rounded-[16px] flex flex-col lg:flex-row items-center justify-center max-lg:space-y-2 space-x-2 xl:space-x-4'>
                    <p className='text-[#023C72] text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] text-center md:text-nowrap'>Get 1-to-1 mentorship and live doubt solving sessions.</p>
                    <button className='bg-secondary-blue px-8 lg:px-4 xl:px-8 py-1 xl:py-2 rounded-full hover:bg-opacity-85'>
                        <span className='text-[14px] md:text-base text-white text-nowrap'>Create Account</span>
                    </button>
                </div>
                <p className='text-white text-[14px] md:text-base lg:text-lg leading-5 md:leading-7 text-center lg:text-left text-opacity-85'>Get in depth knowledge of industry trends, latest technologies, roadmaps and tools. Learn exciting new ways to apply knowledge in the real world and watch your career take off.</p>
            </div>
            <div className='flex flex-row lg:flex-col justify-center items-center text-white space-x-4'>
                <img src={mentor} alt="mentor" className='h-[200px] lg:h-[300px] xl:h-[350px] mb-4 xl:mb-2'/>
                <div className='flex flex-col items-center justify-center'>
                <span className='text-[16px] md:text-[20px]'>Mr. John Doe</span>
                <span className='text-cyan-200 text-[14px] md:text-[18px] font-semibold'>Ex-Amazon SDE</span>
                <span className='text-center text-[13px] md:text-base'>Data Structures and Algorithms Mentor</span>
                <button className='btn text-nowrap mt-4 xl:mt-2 '>
                    <span className='text-[14px] md:text-[16px] lg:text-[20px]'>View Profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mentors