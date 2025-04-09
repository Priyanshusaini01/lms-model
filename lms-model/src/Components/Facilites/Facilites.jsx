import React, { useState, useEffect } from "react";

const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 10);
    }, 3000); // autoplay every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="facilites bg-[#fee5e8] p-6">
        <div className=" ">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 md:mb-12 text-center text-[#002f4d]">
            <span className="text-[#f47004]">Our </span>Facilities
          </h2>
        </div>

        <div className="grid grid-cols-3 overflow-y-scroll scroll-pt-24 xl:h-48 h-36 lg:h-40 xl:gap-10 lg:gap-6 gap-4">
          {/*Fact 1*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 0 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2932/2932724.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              Demo Classes
            </p>
          </div>

          {/*Fact 2*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 1 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6047/6047933.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              Job Oriented Courses
            </p>
          </div>

          {/*Fact 3*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 2 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3616/3616642.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              Technical Support
            </p>
          </div>

          {/*Fact 4*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 3 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://www.freeiconspng.com/thumbs/classes-icon/classes-icon-17.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              Backup Classes
            </p>
          </div>

          {/*Fact 5*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 4 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/7005/7005200.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              HR Sessions
            </p>
          </div>

          {/*Fact 6*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 5 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/306/306325.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              Real Time Projects
            </p>
          </div>

          {/*Fact 7*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 6 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/3481/3481115.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              Evaluation Process
            </p>
          </div>

          {/*Fact 8*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 7 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1462/1462434.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              Interview Tips
            </p>
          </div>

          {/*Fact 9*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 8 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/430/430536.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              Placement Support
            </p>
          </div>

          {/*Fact 10*/}
          <div
            className={`flex flex-col justify-center items-center w-full flex-shrink-0 ${
              activeIndex === 9 ? "hover:animate-fade-in" : "hover:animate-fade-out"
            }`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/8744/8744991.png"
              className="h-16 md:h-28"
            ></img>
            <p className="font-bold text-sm md:text-2xl mt-4 ml-6 md:ml-0">
              Dedicated Trainers
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Facilities;
