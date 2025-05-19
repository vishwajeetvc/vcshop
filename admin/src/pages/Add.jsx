function Add() {
  return (
    <form>
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">

          <label htmlFor="image1">
            <p className="py-5 px-10 bg-gray-300 text-white hover:bg-gray-400 cursor-pointer text-xl rounded-xl">Upload Image</p>
            <input type="file" id="image1" hidden/>
          </label> 

          <label htmlFor="image2">
            <p className="py-5 px-10 bg-gray-300 text-white hover:bg-gray-400 cursor-pointer text-xl rounded-xl">Upload Image</p>
            <input type="file" id="image2" hidden/>
          </label> 

          <label htmlFor="image3">
            <p className="py-5 px-10 bg-gray-300 text-white hover:bg-gray-400 cursor-pointer text-xl rounded-xl">Upload Image</p>
            <input type="file" id="image3" hidden/>
          </label> 

          <label htmlFor="image4">
            <p className="py-5 px-10 bg-gray-300 text-white hover:bg-gray-400 cursor-pointer text-xl rounded-xl">Upload Image</p>
            <input type="file" id="image4" hidden/>
          </label> 

        </div>
      </div>
    </form>
  )
}

export default Add
