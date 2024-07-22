import React from 'react'
import Laptop from '../Assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'> {/*default for mobiles it is grid with one col, then after md it is cols 2*/}
            
            <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4' /> {/*First element in grid*/}
            <div className='flex flex-col justify-center '> {/*Second element in grid*/}
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Learn Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum 
                id aperiam quo doloremque nihil inventore, quia vero sunt nemo nisi odio assumenda 
                ipsam obcaecati, ipsum repellat minus quos debitis?</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                {/*You can use global stylings for similar buttons but for this project we are copy pasting*/}
            </div>

        </div>
    </div>
  )
}

export default Analytics