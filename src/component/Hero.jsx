import React from 'react'
import {ReactTyped} from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='sm:text-6xl md:text-7xl  text-4xl font-bold md:py-6 text-white'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 '>Courses on </p>
                <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-3'
                strings={['Big Data', 'Data Science', 'Data Analytics ']} 
                typeSpeed={130}
                backSpeed={150}
                loop />
            </div>
            <p className='md:text-2xl text-xl  text-gray-500'>Discover Chennai's premier training in Big Data, Data Science, and Analytics courses.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> {/*I was trying hard to center this button, i thought of using other div and flex and all but the HACK is mx-auto*/}

        </div>
    </div>
  )
}

export default Hero