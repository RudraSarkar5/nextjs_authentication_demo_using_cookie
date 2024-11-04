"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

  



const page = () => {

    const [data,setData] = useState(null)

    const fetchProfileData = async()=>{
        const res = await axios.get('/api/user/user-details');
        console.log(res);
        
        setData(res.data.data.user);
    }

  useEffect(()=>{
     fetchProfileData();
  },[])

    

  return (
    <div className='flex h-screen justify-center items-center'>
        <h1 className='text-white text-center'>{data?`my name is : ${data} `:""}</h1>
    </div>
  )
}

export default page