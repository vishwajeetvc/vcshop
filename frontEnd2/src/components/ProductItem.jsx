import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router";

function ProductItem({ product }) {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${product._id}`}>
      <div>
        <div className="overflow-hidden">
          <img
            src={product.image[0]}
            className="hover:scale-120 transition-all"
          />
        </div>
        <div className=" text-gray-600 text-sm">
          <p className="mt-2">{product.name}</p>
          <p>
            <span className="text-green-700 font-bold">
              {currency} {product.price}{" "}
            </span>
            <del className="px-2">
              {currency}
              {Math.trunc(Math.random() * 50 + product.price)}
            </del>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
