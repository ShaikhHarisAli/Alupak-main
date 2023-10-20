import React, { useState } from "react";
import { AboutSecondInnerTabs } from "./index";
import A1 from "../assets/about/Placement Area.png";
import "../styles/main.css";

const AboutSecondTabs = () => {
  // const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="xs:mx-4 lg:mx-20 xm:mx-40 my-8">
      {/* <div className="tabs flex justify-around xs:hidden lg:flex">
        <button
          className={
            activeTab === 1
              ? "active px-4 text-[#FBD404] font-black tabsUnderline"
              : "px-4 text-[#4b5563] font-black"
          }
          onClick={() => handleTabClick(1)}
        >
          Alupak Foundation
        </button>
        <button
          className={
            activeTab === 2
              ? "active px-4 text-[#FBD404] font-black tabsUnderline"
              : "px-4 text-[#4b5563] font-black"
          }
          onClick={() => handleTabClick(2)}
        >
          Corporate History
        </button>
        <button
          className={
            activeTab === 3
              ? "active px-4 text-[#FBD404] font-black tabsUnderline"
              : "px-4 text-[#4b5563] font-black"
          }
          onClick={() => handleTabClick(3)}
        >
          Certifications
        </button>
        <button
          className={
            activeTab === 4
              ? "active px-4 text-[#FBD404] font-black tabsUnderline"
              : "px-4 text-[#4b5563] font-black"
          }
          onClick={() => handleTabClick(4)}
        >
          Vision & Misssion
        </button>
      </div> */}
      {/* <div className="tab-content">
        {activeTab === 1 && (
          <AboutSecondInnerTabs
            title1="Alupak"
            title2="Foundation"
            paragraph="We started our journey of manufacturing aluminum collapsible tubes in 1983. Since our inception, we have been making a significant contribution to industries within Pakistan as well as internationally with high-standard packaging solutions, customized for every need."
            imageUrl={A1}
          />
        )}
        {activeTab === 2 && (
          <AboutSecondInnerTabs
            title1="Corporate"
            title2="History"
            paragraph="We started our journey of manufacturing aluminum collapsible tubes in 1983. Since our inception, we have been making a significant contribution to industries within Pakistan as well as internationally with high-standard packaging solutions, customized for every need."
            imageUrl={A1}
          />
        )}
        {activeTab === 3 && (
          <AboutSecondInnerTabs
            title1="Certifications"
            // title2="Foundation"
            paragraph="We started our journey of manufacturing aluminum collapsible tubes in 1983. Since our inception, we have been making a significant contribution to industries within Pakistan as well as internationally with high-standard packaging solutions, customized for every need."
            imageUrl={A1}
          />
        )}
        {activeTab === 4 && (
          <AboutSecondInnerTabs
            title1="Vision & "
            title2="Mission"
            paragraph="We started our journey of manufacturing aluminum collapsible tubes in 1983. Since our inception, we have been making a significant contribution to industries within Pakistan as well as internationally with high-standard packaging solutions, customized for every need."
            imageUrl={A1}
          />
        )}
      </div> */}

      <div>
        <AboutSecondInnerTabs
          title1="Alupak"
          title2="Foundation"
          paragraph="We started our journey of manufacturing aluminum collapsible tubes in 2005. Since our inception, we have been making a significant contribution to industries within Pakistan as well as internationally with high-standard packaging solutions, customized for every need."
          imageUrl={A1}
        />
      </div>
    </div>
  );
};

export default AboutSecondTabs;
