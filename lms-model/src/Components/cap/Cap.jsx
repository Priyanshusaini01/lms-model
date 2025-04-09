import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = ()=>{
    Cookies.remove('HashedCredentials');
    localStorage.clear();
    Cookies.remove()
    navigate('/login');
  }


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block">
      <div className="relative ">
        <button onClick={toggleDropdown}>
          <div className="ml-4 mr-5">
            <img
              src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7"
              alt="Profile Picture"
              className="w-14 h-14 rounded-full"
            />
          </div>
        </button>

        {isOpen && (
          <div
            className="absolute bg-white shadow-md rounded mt-5 w-48 right-5 font-semibold"
            style={{ zIndex: 1 }}
          >
            <ul>
              <li className="py-2 px-4 hover:bg-gray-100">
                <Link to={"/"}>Home</Link>
              </li>
              <Link to={"/courses"}>
                <li className="py-2 px-4 hover:bg-gray-100">Courses</li>
              </Link>
              <li className="py-2 px-4 hover:bg-gray-100">
                <a href="#">Certificates</a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100">
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 " onClick={handleLogout}>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cap;
