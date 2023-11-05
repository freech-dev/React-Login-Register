import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  // Simulated user login
  const handleLogin = () => {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
    };
    setUserInfo(user);
  };

  // Simulated user logout
  const handleLogout = () => {
    setUserInfo(null);
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Sidebar</h2>
        {userInfo && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
      <div>
        <h1>Welcome to the Dashboard</h1>
        {!userInfo && <button onClick={handleLogin}>Login</button>}
      </div>
    </div>
  );
}

export default Dashboard;
