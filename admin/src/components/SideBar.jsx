import { NavLink } from "react-router"

function SideBar() {
  return (
    <div className="w-[22%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        
        <NavLink 
          className={"flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1"} 
          to="/add">
          <button className="px-5 py-3 bg-gray-600 text-white font-bold rounded-full">+</button>
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink 
          className={"flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1"} 
          to="/list">
          <button className="px-5 py-3 bg-gray-600 text-white font-bold rounded-full">✔</button>
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink 
          className={"flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1"} 
          to="/orders">
          <button className="px-5 py-3 bg-gray-600 text-white font-bold rounded-full">✔</button>
          <p className="hidden md:block">Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default SideBar
