import React, { useState, useEffect } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Sidebar from "../../components/User/sidebar/Sidebar";
import Balance from "../../components/User/Balance/Balance";
import Lateral from "../../components/User/Lateral/Lateral";
import Recents from "../../components/User/Recents/Recents";
import Button from '../../components/User/sidebar/Button';

const Dashboard = () => {


  return (
    <div className="dashboard">
      <Sidebar />
      <Button />

      {/* <button className="btnSidebar" onClick={toggleSidebar}>
        <MenuOpenIcon />
      </button> */}

      <main>
        <Balance />
        <Recents />
        <Lateral />
      </main>
    </div>
  );
};

export default Dashboard;
