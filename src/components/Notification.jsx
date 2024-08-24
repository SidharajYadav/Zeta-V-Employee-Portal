import React, { useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newNotification, setNewNotification] = useState({ title: '', message: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setNewNotification({ title: '', message: '' });
    setShowForm(false);
    setEditingIndex(null);
  };

  const addOrUpdateNotification = () => {
    if (editingIndex !== null) {
      const updatedNotifications = [...notifications];
      updatedNotifications[editingIndex] = newNotification;
      setNotifications(updatedNotifications);
    } else {
      setNotifications([...notifications, newNotification]);
    }
    resetForm();
  };

  const editNotification = (index) => {
    setEditingIndex(index);
    setNewNotification(notifications[index]);
    setShowForm(true);
  };

  const deleteNotification = (index) => {
    const updatedNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(updatedNotifications);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotification((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Notification</h2>
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {editingIndex !== null ? 'Edit Notification' : 'Add Notification'}
      </button>

      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-full md:w-80">
            <h3 className="text-lg font-bold mb-2">
              {editingIndex !== null ? 'Edit Notification' : 'Add New Notification'}
            </h3>
            <input
              type="text"
              name="title"
              value={newNotification.title}
              onChange={handleInputChange}
              placeholder="Notification Title"
              className="border p-2 mb-2 w-full"
            />
            <textarea
              name="message"
              value={newNotification.message}
              onChange={handleInputChange}
              placeholder="Notification Message"
              className="border p-2 mb-4 w-full"
              rows="4"
            />
            <div className="flex justify-end">
              <button
                onClick={addOrUpdateNotification}
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
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="border p-4 mb-2 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="flex-1">
              <p className="font-bold">{notification.title}</p>
              <p>{notification.message}</p>
            </div>
            <div className="flex mt-2 md:mt-0">
              <button
                onClick={() => editNotification(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNotification(index)}
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

export default Notification;

