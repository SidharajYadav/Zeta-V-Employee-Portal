import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import Notification from './components/Notification';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('role');

  return (
    <div className="flex">
      <Navbar setActiveComponent={setActiveComponent} />
      <div className="w-3/4 h-screen overflow-y-auto">
        
        {activeComponent === 'role' && <RoleManagement />}
        {activeComponent === 'user' && <UserManagement />}
        {activeComponent === 'notification' && <Notification />}
      </div>
    </div>
  );
};

export default App;

