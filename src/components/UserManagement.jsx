import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', jobTitle: '', email: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setNewUser({ name: '', jobTitle: '', email: '' });
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
    <div className="p-4 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">User Management</h2>
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {editingIndex !== null ? 'Edit User' : 'Add User'}
      </button>

      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-full md:w-80">
            <h3 className="text-lg font-bold mb-2">
              {editingIndex !== null ? 'Edit User' : 'Add New User'}
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
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                {editingIndex !== null ? 'Update' : 'Save'}
              </button>
              <button
                onClick={resetForm}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className="border p-4 mb-2 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="flex-1">
              <p className="font-bold">{user.name}</p>
              <p className="text-sm">{user.jobTitle}</p>
              <p className="text-sm">{user.email}</p>
            </div>
            <div className="flex mt-2 md:mt-0">
              <button
                onClick={() => editUser(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
