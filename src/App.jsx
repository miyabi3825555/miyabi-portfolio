import React, { useState } from "react";
import "./styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";

export const App = () => {
  return (
    <>
      <h1>miyabi-portfolio</h1>
      <Tabs>
        <TabList>
          <Tab>HOME</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </TabList>
        <TabPanel>
          <Home />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </Tabs>
    </>
  );
};
