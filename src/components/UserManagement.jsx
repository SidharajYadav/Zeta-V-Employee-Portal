import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      name: "John Doe",
      jobTitle: "Software Engineer",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      jobTitle: "Project Manager",
      email: "jane.smith@example.com",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", jobTitle: "", email: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setNewUser({ name: "", jobTitle: "", email: "" });
    setShowForm(false);
    setEditingIndex(null);
  };

  const addOrUpdateUser = () => {
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      setUsers(updatedUsers);
    } else {
      setUsers([...users, newUser]);
    }
    resetForm();
  };

  const editUser = (index) => {
    setEditingIndex(index);
    setNewUser(users[index]);
    setShowForm(true);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4">
      <div className="bg-gray-100 text-black p-4 flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold">User Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#50a49a] text-white px-4 py-2 rounded"
        >
          {editingIndex !== null ? "Edit User" : "Add User"}
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded shadow-lg w-full md:w-96">
            <h3 className="text-lg font-bold mb-4">
              {editingIndex !== null ? "Edit User" : "Add New User"}
            </h3>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="User Name"
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="jobTitle"
              value={newUser.jobTitle}
              onChange={handleInputChange}
              placeholder="Job Title"
              className="border p-2 mb-2 w-full"
            />
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border p-2 mb-4 w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={addOrUpdateUser}
                className="bg-[#50a49a] text-white px-4 py-2 rounded mr-2"
              >
                {editingIndex !== null ? "Update" : "Save"}
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="flex flex-wrap justify-between border-b border-gray-900 pb-2 mb-4 ">
          <div className="font-bold w-full md:w-2/5">User Name</div>
          <div className="font-bold w-full md:w-3/5 text-center">Actions</div>
        </div>
        <ul className="list-none p-0">
          {users.map((user, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 py-2 border-b border-gray-300 "
            >
              <div className="flex-1">
                <p className="font-bold truncate">{user.name}</p>
                <p className="text-sm">{user.jobTitle}</p>
                <p className="text-sm">{user.email}</p>
              </div>

              <div className="flex w-full md:w-3/5 justify-center mt-2 md:mt-0">
                <button
                  onClick={() => editUser(index)}
                  className="bg-[#50a49a] text-white px-4 py-2 rounded-lg mr-2 w-full md:w-24"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(index)}
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
  );
};

export default UserManagement;
