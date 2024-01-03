import {useRef} from 'react'
import { feedback } from './assets/feedback'

const TestimonialCard = () => {
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
    <div className='app__feedback_container flex items-center justify-center space-x-4' ref={scrollRef}>
    {feedback.map((item) => (
    <div className='app__feedback_card h-[500px] w-[300px] bg-white border-2 border-primary-blue rounded-[20px] flex flex-col items-center justify-center text-center space-y-4 p-4' key={item.key}>
        <img src={item.profile} alt="" className='h-[80px] rounded-full'/>
        <h1 className='text-xl'>{item.role}</h1>
        <h3 className='text-lg'>{item.location}</h3>
        <p>{item.feedback}</p>
    </div>
    ))}
    </div>
  )
}

export default TestimonialCard






 