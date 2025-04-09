import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const Student = () => {
  return (
    <>
    <section className="container mx-auto py-12">
        <div className="p-8  mb-16 ">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center text-[#002f4d]">
            What <span className="text-[#f47004]">Our </span>Student Says
          </h2>
          <br></br>
          <div className="relative grid grid-rows-1 md:grid-cols-3 sm:grid-rows-1 lg:grid-rows-1 xl:grid-cols-3 justify-evenly gap-4 lg:gap-0 md:gap-0 ">
            {/* Course Card 1 */}
            <div className=" bg-[url('https://img.freepik.com/premium-vector/cute-pink-abstract-minimal-background-perfect-wallpaper-backdrop-postcard-background_565280-460.jpg?w=1380')] bg-cover bg-no-repeat flex  w-64 md:w-96 lg:w-64 flex-col justify-start items-center md:ml-20 h-72 rounded-tl-3xl rounded-br-3xl relative border border-gray-300 shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&s"
                alt="MaleUser"
                className="w-24 h-24 mx-auto mb-2 mt-10 mix-blend-darken"
              />
              <h3 className="text-lg font-bold">Pushpak Kumar Soni</h3>
              <p className="px-5 flex align-middle items-center mt-2">
                ODDIQ is a good learning platform where you can learn very
                easily with good teachers.
              </p>
            </div>

            {/* Course Card 2 */}
            <div className="  bg-[url('https://img.freepik.com/premium-vector/cute-pink-abstract-minimal-background-perfect-wallpaper-backdrop-postcard-background_565280-460.jpg?w=1380')] bg-cover bg-no-repeat  lg:w-64 md:w-96 w-64 flex flex-col justify-start items-center  md:ml-14 h-72 rounded-tl-3xl rounded-br-3xl relative border border-gray-300 shadow-lg">
              <img
                src="https://cdn-icons-png.flaticon.com/256/6997/6997662.png"
                alt="FemaleUser"
                className="w-24 h-24 mx-auto mb-2 mt-10 mix-blend-darken"
              />
              <h3 className="text-lg font-bold">Neha Tomar</h3>
              <p className="px-5 flex align-middle items-center mt-2">
                ODDIQ is a good learning platform where you can learn very
                easily with good teachers.
              </p>
            </div> 

            {/* Course Card 2 */}
            <div className="  bg-[url('https://img.freepik.com/premium-vector/cute-pink-abstract-minimal-background-perfect-wallpaper-backdrop-postcard-background_565280-460.jpg?w=1380')] bg-cover bg-no-repeat  lg:w-64 md:w-96 w-64 flex flex-col justify-start items-center  md:ml-8 h-72 rounded-tl-3xl rounded-br-3xl relative border border-gray-300 shadow-lg">
              <img
                src="https://cdn-icons-png.flaticon.com/256/6997/6997662.png"
                alt="FemaleUser"
                className="w-24 h-24 mx-auto mb-2 mt-10 mix-blend-darken"
              />
              <h3 className="text-lg font-bold">Esha Singh</h3>
              <p className="px-5 flex align-middle items-center mt-2">
                ODDIQ is a good learning platform where you can learn very
                easily with good teachers.
              </p>
            </div> 

             {/* For desktop */}
            <button
              className="invisible md:visible absolute top-1/2 -left-9 transform -translate-y-1/2 text-[#002f4c] font-bold py-6 px-6 rounded-full"
              onClick={() => {
                // Handle left navigation
              }}
            >
              {<FaArrowLeft size={40} />}
            </button>
            <button
              className="invisible md:visible absolute top-1/2 -right-9 transform -translate-y-1/2  text-[#002f4c] font-bold py-6 px-6 rounded-full"
              onClick={() => {
                // Handle right navigation
              }}
            >
              {<FaArrowRight size={40} />}
            </button> 

              {/* For mobile */}
            <button
              className="visible md:invisible absolute top-1/2 -left-7 transform -translate-y-1/2 text-[#002f4c] font-bold py-6 px-6 rounded-full"
              onClick={() => {
                // Handle left navigation
              }}
            >
              {<FaArrowLeft size={25} />}
            </button>
            <button
              className="visible md:invisible absolute top-1/2 -right-7 transform -translate-y-1/2  text-[#002f4c] font-bold py-6 px-6 rounded-full"
              onClick={() => {
                // Handle right navigation
              }}
            >
              {<FaArrowRight size={25} />}
            </button> 

          </div>
          
        </div>
        </section>
    </>
  );
};

export default Student;
