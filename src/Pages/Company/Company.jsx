import React from "react";
import "./Company.css";
import CompSlider from "./companyComps/compSlider";
import { BsFunnel } from "react-icons/bs";
import {ImOffice} from "react-icons/im";

const Company = () => {
  return (
    <div>
      <div className="topHire">
        <b>Top companies hiring now</b>
      </div>
      {/* slider */}
      <div className="comp_slider">
        <CompSlider />
      </div>
      {/* companies */}
      <div className="company_main">
        <div className="comp_filters">
          <div style={{ display: "flex", gap: "5px", color: "gray" }}>
            <BsFunnel fontSize={"20px"} />
            <b>Filters</b>
          </div>
          <hr />
        </div>
        <div className="comp_showlist">
        <div style={{ display: "flex", gap: "5px", color: "gray" }}>
          <ImOffice fontSize="20px"/>
            <b>Showing 2000 companies</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
