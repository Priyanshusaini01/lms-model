import React from "react";
import { FaUserPlus } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="bg-White shadow-md h-20 py-4 px-8 flex justify-between items-center ">
        <Link to={"/"} className="flex items-center bg-blend-color">
          <img
            src="https://oddiq.com/wp-content/uploads/2022/07/WhatsApp_Image_2024-03-07_at_11.11.08_PM-removebg-preview.png"
            alt="ODIC Logo"
            className="h-12"
          />
        </Link>
        <nav className="flex space-x-20 mx-auto font-semibold text-xl ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center text-center">
          <NavLink to={'/login'}>
            <button className="bg-[#f46f06] hover:bg-[#002f4c] text-white font-bold py-2 px-8 rounded-full">
              <div className="flex gap-2 items-center">
                <FaUserPlus /> LOGIN
              </div>
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
