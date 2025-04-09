import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Industry = () => {
  return (
    <>
      <div className=" bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTAxLWcteF8xLWt6ZWc4MndpLmpwZw.jpg')] bg-cover bg-no-repeat p-8 ">
        <br></br>
        <div className="flex flex-row justify-evenly mt-8  lg:mt-16 xl:mt-20 mb-14 flex-wrap gap-5">
          {/* Course Card 1 */}
          <div className=" bg-[url('https://i.pinimg.com/564x/af/a2/d1/afa2d1abd8d4a9df35b1d2308cc723db.jpg')] bg-cover bg-no-repeat flex w-64 lg:w-64 xl:w-80 flex-col justify-center items-center h-72 lg:h-72 xl:h-96 rounded-3xl hover:animate-hflip relative border border-white shadow-xl ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9792/9792988.png"
              alt="React Native Mobile App Development"
              className="w-20 h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-36 mx-auto rounded-lg mt-3 md:mt-2 hover:animate-bounce"
            />
            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mt-8 text-[#2f546c]">
              Learn with Experts
            </h3>
          </div>

          {/* Course Card 2 */}
          <div className=" bg-[url('https://i.pinimg.com/564x/af/a2/d1/afa2d1abd8d4a9df35b1d2308cc723db.jpg')] bg-cover bg-no-repeat flex w-64 lg:w-64 xl:w-80 flex-col justify-center items-center h-72 lg:h-72 xl:h-96 rounded-3xl hover:animate-hflip relative border border-white shadow-xl">
            <img
              src="https://www.pngarts.com/files/7/Distance-Learning-Online-PNG-Pic.png"
              alt="React Native Mobile App Development"
              className="w-20 h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-36 mx-auto rounded-lg mt-3 md:mt-2 hover:animate-bounce"
            />
            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mt-8 text-[#2f546c]">
              Flexible Learning
            </h3>
          </div>

          {/* Course Card 3 */}
          <div className=" bg-[url('https://i.pinimg.com/564x/af/a2/d1/afa2d1abd8d4a9df35b1d2308cc723db.jpg')] bg-cover bg-no-repeat flex w-64 lg:w-64 xl:w-80 flex-col justify-center items-center h-72 lg:h-72 xl:h-96 rounded-3xl hover:animate-hflip relative border border-white shadow-xl">
            <img
              src="https://cdn-icons-png.flaticon.com/256/7238/7238706.png"
              alt="React Native Mobile App Development"
              className="w-20 h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-36 mx-auto rounded-lg mt-3 md:mt-2 hover:animate-bounce"
            />
            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mt-8 text-[#2f546c]">
              Industrial Standards
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
