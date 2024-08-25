import React, { useState } from "react";

const MemberManagement = () => {
  const [members, setMembers] = useState([
    { name: "Team 1", role: "Admin", email: "alice.johnson@example.com" },
    { name: "Team 2", role: "Member", email: "bob.brown@example.com" },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", role: "", email: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setNewMember({ name: "", role: "", email: "" });
    setShowForm(false);
    setEditingIndex(null);
  };

  const addOrUpdateMember = () => {
    if (editingIndex !== null) {
      const updatedMembers = [...members];
      updatedMembers[editingIndex] = newMember;
      setMembers(updatedMembers);
    } else {
      setMembers([...members, newMember]);
    }
    resetForm();
  };

  const editMember = (index) => {
    setEditingIndex(index);
    setNewMember(members[index]);
    setShowForm(true);
  };

  const deleteMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Member Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#50a49a] text-white px-4 py-1 rounded hover:bg-[#3e8a74]"
        >
          {editingIndex !== null ? "Edit Member" : "Add Member"}
        </button>
      </div>

      {/* Member Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {editingIndex !== null ? "Edit Member" : "Add New Member"}
            </h3>
            <input
              type="text"
              name="name"
              value={newMember.name}
              onChange={handleInputChange}
              placeholder="Member Name"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <input
              type="text"
              name="role"
              value={newMember.role}
              onChange={handleInputChange}
              placeholder="Role"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <input
              type="email"
              name="email"
              value={newMember.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border border-gray-300 p-2 mb-4 w-full rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={addOrUpdateMember}
                className="bg-[#50a49a] text-white px-4 py-1 rounded hover:bg-[#3e8a74] mr-2"
              >
                {editingIndex !== null ? "Update" : "Save"}
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Member List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
            <p className="text-gray-700 mb-2">Role: {member.role}</p>
            <p className="text-gray-600 mb-4">Email: {member.email}</p>
            <div className="flex justify-between">
              <button
                onClick={() => editMember(index)}
                className="bg-[#50a49a] text-white px-4 py-2 rounded hover:bg-[#3e8a74]"
              >
                Edit
              </button>
              <button
                onClick={() => deleteMember(index)}
                className="bg-[#ff4694] text-white px-4 py-2 rounded hover:bg-[#e03b6c]"
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

export default MemberManagement;
