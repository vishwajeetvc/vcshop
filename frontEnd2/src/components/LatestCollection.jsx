import { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  return (
    <div>
      <div>
        <div className="text-lg justify-center flex pt-8 md:mt-12 md:text-3xl">
          <Title t1={"LATEST"} t2={"COLLECTION"} />
        </div>
        <p className="text-center py-3 mb-5 text-gray-400">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          molestiae autem perferendis cupiditate atque!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
        {products.slice(0, 10).map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
