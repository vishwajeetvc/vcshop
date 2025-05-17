import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useState } from "react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import assets from "../assets/assets";
import { useEffect } from "react";

function Collection() {
  const { products } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState(products.slice());
  const [filterVisible, setFilterVisible] = useState(false);
  const [filter, setFilter] = useState([]);
  const [subFilter, setSubFilter] = useState([]);

  const toggleFilterButton = () => setFilterVisible(!filterVisible);

  const toggleFilter = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFilter((prev) => [...prev, value]);
    } else {
      setFilter((prev) => prev.filter((item) => item !== value));
    }
  };
  const toggleSubFilter = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSubFilter((prev) => [...prev, value]);
    } else {
      setSubFilter((prev) => prev.filter((item) => item !== value));
    }
  };

  const sortBy = (mode) => {
    if (mode === "Low-to-High") {
      const sortedProducts = [...visibleProducts].sort(
        (a, b) => a.price - b.price,
      );
      setVisibleProducts(sortedProducts);
    } else if (mode === "High-to-Low") {
      const sortedProducts = [...visibleProducts].sort(
        (a, b) => b.price - a.price,
      );
      setVisibleProducts(sortedProducts);
    }
  };

  useEffect(() => {
    if (filter.length > 0 && subFilter.length > 0) {
      const filteredProducts = products.filter((product) => {
        return (
          filter.includes(product.category) &&
          subFilter.includes(product.subCategory)
        );
      });
      setVisibleProducts(filteredProducts);
    } else if (filter.length > 0) {
      const filteredProducts = products.filter((product) => {
        return filter.includes(product.category);
      });
      setVisibleProducts(filteredProducts);
    } else if (subFilter.length > 0) {
      const filteredProducts = products.filter((product) => {
        return subFilter.includes(product.subCategory);
      });
      setVisibleProducts(filteredProducts);
    } else {
      setVisibleProducts(products);
    }
  }, [filter, subFilter, products]);

  return (
    <div className="sm:flex gap-8 mb-[200px]">
      {/*left filter or top for mobile*/}
      <div className="flex flex-col gap-4 md:w-[20%] text-gray-600">
        {/*category*/}
        <div
          onClick={toggleFilterButton}
          className="flex gap-2 items-center border sm:border-none w-[100px] px-4 py-1"
        >
          <p className="text-gray-600 text-xl inline-block">Filter </p>
          <img
            src={assets.dropdown_icon}
            className={`inline-block sm:hidden ${filterVisible ? "rotate-90 w-2 h-3" : "w-2 h-4"} transition-all duration-200 ease-linear`}
          />
        </div>
        <div
          className={`border border-gray-400 px-4 py-4  sm:block ${filterVisible ? "" : "hidden"} `}
        >
          <p className="py-2 font-semibold px-4">CATEGORIES</p>
          <div className="flex items-center gap-4 px-4 py-1">
            <input onClick={toggleFilter} type="checkbox" value="Men" /> Men
          </div>
          <div
            onClick={toggleFilter}
            className="flex items-center gap-4 px-4 py-1"
          >
            <input type="checkbox" className="" value="Women" /> Women
          </div>
          <div className="flex items-center gap-4 px-4 py-1">
            <input
              onClick={toggleFilter}
              type="checkbox"
              className=""
              value="Kids"
            />{" "}
            Kids
          </div>
        </div>
        {/*type*/}
        <div
          className={`border border-gray-400 px-4 py-4 sm:block ${filterVisible ? "" : "hidden"}`}
        >
          <p className="py-2 font-semibold px-4">TYPE</p>
          <div className="flex items-center gap-4 px-4 py-1">
            <input onClick={toggleSubFilter} type="checkbox" value="Topwear" />{" "}
            Topwear
          </div>
          <div className="flex items-center gap-4 px-4 py-1">
            <input
              onClick={toggleSubFilter}
              type="checkbox"
              value="Bottomwear"
            />{" "}
            Bottomwear
          </div>
          <div className="flex items-center gap-4 px-4 py-1">
            <input
              onClick={toggleSubFilter}
              type="checkbox"
              value="Winterwear"
            />
            Winterwear
          </div>
        </div>
      </div>

      {/*right collection with sorting options*/}
      <div className="flex flex-col gap-4 flex-1">
        {/*sorting*/}
        <div className="flex justify-between my-5 sm:my-0 px-4 flex-wrap text-sm">
          <div className="text-lg sm:text-2xl font-semibold sm:pl-8">
            <Title t1={"ALL"} t2={"COLLECTION"} />
          </div>
          <select
            onChange={(e) => sortBy(e.target.value)}
            className="px-4 py-2 outline-none border border-gray-200 cursor-pointer"
          >
            <option onClick={() => sortBy("Default")}>Sort by : Default</option>
            <option onClick={() => sortBy("Low-to-Hight")}> Low-to-High</option>
            <option onClick={() => sortBy("High-to-Low")}>High-to-Low</option>
          </select>
        </div>

        {/*Collection*/}
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          {visibleProducts.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
