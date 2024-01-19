import { FaStar } from "react-icons/fa";
import {courses} from './assets/courses';

const Coursecard = ({projectSub}) => {
  const sub = projectSub;
  return (
    <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 xl:space-x-28 pl-6 md:pl-0 lg:pl-10 xl:pl-0'>
        {courses[sub].map((course)=>(
    <div className='relative'>
        <div className='w-[220px] lg:w-[250px] h-[220px] md:h-[280px] lg:h-[300px] xl:w-[300px] border-[3px] border-secondary-blue rounded-xl px-[20px] py-[20px] xl:py-[40px] z-10 bg-white space-y-2 xl:space-y-3'>
            <h1 className='text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] text-blue-900'>{course.name}</h1>
            <p className='text-[12px] md:text-[14px] lg:text-[16px] text-black text-opacity-65'>{course.desc}</p>
            <p className="text-[14px] md:text-base">{course.learners}</p>
            <div className='flex justify-between items-center'>
                <h2 className='text-primary-pink text-[14px] md:text-base '>{course.certificate}</h2>
                <div className='flex'>
                  <div className='flex items-center justify-center space-x-1'>
                <h2 className="text-[14px] md:text-base">{course.rating}</h2>
                <FaStar className='text-yellow-500 '/>
                  </div>
                </div>
            </div>
        </div> 
        <div className='h-[230px] md:h-[290px] lg:h-[310px] w-[210px] lg:w-[260px] xl:w-[310px]  bg-secondary-blue rounded-xl px-[20px] py-[40px] absolute top-0 z-[-10] rotate-[-7deg] translate-x-[-30px] visible md:invisible lg:visible'></div>
    </div>
        ))}
    </div>
  )
}

export default Coursecard