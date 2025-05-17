import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            molestias numquam quo magni quaerat sequi doloremque est, ratione
            totam commodi perferendis, veritatis mollitia repellendus. Earum
            delectus iusto nemo ipsa sapiente officiis vel nesciunt enim saepe
            cum, error, veritatis, aut culpa. Quo officiis sapiente sit
            similique, nesciunt, quas consectetur quos eius cum officia dicta
            tenetur hic temporibus consequuntur voluptatem rem animi ex,
            voluptates optio est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            voluptas? Optio nostrum quaerat velit corrupti doloribus nobis!
            Commodi odio quis expedita praesentium eum, quibusdam iure veniam id
            incidunt enim doloremque voluptatem eligendi repellendus possimus,
            aliquam illum sequi assumenda qui sint quia exercitationem aperiam?
            Similique quisquam delectus corporis facere at repellendus!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            accusamus excepturi, sit soluta beatae in aliquam quaerat,
            repudiandae quos recusandae animi. Corporis, harum?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance : </b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel
            officia velit. Qui distinctio ad eos. Accusamus, voluptas architecto
            et recusandae voluptatibus ratione?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience :</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel
            officia velit. Qui distinctio ad eos. Accusamus, voluptas architecto
            et recusandae voluptatibus ratione?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Custormer Service : </b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel
            officia velit. Qui distinctio ad eos. Accusamus, voluptas architecto
            et recusandae voluptatibus ratione?
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default About;
