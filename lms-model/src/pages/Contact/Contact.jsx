import React from "react";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white text-[#002F4D] flex justify-center flex-col ">
      <div className="map-container">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10906.245541537191!2d78.1569349157127!3d26.213402973645024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c42e2f5b3641%3A0xb858d3530102d371!2sPoolstack%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sin!4v1722676673541!5m2!1sen!2sin"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="about flex justify-center items-center flex-col">
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
      </div>

      <div className="enquiryForm flex flex-col justify-center items-center ">
        <h2 className="text-4xl font-bold text-center mt-10">
          Send Us A Message
        </h2>
        <form className=" flex justify-center flex-col items-center">
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <div className="flex justify-center gap-4">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
