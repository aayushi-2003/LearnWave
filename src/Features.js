export const Features = () => {
  return (
    <div className="flex justify-center items-center space-x-10">
        <div className="border-2 border-blue-400 w-[350px] px-6 py-8 space-y-2">
            <h1 className='text-3xl text-blue-900'>Practice</h1>
            <p className="text-lg text-blue-900 text-justify text-opacity-85">Problem Sets and Exercises to help you gain in depth knowledge and confidence.</p>
        </div>
        <div className="border-2 border-blue-400 w-[350px] px-6 py-8 space-y-2">
            <h1 className='text-3xl text-blue-900'>In Browser Editor</h1>
            <p className="text-lg text-blue-900 text-justify text-opacity-85">We support 30+ programming languages. Code easily and effectively.</p>
        </div>
        <div className="border-2 border-blue-400 w-[350px] px-6 py-8 space-y-2">
            <h1 className='text-3xl text-blue-900'>Blogs</h1>
            <p className="text-lg text-blue-900 text-justify text-opacity-85">Learn best practices, stay tuned to current trends and get the best guides to your career.</p>
        </div>

    </div>
  )
}
