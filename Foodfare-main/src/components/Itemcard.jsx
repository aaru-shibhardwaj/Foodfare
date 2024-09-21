import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { removeFromCart,incrementQty,decrementQty } from '../redux/slices/CartSlice';
import {toast} from "react-hot-toast";
const Itemcard = ({id,name,qty,price,img}) => {
  const dispatch=useDispatch();
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
    <AiFillDelete onClick={()=>{dispatch(removeFromCart({id,img,name,price,qty}));
         toast(` ${name} Removed!`, {
        icon: '👋',
     });
        
          }} className='absolute right-7 text-gray-600 cursor-pointer' />
      <img src={img} alt=''
        className='w-[50px] h-[50px]'
      />
      <div className='leading-5'>
        <h2 className='font-signature text-gray-800'>{name}</h2>
        <div className='flex justify-between'>
        <span className='text-green-500  font-semibold'>₹{price}</span>
        <div className='flex justify-center items-center gap-2 absolute right-7'>
        <FaMinus onClick={()=> qty>1 ? dispatch(decrementQty({id})): (qty=0)}
        className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
        <span>{qty}</span>
        <FaPlus onClick={()=> qty>=1 ? dispatch(incrementQty({id})): (qty=0)} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
        </div>
      </div>
      </div>

    </div>
  )
}

export default Itemcard