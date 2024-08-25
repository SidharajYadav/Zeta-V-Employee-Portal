import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import Notification from './components/Notification';
import Report from './components/Report'; 
import CampaignManagement from './components/CampaignManagement';
import TenantConfiguration from './components/TenantConfiguration';
import MemberManagement from './components/MemberManagement';
const App = () => {
  const [activeComponent, setActiveComponent] = useState('role');

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      <main className="flex-1 p-2 mt-16 md:mt-0">
        {activeComponent === 'role' && <RoleManagement />}
        {activeComponent === 'user' && <UserManagement />}
        {activeComponent === 'notification' && <Notification />}
        {activeComponent === 'campaign' && <CampaignManagement />}
        {activeComponent === 'tenant' && <TenantConfiguration />}
        {activeComponent === 'push' && <MemberManagement />}
        {activeComponent === 'reports' && <Report />}
        
        
      </main>
    </div>
  );
};

export default App;
