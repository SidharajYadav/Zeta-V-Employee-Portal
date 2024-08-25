import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaUser,FaBars  } from 'react-icons/fa';
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="bg-gray-100 text-black p-4 flex justify-between items-center shadow-md">
        <FaBars />
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-gray-600 md:hidden">
          <TfiMenu size={24} />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-gray-600">
          <FaSearch size={20} />
        </button>
        <button className="text-black hover:text-gray-600">
          <FaBell size={20} />
        </button>
        <div className="flex items-center space-x-2">
          <span className="hidden md:inline text-black">Hi, User</span>
          <FaUser className="text-black" size={20} />
        </div>
      </div>
    </div>
  );
};

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { name: 'Admin', permissions: { read: true, write: true } },
    { name: 'User', permissions: { read: true, write: false } }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newRole, setNewRole] = useState('');
  const [permissions, setPermissions] = useState({
    read: false,
    write: false,
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Load roles from localStorage on component mount
    const savedRoles = JSON.parse(localStorage.getItem('roles')) || [];
    setRoles(savedRoles);
  }, []);

  useEffect(() => {
    // Save roles to localStorage whenever roles change
    localStorage.setItem('roles', JSON.stringify(roles));
  }, [roles]);

  const resetForm = () => {
    setNewRole('');
    setPermissions({ read: false, write: false });
    setShowForm(false);
    setEditingIndex(null);
  };

  const addOrUpdateRole = () => {
    const newRoleData = { name: newRole, permissions };
    if (editingIndex !== null) {
      const updatedRoles = [...roles];
      updatedRoles[editingIndex] = newRoleData;
      setRoles(updatedRoles);
    } else {
      setRoles([...roles, newRoleData]);
    }
    resetForm();
  };

  const editRole = (index) => {
    setEditingIndex(index);
    setNewRole(roles[index].name);
    setPermissions(roles[index].permissions);
    setShowForm(true);
  };

  const deleteRole = (index) => {
    const updatedRoles = roles.filter((_, i) => i !== index);
    setRoles(updatedRoles);
  };

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="font-sans">
      <Navbar />

      <div className="p-4 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold font-sans">Role Management</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#50a49a] text-white px-4 py-2 rounded-lg mt-4 md:mt-0"
          >
            {editingIndex !== null ? 'Edit Role' : 'Add Role'}
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-full md:w-80">
              <h3 className="text-lg font-bold mb-2">
                {editingIndex !== null ? 'Edit Role' : 'Add New Role'}
              </h3>
              <input
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Role Name"
                className="border p-2 mb-4 w-full"
              />
              <div className="mb-4">
                <label className="block mb-2 font-bold font-sans">Permissions</label>
                <div className="flex items-center mb-2 font-sans">
                  <input
                    type="checkbox"
                    name="read"
                    checked={permissions.read}
                    onChange={handlePermissionChange}
                    className="mr-2"
                  />
                  <label>Read</label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="write"
                    checked={permissions.write}
                    onChange={handlePermissionChange}
                    className="mr-2"
                  />
                  <label>Write</label>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={addOrUpdateRole}
                  className="bg-[#50a49a] text-white px-4 py-2 rounded-lg mr-2"
                >
                  {editingIndex !== null ? 'Update' : 'Save'}
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-900 pb-2 mb-4">
            <h3 className="font-bold w-full md:w-2/5 font-sans">Roles</h3>
            <h3 className="font-bold w-full md:w-3/5 text-center  font-sans">Function(s)</h3>
          </div>
          <ul className="list-none p-0">
            {roles.map((role, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row justify-between items-center mt-3 mb-3 py-2 border-b border-gray-300 "
              >
                <div className="flex-1 w-full md:w-2/5">
                  <p className="font-bold truncate font-sans">{role.name}</p>
                </div>
                <div className="flex w-full md:w-3/5 justify-center mt-2 md:mt-0">
                  <button
                    onClick={() => editRole(index)}
                    className="bg-[#50a49a] text-white px-4 py-2 rounded-lg mr-2 w-full md:w-24"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteRole(index)}
                    className="bg-[#ff4694] text-white px-4 py-2 rounded-lg w-full md:w-24"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;
