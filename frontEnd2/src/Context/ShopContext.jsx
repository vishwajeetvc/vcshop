import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";

export const ShopContext = createContext({});

export default function ShopContextProvider({ children }) {
  const [cart, setCart] = useState({});

  const updateCart = (productId, action, size) => {
    if(action == 'add'){
      if(productId in cart){
        cart[productId][size] = (cart[productId][size] ?? 0) + 1;
        setCart({...cart})
      } else {
        setCart({...cart, [productId] : {[size] : 1 }})
      }
    } 
    if(action == 'remove'){
      delete cart[productId]
      setCart(cart)
    }
  }

  const currency = "$";
  const value = {
    products,
    currency,
    updateCart,
    cart,
  }
  return <ShopContext value={value}>{children}</ShopContext>
}
