import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import {useRef} from 'react'
import { feedback } from './assets/feedback'

const Testimonials = () => {
  const scrollRef = useRef(null);
  const scroll = (direction)=>{
    const {current} =scrollRef;
    if(direction==='left'){
      current.scrollLeft-=300;
    } else{
    current.scrollLeft+=300;
   }
  }
  return (
    <div className='section flex flex-col md:flex-row h-[720px] relative'>
      <div className='flex justify-center items-center text-wrap min-w-[380px] lg:min-w-[500px] xl:px-[10rem]'>
        <h1 className='text-[22px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-center md:text-left'>What our community of <br/> 50K+ Learners say</h1>
      </div>

      <div className="app__gallery-images flex h-[580px] md:h-[620px] md:rounded-l-3xl w-full md:w-[50%] bg-gradient-to-b from-secondary-blue to-primary-blue absolute top-36 md:top-12 md:right-0 flex-row items-center md:pl-[5rem] justify-center">
        <div className="app__gallery-images_container p-10 md:px-0" ref={scrollRef}>
          {feedback.map((item)=>(
            <div className="app__gallery-images_card h-[450px] md:h-[500px] w-[300px] bg-white rounded-[20px] flex flex-col items-center justify-center text-center space-y-2 md:space-y-4 p-10 md:p-4" key={`gallery_image-${item +1}`}>
          <img src={item.profile} alt="" className='h-[80px] rounded-full'/>
          <h1 className='text-lg md:text-xl'>{item.role}</h1>
          <h3 className='text-base md:text-lg'>{item.location}</h3>
          <p className='text-sm md:text-base'>{item.feedback}</p>
            </div>
          ))}
        </div>
      <div v className='absolute bottom-0 flex items-center justify-between p-4 md:mr-3 space-x-6'>
        <BsArrowLeftShort className='h-[30px] w-[30px] text-white cursor-pointer' onClick={()=>scroll('left')}/>
        <BsArrowRightShort className='h-[30px] w-[30px] text-white cursor-pointer' onClick={()=>scroll('right')}/>
      </div>
</div> 

    </div>
  )
}

export default Testimonials