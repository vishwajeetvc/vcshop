import { Route, Routes } from "react-router"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"
import { useEffect, useState } from "react"
import Login from "./components/Login"
import { ToastContainer } from "react-toastify"

export const backendUrl = import.meta.env.VITE_BACKEND_URL

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ?? "");

  useEffect(()=>{

    localStorage.setItem('token', token);
  },[token])
  return (
    <div>
      <ToastContainer/>
      {
        token === "" 
          ? <Login setToken={setToken}/> 
          :  <>
            <NavBar setToken={setToken}/>
            <hr/>
            <div className="flex">
              <SideBar/>
              <div className="p-10 w-full">
                <Routes>
                  <Route path="/add" element={<Add token={token}/>}/>
                  <Route path="/list" element={<List token={token}/>}/>
                  <Route path="/orders" element={<Orders token={token}/>}/>
                </Routes>
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default App
