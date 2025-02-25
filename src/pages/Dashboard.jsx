import React from "react";
import { logout } from "../services/authService";

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
