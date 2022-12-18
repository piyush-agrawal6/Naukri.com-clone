import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import "./bottomHire.css";

function BottomHire() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Box>
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList className="hireTabs">
          <Tab>Company by Type</Tab>
          <Tab>Comapany by Industry</Tab>
          <Tab>Comapny by Location</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="hireList">
              <ul>
                <li>Foreign MNC companies in India</li>
                <li>Corporate companies in India</li>
                <li>Startups companies in India</li>
                <li>Indian MNC companies in India</li>
                <li>Govt / PSU companies in India</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="hireList">
              <ul>
                <li>IT services & consulting companies in India</li>
                <li>Software product companies in India</li>
                <li>Internet companies in India</li>
                <li>E-Learning/EdTech companies in India</li>
                <li>Fintech / Payments companies in India</li>
                <li>Financial services companies in India</li>
                <li>Pharmaceutical & Life sciences companies in India</li>
                <li>Engineering & Construction companies in India</li>
                <li>Industrial equipments / Machinary companies in India</li>
                <li>Medical services / Hospital companies in India</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="hireList">
              <ul>
                <li>Companies in Banglore / Bengaluru</li>
                <li>Companies in Delhi / NCR</li>
                <li>Companies in Mumbai (All areas)</li>
                <li>Companies in Haidrabad/Secundrabad</li>
                <li>Companies in Chennai</li>
                <li>Companies in Pune</li>
              </ul>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}



export  {BottomHire};
