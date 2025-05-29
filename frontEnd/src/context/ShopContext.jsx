import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  const [token, setToken] = useState("");

  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL 
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts ] = useState([]);
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
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

    if(token){
      try {
        await axios.post(backendUrl+'/api/cart/add',{itemId, size},{headers : {token}} )
      } catch (error) {
        toast.error("Error in adding cart to the server");
      }
    }

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

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if(token){
      try {
        await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers : {token}})
      } catch (error) {
        toast.error("Error while updating");
      }
    }
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
    return totalAmout;
  };
  

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list")
      if(response.data.success){
        setProducts(response.data.products)
      } else {
        toast.error("Unable to fetch Data")
      }
    } catch (error) {
      toast.error(error.message)
      console.log("Error in fetching data");
    }
  }

  const getUserCart = async( token )=>{
    try {
      const response = await axios.post(backendUrl + "/api/cart/get",{}, {headers :{token}})
        console.log(response)
      if(response.data.success){
        setCartItems(response.data.cartData)
      }
    } catch (error) {

      toast.error("Can't get cart");
    }

  }

  useEffect(()=>{
    getProductsData();
  },[])

  useEffect(()=>{
    if(!token && localStorage.getItem('token')){
      setToken(localStorage.getItem('token'));
      getUserCart(localStorage.getItem('token'))
    }
  },[cartItems])

  const value = {
    token, setToken,
    navigate,
    getCartAmout,
    updateQuantity,
    getCartCount,
    setCartItems,
    cartItems,
    addToCart,
    products,
    currency,
    backendUrl,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };


  useEffect(() => {
  }, [cartItems]);

  return <ShopContext value={value}>{children}</ShopContext>;
};

export default ShopContextProvider;
