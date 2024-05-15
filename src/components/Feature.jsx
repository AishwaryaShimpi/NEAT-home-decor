import React from "react";
import { features } from "../constants";

function Feature() {
  return (
    <div className="relative mt-[15vh] min-h-[40vh] ml-[20vh] mr-[20vh]">
      <div className="flex flex-wrap lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex flex-wrap items-center"> {/* Changed from mx-6 to items-center */}
              <div className="h-16 w-16 p-2 "> {/* Increased size from h-10 to h-16, w-10 to w-16 */}
                <img src={feature.icon} alt="Feature Icon" className="h-full w-full " /> {/* Added height and width to the image */}
              </div>
              <div>
                <h3 className=" mb-6 text-xl">{feature.text}</h3>
                <p className=" text-md p-2 mb-20 text-neutral-500 ">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;

