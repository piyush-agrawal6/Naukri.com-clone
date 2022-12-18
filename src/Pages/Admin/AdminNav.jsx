import React from "react";
import { Link } from "react-router-dom";
import "./AdminNav.css";
const AdminNav = () => {
  return (
    <div className="adminNav">
      <Link to="/">
        <p>HOME</p>
      </Link>
      <Link to="/admin">
        <p>DASHBOARD</p>
      </Link>
      <Link to="/adminJobs">
        <p>JOBS</p>
      </Link>
      <Link to="/adminCompanies">
        <p>COMPANIES</p>
      </Link>
      <Link to="/users">
        <p>USERS</p>
      </Link>
    </div>
  );
};

export default AdminNav;
