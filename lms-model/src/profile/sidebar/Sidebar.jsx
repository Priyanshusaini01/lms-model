import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineContacts } from "react-icons/md";
import { MdOutlineReceipt } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdPieChartOutline } from "react-icons/md";
import { MdOutlineTimeline } from "react-icons/md";
import { IoMapOutline } from "react-icons/io5";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <li className="flex items-center py-2 pl-4 hover:bg-gray-100">
      <Link to={to} className="flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 overflow-y-auto">
      <div className="flex justify-between items-center py-4 px-4">
        <h2 className="text-2xl font-bold text-white">ADMINIS</h2>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-gray-500 hover:text-gray-800">
        <IoMenu />
        </button>
      </div>
      {!isCollapsed && (
        <div className="px-4 py-2">
          <img src="../../assets/User2.jpg" alt="profile-user" width="100px" height="100px" className="rounded-full cursor-pointer" />
          <h2 className="text-lg font-bold text-white">Sana</h2>
          <p className="text-sm text-green-500">Oddiq Admin</p>
        </div>
      )}
      <ul className="px-4 py-2">
        <Item title="Dashboard" to="/" icon={<MdOutlineHome />} selected={selected} setSelected={setSelected} />
        <h3 className="text-sm font-bold text-gray-500">Data</h3>
        <Item title="Manage Team" to="/team" icon={<HiOutlineUsers />} selected={selected} setSelected={setSelected} />
        <Item title="Contacts Information" to="/contacts" icon={<MdOutlineContacts />} selected={selected} setSelected={setSelected} />
        <Item title="Invoices Balances" to="/invoices" icon={<MdOutlineReceipt />} selected={selected} setSelected={setSelected} />
        <h3 className="text-sm font-bold text-gray-500">Pages</h3>
        <Item title="Profile Form" to="/form" icon={<FaRegUser />} selected={selected} setSelected={setSelected} />
        <Item title="Calendar" to="/calendar" icon={<IoCalendarOutline />} selected={selected} setSelected={setSelected} />
        <Item title="FAQ Page" to="/faq" icon={<MdHelpOutline />} selected={selected} setSelected={setSelected} />
        <h3 className="text-sm font-bold text-gray-500">Charts</h3>
        <Item title="Bar Chart" to="/bar" icon={<BiSolidBarChartAlt2 />} selected={selected} setSelected={setSelected} />
        <Item title="Pie Chart" to="/pie" icon={<MdPieChartOutline />} selected={selected} setSelected={setSelected} />
        <Item title="Line Chart" to="/line" icon={<MdOutlineTimeline />} selected={selected} setSelected={setSelected} />
        <Item title="Geography Chart" to="/geography" icon={<IoMapOutline />} selected={selected} setSelected={setSelected} />
      </ul>
    </div>
  );
};

export default Sidebar;