import { workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto font-ovo">
        Wlecome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid auto-grid gap-6 my-10">
        {workData.map(({ bgImage, title, description }, index: number) => (
          <div key={index} style={{ backgroundImage: `url(${bgImage})` }} >
            <div>
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
