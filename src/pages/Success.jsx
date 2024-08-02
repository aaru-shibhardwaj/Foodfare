import React, { useEffect, useState } from 'react'
import {PulseLoader } from "react-spinners";
const Success = () => {
  const [loading,setLoading]= useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000);
  
  },[]);
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      {
        loading ? <PulseLoader color="rgba(185, 120, 80, 1)"/> :
        <div>
      <h2 className='text-3xl font-vibe font-bold mb-4 text-center '>Order Successful !</h2>
      <p className='text-2xl font-signature'>Your Order has been successfully placed</p>
      </div>
     
      }
     
    </div>
  )
}

export default Success