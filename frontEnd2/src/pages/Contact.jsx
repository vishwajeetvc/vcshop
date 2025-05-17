import assets from "../assets/assets"
import Subscription from "../components/Subscription"
import Title from "../components/Title"

function Contact() {
  return (
    <div>
      <div className="md:my-12 flex justify-center md:text-2xl">
        <Title t1={'ABOUT'} t2={'US'} />
      </div>
      <div className="flex flex-col my-4 md:flex-row  justify-center md:items-center overflow-hidden gap-4 md:gap-12">
        <div className="md:w-[600px] w-[400px] ">
          <img src={assets.contact} />
        </div>
        <div className="flex flex-col gap-4 text-gray-600">
          <div className="">
            <p className="font-semibold py-4 text-xl">Our Store</p>
            <address className="text-sm text-gray-400">234 willms Stattion <br />
              Suit 350, Washington, USA </address>
            <p className="mt-4">Tel:(415) 880248</p>
          </div>
          <div>
            <p className="font-semibold py-4 text-xl">Carrier At forever</p>
            <p className="text-sm text-gray-600">Learn more about our team and job opening.</p>
          </div>
        </div>
      </div>
      <Subscription />
    </div>
  )
}

export default Contact
