import React from "react";
import mobProductbanner from "../assets/about/ab-mm.png";
import Productbanner from "../assets/about/Group 11.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";
import { Link } from "react-router-dom";

const Pg404 = () => {
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
        <h1 className="text-6xl mb-6 font-[TiroTamil]">404</h1>
        <p className="mb-4 text-sm">
          SORRY! PAGE YOU ARE LOOKING CAN’T BE FOUND.
        </p>
        <p>
          Go back to the{" "}
          <Link to="/" className="underline hover:text-black font-semibold">
            homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Pg404;
