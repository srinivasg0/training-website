import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='lg:col-span-2 my-4'> {/*Out of three cols this div takes 2 cols*/}
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
             <div>
                <div className='flex flex-row sm:flex-row items-center justify-between'>
                    <input type="email" placeholder='Enter email' className='p-3 w-full rounded-md text-black' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  ml-4 my-6 px-6 py-3 text-black'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a] underline'>Privacy policy</span></p>
            </div>
        </div>
    </div>
  ) 
}

export default Newsletter