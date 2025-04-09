import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AllPrograms from "../../Components/allprograms/AllPrograms";
import { FaSearch } from "react-icons/fa";
import Searchbar from "../../Components/search/Searchbar";
import Sponser from "../../Components/sponser/Sponser";
import CourseHm from "../../Components/courseHm/CourseHm";
import Training from "../../Components/training/Training";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import Card from "../../Components/Card/Card";
import { useSelector } from "react-redux";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const course = useSelector((state) => state.courses.courses);
  const publishedCourses = course.filter((item) => item.isPublished === true);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-White min-h-full inset-x-0 top-0">
      {/* <section className="container mx-auto "> */}
      <CourseHm />

      {/*for desktop*/}
      <div className="hidden md:flex flex-row gap-80 mt-12 items-center justify-center">
        <div className="flex items-start">
          <button className="bg-[#f46f06] hover:bg-gray-400 text-white text-lg font-bold py-2 px-2 rounded">
            <div className="flex gap-1 items-center">
              <CgMenuGridR size={30} color="white" />
              <select className="bg-transparent text-white hover:text-black text-lg font-bold">
                <option value="all">All Programs</option>
                <option value="program1">HTML</option>
                <option value="program2">CSS</option>
                <option value="program3">Javascript</option>
                <option value="program4">React</option>
                <option value="program5">React Native</option>
                <option value="program6">Node</option>
                <option value="program7">Angular</option>
                <option value="program8">Vue</option>
                <option value="program9">Svelte</option>
                <option value="program10">Python</option>
                <option value="program11">Django</option>
                <option value="program12">Flask</option>
                <option value="program13">Ruby</option>
                <option value="program14">Go</option>
                <option value="program15">Rust</option>
                <option value="program16">Swift</option>
                <option value="program17">Kotlin</option>
              </select>
            </div>
          </button>
        </div>

        <div className=" relative flex justify-end justify-items-center">
          <input
            type="text"
            className="w-96 rounded-md border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What do you want to learn?"
          />
          <FaSearch className="absolute mt-3 mr-6 flex justify-center" />
        </div>
      </div>

      {/*for mobile*/}
      <div className=" md:hidden flex flex-row gap-2 ml-3">
        <div className="flex items-start">
          <button className="bg-[#f46f06] hover:bg-gray-400 text-white text-base font-bold py-2 px-2 rounded">
            <div className="flex gap-1 items-center">
              <CgMenuGridR size={20} color="white" />
              All Programs
            </div>
          </button>
        </div>

        <div className=" relative flex justify-end justify-items-center">
          <input
            type="text"
            className="w-52 rounded-md border border-gray-300 px-1 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What do you want to learn?"
          />
          <FaSearch
            size={14}
            className="absolute mt-3 mr-2 flex justify-center"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md flex  justify-items-center justify-center py-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {publishedCourses.map((course) => (
            <Card course={course} key={course._id} />
          ))}
        </div>
      </div>

      {/* </section> */}
      <hr class="w-full h-2  bg-gray-100 border-0 mt-2 md:my-0 md:min-w-min dark:bg-[#002f4c]"></hr>
      <Training />
    </div>
  );
};

export default Courses;
