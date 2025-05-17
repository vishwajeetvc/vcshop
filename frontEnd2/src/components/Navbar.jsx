import { useState } from 'react';
import { Menu, Search, ArrowLeft, UserPen,ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router'
import assets from '../assets/assets';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

function Navbar() {
  const {cart} = useContext(ShopContext)
  const [rNavBar, setRNavBar] = useState(false); // right side navBar (smartPhones)

  const hideRightNavBar = () => setRNavBar(false);
  const showRightNavBar = () => setRNavBar(true);

  return (
    <div className="flex justify-between items-center">
      <Link to={"/"}><img className="w-[150px] py-6 md:w-[250px]" src={assets.logo} /></Link>
      <div className="">
        <ul className="gap-8 hidden md:flex text-gray-700">
          <li><NavLink className={({ isActive }) => isActive ? "border-b-2" : ""} to="/">HOME</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "border-b-2" : ""} to="/collection">COLLECTION</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "border-b-2" : ""} to="/about">ABOUT</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "border-b-2" : ""} to="/contact">CONTACT</NavLink></li>
        </ul>
      </div>
      <div className="flex gap-3 sm:gap-5 cursor-pointer">
        <div className="relative">
          <ShoppingCart />
          <p className="absolute px-1 sm:text-[12px] text-[9px] rounded-full left-2 top-[-10px] sm:top-[-14px] sm:left-1 bg-black text-white">
            {Object.values(cart).map(item => Object.values(item)).flat().reduce((acc, qty)=> acc+qty, 0)}
          </p>
        </div>
        <Search />
        <div className="group relative">
          <Link to="/login"><UserPen /></Link>
          <div className=" bg-white border border-gray-200 absolute right-[-10px] w-[150px] hidden group-hover:block list-none">
            <li className="p-2 pl-4 hover:bg-gray-100 text-gray-600">My Profile</li>
            <li className="p-2 pl-4 hover:bg-gray-100 text-gray-600">Orders</li>
            <li className="p-2 pl-4 hover:bg-gray-100 text-gray-600">Logout</li>
          </div>
        </div>
        <Menu onClick={showRightNavBar} className={`md:hidden`} />
      </div>

      {/* righ Navigation Bar*/}
      <div
        onClick={hideRightNavBar}
        className={`${rNavBar ? 'block' : 'hidden'} absolute right-0 top-0 w-full bg-gray-900/80 h-full`}>
        <div
          onClick={(e) => e.stopPropagation()}
          className=" w-[80vw] bg-white absolute right-0 h-full top-0 py-5 ">

          <button onClick={hideRightNavBar} className="cursor-pointer px-4 flex gap-3 py-2"><ArrowLeft /> Back </button>

          <ul className="mt-5" onClick={hideRightNavBar}>
            <li className=" px-8 py-2 font-semibold border border-gray-200"><Link to='/'>Home</Link></li>
            <li className=" px-8 py-2 font-semibold border border-gray-200"><Link to='/collection'>Collection</Link></li>
            <li className=" px-8 py-2 font-semibold border border-gray-200"><Link to='/about'>ABOUT</Link></li>
            <li className=" px-8 py-2 font-semibold border border-gray-200"><Link to='/contact'>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
