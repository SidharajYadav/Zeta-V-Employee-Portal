// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import UserManagement from './components/UserManagement';
// import RoleManagement from './components/RoleManagement';
// import Notification from './components/Notification';

// const App = () => {
//   const [activeComponent, setActiveComponent] = useState('role');

//   return (
//     <div className="flex font-sans">
//       <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
//       <div className="w-3/4 h-screen overflow-y-auto">
        
//         {activeComponent === 'role' && <RoleManagement />}
//         {activeComponent === 'user' && <UserManagement />}
//         {activeComponent === 'notification' && <Notification />}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import Notification from './components/Notification';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('role');

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      <main className="flex-1 p-2 mt-16 md:mt-0">
        {activeComponent === 'role' && <RoleManagement />}
        {activeComponent === 'user' && <UserManagement />}
        {activeComponent === 'notification' && <Notification />}
      </main>
    </div>
  );
};

export default App;
