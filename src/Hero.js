import heroImg from './assets/heroImg.svg';
const Hero = () => {
  return (
    <div className=''>
        <div className="bg-primary-blue h-[550px] md:h-[520px] lg:h-[550px] xl:h-[750px] w-full z-[-10]absolute top-0 clip-bg-one px-[50px] md:px-[100px] xl:px-[150px]">

        <div className='hero-content flex items-center justify-between absolute top-[8rem] xl:top-[12rem] space-x-[24px] md:space-x-[35px] lg:space-x-[50px] xl:space-x-[135px]'>
            <div className='image-box hidden lg:block'>
                <img src={heroImg} alt="image" className='h-[250px] xl:h-[300px] w-auto ' />
            </div>
            <div className='w-[280px] md:w-[500px] xl:w-[650px] flex flex-col justify-center items-center space-y-[24px] xl:space-y-[30px]'>
                <h1 className='text-[28px] md:text-[40px] xl:text-[60px] text-white'>Get Better In 100 Days</h1>
                <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] text-white text-opacity-85 text-center lg:text-justify'>Join our community of 10,000+ users on a transformative journey. Elevate your skills in computer science and design fields and witness remarkable growth over just 100 days.</p>
                <div className='w-[280px] md:w-[500px] xl:w-[650px] h-[120px] md:h-[80px] lg:h-[50px] xl:h-[70px] bg-white rounded-[10px] xl:rounded-[16px] flex flex-col lg:flex-row items-center justify-center max-lg:space-y-2 lg:space-x-4'>
                    <p className='text-[#023C72] text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] text-center'>We provide 30+ free courses and 1-to-1 mentorships</p>
                    <button className='bg-secondary-blue px-8 lg:px-4 xl:px-8 py-1 xl:py-2 rounded-full hover:bg-opacity-85'>
                        <span className='text-[14px] md:text-base text-white text-nowrap'>Create Account</span>
                    </button>
                </div>
            </div>

        </div>

        </div>
        <div className="bg-[#80c1fe] bg-opacity-80 h-[570px] md:h-[540px] lg:h-[570px] xl:h-[770px] w-full z-[-10] absolute top-[-18px] clip-bg-two"></div>
    </div>
  )
}

export default Hero