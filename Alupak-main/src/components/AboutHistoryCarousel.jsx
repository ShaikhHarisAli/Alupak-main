// import React from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: true,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};

const AboutHistoryCarousel = () => {
  return (
    <>
      <div className="mt-12">
        <Flickity
          className={"carousel aboutCarousel"}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
          // groupCells={2}
        >
          {/* 1 */}
          <div className="bg-[#F8F7F5] p-6 h-[15rem] flex flex-col justify-center w-[100%] mx-4">
            <h6 className="font-black text-[1.2rem]">Work</h6>
            <p className="text-sm">
              Pharmaceutical, Cosmetics & Toiletries, Food Items, Industrial
              Products, Household Goods.
            </p>
          </div>
          {/* 2 */}
          <div className="bg-[#FBD404] text-white p-6 h-[18rem] flex flex-col justify-center w-[100%] mx-4">
            <h1 className="text-[2rem]">
              <span> Presence of</span> <br />{" "}
              <span className="fontBoldAlupak text-[2.2rem]">18 YEARS</span>
            </h1>
          </div>
          {/* 3 */}
          <div className="bg-[#F8F7F5] p-6 h-[15rem] flex flex-col justify-center w-[100%] mx-4">
            <h6 className="font-black text-[1.2rem]">Promises</h6>
            <p className="text-sm">
              Aluminium keeps its promises. The collapsible aluminium tube is
              still an unbeatable packaging.
            </p>
          </div>
        </Flickity>
      </div>
    </>
  );
};

export default AboutHistoryCarousel;
