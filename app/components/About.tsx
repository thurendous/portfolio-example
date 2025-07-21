import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-11/12 px-[12%] scroll-mt-20">
      <div className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
        <h2 className="text-center text-5xl font-ovo mb-2">About me</h2>
      </div>
      <div className="flex w-full flex-col lg:flex-row items-center gap-10">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none mb-4">
          <Image
            src={assets.user_image}
            alt="user-image" 
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1 text-center mb-4">
          <p className="mb-4">
            I am an experienced backend developer with a strong background in
            multiple companies like Microsoft, Google, and Facebook. I have a
            passion for building scalable and efficient backend systems.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="text-lg font-ovo mt-3">{title}</h3>
                <p className="text-sm font-ovo mt-3">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>
          <ul className="flex items-center justify-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-2 w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={tool} alt="tool" className="w-6 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
