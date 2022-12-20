import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import JobComponent from "../Jobs/JobComponent";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { allApplyJobs, allSavedJobs } from "../../Redux/Jobs/actions";
const Home = () => {
  let User = JSON.parse(localStorage.getItem("User")) || {};
  let dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("User")) || {};
  let savedJobs = useSelector((store) => store.job.allSavedJobs);
  let appliedJobs = useSelector((store) => store.job.allApplyJobs);
  let { isLogin } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allSavedJobs());
    dispatch(allApplyJobs());
  }, [dispatch]);
  if (!isLogin) {
    navigate("/login");
  }
  return (
    <div className="home">
      <div>
        <div className="homeJob">
          <div className="homeHeader">New Recommended Job(s)</div>
          <div className="homeMiddle">
            <Link to="/jobs">
              <div className="homeRecJob">
                <h2>Urgent Hiring!!! BPO/KPO-Voice and Non Voice Executive</h2>
                <p>Pyramid Jobs</p>
                <p>₹ 1,75,000 - 2,50,000 P.A.</p>
              </div>
            </Link>
            <Link to="/jobs">
              <div className="homeRecJob">
                <h2>Sales Executive</h2>
                <p>Tushar Hr Consultancy</p>
                <p>Not Disclosed</p>
              </div>
            </Link>
          </div>
          <Link to="/jobs">
            <div className="homeFooter">VIEW ALL</div>
          </Link>
        </div>
        <div className="homeProfile">
          <div className="homeProfileImg">
            <img src="./assets/user.png" alt="" />
          </div>
          <div className="homeProfileName">
            <h2>{User.name}</h2>
            <p>{User.email}</p>
            <p>{User.mobile}</p>
            <p>Gender</p>
            <p>Location</p>
            <p>Education</p>
            <p>Job Category</p>
            <Link to="/profile">
              <h3>UPDATE PROFILE</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="homeDiv">
        <div>
          <div className="homeHeader">Job Applications</div>
          <div className="homeMiddle">
            {appliedJobs.map((el) => {
              if (el.userId === user?.userId) {
                return (
                  <Link to="/jobs">
                    <div className="homeRecJob">
                      <h2>{el.title}</h2>
                      <p>{el.company}</p>
                      <p>{el.salary}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div>
          <div className="homeHeader">Saved Job(s)</div>
          <div className="homeMiddle">
            {savedJobs.map((el) => {
              if (el.userId === user?.userId) {
                return (
                  <Link to="/jobs">
                    <div className="homeRecJob">
                      <h2>{el.title}</h2>
                      <p>{el.company}</p>
                      <p>{el.salary}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
