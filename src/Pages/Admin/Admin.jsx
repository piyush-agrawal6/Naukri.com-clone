import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../Redux/Auth/actionsRegister";
import { getCompany } from "../../Redux/Companies/actions";
import { allApplyJobs, allSavedJobs, getJobs } from "../../Redux/Jobs/actions";
import "./Admin.css";
import AdminNav from "./AdminNav";
const Admin = () => {
  const { users } = useSelector((store) => store.auth);
  const { jobs } = useSelector((store) => store.job);
  const applyjobs = useSelector((store) => store.job.allApplyJobs);
  const { companies } = useSelector((store) => store.company);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getJobs());
    dispatch(getCompany());
    dispatch(allApplyJobs());
  }, [dispatch]);
  return (
    <div>
      <AdminNav />
      <div className="adminPanel">
        <Link to="/adminJobs">
          <div>
            <h2>Jobs</h2>
            <p>Total Count : </p>
            <div>
              <span>{jobs.length}</span>
            </div>
          </div>
        </Link>
        <Link to="/adminJobs">
          <div>
            <h2>Applications</h2>
            <p>Total Count : </p>
            <div>
              <span>{applyjobs.length}</span>
            </div>
          </div>
        </Link>
        <Link to="/adminCompanies">
          <div>
            <h2>Companies</h2>
            <p>Total Count : </p>
            <div>
              <span>{companies.length}</span>
            </div>
          </div>
        </Link>
        <Link to="/users">
          <div>
            <h2>Users</h2>
            <p>Total Count : </p>
            <div>
              <span>{users.length}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
