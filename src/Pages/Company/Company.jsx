import React from "react";
import "./Company.css";
import CompSlider from "./companyComps/compSlider";
import { Checkbox, CheckboxGroup,Stack } from '@chakra-ui/react'
import { BsFunnel } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import BottomHire from "./companyComps/bottomHire";

const Company = () => {
  const handleChange=(e)=>{
    console.log(e.target.value);
  }

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
              <CheckboxGroup
                colorScheme="orange"
                defaultValue={[]}
                
              >
                <Stack spacing={[1, 2]} onChange={handleChange}>
                  <Checkbox value="MNCs">MNCs</Checkbox>
                  <Checkbox value="Startups">Startups</Checkbox>
                  <Checkbox value="Unicorns">Unicorns</Checkbox>
                  <Checkbox value="Manufacturing">Manufacturing</Checkbox>
                  <Checkbox value="Banking & Finance">Banking & Finance</Checkbox>
                </Stack>
              </CheckboxGroup>
            </div>
          </div>
          <hr />
          <div className="cat_checkbox">
            <p>Industry</p>
            <div>
              <CheckboxGroup
                colorScheme="orange"
                defaultValue={[]}
                
              >
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
            <p>Location</p>
            <div>
              <CheckboxGroup
                colorScheme="orange"
                defaultValue={[]}
                
              >
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
          <div style={{ display: "flex", gap: "5px", color: "gray" }}>
            <ImOffice fontSize="20px" />
            <b>Showing 2000 companies</b>
          </div>
        </div>
      </div>

      {/* Top companies hiring in INDIA */}
      <div className="bottom_hire">
        <b>Top companies hiring in India</b>
        <div className="bottom_hire_tabs">
          <BottomHire/>
        </div>
      </div>
    </div>
  );
};

export default Company;
