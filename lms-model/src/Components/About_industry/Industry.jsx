import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Industry = () => {
  return (
    <div className="industry_card flex justify-center items-center flex-col mb-4">
      <div className="heading">
        <h2 className="text-3xl font-bold mb-4 mt-4 underline text-[#002f4D]">
          Industry
        </h2>
      </div>
      <div className="cardsContainer gap-10 flex flex-row justify-evenly items-center flex-wrap">
        <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9217/9217572.png"
            alt="React Native Mobile App Development"
            className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
          />
          <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
            Learn with Expert
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

        <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72 ">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/24/26/boy-laptop-icon-cartoon-computer-child-vector-43002426.jpg"
            alt="React Native Mobile App Development"
            className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin" style={{mixBlendMode:"darken"}}
          />
          <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
            Flexible Timing
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

        <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7238/7238706.png"
            alt="React Native Mobile App Development"
            className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
          />
          <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
            Industries Standard
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
      </div>
    </div>
  );
};

export default Industry;
