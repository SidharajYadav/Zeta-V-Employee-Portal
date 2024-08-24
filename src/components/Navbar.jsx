import React from 'react';

const Navbar = ({ setActiveComponent }) => {
  return (
    <div className="w-full sm:w-1/6 md:w-1/4 lg:w-1/6 h-screen bg-gray-800 text-white p-4 md:p-12">
      <h2 className="text-2xl font-bold mb-4">Employee Management</h2>
      <ul>
        <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('role')}>
          Role Management
        </li>
        <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('user')}>
          User Management
        </li>
        <li className="mb-2 cursor-pointer" onClick={() => setActiveComponent('notification')}>
          Notification
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
