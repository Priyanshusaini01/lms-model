import React from "react";

import { FaSearch } from "react-icons/fa";

const Herosection = () => {
  return (
    <div>
      <img
        src="https://t4.ftcdn.net/jpg/02/67/52/49/360_F_267524919_wXbVQHR189pLVU06eQ85GGLnJMq2eJFR.jpg"
        className="h-auto min-w-full"
      />
      {/* <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div> */}
      <div className="absolute inset-0 flex items-center justify-start px-6 gap-3 space-y-20 space-x-0">
        {/* <h2 className="text-white text-7xl font-bold">Courses</h2>
        <h2 className="text-white text-7xl font-bold">We Offers</h2> */}

        {/* <div className="flex gap-1 line-clamp-1"> */}
        <h2 className="text-7xl font-bold mb-4 text-center text-[#f46f06]">
          Courses
        </h2>
        <h2 className="text-7xl font-bold mb-4 text-center text-white">
          We offer
        </h2>
        {/* </div> */}
      </div>
      <div className="absolute inset-0 flex items-end justify-items-start px-24 gap-3">
        <div className="flex items-center text-center">
          <button className="bg-[#f46f06] hover:bg-[#e69448] text-white font-bold py-2 px-8 rounded-xl">
            <div className="flex gap-2 items-center">
            Explore More<FaSearch />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;


