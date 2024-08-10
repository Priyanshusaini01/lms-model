import React from "react";
import Student from "../../Components/Students/Student";
import Facilities from "../../Components/Facilites/Facilites";
import Courses from "../../Components/Home_Courses/Courses";
import Navbar from "../../Components/navbar/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="">
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-[85vh]"
        ></img>
      </div>

      <Courses/>

      <div className="workplace">
        <h2 className="text-6xl font-bold mb-4 text-center text-[#002f4d]">
          <span className="text-[#f47004]">Our</span> Workspace
        </h2>
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2159023891/display_1500/stock-photo-happy-businesspeople-laughing-while-collaborating-on-a-new-project-in-an-office-group-of-diverse-2159023891.jpg"
          className="w-full pr-64 pl-64 h-screen"
        ></img>
      </div>

      <Student />
      <Facilities />

      <div className="enroll">
        <img
          src="https://s3.envato.com/files/333851113/106_E39A4307-1.jpg"
          className="w-full pr-64 pl-64 mt-28"
          style={{ height: "85vh" }}
        ></img>
      </div>
    </div>

    </>
  );
};

export default Home;
