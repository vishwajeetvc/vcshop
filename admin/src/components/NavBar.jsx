function NavBar({setToken}) {
  return (
    <div className="flex justify-between py-8 px-[8%]">
      <p className="text-4xl font-bold">Logo</p>
      <button
        onClick={()=>setToken("")}
        className="py-2 rounded-full px-8 bg-gray-600 text-white">Logout</button>
    </div>
  )
}

export default NavBar
