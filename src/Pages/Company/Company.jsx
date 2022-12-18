import React, { useEffect, useState } from "react";
import "./Company.css";
import CompSlider from "./companyComps/compSlider";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { BsFunnel } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import {BottomHire} from "./companyComps/bottomHire";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ComapnyCard from "./companyComps/companyCard";

const Company = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  // const company_list = useSelector((state) => state.company.companies);
  // console.log(company_list);

  const handleChange = (e) => {
    var filteredData = data.filter((ele) =>
      ele.nature.includes(e.target.value)
    );
    console.log(filteredData);
    setData(filteredData);
  };

  const getData = () => {
    axios.get("http://localhost:8080/posts").then((res) => {
      dispatch({ type: "ADD_COMPANY_LIST", payload: res.data });
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="topHire">
        <b>Top companies hiring now</b>
      </div>
      {/* <Link to={"/companypage"}>Comapnypage</Link> */}
      {/* slider */}
      <div className="comp_slider">
        <CompSlider />
      </div>
      {/* companies */}
      <div className="company_main">
        {/* companies filters */}
        <div className="comp_filters">
          <div className="comp_div">
            <BsFunnel fontSize={"20px"} />
            <b>Filters</b>
          </div>
          <hr />
          <div className="cat_checkbox">
            <p>Company type</p>
            <div>
              <CheckboxGroup colorScheme="orange" defaultValue={[]}>
                <Stack spacing={[1, 2]} onChange={handleChange}>
                  <Checkbox value="MNCs">MNCs</Checkbox>
                  <Checkbox value="Startups">Startups</Checkbox>
                  <Checkbox value="Unicorns">Unicorns</Checkbox>
                  <Checkbox value="Manufacturing">Manufacturing</Checkbox>
                  <Checkbox value="Banking & Finance">
                    Banking & Finance
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </div>
          </div>
          <hr />
          <div className="cat_checkbox">
            <p>Industry</p>
            <div>
              <CheckboxGroup colorScheme="orange" defaultValue={[]}>
                <Stack spacing={[1, 2]} onChange={handleChange}>
                  <Checkbox value="Internet">Internet</Checkbox>
                  <Checkbox value="Healthcare">Healthcare</Checkbox>
                  <Checkbox value="Fintech">Fintech</Checkbox>
                  <Checkbox value="Edtech">Edtech</Checkbox>
                  <Checkbox value="Product">Product</Checkbox>
                </Stack>
              </CheckboxGroup>
            </div>
          </div>
          <hr />
          <div className="cat_checkbox">
            <p>Comapany nature</p>
            <div>
              <CheckboxGroup colorScheme="orange" defaultValue={[]}>
                <Stack spacing={[1, 2]} onChange={handleChange}>
                  <Checkbox value="FMCG & Retail">FMCG & Retail</Checkbox>
                  <Checkbox value="B2C">B2C</Checkbox>
                  <Checkbox value="Fortune 500">Fortune 500</Checkbox>
                  <Checkbox value="Hospitality">Hospitality</Checkbox>
                </Stack>
              </CheckboxGroup>
            </div>
          </div>
          <hr />
        </div>
 
 
        <div className="comp_showlist">
          <div className="comp_div">

            <ImOffice fontSize="20px" />
            <b>Showing 2000 companies</b>
          </div>
          <div className="companies_list">
            {data &&
              data.map((ele) => {
                // return <Link to={`/companypage/${ele.id}`}><ComapnyCard key={ele.id} {...ele} /></Link>;
                return <ComapnyCard key={ele.id} {...ele} />;
              })}
          </div>
        </div>
      </div>

      {/* Top companies hiring in INDIA */}
      <div className="bottom_hire">
        <b>Top companies hiring in India</b>
        <div className="bottom_hire_tabs">
          <BottomHire />
        </div>
      </div>
    </div>
  );
};

export default Company;
