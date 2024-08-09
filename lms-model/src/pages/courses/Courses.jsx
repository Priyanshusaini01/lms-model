import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import AllPrograms from "../../Components/allprograms/AllPrograms";
import { FaSearch } from "react-icons/fa";
import  Searchbar from '../../Components/search/Searchbar';
import Sponser from  '../../Components/sponser/Sponser'

const Courses = () => {
  return (
    <div className="bg-White min-h-full">
      {/* <section className="container mx-auto "> */}
      <Searchbar />

      <div className="relative mt-4 flex justify-end justify-items-center mr-9">
        <input
          type="text"
          className="w-96 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What do you want to learn?"
        />
        <FaSearch className="absolute mt-3 mr-5 flex justify-center" />
      </div>

      <div className="bg-white rounded-lg shadow-md flex justify-items-center justify-end py-9">
        <AllPrograms />

        <div className="grid grid-cols-3 gap-4 mr-52">
          {/* Course Card 1 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              React Native Development
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/02/reactJs.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              ReactJS Development
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/02/python.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              Core Python Development
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/02/core.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              Core Java
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 5 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/02/mean.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              Mean Fullstack Developer
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 6 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/02/mern.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              Mern Fullstack developer
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 7 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/02/icons8-html-5-240.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              HTML Development
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 8 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/02/icons8-css-300.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">CSS</h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 9 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/02/icons8-javascript-240.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              Javascript
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 10 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/02/angular.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">Angular</h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 11 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/03/icons8-mobile-app-100.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              Mobile App Development
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Course Card 12 */}
          <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
            <img
              src="https://oddiq.com/wp-content/uploads/2024/05/icons8-data-structures-64.png"
              alt="React Native Mobile App Development"
              className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
            />
            <h3 className="text-lg font-bold text-[#002f4c] mt-4 ">
              Data Structures & Algorithms
            </h3>
            <div className="flex gap-2 justify-evenly py-8 ">
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                <div className="flex  items-center gap-1">
                  Enroll Now <FaArrowRight />
                </div>
              </button>
              <br />
              <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
      <Sponser />
    </div>
  );
};

export default Courses;
