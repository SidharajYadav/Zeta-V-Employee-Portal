// import React from 'react';

// const Navbar = ({ setActiveComponent }) => {
//   return (
//     <div className="w-full sm:w-1/6 md:w-1/4 lg:w-1/6 h-screen bg-gray-800 text-white p-4 md:p-12">
//       <h2 className="text-2xl font-bold mb-4">Employee Management</h2>
//       <ul>
//         <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('role')}>
//           Role Management
//         </li>
//         <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('user')}>
//           User Management
//         </li>
//         <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('notification')}>
//           Member Mangement
//         </li>
//         <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('notification')}>
//           Tenant Configuration
//         </li>
//         <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('notification')}>
//           Push Notification
//         </li>
//         <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('notification')}>
//           Campaign Mangement
//         </li>
//         <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('notification')}>
//           Reports
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { FaUsers, FaCogs, FaBell, FaPaperPlane, FaFileAlt, FaChartLine } from 'react-icons/fa';
import { TfiSettings } from 'react-icons/tfi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { BsPersonPlus } from 'react-icons/bs';
import { RxClipboard } from 'react-icons/rx';

const Navbar = ({ setActiveComponent, activeComponent }) => {
  // Helper function to determine active class
  const getActiveClass = (component) => {
    return activeComponent === component ? 'bg-gray-700 text-gray-100' : '';
  };

  return (
    <div className="w-full sm:w-1/6 md:w-1/4 lg:w-1/6 h-screen bg-gray-800 text-white p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">Employee Management</h2>
      <ul className="space-y-2">
        <li
          className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass('role')}`}
          onClick={() => setActiveComponent('role')}
        >
          <BsPersonPlus className="mr-2 text-xl" />
          <span className="hidden sm:inline">Role Management</span>
        </li>
        <li
          className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass('user')}`}
          onClick={() => setActiveComponent('user')}
        >
          <GoPerson className="mr-2 text-xl" />
          <span className="hidden sm:inline">User Management</span>
        </li>
        <li
          className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass('push')}`}
          onClick={() => setActiveComponent('push')}
        >
          <RiEmotionHappyLine className="mr-2 text-xl" />
          <span className="hidden sm:inline">Member Management</span>
        </li>
        <li
          className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass('tenant')}`}
          onClick={() => setActiveComponent('tenant')}
        >
          <MdOutlineLocationOn className="mr-2 text-xl" />
          <span className="hidden sm:inline">Tenant Configuration</span>
        </li>
        <li
          className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass('notification')}`}
          onClick={() => setActiveComponent('notification')}
        >
          <FaPaperPlane className="mr-2 text-xl" />
          <span className="hidden sm:inline">Push Notification</span>
        </li>
        <li
          className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass('campaign')}`}
          onClick={() => setActiveComponent('campaign')}
        >
          <RxClipboard className="mr-2 text-xl" />
          <span className="hidden sm:inline">Campaign Management</span>
        </li>
        <li
          className={`flex items-center cursor-pointer p-2 rounded ${getActiveClass('reports')}`}
          onClick={() => setActiveComponent('reports')}
        >
          <FaFileAlt className="mr-2 text-xl" />
          <span className="hidden sm:inline">Reports</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
