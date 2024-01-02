import Coursecard from "./Coursecard"

const Courses = () => {
  return (
    <div className="flex items-center justify-center flex-col pb-24 space-y-8">
        <h1 className="text-[24px]">100+ Courses for you to choose from</h1>
        <div className="tab-nav h-[80px] w-[1000px] bg-secondary-blue rounded-full flex items-center justify-center">
            <ul  className="flex items-center justify-center space-x-24 text-white text-[22px]">
                <li>Web Development</li>
                <li>Design</li>
                <li>Learn To Code</li>
                <li>Data Science</li>
            </ul>
        </div>
        <div className="course-cards">
            <Coursecard/>

        </div>
    </div>
  )
}

export default Courses