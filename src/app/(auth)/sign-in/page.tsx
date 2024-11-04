"use client"
import { METHODS } from 'http'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {

const router = useRouter();

const [data,setData] = useState({
    username : "",
    password : ""
})

const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const { name , value } = e.target;
    setData((pre)=>({...pre,[name]:value}))
}

const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    console.log("data");
    
    e.preventDefault();
    let res = await axios.post("/api/user/sign-in",data)
    
    console.log("res ",res.data);
    
    if(res.data.success){
        router.push('/profile');
    }
    
}


  return (
    <div className='h-screen flex justify-center items-center gap-3'>
        <form  onSubmit={handleSubmit} className='text-blue-500 flex justify-center items-center gap-3 flex-col'>
            <div>
            <label htmlFor="">username</label>
            <input onChange={handleChange} type="text" name='username' />
            </div>
            <div>
            <label htmlFor="">password</label>
            <input onChange={handleChange} type="text" name='password' />
            </div>

            <input type="submit" value="sub" className='px-3 py-1 rounded-lg bg-green-500' />
           
            
        </form>
    </div>
  )
}

export default page;