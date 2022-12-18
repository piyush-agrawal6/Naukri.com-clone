import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import AdminNav from "./AdminNav";
const Admin = () => {
  return (
    <div>
      <AdminNav />
      <div className="adminPanel">
        <Link to="/adminJobs">
          <div>
            <h2>Jobs</h2>
            <p>Total Count : </p>
            <div>
              <span>5</span>
            </div>
          </div>
        </Link>
        <Link to="/adminJobs">
          <div>
            <h2>Applications</h2>
            <p>Total Count : </p>
            <div>
              <span>5</span>
            </div>
          </div>
        </Link>
        <Link to="/adminCompanies">
          <div>
            <h2>Companies</h2>
            <p>Total Count : </p>
            <div>
              <span>5</span>
            </div>
          </div>
        </Link>
        <Link to="/users">
          <div>
            <h2>Users</h2>
            <p>Total Count : </p>
            <div>
              <span>5</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
