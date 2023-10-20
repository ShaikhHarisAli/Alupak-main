import React from "react";
import Flickity from "react-flickity-component";
import time from "../assets/Timer.png";
import quality from "../assets/quality.png";
import sustain from "../assets/Sustain.png";
import "../styles/flickity.css";
import { Usps } from "../components/index";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
  prevNextButtons: true,
  pageDots: false,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};

const HomeUspsCarousel = () => {
  return (
    <div className="mt-12 bg-[#1f1f1f] text-white">
      <Flickity
        className={"carousel relative top-[-2.2rem] upsCarousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
        // groupCells={2}
      >
        <Usps
          imageUrl={time}
          title="Timely Delivery"
          paragraph="We understand our customers’ needs, hence we aim to do swift and
        in-time deliveries."
        />
        <Usps
          imageUrl={quality}
          title="High Quality Materials"
          paragraph="We manufacture high-grade packaging materials to keep your
            products safe and in good shape."
        />
        <Usps
          imageUrl={sustain}
          title="Sustainable Manufacturing"
          paragraph="We consider all safety and quality standards to manufacture our
            products."
        />
      </Flickity>
    </div>
  );
};

export default HomeUspsCarousel;
