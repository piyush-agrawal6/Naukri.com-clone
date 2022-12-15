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
        <div className="homeProfile">Profile Details</div>
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
