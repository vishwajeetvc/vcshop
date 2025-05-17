function Subscription() {
  return (
    <div className="text-center flex flex-col items-center my-[50px] md:my-[100px]">
      <h1 className="text-2xl md:text-3xl py-3 font-semibold">Subscribe new and get 20% off</h1>
      <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos soluta distinctio facilis nesciunt?</p>
      <div className="border border-gray-200 pr-0 my-4 rounded overflow-hidden flex justify-between w-full sm:w-[50vw]">
        <input type="email" placeholder="Enter your email address" className="pl-4 flex-1" />
        <button className="bg-black text-white cursor-pointer p-3 md:p-4">SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Subscription
