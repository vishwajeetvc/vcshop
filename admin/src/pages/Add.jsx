import { useState } from "react"
import axios from "axios"
import { backendUrl } from "../App"
import { toast } from "react-toastify"

function Add({token}) {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  console.log(subCategory)

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    try {

      const formData = new FormData()
      formData.append("name",name);
      formData.append("description",description);
      formData.append("price",price);
      formData.append("category",category);
      formData.append("subCategory",subCategory);
      formData.append("bestseller",bestseller);
      formData.append("sizes",JSON.stringify(sizes));

      image1 && formData.append("image1",image1);
      image2 && formData.append("image2",image2);
      image3 && formData.append("image3",image3);
      image4 && formData.append("image4",image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers : {token}})


      if(response.data.success){
        console.log("success")
        toast.success(response.data.msg);

        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)

        setName("");
        setDescription("");
        setDescription("");
        setPrice("");
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error("Product not added");
      }

    } catch (error) {
        toast.error("Something went wrong!");
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2 flex-col md:flex-row">

          <label htmlFor="image1">
            {image1 && <img src={ URL.createObjectURL(image1) }/>}
            {!image1 && <p className="py-5 px-10 bg-gray-300 text-white hover:bg-gray-400 cursor-pointer text-xl rounded-xl">Upload Image</p>}
            <input onChange={e => setImage1(e.target.files[0])} type="file" id="image1" hidden/>
          </label> 

          <label htmlFor="image2">
            {image2 && <img src={ URL.createObjectURL(image2) }/>}
            {!image2 && <p className="py-5 px-10 bg-gray-300 text-white hover:bg-gray-400 cursor-pointer text-xl rounded-xl">Upload Image</p>}
            <input onChange={e => setImage2(e.target.files[0])} type="file" id="image2" hidden/>
          </label> 

          <label htmlFor="image3">
            {image3 && <img src={ URL.createObjectURL(image3) }/>}
            {!image3 && <p className="py-5 px-10 bg-gray-300 text-white hover:bg-gray-400 cursor-pointer text-xl rounded-xl">Upload Image</p>}
            <input onChange={e => setImage3(e.target.files[0])} type="file" id="image3" hidden/>
          </label> 

          <label htmlFor="image4">
            {image4 && <img src={ URL.createObjectURL(image4) }/>}
            {!image4 && <p className="py-5 px-10 bg-gray-300 text-white hover:bg-gray-400 cursor-pointer text-xl rounded-xl">Upload Image</p>}
            <input onChange={e => setImage4(e.target.files[0])} type="file" id="image4" hidden/>
          </label> 
        </div>
      </div>

      <div className="py-2">
        <p className="py-2">Product Name</p>
        <input 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full py-2 px-4 outline-none" type="text" placeholder="type here" />
      </div>

      <div className="py-2">
        <p className="py-2">Product Description</p>
        <textarea 
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          className="w-full p-4 h-30 outline-none" type="text" placeholder="Write the product description..."></textarea>
      </div>

      <div className="flex gap-8 flex-col sm:flex-row items-center">
        <div>
          <p className="mb-2">Product Category</p>
          <select 
            onChange={(e)=>setCategory(e.target.value)}
            className="w-full px-3 py-2 border-gray-300 border">
            <option value="Men">Men</option> 
            <option value="Women">Women</option> 
            <option value="Kids">Kids</option> 
          </select>
        </div>
        <div>
          <p className="mb-2">Sub Category</p>
          <select 
            onChange={(e)=>setSubCategory(e.target.value)}
            className="w-full px-3 py-2 border-gray-300 border">
            <option value="Topwear">Topwear</option> 
            <option value="Bottomwear">Bottomwear</option> 
            <option value="Winterwear">Winterwear</option> 
          </select>
        </div>
        <div>
          <p className="mb-2">Product Price</p>
          <input onChange={e=>setPrice(e.target.value)} value={price} type="number" placeholder="25" className="py-1 px-2 w-[150px]"/>
        </div>
      </div>

      <div>
        <p className="my-2">Size</p>
        <div className={`flex gap-3`}>
          <div onClick={ () => setSizes(prev => prev.includes("S") ? prev.filter(size => size !== "S") : [...prev, "S"])  }>
            <p className={` bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes("S") ? "outline-orange-600 outline" : ""}`}>S</p>
          </div> 
          <div onClick={ () => setSizes(prev => prev.includes("M") ? prev.filter(size => size !== "M") : [...prev, "M"])  }>
            <p className={` bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes("M") ? "outline-orange-600 outline" : ""}`} >M</p>
          </div> 
          <div onClick={ () => setSizes(prev => prev.includes("L") ? prev.filter(size => size !== "L") : [...prev, "L"])  }>
            <p className={` bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes("L") ? "outline-orange-600 outline" : ""}`} >L</p>
          </div> 
          <div onClick={ () => setSizes(prev => prev.includes("XL") ? prev.filter(size => size !== "XL") : [...prev, "XL"])  }>
            <p className={` bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes("XL") ? "outline-orange-600 outline" : ""}`} >XL</p>
          </div> 
          <div onClick={ () => setSizes(prev => prev.includes("XXL") ? prev.filter(size => size !== "XXL") : [...prev, "XXL"])  }>
            <p className={` bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes("XXL") ? "outline-orange-600 outline" : ""}`} >XXL</p>
          </div> 
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input onChange={()=> setBestseller(prev => !prev)}  checked={bestseller} type="checkbox" id="bestseller"/>
        <label className="cursor-pointer" htmlFor="bestseller">Add to bestseller</label>
      </div>


      <button type="submit" className="px-6 py-2 bg-black text-white mt-4" >ADD</button>

    </form>
  )
}

export default Add
