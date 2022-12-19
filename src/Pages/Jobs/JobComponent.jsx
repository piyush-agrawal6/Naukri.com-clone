import { Button } from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./Jobs.css";
const JobComponent = (item) => {
  return (
    <div>
      <Link to={`/jobspage/${item.id}`} key={item.jobId}>
        <div className="job-data" key={item.id}>
          <div className="data-marked">
            <h2>{item.title}</h2>
          </div>
          <div className="company-jobs">{item.company}</div>
          <div className="education">
            <IoBagOutline className="icons-experience" />
            <ul> {item.experience}</ul>
            <ul>{item.salary}</ul>
            <ul style={{ display: "flex", gap: "3px" }}>
              <CiLocationOn className="loc-icon" />
              {item.location}
            </ul>
          </div>
          <div className="text-outline">
            <HiOutlineDocumentText className="loc-icon" /> {item.candidate}
          </div>

          {/* <div className="keyskill">
            {item.keySkills.map((elem, index) => {
              if (index < 2) {
                return (
                  <span key={index} className="job-skills">
                    {elem}
                  </span>
                );
              }
            })}
          </div> */}
          <div className="time-btn">
            <Button size="xs">
              <TfiTimer />
              {item.posted}
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobComponent;
