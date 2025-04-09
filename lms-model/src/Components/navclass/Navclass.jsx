import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom"
import Cap from "../cap/Cap";

const Navclass = () => {
    const [isOpen, setIsOpen] = useState(false);

    const user = {};
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const handleLogout = ()=>{
      Cookies.remove('HashedCredentials');
      localStorage.clear();
      Cookies.remove()
      navigate('/login');
    }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <div className="flex items-center">
        <Link to={'/'}>
        <img
          src="https://oddiq.com/wp-content/uploads/2022/07/WhatsApp_Image_2024-03-07_at_11.11.08_PM-removebg-preview.png"
          alt="Logo"
          className="w-28 h-8"
        />
        </Link>
        <button className="bg-[#f46f06] hover:bg-gray-400 text-white font-bold py-2 px-4 rounded hidden md:flex ml-10">
          <div className="flex gap-1 items-center">
            <CgMenuGridR size={20} color="white" />
            Classroom
          </div>
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          <div className="ml-4 mr-5">
            <img
              src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7"
              alt="Profile Picture"
              className="w-14 h-14 rounded-full"
            />
          </div>
        </button>
      </div>

      <div className="hidden md:flex items-center">
        <div className="relative flex justify-end justify-items-center mr-9 ml-8 md:ml-0">
          <input
            type="text"
            className="w-96 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What do you want to learn?"
          />
          <FaSearch className="absolute mt-3 mr-5 flex justify-center" />
        </div>
        <Cap />
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 mt-80 flex bg-white shadow-md rounded-md lg:hidden w-full z-30`}
      >
        <nav className="p-4">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#">Home</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#">Courses</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#">Certificates</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#">Profile</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100" onClick={handleLogout}>
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Navclass
