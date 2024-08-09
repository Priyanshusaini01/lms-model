import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";

function AllPrograms() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block mr-40">
      <div className="relative ">
        <button
          className="bg-[#f46f06] hover:bg-gray-400 text-white font-bold py-2 px-4 rounded "
          onClick={toggleDropdown}
        >
          <div className="flex gap-2 items-center">
            <CgMenuGridR size={30} color="white" />
            All Programs
          </div>
        </button>
        {isOpen && (
          <div
            className="absolute bg-white shadow-md rounded mt-2 w-48"
            style={{ zIndex: 1 }}
          >
            <ul>
              <li className="py-2 px-4 hover:bg-gray-100">
                <a href="#">Option 1</a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100">
                <a href="#">Option 2</a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100">
                <a href="#">Option 3</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllPrograms;
