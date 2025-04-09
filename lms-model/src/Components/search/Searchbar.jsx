import React from "react";

const Searchbar = () => {
  return (
    <div>
      <div className="bg-[url('https://t4.ftcdn.net/jpg/02/67/52/49/360_F_267524919_wXbVQHR189pLVU06eQ85GGLnJMq2eJFR.jpg')] bg-no-repeat bg-cover text-white font-sans min-h-screen flex items-center ">
        <div className="container mx-auto px-4 flex">
          <div className="flex flex-col items-start">
            <h1 className="text-7xl font-bold mb-4">
              Courses
            </h1>
            <h2 className="text-3xl font-semibold mb-8">"We Offer"</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul>
                <li className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Industry expert trainers
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Corporate style teaching
                </li>
              </ul>
              <ul>
                <li className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Job oriented syllabus
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Real-time Project
                </li>
              </ul>
              <ul>
                <li className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Flexible timings
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Industry recognized certificate
                </li>
              </ul>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full mt-8">
              Download Brochure
            </button>
          </div>
        </div>

        <div className="flex  justify-items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  ">
            <div className="bg-white shadow-md rounded-lg p-6  hover:shadow-2xl w-72 h-72">
              {/* <div className="flex justify-center mb-4">
          <IoLocationSharp size={70}/>
          </div> */}
              <img
                src="https://pngimg.com/d/google_maps_pin_PNG57.png"
                alt="React Native Mobile App Development"
                className="w-20 h-20 mx-auto rounded-lg mb-2 mt-9 hover:animate-pulse ease-in-out"
              />
              <h2 className="text-xl font-bold mb-2 flex justify-center">
                Gwalior
              </h2>
              <p className="text-[#002f4c] text-base font-normal flex justify-center text-center items-center">
                13A Infront of Miss Hill School, Maharani Laxmi Bai Colony (MLB
                Road) Padav, Gwalior Pin code- 474002
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-2xl w-72 h-72">
              {/* <div className="flex justify-center mb-4">
          <FaPhone size={60} />
          </div> */}
              <img
                src="https://png.pngitem.com/pimgs/s/514-5144615_envelope-call-logo-black-png-transparent-png.png"
                alt="React Native Mobile App Development"
                className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-pulse ease-in-out"
              />
              <h2 className="text-xl font-bold mb-2 flex justify-center">
                Phone
              </h2>
              <p className="text-[#002f4c] text-base font-normal flex justify-center text-center items-center">
                +91 9926243845
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-2xl w-72 h-72">
              {/* <div className="flex justify-center mb-4">
          <IoMdMail size={60} />
          </div> */}
              <img
                src="https://spng.pngfind.com/pngs/s/53-534803_mail-icon-eps-file-mail-icon-png-blue.png"
                alt="React Native Mobile App Development"
                className="w-20 h-20 mx-auto rounded-lg mb-2 mt-9 hover:animate-pulse ease-in-out mix-blend-multiply"
              />
              <h2 className="text-xl font-bold mb-2 flex justify-center">
                Email
              </h2>
              <p className="text-[#002f4c] text-base font-normal flex justify-center text-center items-center">
                info@oddiq.com
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-2xl w-72 h-72">
              {/* <div className="flex justify-center mb-4 ">
          <IoHome size={60}/>
          </div> */}
              <img
                src="https://www.svgrepo.com/show/431715/home-3.svg"
                alt="React Native Mobile App Development"
                className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-pulse ease-in-out"
              />
              <h2 className="text-xl font-bold mb-2 flex justify-center">
                Delhi
              </h2>
              <p className="text-[#002f4c] text-base font-normal flex justify-center text-center items-center">
                547-1 Kapasada High Tension Line Old Delhi-Gurugram Road Near
                Asha Collection, Pin code - 110037
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Searchbar;
