import React, { useState } from "react";

const TenantConfiguration = () => {
  const [tenants, setTenants] = useState([
    { name: "Tenant A", location: "New York", status: "Active" },
    { name: "Tenant B", location: "San Francisco", status: "Inactive" },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newTenant, setNewTenant] = useState({ name: "", location: "", status: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setNewTenant({ name: "", location: "", status: "" });
    setShowForm(false);
    setEditingIndex(null);
  };

  const addOrUpdateTenant = () => {
    if (editingIndex !== null) {
      const updatedTenants = [...tenants];
      updatedTenants[editingIndex] = newTenant;
      setTenants(updatedTenants);
    } else {
      setTenants([...tenants, newTenant]);
    }
    resetForm();
  };

  const editTenant = (index) => {
    setEditingIndex(index);
    setNewTenant(tenants[index]);
    setShowForm(true);
  };

  const deleteTenant = (index) => {
    const updatedTenants = tenants.filter((_, i) => i !== index);
    setTenants(updatedTenants);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTenant((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Tenant Configuration</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#50a49a] text-white px-4 py-2 rounded hover:bg-[#3e8a74]"
        >
          {editingIndex !== null ? "Edit Tenant" : "Add Tenant"}
        </button>
      </div>

      {/* Tenant Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {editingIndex !== null ? "Edit Tenant" : "Add New Tenant"}
            </h3>
            <input
              type="text"
              name="name"
              value={newTenant.name}
              onChange={handleInputChange}
              placeholder="Tenant Name"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <input
              type="text"
              name="location"
              value={newTenant.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <input
              type="text"
              name="status"
              value={newTenant.status}
              onChange={handleInputChange}
              placeholder="Status"
              className="border border-gray-300 p-2 mb-4 w-full rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={addOrUpdateTenant}
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

      {/* Tenant List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tenants.map((tenant, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <h4 className="text-xl font-semibold mb-2">{tenant.name}</h4>
            <p className="text-gray-700 mb-2">Location: {tenant.location}</p>
            <p className="text-gray-600 mb-4">Status: {tenant.status}</p>
            <div className="flex justify-between">
              <button
                onClick={() => editTenant(index)}
                className="bg-[#50a49a] text-white px-4 py-2 rounded hover:bg-[#3e8a74]"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTenant(index)}
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

export default TenantConfiguration;
