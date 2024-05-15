import React from "react";
import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/wrok3.jpg'
import work4 from '../assets/work4.jpg'

function Work() {
  return (
    <div className="absolute  min-h-[40vh] ml-[20vh] mr-[20vh]">
      <div className="text-center mt-[10vh]">
        <span className="h-6 text-xl font-bold uppercase">Work</span>
        <div className="text-sm p-2 mb-20 mr-[20vh] ml-[20vh]">
          <p>
            Experience the artistry and dedication behind each meticulously
            crafted piece, where passion meets precision to bring beauty into
            your everyday life. Embrace quality that transcends the ordinary and
            elevates your surroundings with timeless elegance.
          </p>
        </div>
        <div className="relative flex flex-row ">
            <img className="h-[50vh]" src={work1} alt="workimg1" />
            <img className="h-[50vh]" src={work2} alt="workimg1" />
            <img className="h-[50vh]" src={work3} alt="workimg1" />
            <img className="h-[50vh] w-[60vh]" src={work4} alt="workimg1" />
        </div>
      </div>
    </div>
  );
}

export default Work;
