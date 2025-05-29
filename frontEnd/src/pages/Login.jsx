import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState("Login");

  const { token, setToken, navigate, backendUrl} = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {

      if(state == "Sign Up"){

        const response = await axios.post(backendUrl + "/api/user/register", {name, email, password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.msg)
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {email, password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.msg)
        }
      }
      
    } catch (error) {
      toast.error("Error in signup/login")
    }
  };


  useEffect(()=>{
    if(token){
      navigate("/")
    }
  },[token])


  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{state}</p>
        <hr className=" border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {state == "Sign Up" && (
        <input
          required
          value={name}
          onChange={(e)=>setName(e.target.value) }
          className="w-full px-3 py-2 border border-gray-800"
          type="text"
          placeholder="Name"
        />
      )}
      <input
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value) }
        className="w-full px-3 py-2 border border-gray-800"
        type="email"
        placeholder="Email Address"
      />
      <input
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value) }
        className="w-full px-3 py-2 border border-gray-800"
        type="password"
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer3">Forgot password?</p>
        {state === "Login" ? (
          <p onClick={() => setState("Sign Up")} className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setState("Login")} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8  py-2 mt-4">
        {state == "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
