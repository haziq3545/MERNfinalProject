import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function LogIn() {
    const opacColor ={backgroundColor: 'rgba(240, 240, 240, 0.1)'}
        var[user,setUser]=useState
        (
            {
                email:"",
                password:""
            }
        )
        var handleInput=(e)=>
        {
            setUser
            (
                {
                    ...user,
                    [e.target.name]:e.target.value
                }
            )
        }
        var navigate =useNavigate()
        var loginuser=(e)=>
    {
        e.preventDefault()
        axios.post("http://localhost:5000/login",user).then((resp)=>
        {
            console.log(resp.data)
            if(resp.data.email==="admin@gmail.com" && resp.data.password==="admin123"){
            navigate("/dashBoard")
            }
            else
            {
                consol.log('False-Entry')
            }
        })
    }
  return (
    <>
    <section  className="bg-gray-900 text-gray-400 body-font">
<div className="container mx-auto py-12">
<h2 className="text-3xl font-bold mb-6 text-center">LogIn-Form</h2>
<form onSubmit={loginuser} className="max-w-lg mx-auto shadow-lg rounded-lg p-3 sm:p-5 md:p-7 lg:p-9 xl:p-11 2xl:p-15" style={opacColor}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" onChange={handleInput} name="email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" onChange={handleInput} name="password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
  </div>
  <div className="text-3xl font-bold mb-6 text-center">
  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogIn</button>
  </div>
  <Link to={"/signup"}>Don't have an account? register</Link>  
</form>

</div>
</section>


    
    </>

    )
}

export default LogIn