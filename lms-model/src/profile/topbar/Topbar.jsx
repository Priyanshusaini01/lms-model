import React, { useContext } from 'react';
import { ColorModeContext } from '../ColorModeContext';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Topbar = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <div className="flex justify-between p-2">
      {/* SEARCH BAR */}
      <div className="flex bg-primary-400 border border-black rounded-md">
        <input type="search" placeholder="Search" className="ml-2 flex-1" />
        <button type="button" className="p-1">
        <FaSearch />
        </button>
      </div>

      {/* ICONS */}
      <div className="flex">
        <button onClick={colorMode.toggleColorMode} className="p-1">
          {colorMode.mode === "dark" ? (
            <MdOutlineDarkMode />
          ) : (
            <MdOutlineLightMode />
          )}
        </button>
        <button className="p-1">
        <IoMdNotificationsOutline />
        </button>
        <button className="p-1">
        <IoSettingsOutline />
        </button>
        <button className="p-1">
        <FaRegUser />
        </button>
      </div>
    </div>
  );
};

export default Topbar;