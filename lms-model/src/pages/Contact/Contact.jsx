import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Name:", name);
    console.log("Phone:", number);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="bg-white text-[#002F4D] flex justify-center flex-col inset-x-0 top-0 ">
      <div className="">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10906.245541537191!2d78.1569349157127!3d26.213402973645024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c42e2f5b3641%3A0xb858d3530102d371!2sPoolstack%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sin!4v1722676673541!5m2!1sen!2sin"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* <div className="about flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold">Keep In Touch With Us.</h1>
        <div className="addressContainer flex flex-col  ">
          <div className="gwl flex flex-row items-center gap-4 mt-5">
            <FaLocationDot />
            <p>
              Gwalior - 13A Infront of Miss Hill School , Maharani Laxmi Bai
              Colony (MLB Road ) Padav Gwalior Pin code- 474002
            </p>
          </div>

          <div className="del flex flex-row  items-center gap-4 mt-5">
            <FaLocationDot />
            <p>
              Delhi - 547-1 Kapasada High Tension Line Old Delhi -Gurugram Road
              Near Asha Collection , Pin code - 110037
            </p>
          </div>

          <div className="phn flex flex-row  items-center gap-4 mt-5">
            <FaPhoneAlt />
            <span>+91 9926243845</span>
          </div>

          <div className="mail flex flex-row  items-center gap-4 mt-5">
            <IoMail />
            <span>info@oddiq.com</span>
          </div>
        </div>
      </div> */}

      {/*Keep in touch*/}
      <div className=" mx-auto p-8  ">
        <h1 className="text-4xl font-bold text-center mt-4 mb-8">
          Keep In Touch With Us
        </h1>

        <div className="flex  justify-items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:gap-5 gap-4  lg:gap-4 ">
            <div className="bg-white shadow-md rounded-lg p-4  hover:shadow-2xl flex w-64 lg:w-56 xl:w-72 h-72 lg:h-80 xl:h-72  flex-col justify-start items-center">
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

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-2xl flex w-64 lg:w-56 xl:w-72 h-72 lg:h-80 xl:h-72 flex-col justify-start items-center">
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

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-2xl flex w-64 lg:w-56 xl:w-72 h-72 lg:h-80 xl:h-72 flex-col justify-start items-center">
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

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-2xl flex w-64 lg:w-56 xl:w-72 h-72 lg:h-80 xl:h-72 flex-col justify-start items-center">
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

      {/*Contact us form*/}
      <div className="bg-[#002f4c] mx-auto xl:p-8 lg:p-8 p-6 mb-9 ">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 xl:p-8 lg:p-8 ">

      <div className="mt-9">
          <img
            src="https://oddiq.com/wp-content/uploads/2024/02/Untitled-design-1.png"
            alt="React Native Mobile App Development"
            className="xl:w-[32vw] xl:h-[52vh] lg:w-[35vw] lg:h-[52vh] w-[25xw] h-[35vh] mx-auto rounded-lg mb-2 animate-spin-slow"
          />
      </div>

        <div className="bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTAxLWcteF8xLWt6ZWc4MndpLmpwZw.jpg')] bg-cover bg-no-repeat hover:shadow-2xl shadow-md mx-auto p-8 w-[80vw] lg:w-[40vw] xl:w-[30vw] mt-7 mb-9">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            Send Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              placeholder="Phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 xl:h-40 lg:h-24 resize-none focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="bg-[#002f4c] hover:bg-[#f46f06] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              SEND
            </button>
          </form>
        </div>

      </div>
      </div>

    </div>
  );
};

export default Contact;
