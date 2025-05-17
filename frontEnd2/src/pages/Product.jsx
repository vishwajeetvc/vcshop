import { useContext } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../Context/ShopContext";
import assets from "../assets/assets";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { useState } from "react";
import { toast } from "react-toastify";

function Product() {
  const { productId } = useParams();
  const { products, currency, updateCart } = useContext(ShopContext);

  const product = products.find((product) => product._id === productId);
  const relatedProducts = products.filter(pro=> pro.name == product.name).slice(0,5);

  const [size, setSize] = useState('');

  const handleAddToCart = () => {
    if(size == ''){
      toast.error("Please select the size");
    } else {
      updateCart(product._id, "add", size)
    }
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
  <div>
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-18 justify-center my-10 mb-20">
      {/* left side image*/}
      <div className="flex gap-2 flex-col-reverse sm:flex-row flex-1">
        <div className="flex sm:flex-col gap-2">{
          product.image.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                className="w-[100px] sm:w-[150px] object-cover overflow-scroll"
              />
            );
          })
        }</div>
        <div>
          <img src={product.image[0]} className={"sm:w-[600px] h-full"} />
        </div>
      </div>
      {/* right side info*/}
      <div className="flex-1">
        <h1 className="text-xl font-bold sm:text-2xl text-gray-600 my-4">{product.name}</h1>
        <div className="flex gap-8">
          <div className="flex gap-2">
          {[1,2,3,4,5].map((num, index)=>(
            num < 5 ? <img key={index} className="w-[20px] h-[20px]" src={assets.star_icon}/> : <img key={index} className={"w-[20px] h-[20px]"} src={assets.star_dull_icon}/>
          ))}
          </div>
          <p className="font-bold text-xl">(122)</p>
        </div>
          <p className="text-2xl font-semibold text-green-700 my-6">{currency} {product.price}
            <del className="px-4 text-black">
              {currency}
              {Math.trunc(Math.random() * 50 + product.price)}
            </del>{" "}
          </p>
        <p className="sm:w-1/2 text-gray-500 my-2"> {product.description}</p>
        <div className="my-6">
          <p className="text-lg">Select Size</p>
          <div className="mt-3 flex gap-4">
            <button onClick={()=>setSize("M")} className={`px-5 py-3 bg-gray-100 ${size == 'M' ? "bg-orange-400 text-white font-bold border" : ""}`}>M</button>
            <button onClick={()=>setSize("L")} className={`px-5 py-3 bg-gray-100 ${size == 'L' ? "bg-orange-400 text-white font-bold border" : ""}`}>L</button>
            <button onClick={()=>setSize("XL")} className={`px-5 py-3 bg-gray-100 ${size == 'XL' ? "bg-orange-400 text-white font-bold border" : ""}`}>XL</button>
          </div>
        </div>
        <button onClick={handleAddToCart} className="px-6 py-3 bg-black text-white">Add to Cart</button>
        <hr className="my-8 border-gray-300 "/>
        <div className="flex flex-col gap-2 text-gray-400 text-sm">
          <p> 100% Original product.</p>
          <p> Cash on delivery is available on this product. </p>
          <p> Easy return and exchange policy within 7 days. </p>
        </div>
      </div>
    </div>
      <div>
        <div>
          <button className="px-6 py-3 border border-gray-500 font-bold">Description</button>
          <button className="px-6 py-3 border border-gray-300">Reviews</button>
        </div>
        <div className="text-sm flex flex-col gap-5 text-gray-400 p-5 border-gray-300 border mb-5">
          <p>et consectetur magna dolore consectetur aliqua elit dolor incididunt sed incididunt elit eiusmod tempor consectetur tempor labore tempor sed amet tempor do sed aliqua do elit dolor sed sed dolor consectetur sed aliqua sit tempor consectetur consectetur amet ut amet eiusmod elit sed ipsum dolor aliqua eiusmod ut et consectetur</p>
          <p>elit magna dolor sit aliqua lorem amet labore labore incididunt consectetur sed ipsum consectetur lorem sit lorem incididunt dolor consectetur eiusmod do elit consectetur elit elit eiusmod magna labore et adipiscing aliqua incididunt lorem magna sed labore ut tempor amet magna adipiscing eiusmod aliqua eiusmod sed magna lorem lorem dolor</p>
        </div>
      </div>
      {/* related products */}
      <div className="md:my-20">
        <div className="text-lg my-4 md:text-4xl flex justify-center">
          <Title t1={"RELATED"} t2={"PRODUCTS"}/>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {
            relatedProducts.map((product, index)=>(
              <ProductItem key={index} product={product}/>
            ))
          }
        </div>
      </div>
  </div>
  );
}

export default Product;
