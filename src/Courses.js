import Coursecard from "./Coursecard"
import {useRef, useState} from 'react'

let tabs = [
  {id: 'web development', label: 'Web Development'},
  {id: 'design', label: 'Design'},
  {id: 'code', label: 'Learn To Code'},
  {id: 'datascience', label: 'Data Science'},
];
const Courses = () => {
  const [activeTab, setActiveTab] =useState(tabs[0].id)
  return (
    <div className="section flex items-center justify-center flex-col space-y-8">
        <h1 className="text-[18px] md:text-[22px] lg:text-[24px] text-primary-blue">100+ Courses for you to choose from</h1>
        <div className="tab-nav h-[40px] md:h-[50px] lg:h-[70px] xl:h-[80px] w-[380px] md:w-[650px] lg:w-[800px] xl:w-[1000px] bg-primary-blue rounded-full flex items-center justify-center">
            <div  className="flex items-center justify-center space-x-4 sm:space-x-8 md:space-x-16 lg:space-x-20 xl:space-x-24 text-white text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px]">
                {tabs.map((tab)=>(
                  <span key={tab.id} onClick={()=>setActiveTab(tab.id)}  className={`${activeTab === tab.id? "border-b-[1px] md:border-b-2": "hover:text-sky-300 cursor-pointer"} `}>{tab.label}</span>
                ))}
            </div>
        </div>
        <div className="course-cards pt-6 md:pt-10 lg:pt-20 pb-6 lg:pb-10 flex items-center justify-center">
          {activeTab==='web development'?(<Coursecard projectSub="WebDev"/>):activeTab==='design'?(<Coursecard projectSub="Design"/>):activeTab==='code'?(<Coursecard projectSub="LearnToCode"/>):<Coursecard projectSub="DS"/>}
            
        </div>
        <button className="bg-primary-pink px-8 lg:px-6 xl:px-8 py-2 rounded-full hover:bg-opacity-85">
          <span className='text-[14px] md:text-lg xl:font-bold text-white text-nowrap'>View More Courses</span>
        </button>
    </div>
  )
}

export default Courses