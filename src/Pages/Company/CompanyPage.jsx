import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./companyPage.css";
import { Overview } from "./companyComps/overviewTab";
import { IoIosStar } from "react-icons/io";
import { RiSuitcaseLine } from "react-icons/ri";
import { BiRupee } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { GiPostOffice } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";

const CompanyPage = () => {
  const [comp_Data, setData] = useState([]);
  const id = useParams();
  console.log(comp_Data.nature);

  const getData = () => {
    axios.get(`http://localhost:8080/posts/${id.id}`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="setBack"></div>
      <div className="head_part">
        <div className="logoImage">
          <img src={comp_Data.logo} alt={comp_Data.logo} />
        </div>
        <div className="compInfo">
          <b>{comp_Data.title}</b><br />
          <p>{comp_Data.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <IoIosStar color="gold" />
            {comp_Data.rating}
          </div>
          <div>({comp_Data.reviews})</div>
          <div className="compNature">
            {comp_Data.nature &&
              comp_Data.nature.map((ele, ind) => {
                return (
                  <p className="compNature_div" key={ind}>
                    {ele}
                  </p>
                );
              })}
          </div>
        </div>
        <div className="compFollow">
          <div>{Math.floor(+comp_Data.rating * 12132)} followers</div>
          <button>+Follow</button>
        </div>
      </div>
      {/* overView */}
      <div className="overview">
        <div className="left_one">
          <Overview {...comp_Data} />
          <div className="moreInfo">
            <b>More Information</b>
            <p><b>Type</b> : {comp_Data.comp_type}</p>
            <p><b>Founded</b> : {comp_Data.founded}</p>
            <p><b>Company Size</b> : {comp_Data.company_size}</p>
            <p><b>Website</b> : {comp_Data.website}</p>
          </div>
          {/* jopb opening boxes */}
          <p>Job openings at {comp_Data.title}</p>
          {/* 1 */}
          <div className="job_open">
            <div className="job_open_info">
              <img src={comp_Data.logo} alt={comp_Data.title} />
              <div >
                <b>IT Service desk/Technical support</b><br />
                <p style={{display:"flex", gap:"5px", alignItems:"center"}}><IoIosStar color="gold" />{comp_Data.rating}</p>
                <p>{comp_Data.title} ({comp_Data.reviews})</p>
              </div>
            </div>
            <div className="job_desc">
              <div>
                <p><RiSuitcaseLine/> 0-5 Yrs</p>
                <p><BiRupee/>2,25,000 - 7,50,000 PA.</p>
                <p><GoLocation/>Haiderabad, Chennai, Pune (All places)</p>
              </div>
              <p><GiPostOffice/>it service desk, Technical Support, Windows OS, Networking, Routing,</p>
              <p><FaRegNewspaper/>Qualification: Any technical background graduationFreshers and ...</p>
            </div>
          </div>
          {/* 2 */}
          <div className="job_open">
            <div className="job_open_info">
              <img src={comp_Data.logo} alt={comp_Data.title} />
              <div >
                <b>Regulatory Reporting - Stock Broking</b><br />
                <p style={{display:"flex", gap:"5px", alignItems:"center"}}><IoIosStar color="gold" />{comp_Data.rating}</p>
                <p>{comp_Data.title} ({comp_Data.reviews})</p>
              </div>
            </div>
            <div className="job_desc">
              <div>
                <p><RiSuitcaseLine/> 1-3 Yrs</p>
                <p><BiRupee/>Not disclosed</p>
                <p><GoLocation/>Bangalore / Bengaluru</p>
              </div>
              <p><GiPostOffice/>B2B Sales, Front Line Sales, Field Sales</p>
              <p><FaRegNewspaper/>Roles and Responsibilities About Us:PhonePe is the leader in UPI based leader in UPI based...</p>
            </div>
          </div>
          {/* 3 */}
          <div className="job_open">
            <div className="job_open_info">
              <img src={comp_Data.logo} alt={comp_Data.title} />
              <div >
                <b>Back office security settlement</b><br />
                <p style={{display:"flex", gap:"5px", alignItems:"center"}}><IoIosStar color="gold" />{comp_Data.rating}</p>
                <p>{comp_Data.title} ({comp_Data.reviews})</p>
              </div>
            </div>
            <div className="job_desc">
              <div>
                <p><RiSuitcaseLine/> 2-3 Yrs</p>
                <p><BiRupee/>Not disclosed</p>
                <p><GoLocation/>Pune, Mumbai</p>
              </div>
              <p><GiPostOffice/>Front office, Reconciliation, Back office, Wellness, Capital market, Medical insurance</p>
              <p><FaRegNewspaper/>Candidate should be well versed with Retail trade settlement of all products...</p>
            </div>
          </div>
        </div>
        <div className="right_ratings">
          <img src="../assets/comp_page-1.png" alt="err img-1" />
          <br />
          <img src="../assets/comp_page-2.PNG" alt="err img-2" />
          <br />
          <img src="../assets/comp_page-3.PNG" alt="err img-3" />
          <br />
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
