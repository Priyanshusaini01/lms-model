import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-pink-100 h-full flex  items-center justify-center">
          <div className=" bg-white px-12 py-10  shadow-md w-screen ">
            <div className=" mb-10">
              <img
                src="https://oddiq.com/wp-content/uploads/2022/07/WhatsApp_Image_2024-03-07_at_11.11.08_PM-removebg-preview.png"
                alt="ODIC Logo"
                className="h-10"
              />
            </div>

            <div className="info ">
              <div className="flex gap-64 mb-6 text-[#002f4c] flex-wrap">
                <div className="gap-9">
                  <h2 className="text-2xl font-semibold mb-3">Quick Links</h2>
                  <ul className="list-disc pl-5 font-semibold">
                    <li>All Courses</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Categories</h2>
                  <ul className="list-disc pl-5 font-semibold">
                    <li>Angular</li>
                    <li>MEAN</li>
                    <li>MERN</li>
                    <li>React JS</li>
                    <li>React Native</li>
                    <li>Python</li>
                    <li>Ruby On Rails</li>
                    <li>Mobile App Development</li>
                    <li>Manual Software Testing</li>
                    <li>Automation Testing</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Companies</h2>
                  <ul className="list-disc pl-5 font-semibold">
                    <li>Training</li>
                    <li>HR Services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
                  <div className="flex gap-2 mb-4">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaFacebook size={30} color="#1d4ed8" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <AiFillTwitterCircle size={30} color="#06b6d4" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaYoutube size={30} color="red" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={30} color="#0284c7" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaInstagramSquare size={30} color="#E4405F" />
                    </a>
                  </div>
                  <div className="flex items-center mb-2 font-semibold">
                    <i className="fas fa-phone-alt text-gray-500 text-xl"></i>
                    <span className="ml-2 flex gap-2 items-center  ">
                      {" "}
                      <FaPhoneVolume size={20} color="#f46f06" /> +91 99262
                      43845
                    </span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <i className="fas fa-envelope text-gray-500 text-xl"></i>
                    <span className="ml-2 flex gap-2 items-center ">
                      <MdEmail size={30} color="#f46f06" />
                      info@oddiq.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mb-10"></div>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="border border-gray-300 px-4 py-2 rounded-full w-1/2 mr-4"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="flex h-10 w-full items-center justify-center bg-[#002f4c] px-4 text-sm font-medium text-[#f8f6f5] sm:px-6 lg:px-8 ">
          © 2024 ODDIQ. All Right Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
