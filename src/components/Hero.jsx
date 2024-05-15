import React from "react";
import heroimg from "../assets/flowerpot.jpg";

function Hero() {
  return (
    <section className=" flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="flex flex-col items-start lg:mt-20 mr-[20vh] ">
        <h1 className="text-3xl sm:text-6xl lg:7xl text-center tracking-tight font-bold">
          Elevate Your Home
        </h1>
        <h1 className="text-3xl sm:text-6xl lg:7xl text-center tracking-tight font-bold">
          with Timeless Elegance.
        </h1>
        <p className="mt-5 ml-2 text-lg tetx-center max-w-4xl">
          Indulge in our handpicked selection of artisanal <br />
          treasures, where each piece tells a story and adds <br />
          depth to your living space.{" "}
        </p>
        <div className="ml-2 space-x-4">
          <button className="bg-pink-300 hover:bg-pink-400 text-black font-bold py-4 px-8 mt-6 focus:outline-none focus:shadow-outline">
            Work
          </button>
          <button className="bg-white hover:bg-slate-100 text-black font-bold py-4 px-8 mt-6 focus:outline-none focus:shadow-outline">
            Learn More
          </button>
        </div>
        <div></div>
      </div>
      <div className=" lg:mt-0 xl:min-h-screen max-xl:py-40 ">
        <img className="h-[80vh] w-[60vh]" src={heroimg} alt="heroimg" />
      </div>
    </section>
  );
}

export default Hero;
