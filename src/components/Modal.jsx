import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { format } from "date-fns";

const Modal = ({ mode, message, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    status: "",
    pushDate: "",
    editBy: "",
    approvedBy: "",
    lastUpdate: "",
  });

  useEffect(() => {
    if (message) {
      setFormData({
        title: message.title || "",
        status: message.status || "",
        pushDate: format(new Date(message.pushDate), "yyyy-MM-dd") || "",
        editBy: message.editBy || "",
        approvedBy: message.approvedBy || "",
        lastUpdate: format(new Date(message.lastUpdate), "yyyy-MM-dd") || "",
      });
    }
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: message ? message.id : undefined });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-lg font-bold mb-4">
          {mode === "create"
            ? "Create Message"
            : mode === "edit"
            ? "Edit Message"
            : "Copy Message"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Push Date
              </label>
              <input
                type="date"
                name="pushDate"
                value={formData.pushDate}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Edit By
              </label>
              <input
                type="text"
                name="editBy"
                value={formData.editBy}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Approved By
              </label>
              <input
                type="text"
                name="approvedBy"
                value={formData.approvedBy}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Update
              </label>
              <input
                type="date"
                name="lastUpdate"
                value={formData.lastUpdate}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
