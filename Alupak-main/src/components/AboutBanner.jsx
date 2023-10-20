import React from "react";
import mobProductbanner from "../assets/about/ab-mm.png";
import Productbanner from "../assets/about/Group 11.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const AboutBanner = () => {
  return (
    <div className="relative">
      <img
        className="w-[100vw] xs:hidden md:block"
        src={Productbanner}
        alt="banner"
      />
      <img
        className="w-[100vw] xs:block md:hidden"
        src={mobProductbanner}
        alt="banner"
      />
      <div className="pageBannerH1 absolute xs:top-[45%] ssx:top-[47%] sg:top-[48%] md:top-[43%] ep:top-[45%] lg:top-[44%] xl:top-[48%] xm:top-[44%] xll:top-[45%] 2xl:top-[47%] text-white text-[24px] w-[100%] xs:px-[1rem] ssx:px-[2rem] md:px-[6rem] xs:text-center">
        <h1 className="tracking-in-expand xs:text-[2rem] xm:text-[2.9rem] font-extrabold mb-4 fontBoldAlupak tracking-[.01rem]">
          About Us
        </h1>
        <p className="xs:text-[.7rem] ss:text-[.9rem] xs:mb-12 md:mb-3">
          Alupak is Pakistan’s trusted aluminum collapsible tube supplier since{" "}
          <br className="xs:hidden md:block" />
          2005 based in Karachi, ISO 9001-2015 certified as well as proudly{" "}
          <br className="xs:hidden md:block" /> meeting European standards.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
