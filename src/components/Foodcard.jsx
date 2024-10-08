import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
const Foodcard = ({id,name,price,desc,img,rating,handleToast}) => {
  const  dispatch = useDispatch();
  return (
    <div className='font-semibold w-[230px] bg-white p-5 rounded-lg gap-2'>
      <img src={img} alt=''
        className='w-auto h-[130px] hover:scale-110 cursur:grab transition-all duration-500 ease-in-out'
      />
      <div className='text-sm flex justify-between'>
        <h2>{name}</h2>
        <span className='text-green-500'>₹{price}</span>
          </div>
          <p className='text-sm font-normal'>
         {desc.slice(0,50)}...
          </p>
          <div className='flex justify-between'>
           <span className='flex justify-center items-center '>
            <IoStarSharp className='mr-1 text-yellow-400'/> {rating}
           </span>
           <button onClick={()=>{
            dispatch(addToCart({
              id,name,price,rating,img,qty:1
            }));
            handleToast(name);
           }
           }className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
          </div>
    </div>
  )
}

export default Foodcard