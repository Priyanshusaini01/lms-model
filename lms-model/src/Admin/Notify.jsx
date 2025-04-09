import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Notify = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("HashedCredentials");
    localStorage.clear();
    Cookies.remove();
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block">
      <div className="relative ">
        <button onClick={toggleDropdown}>
          <div className="ml-4 mr-5">
            <FaBell size={30} />
          </div>
        </button>

        {isOpen && (
          <div
            className="absolute bg-white shadow-md rounded mt-5 w-48 right-20 font-semibold"
            style={{ zIndex: 1 }}
          >
            <div className="bg-cream-100 border-2 border-blue-500 rounded-lg p-4 w-80">
              <h2 className="text-center font-semibold mb-4">Notification</h2>
              <div className="space-y-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src="https://placehold.co/50x50"
                      alt="Profile picture of a person"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <p className="text-xs text-gray-500">1m ago.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notify;
