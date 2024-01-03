import instagram from './assets/instagram.png'
import youtube from './assets/youtube.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'
const Footer = () => {
  return (
    <div className="relative">
        <div className="bg-[#4C6DEB] h-[620px] w-full z-[-10] clip-footer-one">
        </div>
        <div className="bg-[#4C6DEB] h-[620px]  w-full z-[-10] absolute bottom-0 clip-footer-two"></div>
        <div className="bg-[#8EA2F0] h-[655px]  w-full z-[-20] absolute bottom-0 clip-footer-three"></div>
        <div className="bg-[#8EA2F0] h-[655px]  w-full z-[-20] absolute bottom-0 clip-footer-four"></div>
        <div className="bg-secondary-blue h-[588px]  w-full z-[20] absolute bottom-0 ">
            <div className="w-full py-[80px] px-[300px] lex items-center justify-center flex-col space-y-16">
                <div className="flex items-center justify-center space-x-10">
                    <h3 className="text-2xl text-white text-nowrap">Subscribe to our Newsletter</h3>
                    <div className="h-[70px] w-[600px] border-2 border-white rounded-full px-10 py-2 flex items-center">
                        <span className="text-white text-opacity-85 text-lg">Email ID</span>
                    </div>
                </div>
                    <div className="flex items-center justify-between">
                        <ul className="text-white space-y-3">
                            <li className="text-xl pb-2 font-semibold">Learning Resources</li>
                            <li className="text-white text-opacity-85 text-lg">Practice Problems</li>
                            <li className="text-white text-opacity-85 text-lg">Mock Tests</li>
                            <li className="text-white text-opacity-85 text-lg">Interview Preparations</li>
                            <li className="text-white text-opacity-85 text-lg">Guided Roadmaps</li>
                        </ul>
                        <ul className="text-white space-y-3">
                            <li className="text-xl pb-2 font-semibold">Important Links</li>
                            <li className="text-white text-opacity-85 text-lg">Blog</li>
                            <li className="text-white text-opacity-85 text-lg">Join Our Mentor Program</li>
                            <li className="text-white text-opacity-85 text-lg">Become a QnA Expert</li>
                            <li className="text-white text-opacity-85 text-lg">Discussion Forum</li>
                        </ul>
                        <ul className="text-white space-y-3">
                            <li className="text-xl pb-2 font-semibold">More</li>
                            <li className="text-white text-opacity-85 text-lg">About Us</li>
                            <li className="text-white text-opacity-85 text-lg">Contact Us</li>
                            <li className="text-white text-opacity-85 text-lg">Privacy Policy</li>
                            <li className="text-white text-opacity-85 text-lg">Terms</li>
                        </ul>
                    </div>
            </div>
                    <div className="flex justify-between items-center px-[200px]">
                        <a href="#" className="text-white text-lg">www.learnwaveeducation.com</a>
                        <div className="socialmedia_links flex space-x-8">
                            <img src={instagram} alt="" className='h-10 w-10 cursor-pointer'/>
                            <img src={linkedin} alt="" className='h-10 w-10 cursor-pointer'/>
                            <img src={twitter} alt="" className='h-10 w-10 cursor-pointer'/>
                            <img src={youtube} alt="" className='h-10 w-10 cursor-pointer'/>
                        </div>
                        <a href="#" className="text-white text-lg">learnwavehelpdesk@gmail.com</a>
                    </div>
        </div>
    </div>
  )
}

export default Footer