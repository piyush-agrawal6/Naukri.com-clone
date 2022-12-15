import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useState } from 'react'


function BottomHire() {
    const [tabIndex, setTabIndex] = useState(0)
  
    const handleTabsChange = (index) => {
      setTabIndex(index)
    }
  
    return (
      <Box>
  
        <Tabs index={tabIndex} onChange={handleTabsChange} >
          <TabList>
            <Tab>Company by Type</Tab>
            <Tab>Comapany by Industry</Tab>
            <Tab>Comapny by Location</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Click the tabs or pull the slider around</p>
            </TabPanel>
            <TabPanel>
              <p>Yeah yeah. What's up?</p>
            </TabPanel>
            <TabPanel>
              <p>Oh, hello there.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    )
  }

  export default BottomHire;