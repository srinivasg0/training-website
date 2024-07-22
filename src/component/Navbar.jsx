import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav,setNav] = useState(true);  // this will create [nav, setNav] = [true, ...this value dynamically changed by useState] 
            //first it was useState(false) and it was weird, then i debugged it, try putting false for more clarity in code
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"> {/*using this div as a wrapper, max width 1240 pixels, margin x axis auto gonna center it*/}
                    {/*It can be justify-center, justify-between, justify-start or anything it doesnt matter because its w-full in h1, it anyways gonna take up the whole remaining space*/}
   
    <h1 className='text-3xl w-full font-bold text-[#00df9a]'>Infycle. </h1>
    <ul className="hidden md:flex"> {/*Hidden for mobile, anything above medium device width it will get displayed with flex data type*/}
      <li className="p-4">Home</li>
      <li className="p-4">Company</li>
      <li className="p-4">Resources</li>
      <li className="p-4">About</li>
      <li className="p-4">Contact</li>
    </ul>

    <div onClick={handleNav} className='block md:hidden'>  {/* clicking toggles false true value with useState. Its usually displayed with BLOCK but when the device is medium or above the icons are hidden*/} 
    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
     </div>
    {/*WHEN USING HAMBURGER MENU for small devices*/}
    <div className = {!nav ? 'fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}> {/*If value of nav = true meaning navbar should be displayed so it wil get displayed with animation, if false then it still appears but outside the window where we it is not visible*/}
      <h1 className='text-3xl w-full font-bold text-[#00df9a] m-4'>React. </h1>
      <ul className='p-4 uppercase'>
        <li className="p-4 border-b border-gray-900">Home</li>
        <li className="p-4 border-b border-gray-900">Company</li>
        <li className="p-4 border-b border-gray-900">Resources</li>
        <li className="p-4 border-b border-gray-900">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>

    </div>
  )
}

export default Navbar