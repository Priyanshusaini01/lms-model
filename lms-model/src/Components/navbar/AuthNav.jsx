import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const user = useSelector((state) => state.currentUser.User);
  const courses = localStorage.getItem("user_Course");
  // console.log(user.enrolledCourses ? true : false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate("/login");
    localStorage.clear();
    Cookies.remove();
  };
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img
            src="https://oddiq.com/wp-content/uploads/2022/07/WhatsApp_Image_2024-03-07_at_11.11.08_PM-removebg-preview.png"
            alt="Logo"
            className="w-28 h-8"
          />
          <h1 className="ml-4 text-xl font-bold"></h1>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-800 text-xl font-semibold">
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
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 hidden lg:block text-white font-bold py-2 px-4 rounded">
          <div className="flex flex-row justify-center items-center gap-2">
            <NavLink to="/signup">
              <span>SignUp</span>
            </NavLink>
            <FaUserPlus />
          </div>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute right-0 mt-80 flex bg-white shadow-md rounded-md w-full z-30 lg:hidden md:hidden`}
        >
          <nav className="p-4">
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
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              <div className="flex flex-row justify-center items-center gap-2">
                <NavLink to="/signup">
                  <span>SignUp</span>
                </NavLink>
                <FaUserPlus />
              </div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AuthNav;
