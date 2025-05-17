import { Headset } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import { HandCoinsIcon } from 'lucide-react';

function Policy() {
  return (
    <div className="flex flex-col gap-12 md:flex-row  my-[50px] md:my-[120px] justify-around">

      <div className="text-center flex flex-col items-center">
        <HandCoinsIcon size={64} absoluteStrokeWidth strokeWidth={3} />
        <p className=" py-2 font-semibold">Exchange your policy</p>
        <p className="text-gray-400">We offer hassel free exchange policy</p>
      </div>

      <div className="text-center flex flex-col items-center">
        <CircleCheckBig size={64} absoluteStrokeWidth strokeWidth={4} />
        <p className=" py-2 font-semibold">Days Return Policy</p>
        <p className="text-gray-400">We provice 7 days free return policy</p>
      </div>

      <div className="text-center flex flex-col items-center">
        <Headset size={64} absoluteStrokeWidth strokeWidth={5} />
        <p className=" py-2 font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24x7 customer Support</p>
      </div>

    </div>
  )
}

export default Policy
