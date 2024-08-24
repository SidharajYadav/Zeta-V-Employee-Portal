// // import React, { useState } from 'react';

// // const RoleManagement = () => {
// //   const [roles, setRoles] = useState([]);
// //   const [showForm, setShowForm] = useState(false);
// //   const [newRole, setNewRole] = useState('');
// //   const [permissions, setPermissions] = useState({
// //     read: false,
// //     write: false,
// //   });
// //   const [editingIndex, setEditingIndex] = useState(null);

// //   const resetForm = () => {
// //     setNewRole('');
// //     setPermissions({ read: false, write: false });
// //     setShowForm(false);
// //     setEditingIndex(null);
// //   };

// //   const addOrUpdateRole = () => {
// //     const newRoleData = { name: newRole, permissions };
// //     if (editingIndex !== null) {
// //       const updatedRoles = [...roles];
// //       updatedRoles[editingIndex] = newRoleData;
// //       setRoles(updatedRoles);
// //     } else {
// //       setRoles([...roles, newRoleData]);
// //     }
// //     resetForm();
// //   };

// //   const editRole = (index) => {
// //     setEditingIndex(index);
// //     setNewRole(roles[index].name);
// //     setPermissions(roles[index].permissions);
// //     setShowForm(true);
// //   };

// //   const deleteRole = (index) => {
// //     const updatedRoles = roles.filter((_, i) => i !== index);
// //     setRoles(updatedRoles);
// //   };

// //   const handlePermissionChange = (e) => {
// //     const { name, checked } = e.target;
// //     setPermissions((prev) => ({ ...prev, [name]: checked }));
// //   };

// //   return (
// //     <div className="p-4 md:p-8">
// //       <h2 className="text-xl md:text-2xl font-bold mb-4">Role Management</h2>
// //       <button
// //         onClick={() => setShowForm(true)}
// //         className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
// //       >
// //         {editingIndex !== null ? 'Edit Role' : 'Add Role'}
// //       </button>

// //       {showForm && (
// //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// //           <div className="bg-white p-4 rounded shadow-lg w-full md:w-80">
// //             <h3 className="text-lg font-bold mb-2">
// //               {editingIndex !== null ? 'Edit Role' : 'Add New Role'}
// //             </h3>
// //             <input
// //               type="text"
// //               value={newRole}
// //               onChange={(e) => setNewRole(e.target.value)}
// //               placeholder="Role Name"
// //               className="border p-2 mb-4 w-full"
// //             />
// //             <div className="mb-4">
// //               <label className="block mb-2 font-bold">Permissions</label>
// //               <div className="flex items-center mb-2">
// //                 <input
// //                   type="checkbox"
// //                   name="read"
// //                   checked={permissions.read}
// //                   onChange={handlePermissionChange}
// //                   className="mr-2"
// //                 />
// //                 <label>Read</label>
// //               </div>
// //               <div className="flex items-center mb-2">
// //                 <input
// //                   type="checkbox"
// //                   name="write"
// //                   checked={permissions.write}
// //                   onChange={handlePermissionChange}
// //                   className="mr-2"
// //                 />
// //                 <label>Write</label>
// //               </div>
// //             </div>
// //             <div className="flex justify-end">
// //               <button
// //                 onClick={addOrUpdateRole}
// //                 className="bg-green-500 text-white px-4 py-2 rounded mr-2"
// //               >
// //                 {editingIndex !== null ? 'Update' : 'Save'}
// //               </button>
// //               <button
// //                 onClick={resetForm}
// //                 className="bg-red-500 text-white px-4 py-2 rounded"
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <ul>
// //         {roles.map((role, index) => (
// //           <li
// //             key={index}
// //             className="border p-4 mb-2 flex flex-col md:flex-row justify-between items-start md:items-center"
// //           >
// //             <div className="flex-1">
// //               <p className="font-bold">{role.name}</p>
// //               <p className="text-sm">Permissions:</p>
// //               <ul className="list-disc list-inside ml-4">
// //                 {role.permissions.read && <li>Read</li>}
// //                 {role.permissions.write && <li>Write</li>}
// //               </ul>
// //             </div>
// //             <div className="flex mt-2 md:mt-0">
// //               <button
// //                 onClick={() => editRole(index)}
// //                 className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
// //               >
// //                 Edit
// //               </button>
// //               <button
// //                 onClick={() => deleteRole(index)}
// //                 className="bg-red-500 text-white px-4 py-2 rounded"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default RoleManagement;
// import React, { useState } from 'react';
// import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       <div className="flex items-center space-x-4">
//         <button className="text-white hover:text-gray-400">
//           <FaUser /> Roles Management
//         </button>
//       </div>
//       <div className="flex items-center space-x-4">
//         <button className="text-white hover:text-gray-400">
//           <FaSearch />
//         </button>
//         <button className="text-white hover:text-gray-400">
//           <FaBell />
//         </button>
//         <div className="flex items-center space-x-2">
//           <FaUser className="text-white" />
//           <span className="hidden md:inline">Username</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RoleManagement = () => {
//   const [roles, setRoles] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [newRole, setNewRole] = useState('');
//   const [permissions, setPermissions] = useState({
//     read: false,
//     write: false,
//   });
//   const [editingIndex, setEditingIndex] = useState(null);

//   const resetForm = () => {
//     setNewRole('');
//     setPermissions({ read: false, write: false });
//     setShowForm(false);
//     setEditingIndex(null);
//   };

//   const addOrUpdateRole = () => {
//     const newRoleData = { name: newRole, permissions };
//     if (editingIndex !== null) {
//       const updatedRoles = [...roles];
//       updatedRoles[editingIndex] = newRoleData;
//       setRoles(updatedRoles);
//     } else {
//       setRoles([...roles, newRoleData]);
//     }
//     resetForm();
//   };

//   const editRole = (index) => {
//     setEditingIndex(index);
//     setNewRole(roles[index].name);
//     setPermissions(roles[index].permissions);
//     setShowForm(true);
//   };

//   const deleteRole = (index) => {
//     const updatedRoles = roles.filter((_, i) => i !== index);
//     setRoles(updatedRoles);
//   };

//   const handlePermissionChange = (e) => {
//     const { name, checked } = e.target;
//     setPermissions((prev) => ({ ...prev, [name]: checked }));
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="p-4 md:p-8">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl md:text-2xl font-bold">Role Management</h2>
//           <button
//             onClick={() => setShowForm(true)}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             {editingIndex !== null ? 'Edit Role' : 'Add Role'}
//           </button>
//         </div>

//         {showForm && (
//           <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//             <div className="bg-white p-4 rounded shadow-lg w-full md:w-80">
//               <h3 className="text-lg font-bold mb-2">
//                 {editingIndex !== null ? 'Edit Role' : 'Add New Role'}
//               </h3>
//               <input
//                 type="text"
//                 value={newRole}
//                 onChange={(e) => setNewRole(e.target.value)}
//                 placeholder="Role Name"
//                 className="border p-2 mb-4 w-full"
//               />
//               <div className="mb-4">
//                 <label className="block mb-2 font-bold">Permissions</label>
//                 <div className="flex items-center mb-2">
//                   <input
//                     type="checkbox"
//                     name="read"
//                     checked={permissions.read}
//                     onChange={handlePermissionChange}
//                     className="mr-2"
//                   />
//                   <label>Read</label>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <input
//                     type="checkbox"
//                     name="write"
//                     checked={permissions.write}
//                     onChange={handlePermissionChange}
//                     className="mr-2"
//                   />
//                   <label>Write</label>
//                 </div>
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   onClick={addOrUpdateRole}
//                   className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//                 >
//                   {editingIndex !== null ? 'Update' : 'Save'}
//                 </button>
//                 <button
//                   onClick={resetForm}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <ul>
//           {roles.map((role, index) => (
//             <li
//               key={index}
//               className="border-t border-gray-200 p-4 mb-2 flex flex-col md:flex-row justify-between items-start md:items-center"
//             >
//               <div className="flex-1">
//                 <p className="font-bold">{role.name}</p>
//                 <p className="text-sm">Permissions:</p>
//                 <ul className="list-disc list-inside ml-4">
//                   {role.permissions.read && <li>Read</li>}
//                   {role.permissions.write && <li>Write</li>}
//                 </ul>
//               </div>
//               <div className="flex mt-2 md:mt-0">
//                 <button
//                   onClick={() => editRole(index)}
//                   className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteRole(index)}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RoleManagement;

// const Navbar = () => {
//     return (
//       <div className="bg-gray-100 text-white p-4 flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <button className="text-black hover:text-gray-400">
            
//           </button>
//         </div>
//         <div className="flex items-center space-x-4">
//           <button className="text-black hover:text-gray-400">
//             <FaSearch />
//           </button>
//           <button className="text-black hover:text-gray-400">
//             <FaBell />
//           </button>
//           <div className="flex items-center space-x-2">
//           <span className="hidden md:inline text-black">Hi,John</span>
//             <FaUser className="text-black" />
            
//           </div>
//         </div>
//       </div>
//     );
//   };


import React, { useState,useEffect } from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="bg-gray-100 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-gray-400">
        <TfiMenu />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-gray-400">
          <FaSearch />
        </button>
        <button className="text-black hover:text-gray-400">
          <FaBell />
        </button>
        <div className="flex items-center space-x-2">
        <span className="hidden md:inline text-black">Hi,John</span>
          <FaUser className="text-black" />
          
        </div>
      </div>
    </div>
  );
};

const RoleManagement = () => {
    const [roles, setRoles] = useState([]);
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
      <div>
        <Navbar />
  
        <div className="p-4 md:p-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Role Management</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#50a49a] text-white px-4 py-2 rounded-lg"
            >
              {editingIndex !== null ? 'Edit Role' : 'Add Role'}
            </button>
          </div>
  
          {showForm && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-10 rounded shadow-lg w-full md:w-80">
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
                {editingIndex !== null && (
                  <div className="mb-4">
                    <label className="block mb-2 font-bold">Permissions</label>
                    <div className="flex items-center mb-2">
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
                )}
                <div className="flex justify-end">
                  <button
                    onClick={addOrUpdateRole}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                  >
                    {editingIndex !== null ? 'Update' : 'Save'}
                  </button>
                  <button
                    onClick={resetForm}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
  
          <div className="mb-4">
            <div className="flex justify-between border-b border-gray-400 pb-2">
              <h3 className="font-bold w-1/2">Roles</h3>
              <h3 className="font-bold w-1/2 text-center">Function(s)</h3>
            </div>
            <ul className="list-none p-0">
              {roles.map((role, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3 mb-3 border-b border-gray-400 py-2"
                >
                  <div className="flex-1">
                    <p className="font-bold">{role.name}</p>
                  </div>
                  <div className="flex flex-col md:flex-row m-3 md:mt-0 w-full md:w-auto justify-start">
                    <button
                      onClick={() => editRole(index)}
                      className="bg-[#50a49a] text-white px-4 py-2 rounded-lg mr-2 mb-2 md:mb-0 w-full md:w-auto"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteRole(index)}
                      className="bg-[#ff4694] text-white px-4 py-2 rounded-lg w-full md:w-auto"
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