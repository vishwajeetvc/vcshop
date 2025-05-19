import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Login({setToken}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    try {

      const response = await axios.post(backendUrl+'/api/user/admin', {email, password})
      if(response.data.success){
        setToken(response.data.token)
      } else {
        toast.error("Invalid Credentials");
      }
      
    } catch (error) {
        toast.error("Something Went Wrong");
    }
  }
  return (
    <div>
      <div className="px-5 py-5 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className=" bg-white p-8 rounded-xl">
          <h1 className="mb-5 text-xl font-semibold">Admin Panel</h1>
          <form onSubmit={onSubmitHandler} className="px-4 py-8max-w-md">
            <div className="mb-3 min-w-72">
              <label className="text-sm font-md font-semibold text-gray-700 mb-2 block">Email Address</label>
              <input
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="email" placeholder="your@email.com" required/>
            </div>
            <div className="mb-3 min-w-72">
              <label className="text-sm font-md font-semibold text-gray-700 mb-2 block">Password</label>
              <input 
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="password" placeholder="Enter your password" required/>
            </div>
            <button type="submit" className="w-full rounded px-5 py-2 bg-gray-700 text-white">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
