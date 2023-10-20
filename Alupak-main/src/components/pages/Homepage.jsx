import React from "react";
import {
  Banner,
  HomeSecond,
  HomeAbout,
  HomeUsps,
  HomeUspsCarousel,
  HomeIndustries,
} from "../index";

const Homepage = () => {
  return (
    <React.Fragment>
      <Banner />
      <HomeSecond />
      <HomeAbout />
      {/* mobile usps */}
      <div className="md:hidden">
        <HomeUspsCarousel />
      </div>
      {/* desktop usps */}
      <div className="sx:hidden md:block">
        <HomeUsps />
      </div>
      <HomeIndustries />
    </React.Fragment>
  );
};

export default Homepage;
