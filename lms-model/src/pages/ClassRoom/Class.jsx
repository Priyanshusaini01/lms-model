import React, { useEffect, useState } from "react";
import { IoAlarm } from "react-icons/io5";
import { IoMdAlarm } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";

function Class() {
  const user = useSelector((state) => state.currentUser.User); //

  const course = useSelector((state) => state.courses.courses);
  const publishedCourses = course.filter((item) => item.isPublished === true);
  // console.log(publishedCourses);

  const [myCourses, setMyCourses] = useState([]);
  const userName = user.name;
  console.log(publishedCourses);

  useEffect(() => {
    setMyCourses(user.enrolledCourses);
  }, [user]); // Add user as a dependency to ensure the effect runs when user changes

  return (
    <div>
      {/* Start Enrolled courses */}
      <div className="container mx-auto px-4 py-8 p-4 md:p-10 lg:p-8 mb-20 md:mb-48 ">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 text-center mt-7 text-[#002f4d] ">
          Welcome <span className="text-[#f47004]">{userName} </span> continue learning
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-20 text-center text-[#002f4d]">
          My Enrolled Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-40 ">
          <div className="grid grid-rows-1 md:grid-rows-2 gap-8 justify-start ">
            {myCourses &&
              myCourses.map((course, index) => (
                // Rest of the code remains the same
                <div
                  className="grid grid-cols-2 md:grid-cols-2 gap-5 md:gap-8 rounded-3xl shadow-lg bg-[#fcfcfc] hover:shadow-[gray] border border-black"
                  key={index}
                >
                  <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-3xl p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out border border-black">
                    <img
                      src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png"
                      alt="React Native Mobile App Development"
                      className=" h-[21] w-24 md:h-28 md:w-32 mx-auto rounded-lg mb-2 mt-8 md:mt-24 hover:animate-spin "
                    />
                    <h3 className="text-lg md:text-xl font-bold text-[#002f4c] mt-3 md:mt-9">
                      {course.title}
                    </h3>
                  </div>

                  <div className="mr-3">
                    <h3 className="text-xl md:text-2xl  font-serif mb-3 md:mb-8 mt-3 md:mt-9 hover:text-orange">
                      <Link
                        to={`/courses/${course.title}`}
                        className="hover:text-orange"
                      >
                        {course.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-2 md:mb-6 text-base md:text-xl font-sans">
                      {course.difficulty} - 6 Hrs
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 md:h-4">
                      <div
                        className="bg-blue-500 rounded-full h-2 md:h-4"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <p className="text-gray-500 mt-3 md:mt-4">30%</p>
                    <p className="text-gray-600 mt-4 md:mt-10 mb-2 md:mb-5 font-bold text-lg md:text-xl">
                      {course.author}
                    </p>
                  </div>
                </div>
              ))}

            <div className="grid grid-cols-2 md:grid-cols-2 gap-5 md:gap-8 rounded-3xl shadow-lg bg-[#fcfcfc] hover:shadow-[gray] border border-black  ">
              <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-3xl p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out border border-black">
                <img
                  src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png"
                  alt="React Native Mobile App Development"
                  className=" h-[21] w-24 md:h-28 md:w-32 mx-auto rounded-lg mb-2 mt-8 md:mt-24 hover:animate-spin "
                />
                <h3 className="text-lg md:text-xl font-bold text-[#002f4c] mt-3 md:mt-9">
                  React Native Development
                </h3>
              </div>

              <div className="mr-3">
                <h3 className="text-xl md:text-2xl  font-serif mb-3 md:mb-8 mt-3 md:mt-9">
                  React Native Mobile App Development
                </h3>
                <p className="text-gray-600 mb-2 md:mb-6 text-base md:text-xl font-sans">
                  Advanced - 6 Hrs
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 md:h-4">
                  <div
                    className="bg-blue-500 rounded-full h-2 md:h-4"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <p className="text-gray-500 mt-3 md:mt-4">30%</p>
                <p className="text-gray-600 mt-4 md:mt-10 mb-2 md:mb-5 font-bold text-lg md:text-xl">
                  By Jason Dyon
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-0 md:mt-8 rounded-lg shadow-md  bg-[#ede8e3] shadow-[gray] p-6 w-80 md:w-96 h-max  md:ml-72 ">
            <div className="flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:py-2 md:px-2 rounded inline-flex items-center justify-center gap-2 ">
                <IoAlarm size={40} />
                <span className=" text-xl md:text-2xl font-bold mb-2 text-[#002f4d] ">
                  Schedule learning time
                </span>
              </h3>
            </div>

            <p className="text-[#002f4d] mt-4 text-lg md:text-2xl font-serif flex items-center justify-center ml-5 md:ml-3 ">
              Learning a little each day adds up. Research shows that students
              who make learning a habit are more likely to reach their goals.
              Set time aside to learn and get reminders using your learning
              scheduler.
            </p>

            <div className="flex items-center justify-center mt-6 md:mt-6">
              <button className="bg-[#002f4d] hover:bg-[#2b6081] text-white text-xl md:text-2xl font-bold py-1 md:py-2 md:px-6 px-3 rounded-full md:mt-4">
                Get Started
              </button>
            </div>

            <div className="flex items-center justify-center mt-5 md:mt-20 md:mb-3 ">
              <button className="bg-gray-400 hover:bg-gray-400 text-gray-800 text-xl md:text-2xl font-bold py-2 md:py-2 md:px-4 px-3 rounded inline-flex items-center gap-2">
                <IoMdAlarm size={20} />
                <span>Dismiss</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Completed Enrolled courses */}

      <hr className="w-full h-2  bg-gray-100 border-0 my-2 md:my-10 md:min-w-min dark:bg-[#002f4c]"></hr>

      <div className="container mx-auto px-4 py-8 p-4 md:p-10 lg:p-8 ">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-2 md:mb-6 text-center mt-4 text-[#002f4d] ">
          Enroll In More Courses
        </h1>

        {/* more courses */}

        <div className="flex  justify-items-center justify-center py-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {publishedCourses.map((course) => (
              <Card course={course} key={course._id} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-3 md:mt-4 mb-5">
          <Link to={'/courses'}>
            <button className="bg-[#002f4d] hover:bg-[#2b6081] text-white text-xl md:text-2xl font-bold py-2 md:px-6 px-4 rounded-full mt-2 md:mt-4">
              See more ...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Class;
