import React from "react";

const Tabs = ({ tabs, setActiveTab, scrollToSection, activeTab }) => {
  const handleTabClick = (index) => {
    setActiveTab(index);
    scrollToSection(index);
  };

  return (
    <div className="tabs flex justify-between lg:mx-28 xsm:mx-80 my-8 mb-12 xs:hidden lg:flex">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={
            activeTab === index
              ? "active px-4 text-[#FBD404] font-black tabsUnderline"
              : "px-4 text-[#4b5563] font-black"
          }
          onClick={() => handleTabClick(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
