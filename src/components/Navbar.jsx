import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';
import Foood from '../assets/Foood.png'
const Navbar = () => {
  const dispatch=useDispatch();
  return (
   <nav className='flex flex-col lg:flex-row justify-between py-3 mx=6 mb-10 '>
       <div className='flex-items-center'>
       <img src ={Foood}
        alt='my food' className='w-16 h-14mr-2'/>
        <h3 className='text-xl font-signature font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
        <br/>
        <h1 className='text-5xl font-vibe text-green-800 font-bold'>FoodFare</h1>
       </div>
       <div>
         <input type='search' name='search' id='' placeholder='search here' autoComplete='off' onChange={(e)=>dispatch(setSearch(e.target.value))}className='p-3 border border-gray-400 font-signature text-sm rounded-lg outline-none w-full mr-8 lg:w-[25vw]'/>
       </div>


   </nav>
  )
}

export default Navbar