import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ mode, message, onClose, onAdd, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Draft');
  const [pushDate, setPushDate] = useState('');
  const [editBy, setEditBy] = useState('');
  const [approvedBy, setApprovedBy] = useState('');

  useEffect(() => {
    if (mode === 'edit' || mode === 'copy') {
      setTitle(message.title);
      setStatus(message.status);
      setPushDate(
        mode === 'copy'
          ? ''
          : message.pushDate
          ? message.pushDate.toISOString().substring(0, 16)
          : ''
      );
      setEditBy(message.editBy);
      setApprovedBy(message.approvedBy);
    }
  }, [mode, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      id: message?.id || null,
      title,
      status,
      pushDate: pushDate ? new Date(pushDate) : new Date(),
      editBy,
      approvedBy,
      lastUpdate: new Date(),
    };

    if (mode === 'create' || mode === 'copy') {
      onAdd(newMessage);
    } else if (mode === 'edit') {
      onUpdate(newMessage);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {mode === 'create'
              ? 'Create New Message'
              : mode === 'edit'
              ? 'Edit Message'
              : 'Copy Message'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter message title"
            />
          </div>
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="Draft">Draft</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>
          {/* Push Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Push Date
            </label>
            <input
              type="datetime-local"
              required
              value={pushDate}
              onChange={(e) => setPushDate(e.target.value)}
              className="block w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Edit By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Edit By
            </label>
            <input
              type="text"
              required
              value={editBy}
              onChange={(e) => setEditBy(e.target.value)}
              className="block w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Editor Name"
            />
          </div>
          {/* Approved By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Approved By
            </label>
            <input
              type="text"
              required
              value={approvedBy}
              onChange={(e) => setApprovedBy(e.target.value)}
              className="block w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Approver Name"
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              {mode === 'create' ? 'Create' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
