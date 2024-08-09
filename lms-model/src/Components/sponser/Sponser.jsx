import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Sponser = () => {
  return (

    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 rounded-lg shadow-lg bg-white  hover:shadow-gray-500">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#002f4c]">
            Employee and Team
            <br />
            Training Solutions
          </h1>
          <p className="text-gray-600 mt-2">
            Curriculum tailored to your organization, delivered with white-
            glove service and support
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-pink-200 rounded-lg  p-10 shadow-lg  hover:shadow-gray-400">
            <h2 className="text-xl font-bold text-[#002f4c] mb-4">
              Supporting Enterprises Around the Globe
            </h2>
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-lg p-4 text-white font-bold text-xl">
              <img
               src="https://www.perfectjobconsultancy.com/assets/images/comp/comp/TaskCraft.png"
                 alt="taskCraft"
            //    className="w-40 h-24 mx-auto  mb-2 mt-9"
             />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-black rounded-lg p-4 text-orange-500 font-bold text-xl">
              <img
               src="https://media.licdn.com/dms/image/D4D3DAQHxJqX8bWgahg/image-scale_127_750/0/1687352383417/poolstack_technologies_pvt_ltd_cover?e=2147483647&v=beta&t=j2c3iH4aQsFr5xhYqbEv7B0dRd_Mp7PsTxwNc7TPi1I"
                 alt="Poolstack"
            //    className="w-40 h-24 mx-auto  mb-2 mt-9"
             />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-24 ">
            <button className="bg-[#002f4c] hover:bg-[#f46f06] text-white font-bold py-2 px-4 rounded-full h-10 w-60 shadow-lg hover:shadow-gray-400">
              Request A Free Demo
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-[#002f4c]"></hr>
    </div>
  );
};

export default Sponser;
