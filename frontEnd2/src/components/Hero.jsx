import assets from "../assets/assets"
import Title from "./Title"

function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center justify-center border-1 border-gray-300 overflow-hidden">
      <div className="flex justify-center items-center flex-1">
        <div className="my-10 ">
          <Title t1={"OUR"} t2={"BESTSELLER"} left className={"md:text-3xl md:font-light italic"} />
          <h1 className="text-4xl text-gray-700 md:text-[56px] font-bold md:py-10 py-4">Latest Arrivals</h1>
          <Title t1={"SHOP"} t2={"NOW"} className={"md:text-3xl md:font-light italic"} />
        </div>
      </div>
      <div className="md:w-[50%]  h-[80vh] flex flex-1 justify-center items-center overflow-hidden">
        <img src={assets.hero} className="w-full" />
      </div>
    </div>
  )
}

export default Hero
