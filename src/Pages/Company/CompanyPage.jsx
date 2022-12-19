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
import { useDispatch, useSelector } from "react-redux";
import { getSingleCompany } from "../../Redux/Companies/actions";

const CompanyPage = () => {
  const { id } = useParams();
  let comp_Data = useSelector((store) => store.company.singleCompany);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCompany(id));
  }, [dispatch]);
  console.log(comp_Data);
  return (
    <>
      <div className="setBack"></div>
      <div className="head_part">
        <div className="logoImage">
          <img src={comp_Data.logo} alt={comp_Data.logo} />
        </div>
        <div className="compInfo">
          <b>{comp_Data.title}</b>
          <br />
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
            <p>
              <b>Type</b> : {comp_Data.comp_type}
            </p>
            <p>
              <b>Founded</b> : {comp_Data.founded}
            </p>
            <p>
              <b>Company Size</b> : {comp_Data.company_size}
            </p>
            <p>
              <b>Website</b> : {comp_Data.website}
            </p>
          </div>
        </div>
        <div className="right_ratings"></div>
      </div>
    </>
  );
};

export default CompanyPage;
