import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div>
        <div className="homeJob">
          <div className="homeHeader">New Recommended Job(s)</div>
          <div className="homeMiddle"></div>
          <div className="homeFooter">VIEW ALL</div>
        </div>
        <div className="homeProfile">
          <div className="homeProfileImg">
            <img src="./assets/user.png" alt="" />
          </div>
          <div className="homeProfileName">
          <h2>User Name</h2>
          <p>University Name</p>
          <p>Job category</p>
          <p>Other Details</p>
          <p>Other Details</p>
          <p>Other Details</p>
          <p>Other Details</p>
          <p>Other Details</p>
          <h3>UPDATE PROFILE</h3>
          </div>
        </div>
      </div>
      <div className="homeDiv">
        <div>
          <div className="homeHeader">Job Applications</div>
          <div className="homeMiddle"></div>
          <div className="homeFooter">VIEW ALL</div>
        </div>
        <div>
          <div className="homeHeader">Saved Job(s)</div>
          <div className="homeMiddle"></div>
          <div className="homeFooter">VIEW ALL</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
