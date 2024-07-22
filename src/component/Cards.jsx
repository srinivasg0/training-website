import React from 'react'
import Single from '../Assets/single.png'
import Double from '../Assets/double.png'
import Triple from '../Assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'> {/*only one column default. If above md then 3 cols*/}
           
                {/*FIRST CARD STARTS BELOW, we could ve passed props and made only card but instead we have copy pasted it because its a simple project*/}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img src={Single} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8 '>Gold</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>50 hours of pre-recorded sessions</p>
                    <p className='py-2 border-b mx-8 '>1 live class per week</p>
                    <p className='py-2 border-b mx-8 '>1 Group Discussion</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
                {/*SECOND CARD STARTS BELOW*/}
            <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 '>
                <img src={Double} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white rounded-full'/>
                <h2 className='text-2xl font-bold text-center py-8 '>Platinum</h2>
                <p className='text-4xl font-bold text-center'>$199</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>50 hours of pre-recorded sessions</p>
                    <p className='py-2 border-b mx-8 '>3 live classes per week</p>
                    <p className='py-2 border-b mx-8 '>3 Group Discussions</p>
                </div>
                <button className='bg-black  text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
                {/*THIRD CARD STARTS BELOW*/}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img src={Triple} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8 '>Radiant</h2>
                <p className='text-4xl font-bold text-center'>$299</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>50 hours of pre-recorded sessions</p>
                    <p className='py-2 border-b mx-8 '>5 live classes per week</p>
                    <p className='py-2 border-b mx-8 '>5 one-to-one discussion with expert trainer</p>
                    <p className='py-2 border-b mx-8 '>Guaranteed Placements</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            


        </div>
    </div>
  )
}

export default Cards