export const Features = () => {
  return (
    <div className="section flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4 lg:space-x-8 xl:space-x-10 py-10 px-20 ">
        <div className="h-[130px] lg:h-[170px] xl:h-[195px] border-2 border-blue-400 w-[350px] lg:w-[300px] xl:w-[350px] px-2 lg:px-6 py-4 xl:py-8 space-y-2 flex flex-col justify-center items-center md:items-start">
            <h1 className='text-xl lg:text-2xl xl:text-3xl text-blue-900'>Practice</h1>
            <p className="text-[14px] lg:text-base xl:text-lg text-blue-900 text-center md:text-justify text-opacity-85">Problem Sets and Exercises to help you gain in depth knowledge and confidence.</p>
        </div>
        <div className="h-[130px] lg:h-[170px] xl:h-[195px] border-2 border-blue-400 w-[350px] lg:w-[300px] xl:w-[350px] px-2 lg:px-6 py-4 xl:py-8 space-y-2 flex flex-col justify-center items-center md:items-start">
            <h1 className='text-xl lg:text-2xl xl:text-3xl text-blue-900'>In Browser Editor</h1>
            <p className="text-[14px] lg:text-base xl:text-lg text-blue-900 text-center md:text-justify text-opacity-85">We support 30+ programming languages. Code easily and effectively.</p>
        </div>
        <div className="h-[130px] lg:h-[170px] xl:h-[195px] border-2 border-blue-400 w-[350px] lg:w-[300px] xl:w-[350px] px-2 lg:px-6 py-4 xl:py-8 space-y-2 flex flex-col justify-center items-center md:items-start">
            <h1 className='text-xl lg:text-2xl xl:text-3xl text-blue-900'>Blogs</h1>
            <p className="text-[14px] lg:text-base xl:text-lg text-blue-900 text-center md:text-justify text-opacity-85">Learn best practices, stay tuned to current trends and get the best guides to your career.</p>
        </div>

    </div>
  )
}
