import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const foundProduct = products.find((item) => item._id == productId);
    setProductData(foundProduct);
    setImage(foundProduct.image[0]);
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ============= Product Data ============= */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ============= Product images ============= */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col over-flow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" />
          </div>
        </div>
        {/* ========== Product Info ============= */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_dull_icon} className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select,Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 border-gray-50 cursor-pointer ${size == item ? "bg-orange-500" : " "}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3  cursor-pointer text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border-gray-200" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/*================= Description & Review Section ==============*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-200 px-5 py-3 text-sm">
            Descrtiption
          </b>
          <p className="border border-gray-200 px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-200  px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            cupiditate et. Voluptatem nostrum cumque iusto sint est. Nemo
            repudiandae, ullam aperiam libero ipsum accusamus quia, rerum illo
            possimus quo assumenda. Quisquam totam obcaecati vero voluptate illo
            perferendis nam unde, sed numquam maxime.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            suscipit aperiam dignissimos. Quis dicta, sequi quidem excepturi
            dolorum reprehenderit magni similique non assumenda officiis modi in
            et fuga sit expedita voluptate cupiditate. Vitae dicta dolores nulla
            aut fugiat? Sapiente porro commodi sunt praesentium, hic, numquam
            vero eaque omnis assumenda, nemo iste suscipit quam.
          </p>
        </div>
      </div>
      {/* ==========display related products============*/}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : null;
}

export default Product;
