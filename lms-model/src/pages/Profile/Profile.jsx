import React, { useState } from "react";
import Card from "../../Components/Course_Card/Card";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.currentUser.User); //
  const userEnrolledCourse = user.enrolledCourses;
  const courses = useSelector((state) => state.courses.courses);
  const filteredCourses = courses.filter((course) =>
    userEnrolledCourse.includes(course._id)
  );

  const [userDetails, setUserDetails] = useState({ name: "", email: "" });

  const handleNameChange = (e) => {
    setUserDetails({ ...userDetails, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUserDetails({ ...userDetails, email: e.target.value });
  };

  return (
    <div className="max-w-xl mx-auto p-1 pt-2 md:p-6 lg:p-5 xl:p-8 bg-white rounded shadow-md">
      <div className="profile-header flex  sm:text-justify justify-center mb-4">
        <div className="top flex flex-row flex-wrap justify-center items-center">
          <img
            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="John Doe"
            className="w-24 h-24 rounded-full mr-4 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
          />
          <div className="flex flex-col justify-center items-center flex-wrap">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
              John Doe
            </h1>
            <p className="text-gray-600 md:text-lg lg:text-xl xl:text-2xl">
              johndoe@example.com
            </p>
          </div>
        </div>

        <div className="profile-details mb-6 flex flex-col justify-center items-center flex-wrap m-3 p-5">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl mb-2">
            About Me
          </h2>
          <p className="text-gray-600 md:text-lg lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
      </div>

      <div className="profile-section mb-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl mb-2">
          Courses
        </h2>
        <div className="enrolled flex flex-wrap flex-row justify-center items-center gap-4">
          {filteredCourses.map((courseId) => (
            <Card key={courseId._id} />
          ))}
        </div>
      </div>

      <div className="profile-section mb-6 flex flex-col justify-center items-center w-full">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl mb-2">
          Achievements
        </h2>
        <ul className="list-none mb-0">
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:text-blue-900">
              Achievement 1: Completed Course 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:text-blue-900">
              Achievement 2: Completed Course 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:text-blue-900">
              Achievement 3: Completed Course 3
            </a>
          </li>
        </ul>
      </div>

      <div className="profile-section w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl mb-2">
          Settings
        </h2>
        
        <form>
          <label className=" mb-2 flex flex-row justify-center items-center">
            Name:
            <input
              placeholder="Enter name"
              type="text"
              value={userDetails.name}
              onChange={handleNameChange}
              className="w-full p-2 pl-10 text-sm text-gray-700 md:text-base lg:text-lg xl:text-xl"
            />
          </label>
          <label className=" mb-2 flex flex-row justify-center items-center">
            Email:
            <input
              placeholder="Enter email"
              type="email"
              onChange={handleEmailChange}
              value={userDetails.email}
              className="w-full p-2 pl-10 text-sm text-gray-700 md:text-base lg:text-lg xl:text-xl"
            />
          </label>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8 xl:py-5 xl:px-10"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
