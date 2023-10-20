import React, { useState } from "react";
import {
  AboutBanner,
  AboutMission,
  AboutUsps,
  AboutSecondTabs,
  AboutHistory,
  AboutCertificate,
  Tabs,
} from "../index";

const Aboutus = () => {
  const tabs = [
    { title: "Alupak Foundation" },
    { title: "Corporate History" },
    { title: "Certifications" },
    { title: "Vision & Misssion" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    // section.scrollIntoView({ behavior: "smooth" });
    if (section) {
      const windowHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;
      const scrollOffset = sectionTop - windowHeight / 4;

      window.scrollTo({
        top: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <React.Fragment>
      <AboutBanner />

      <div className="app">
        <Tabs
          tabs={tabs}
          setActiveTab={setActiveTab}
          scrollToSection={scrollToSection}
          activeTab={activeTab}
        />
        <div className="content">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`content-section ${
                activeTab === index ? "active" : ""
              }`}
              id={`section-${index}`}
            >
              {index === 0 && <AboutSecondTabs />}
              {index === 1 && <AboutHistory />}
              {index === 2 && <AboutCertificate />}
              {index === 3 && <AboutMission />}
            </div>
          ))}
        </div>
      </div>

      {/* <AboutSecondTabs /> */}
      {/* <AboutHistory /> */}
      {/* <AboutUsps /> */}
      {/* <AboutCertificate /> */}
      {/* <AboutMission /> */}
    </React.Fragment>
  );
};

export default Aboutus;
