import axios from "axios";
import { useEffect, useState } from "react"
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function List({token}) {
  const [list, setList] = useState([]);


  const fetchList = async () => {

    try {
      const response = await axios.get(backendUrl+"/api/product/list" )

      if(response.data.success){
        setList(response.data.products);
      } else {
        toast.error("Couldn't fetch Data")
      }
    } catch {
      console.log("Coun't fetch Data")
      toast.error("Couldn't fetch data")
    }

  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl+"/api/product/remove", {id}, {headers: {token},} )
      if(response.data.success){
        toast.success("Product Removed!");
        await fetchList();
      } else {
        toast.success("Something went wrong!");
      }
    } catch {
        toast.error("Something went wrong!");
    }
  }


  console.log(list)
  useEffect(()=> {
    fetchList();
  },[])

  return (
    <>
      <p className="mb-2">All Producs</p>
      <div className="border border-amber-200">
        
        {/*List table title*/}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* product list*/}

        {
          list.map((item, index)=>(
          <div key={index} className="grid grid-cols-[1fr_3fr_1fr]  md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm">
              <img className="w-[80px]" src={item.image[0]}/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeProduct(item._id)} className="text-center">X</p>
          </div>
          ))
        }

      </div>
    </>
  )
}

export default List
