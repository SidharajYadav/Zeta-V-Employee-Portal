import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      name: "ABC",
      jobTitle: "Software Engineer",
      email: "john.doe@example.com",
    },
    {
      name: "XYZ",
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
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#50a49a] text-white px-4 py-2 rounded hover:bg-[#3e8a74]"
        >
          {editingIndex !== null ? "Edit User" : "Add User"}
        </button>
      </div>

      {/* User Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {editingIndex !== null ? "Edit User" : "Add New User"}
            </h3>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="User Name"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <input
              type="text"
              name="jobTitle"
              value={newUser.jobTitle}
              onChange={handleInputChange}
              placeholder="Job Title"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border border-gray-300 p-2 mb-4 w-full rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={addOrUpdateUser}
                className="bg-[#50a49a] text-white px-4 py-2 rounded hover:bg-[#3e8a74] mr-2"
              >
                {editingIndex !== null ? "Update" : "Save"}
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <h4 className="text-xl font-semibold mb-2">{user.name}</h4>
            <p className="text-gray-700 mb-2">{user.jobTitle}</p>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <div className="flex justify-between">
              <button
                onClick={() => editUser(index)}
                className="bg-[#50a49a] text-white px-4 py-1 rounded hover:bg-[#3e8a74]"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(index)}
                className="bg-[#ff4694] text-white px-4 py-1 rounded hover:bg-[#e03b6c]"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
