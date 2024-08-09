import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = () => {


  return (
    <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
      <img
        src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png"
        alt="React Native Mobile App Development"
        className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
      />
      <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
        React Native Development
      </h3>
      <div className="flex gap-2 justify-evenly py-8 ">
        <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
          <div className="flex  items-center gap-1">
            Enroll Now <FaArrowRight />
          </div>
        </button>
        <br />
        <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
