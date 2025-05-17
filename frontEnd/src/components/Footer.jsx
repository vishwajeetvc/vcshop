import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            labore fugit saepe debitis, quo voluptatum, suscipit quos natus
            laborum voluptate iste ducimus illo!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-982312489</li>
            <li>contact@email.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className=" mt-5 border-gray-200" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ vcnvim.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
