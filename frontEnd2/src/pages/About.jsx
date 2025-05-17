import assets from "../assets/assets"
import Subscription from "../components/Subscription"
import Title from "../components/Title"

function About() {
  return (
    <div>
      <div className="text-xl md:text-2xl flex items-center justify-center md:my-4">
        <Title t1={"ABOUT"} t2={"US"} />
      </div>
      <div className="md:flex md:my-12 my-5 items-center">
        <div className="flex-1">
          <img src={assets.cloth_collection} />
        </div>
        <div className="flex-1 md:px-[100px] py-4">
          <p className="text-gray-500 my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nesciunt inventore repellendus minus molestiae, quidem distinctio sapiente blanditiis modi laudantium eveniet repudiandae hic illo maxime officia ratione sequi consequuntur et omnis aperiam.</p>
          <h1 className="font-bold mt-8">Our Mission</h1>
          <p className="text-gray-500 my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est possimus ducimus quisquam quidem, nam ad in consequuntur sapiente, nesciunt sed, et aliquid.</p>
        </div>
      </div>
      <div className="text-2xl">
        <Title t1={'WHY'} t2={'CHOOSE US'} />
      </div>
      <div className="md:flex my-4 md:my-10">
        <div className="border border-gray-400 p-8 ">
          <p className="font-bold my-4">Quality Assurance</p>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta, provident quos, esse nobis vel pariatur maxime illo facilis aperiam modi, perspiciatis consequatur.</p>
        </div>
        <div className="border border-gray-400 p-8 ">
          <p className="font-bold my-4">Convenience</p>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta, provident quos, esse nobis vel pariatur maxime illo facilis aperiam modi, perspiciatis consequatur.</p>
        </div>
        <div className="border border-gray-400 p-8 ">
          <p className="font-bold my-4">Exceptional Customer Service</p>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum soluta, provident quos, esse nobis vel pariatur maxime illo facilis aperiam modi, perspiciatis consequatur.</p>
        </div>
      </div>
      <Subscription />
    </div>
  )
}

export default About
