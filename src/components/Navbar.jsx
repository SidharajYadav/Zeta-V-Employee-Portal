import React, { useState } from "react";
import {
  FaUsers,
  FaCogs,
  FaBell,
  FaPaperPlane,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";
import { TfiSettings } from "react-icons/tfi";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { RiEmotionHappyLine } from "react-icons/ri";
import { BsPersonPlus } from "react-icons/bs";
import { RxClipboard } from "react-icons/rx";
import { FaArrowUpFromBracket, FaBars } from "react-icons/fa6";
import Logo from "../assets/image/zetalogo.jpeg";

const Navbar = ({ setActiveComponent, activeComponent }) => {
  // State to control the visibility of the Navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Helper function to determine active class
  const getActiveClass = (component) => {
    return activeComponent === component ? "bg-gray-700 text-gray-100" : "";
  };

  return (
    <div
      className="w-full sm:w-full md:w-1/5 lg:w-1/8 bg-gray-800 text-white p-4 md:p-6 lg:p-8 flex flex-col
      h-18 sm:h-16 lg:h-screen md:h-full"
    >
      {/* Toggle button for small devices */}
      <div className="flex items-center justify-between mb-2 lg:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
        </button>
        <img
          src={Logo}
          alt="Logo"
          className="w-12 h-12 lg:w-20 lg:h-20 border border-amber-50 rounded-md"
        />
      </div>

      {/* Logo and text for larger devices */}
      <div className="hidden lg:flex items-center mb-2">
        <img
          src={Logo}
          alt="Logo"
          className="w-16 h-16 lg:w-20 lg:h-20 border border-amber-50 rounded-md lg:mr-4 md:ml-2 lg:ml-20"
        />
      </div>
      <h6 className="text-sm font-sm lg:text-md font-sans mb-8 md:ml-9 lg:ml-12">
        Employee Management
      </h6>

      {/* Navbar content */}
      <div
        className={`flex-grow ${
          isNavOpen ? "block" : "hidden"
        } lg:block overflow-y-auto`}
      >
        <ul className="space-y-2">
          <li
            className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass(
              "role"
            )}`}
            onClick={() => setActiveComponent("role")}
          >
            <BsPersonPlus className="mr-2 text-xl" />
            <span className="hidden sm:inline">Role Management</span>
          </li>
          <li
            className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass(
              "user"
            )}`}
            onClick={() => setActiveComponent("user")}
          >
            <GoPerson className="mr-2 text-xl" />
            <span className="hidden sm:inline">User Management</span>
          </li>
          <li
            className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass(
              "push"
            )}`}
            onClick={() => setActiveComponent("push")}
          >
            <RiEmotionHappyLine className="mr-2 text-xl" />
            <span className="hidden sm:inline">Member Management</span>
          </li>
          <li
            className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass(
              "tenant"
            )}`}
            onClick={() => setActiveComponent("tenant")}
          >
            <MdOutlineLocationOn className="mr-2 text-xl" />
            <span className="hidden sm:inline">Tenant Configuration</span>
          </li>
          <li
            className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass(
              "notification"
            )}`}
            onClick={() => setActiveComponent("notification")}
          >
            <FaArrowUpFromBracket className="mr-2 text-xl" />
            <span className="hidden sm:inline">Push Notification</span>
          </li>
          <li
            className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass(
              "campaign"
            )}`}
            onClick={() => setActiveComponent("campaign")}
          >
            <RxClipboard className="mr-2 text-xl" />
            <span className="hidden sm:inline">Campaign Management</span>
          </li>
          <li
            className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass(
              "reports"
            )}`}
            onClick={() => setActiveComponent("reports")}
          >
            <FaFileAlt className="mr-2 text-xl" />
            <span className="hidden sm:inline">Reports</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
