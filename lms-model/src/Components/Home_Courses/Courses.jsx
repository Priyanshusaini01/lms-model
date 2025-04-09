import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <section className="container mx-auto py-16">
        <div className=" p-8 ">
          <h2 className="text-5xl md:text-6xl font-bold mb-5 md:mb-14 text-center text-[#002f4d]">
            <span className="text-[#f47004]">Courses</span> We offer
          </h2>
          <br></br>
          <div className="flex flex-row justify-evenly flex-wrap gap-5">
            {/* Course Card 1 */}
            <div className=" bg-[#fbf5f5] flex w-64 lg:w-64 xl:w-80 flex-col justify-center items-center h-72 lg:h-72 xl:h-96 rounded-tl-3xl rounded-br-3xl relative border border-gray-200 shadow-lg hover:shadow-2xl">
              <h3 className="text-lg lg:text-lg xl:text-xl font-bold absolute top-8 text-[#2f546c]">
                Mobile App Development
              </h3>
              <img
                src="https://oddiq.com/wp-content/uploads/2024/03/icons8-mobile-app-100.png"
                alt="React Native Mobile App Development"
                className="w-20 h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-36 mx-auto rounded-lg mb-2 mt-14 md:mt-24 hover:animate-spin"
              />
              <button className="bg-[#f9852a] text-[#1f3948] font-bold text-base lg:text-base xl:text-2xl py-2 px-4 mt-5  lg:px-4  xl:px-6 rounded-full lg:mt-5 xl:mt-9">
                View Details
              </button>
            </div>

             
              {/* Course Card 2 */}
            <div className=" bg-[#fbf5f5] flex w-64 lg:w-64 xl:w-80 flex-col justify-center items-center h-72 lg:h-72 xl:h-96 rounded-tl-3xl rounded-br-3xl relative border border-gray-200 shadow-lg hover:shadow-2xl">
              <h3 className="text-lg lg:text-lg xl:text-xl font-bold absolute top-8 text-[#2f546c]">
              ReactJs Development
              </h3>
              <img
                src="https://oddiq.com/wp-content/uploads/2024/02/reactJs.png"
                alt="React Native Mobile App Development"
                className="w-20 h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-36 mx-auto rounded-lg mb-2 mt-14 md:mt-24 hover:animate-spin"
              />
              <button className="bg-[#f9852a] text-[#1f3948] font-bold text-base lg:text-base xl:text-2xl py-2 px-4 mt-5  lg:px-4  xl:px-6 rounded-full lg:mt-5 xl:mt-9">
                View Details
              </button>
            </div>


               {/* Course Card 3 */}
            <div className=" bg-[#fbf5f5] flex w-64 lg:w-64 xl:w-80 flex-col justify-center items-center h-72 lg:h-72 xl:h-96 rounded-tl-3xl rounded-br-3xl relative border border-gray-200 shadow-lg hover:shadow-2xl">
              <h3 className="text-lg lg:text-lg xl:text-xl font-bold absolute top-8 text-[#2f546c]">
              Core Java
              </h3>
              <img
                src="https://oddiq.com/wp-content/uploads/2024/02/core.png"
                alt="React Native Mobile App Development"
                className="w-20 h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-36 mx-auto rounded-lg mb-2 mt-14 md:mt-24 hover:animate-spin"
              />
              <button className="bg-[#f9852a] text-[#1f3948] font-bold text-base lg:text-base xl:text-2xl py-2 px-4 mt-5  lg:px-4  xl:px-6 rounded-full lg:mt-5 xl:mt-9">
                View Details
              </button>
            </div>

      
            
          </div>
          <br></br>
          <div className="flex items-center justify-center mt-3 md:mt-14 ">
            <Link to= {'/courses'}>
            <button className="bg-[#002f4d] hover:bg-[#2b6081] text-white text-xl md:text-2xl font-bold py-2 md:px-6 px-4 rounded-full mt-2 md:mt-4">
              See more ...
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
