import instagram from './assets/instagram.png'
import youtube from './assets/youtube.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'
const Footer = () => {
  return (
    <div className="relative ">
        <div className="bg-[#4C6DEB] h-[863px] md:h-[482px] lg:h-[620px] w-full z-[-10] clip-footer-one">
        </div>
        <div className="bg-[#4C6DEB] h-[863px] md:h-[482px] lg:h-[620px]  w-full z-[-10] absolute bottom-0 clip-footer-two"></div>
        <div className="bg-[#8EA2F0] h-[910px] md:h-[510px] lg:h-[655px]  w-full z-[-20] absolute bottom-0 clip-footer-three"></div>
        <div className="bg-[#8EA2F0] h-[910px] md:h-[510px] lg:h-[655px]  w-full z-[-20] absolute bottom-0 clip-footer-four"></div>
        <div className="bg-primary-blue h-[820px] md:h-[460px] lg:h-[588px]  w-full z-[20] absolute bottom-0 ">
            <div className="w-full py-[40px] md:py-[60px] lg:py-[80px] px-[50px] md:px-[100px] lg:px-[180px] xl:px-[300px] lex items-center justify-center flex-col space-y-10 lg:space-y-16">
                <div className="flex items-center justify-center flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-6 lg:space-x-10">
                    <h3 className="text-base lg:text-xl xl:text-2xl text-white text-nowrap">Subscribe to our Newsletter</h3>
                    <div className="h-[30px] md:h-[35px] lg:h-[50px] xl:h-[70px] w-[300px] md:w-[600px] border-[1px] md:border-2 border-white rounded-full md:px-8 xl:px-10 py-2 flex items-center justify-center md:justify-start">
                        <span className="text-white text-opacity-85 text-base lg:text-lg ">Email ID</span>
                    </div>
                </div>
                    <div className="flex items-center justify-center md:justify-between md:flex-row flex-col space-y-4 md:space-y-0 ">
                        <ul className="text-white space-y-2 md:space-y-3 text-center">
                            <li className="text-lg lg:text-xl pb-2 lg:font-semibold">Learning Resources</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Practice Problems</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Mock Tests</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Interview Preparations</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Guided Roadmaps</li>
                        </ul>
                        <ul className="text-white space-y-2 md:space-y-3 text-center">
                            <li className="text-lg lg:text-xl pb-2 lg:font-semibold">Important Links</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Blog</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Join Our Mentor Program</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Become a QnA Expert</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Discussion Forum</li>
                        </ul>
                        <ul className="text-white space-y-2 md:space-y-3 text-center">
                            <li className="text-lg lg:text-xl pb-2 lg:font-semibold">More</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">About Us</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Contact Us</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Privacy Policy</li>
                            <li className="text-white text-opacity-85 text-base lg:text-lg">Terms</li>
                        </ul>
                    </div>
            </div>
                    <div className="flex md:flex-row flex-col justify-between items-center px-[70px] lg:px-[120px] xl:px-[200px] md:space-y-0 space-y-4">
                        <a href="#" className="text-white text-sm lg:text-base xl:text-lg order-1 md:order-none">www.learnwaveeducation.com</a>
                        <div className="socialmedia_links flex space-x-4 lg:space-x-6 xl:space-x-8 ">
                            <img src={instagram} alt="" className='h-7 lg:h-10  cursor-pointer'/>
                            <img src={linkedin} alt="" className='h-7 lg:h-10  cursor-pointer'/>
                            <img src={twitter} alt="" className='h-7 lg:h-10  cursor-pointer'/>
                            <img src={youtube} alt="" className='h-7 lg:h-10  cursor-pointer'/>
                        </div>
                        <a href="#" className="text-white text-sm lg:text-base xl:text-lg">learnwavehelpdesk@gmail.com</a>
                    </div>
        </div>
    </div>
  )
}

export default Footer