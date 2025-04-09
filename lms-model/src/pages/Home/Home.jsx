import React from "react";
import Student from "../../Components/Students/Student";
import Facilities from "../../Components/Facilites/Facilites";
import Courses from "../../Components/Home_Courses/Courses";
import Navbar from "../../Components/navbar/Navbar";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Stud from "../../Components/stud/Stud";
import Workspace from "../../Components/workspace/Workspace";
import Front from "../../Components/front/Front";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" inset-x-0 top-0">
        {/* <div className="hero-section">
          <img
            src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-fit sm:w-fit h-64 md:w-screen md:h-[85vh]"
          ></img>
        </div> */}

        <Front />

        <Courses />

        <hr class="w-full h-2  bg-gray-100 border-0 mb my-2 md:my-5 md:min-w-min dark:bg-[#002f4c]"></hr>

        <Workspace />

        <hr class="w-full h-2  bg-gray-100 border-0  my-2 md:my-0 md:min-w-min dark:bg-[#002f4c]"></hr>

        <div class="bg-fixed bg-cover object-cover inset-0 bg-[url('https://i.ytimg.com/vi/Y4yCZ_CxYrk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGGUgZChaMA8=&rs=AOn4CLBve-B8oiJzJuwvMMEOnIRULB924g')]">
          <Stud />
          <Facilities />
        </div>

        <div className="relative">
          <div className="flex items-start justify-center mt-14 md:mt-24 mb-24">
            {/* <img
              src="https://i.pinimg.com/originals/0c/ea/6f/0cea6fabe4d9d5256e0d1b2474927732.jpg"
              className=" h-64 w-[85vw] md:w-max md:h-[55vh] border border-black shadow-xl"
            /> */}
            <video
              className=" inset-0 h-64 w-[85vw] md:w-max md:h-[55vh] object-cover border border-black shadow-xl opacity-80"
              autoPlay
              muted
              loop
            >
              <source
                src="https://media.istockphoto.com/id/1254575202/video/remote-working-and-virtual-business-team.mp4?s=mp4-640x640-is&k=20&c=47cfzdxTn0IdTM1ldW7gm-laWz71MlJvy6apSujGHCM="
                type="video/mp4"
              />
            </video>
            <h1 class="absolute text-2xl lg:text-4xl xl:text-6xl text-[#002f4c] font-bold xl:mt-36 lg:mt-24 ">
              Enroll for more courses
            </h1>

              <button className="absolute border border-[#f2733d] bg-[#f9852a] hover:bg-[#2b6081] text-[#002f4c] text-xl lg:text-base xl::text-xl font-bold md:font-bold py-1 lg:py-1 xl::py-2 md:px-3 px-3 rounded-full mt-28 lg:mt-44 xl:mt-80">
            <Link to={'/contact'}>
            Contact Us
            </Link>
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
