import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import '../styles/dashboard.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      {/* 
        Note: The top Navbar is already rendered by App.jsx outside of the routes 
        so it stays visually intact. Dashboard uses a unique styling structure below it.
      */}
      <Sidebar />
      <main className="dashboard-main">
        <div className="dashboard-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
