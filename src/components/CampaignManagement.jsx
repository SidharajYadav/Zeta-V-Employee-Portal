import React, { useState } from "react";

const CampaignManagement = () => {
  const [campaigns, setCampaigns] = useState([
    { title: "Bug Fix", description: "Discounts on summer apparel", startDate: "2024-06-01", endDate: "2024-08-31" },
    { title: "Error", description: "Huge discounts on electronics", startDate: "2024-11-25", endDate: "2024-11-30" },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ title: "", description: "", startDate: "", endDate: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setNewCampaign({ title: "", description: "", startDate: "", endDate: "" });
    setShowForm(false);
    setEditingIndex(null);
  };

  const addOrUpdateCampaign = () => {
    if (editingIndex !== null) {
      const updatedCampaigns = [...campaigns];
      updatedCampaigns[editingIndex] = newCampaign;
      setCampaigns(updatedCampaigns);
    } else {
      setCampaigns([...campaigns, newCampaign]);
    }
    resetForm();
  };

  const editCampaign = (index) => {
    setEditingIndex(index);
    setNewCampaign(campaigns[index]);
    setShowForm(true);
  };

  const deleteCampaign = (index) => {
    const updatedCampaigns = campaigns.filter((_, i) => i !== index);
    setCampaigns(updatedCampaigns);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Campaign Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#50a49a] text-white px-4 py-2 rounded hover:bg-[#3e8a74]"
        >
          {editingIndex !== null ? "Edit Campaign" : "Add Campaign"}
        </button>
      </div>

      {/* Campaign Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {editingIndex !== null ? "Edit Campaign" : "Add New Campaign"}
            </h3>
            <input
              type="text"
              name="title"
              value={newCampaign.title}
              onChange={handleInputChange}
              placeholder="Campaign Title"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <textarea
              name="description"
              value={newCampaign.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <input
              type="date"
              name="startDate"
              value={newCampaign.startDate}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <input
              type="date"
              name="endDate"
              value={newCampaign.endDate}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 mb-4 w-full rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={addOrUpdateCampaign}
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

      {/* Campaign List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <h4 className="text-xl font-semibold mb-2">{campaign.title}</h4>
            <p className="text-gray-700 mb-2">{campaign.description}</p>
            <p className="text-gray-600 mb-2">Start Date: {campaign.startDate}</p>
            <p className="text-gray-600 mb-4">End Date: {campaign.endDate}</p>
            <div className="flex justify-between">
              <button
                onClick={() => editCampaign(index)}
                className="bg-[#50a49a] text-white px-4 py-2 rounded hover:bg-[#3e8a74]"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCampaign(index)}
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

export default CampaignManagement;
