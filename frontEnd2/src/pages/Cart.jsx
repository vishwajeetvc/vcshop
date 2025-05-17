import Title from "../components/Title"

function Cart() {
  return (
  <div>
      <div className="text-3xl flex justify-center font-semibold my-10">
        <Title t1={"YOUR"} t2={"Cart"}/>
      </div>
      <div className="border-t border-b border-gray-400 py-2">
      </div>
  </div>
  )
}

export default Cart
