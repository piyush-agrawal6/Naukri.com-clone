import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import "./overviewTab.css";

function Overview({title,about}) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Box>
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList className="over_tabs">
          <Tab>Overview</Tab>
          <Tab>Jobs</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="over_div">
                <b>About {title}</b>
                <p>{about}</p>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="jobs_div">
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
        </TabPanels>
      </Tabs>
    </Box>
  );
}



export  {Overview};
