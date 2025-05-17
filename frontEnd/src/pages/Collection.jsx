import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  // if we do like this we only have to use one handler, by defautl all categories are empty;
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item != e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  };

  const sortProduct = () => {
    const fpProduct = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpProduct.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpProduct.sort((b, a) => a.price - b.price));
        break;
      default:
        applyFilter();
    }
  };
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const applyFilter = () => {
    let copyProducts = products.slice();

    if (showSearch && search) {
      copyProducts = copyProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      copyProducts = copyProducts.filter((item) =>
        category.includes(item.category),
      );
    }
    if (subCategory.length > 0) {
      copyProducts = copyProducts.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }
    setFilterProducts(copyProducts);
  };

  useEffect(() => {
    applyFilter();
  }, [category, search, subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*filter Options*/}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTER
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""} transition-all ease-linear duration-100`}
            src={assets.dropdown_icon}
          />
        </p>
        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className={"flex gap-2"}>
              <input
                className="w-3"
                type="checkbox"
                value="Men"
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className={"flex gap-2"}>
              <input
                className="w-3"
                type="checkbox"
                value="Women"
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className={"flex gap-2"}>
              <input
                className="w-3"
                type="checkbox"
                value="Kids"
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* Sub category filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className={"flex gap-2"}>
              <input
                className="w-3"
                type="checkbox"
                value="Topwear"
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className={"flex gap-2"}>
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value="Bottomwear"
              />{" "}
              Bottomwear
            </p>
            <p className={"flex gap-2"}>
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value="Winterwear"
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/*Right Side*/}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* Product sort*/}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2"
          >
            <option value="revelent">Sort by : Relevent</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>

        {/*All Products*/}
        <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
