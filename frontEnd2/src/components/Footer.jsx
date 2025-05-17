import assets from "../assets/assets"

function Footer() {
  return (
    <footer className="text-sm py-2 my-2">
      <div className="flex flex-col md:flex-row gap-6 md:gap-28 justify-between">
        <div>
          <img src={assets.logo} className="w-[100px]" />
          <p className="text-gray-600 md:max-w-[50vw] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae ab modi aliquam voluptatum deleniti. Sequi eos eum nostrum voluptatum, nobis id neque.</p>
        </div>
        <div className="md:my-0">
          <p className="font-bold text-lg">COMPANY</p>
          <ul className="text-gray-600 my-4 flex flex-col gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg">GET IN TOUCH</p>
          <ul className="text-gray-600 my-4 flex flex-col gap-1">
            <li>+91-8804500234</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* CopyRight bar*/}
      <div className="border-t border-gray-200 pt-4 ">
        <p className="text-center text-gray-700">Copyright 2025@ vcnvim.com - All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
