import heroImg from './assets/heroImg.svg';
const Hero = () => {
  return (
    <div className=''>
        <div className="bg-primary-blue h-[650px] w-full z-[-10]absolute top-0 clip-bg-one px-[150px]">
        <div className='hero-content flex items-center justify-between absolute top-[8rem] space-x-[180px]'>
            <div className='image-box'>
                <img src={heroImg} alt="image" className='h-[300px] w-auto ' />
            </div>
            <div className='w-[650px] flex flex-col justify-center space-y-[30px]'>
                <h1 className='text-[60px] text-white'>Get Better In 100 Days</h1>
                <p className='text-[22px] text-white text-opacity-85 text-justify '>Join our community of 10,000+ users on a transformative journey. Elevate your skills in computer science and design fields and witness remarkable growth over just 100 days.</p>
                <div className='w-[650px] h-[70px] bg-white rounded-[16px] flex items-center justify-center space-x-4'>
                    <p className='text-[#023C72] text-[16px]'>We provide 30+ free courses and 1-to-1 mentorships</p>
                    <button className='bg-secondary-blue px-8 py-1 rounded-full'>
                        <span className='text-white'>Create Account</span>
                    </button>
                </div>
            </div>

        </div>

        </div>
        <div className="bg-[#80c1fe] bg-opacity-80 h-[670px] w-full z-[-10] absolute top-[-18px] clip-bg-two"></div>
    </div>
  )
}

export default Hero