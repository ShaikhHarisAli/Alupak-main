import React from "react";
import productBanner from "../assets/products/pb.png";
import mobbanner from "../assets/products/Mask Group 47.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const ProductBanner = () => {
  return (
    <div className="relative">
      <img
        className="w-[100vw] xs:hidden md:block"
        src={productBanner}
        alt="banner"
      />
      <img
        className="w-[100vw] xs:block md:hidden"
        src={mobbanner}
        alt="banner"
      />
      <div className="pageBannerH1 absolute xs:top-[45%] ssx:top-[47%] sg:top-[48%] md:top-[43%] ep:top-[45%] lg:top-[44%] xl:top-[48%] xm:top-[44%] xll:top-[45%] 2xl:top-[47%] text-white text-[24px] w-[100%] xs:px-[1rem] ssx:px-[2rem] md:px-[6rem] xs:text-center">
        <h1 className="tracking-in-expand xs:text-[2rem] xm:text-[2.9rem] font-extrabold mb-4 fontBoldAlupak tracking-[.01rem]">
          Products
        </h1>
        <p className="xs:text-[.7rem] ss:text-[.9rem] xs:mb-12 md:mb-3">
          We specialize in manufacturing high-quality packaging materials to
          keep your products <br className="xs:hidden md:block" /> secure and in
          their true form.
        </p>
      </div>
    </div>
  );
};

export default ProductBanner;
