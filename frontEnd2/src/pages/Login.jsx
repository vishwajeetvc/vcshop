import { useState } from "react"
import Title from "../components/Title"

function Login() {
  const [mode ,setMode] = useState("Login");

  const changeModeToLogin = () => setMode('Login');
  const changeModeToSignUp = () => setMode('Sign Up');

  return (
    <div className=" md:my-[120px]">
      <div className="my-8 flex flex-col items-center">
        <div className="text-3xl flex justify-center my-5">
          <Title t2={mode}/>
        </div>
        <div className=" w-[300px] md:w-[400px]">
          {mode == 'Sign Up' && <input className="border-2 px-4 w-full py-2 border-gray-300 outline-none my-2" type="text" placeholder="Name"/>}
          <input className="border-2 px-4 w-full py-2 border-gray-300 outline-none my-2" type="text" placeholder="Email Address"/>
          <input className="border-2 px-4 w-full py-2 border-gray-300 outline-none my-2" type="text" placeholder="Password"/>
        </div>
        <div className="w-[300px] md:w-[400px] text-sm flex justify-between">
          <p>Forgot password?</p>
          {mode == 'Login' && <button className="font-semibold cursor-pointer" onClick={changeModeToSignUp}>Sign Up</button>}
          {mode == 'Sign Up' && <button  className="font-semibold cursor-pointer" onClick={changeModeToLogin}>Login Here</button>}
        </div>
        {mode == 'Sign Up' && <button className="px-8 py-2 bg-black text-white my-8">Sign Up</button>}
        {mode == 'Login' && <button className="px-8 py-2 bg-black text-white my-8">Login</button>}
      </div>
    </div>
  )
}

export default Login
