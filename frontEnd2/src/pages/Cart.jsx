import { useContext } from "react"
import Title from "../components/Title"
import { ShopContext } from "../Context/ShopContext"
import assets from "../assets/assets";



function CartItem({image, name, price, size}) {
  const {currency} = useContext(ShopContext);
  return (
    <div>
      <div>
        <div>
          <img src={image}/>
        </div>
        <div>
          <p>{name}</p>
          <div className="flex gap-2">
            <p>{currency}{price}</p>
            <button className={`px-5 py-3 bg-gray-100 ${size == 'M' ? "bg-orange-400 text-white font-bold border" : ""}`}>M</button>
          </div>
        </div>
      </div>

      <div>
        <input type="number" min={1}/>
        <img src={assets.bin_icon}/>
      </div>
    </div>
  )
}


function Cart() {
  const {cart, products} = useContext(ShopContext)
  

  return (
  <div>
      <div className="text-3xl flex justify-center font-semibold my-10">
        <Title t1={"YOUR"} t2={"Cart"}/>
      </div>
      <div className="border-t border-b border-gray-400 py-2">

      </div>
  </div>
  )
}

export default Cart
