import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Sponser = () => {
  return (
    <div className="bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTAxLWcteF8xLWt6ZWc4MndpLmpwZw.jpg')] bg-cover bg-no-repeat p-8 flex items-center  justify-center">
      <div className="container px-6 py-5 rounded-lg shadow-lg xl:h-[47vh] xl:w-[50vw] lg:h-[70vh] lg:w-[60vw] bg-white mt-8  lg:mt-16 xl:mt-20 mb-14  hover:shadow-gray-500">
        <div className="text-center lg:mb-4 xl:mb-8">
          <h1 className="lg:text-2xl xl:text-3xl font-bold text-[#002f4c]">
            Employee and Team
            <br />
            Training Solutions
          </h1>
          <p className="text-gray-600 lg:text-sm xl:text-lg mt-2">
            Curriculum tailored to your organization, delivered with white-
            glove service and support
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-pink-200 rounded-lg  p-4 shadow-lg lg:ml-3 xl:ml-9 hover:shadow-gray-400">
            <h2 className="lg:text-base xl:text-2xl font-bold text-[#002f4c] lg:mb-4 xl:mb-4">
              Supporting Enterprises Around the Globe
            </h2>

            <div className="flex justify-start mb-4">
              <div className="bg-white rounded-lg  p-2 text-white font-bold text-xl">
                <img
                  src="https://taskcraft.in/static/media/TaskCraft_logo.841575346d8205e65592.png"
                  alt="taskCraft"
                  className="xl:w-56 xl:h-7 mb-2 xl:mt-2 lg:mt-3 lg:h-5 lg:w-44"
                />
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-black rounded-lg p-2 text-orange-500 font-bold text-xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D3DAQHxJqX8bWgahg/image-scale_127_750/image-scale_127_750/0/1687352383417/poolstack_technologies_pvt_ltd_cover?e=2147483647&v=beta&t=rP9L16kcRlygEh2K_1wEk9nNKyuswV1Vfa9yJfujHjk"
                  alt="Poolstack"
                  className="xl:w-56 xl:h-7  mb-2 xl:mt-2 lg:mt-3 lg:h-5 lg:w-44"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-24 ">
            <button className="bg-[#002f4c] hover:bg-[#f46f06] text-white lg:text-sm xl:text-base font-bold py-2 xl:px-4 lg:px-2 rounded-full h-10 xl:w-60 lg:w-48 shadow-lg hover:shadow-gray-400">
              Request A Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponser;
