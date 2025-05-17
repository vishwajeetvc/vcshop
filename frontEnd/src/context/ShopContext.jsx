import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please Choose size!");
      return;
    }
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let count = 0;
    for (let item in cartItems) {
      for (let i in cartItems[item]) {
        try {
          if (cartItems[item][i] > 0) {
            count += cartItems[item][i];
          }
        } catch (error) { }
      }
    }
    return count;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmout = () => {
    let totalAmout = 0;
    for (let item in cartItems) {
      let itemInfo = products.find((i) => i._id === item);
      for (const i in cartItems[item]) {
        try {
          if (cartItems[item][i] > 0) {
            totalAmout += itemInfo.price * cartItems[item][i];
          }
        } catch (e) { }
      }
    }
    console.log(totalAmout);
    return totalAmout;
  };

  const value = {
    navigate,
    getCartAmout,
    updateQuantity,
    getCartCount,
    cartItems,
    addToCart,
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return <ShopContext value={value}>{children}</ShopContext>;
};

export default ShopContextProvider;
