import React, { useEffect, useState, useRef } from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import time from "../assets/about/Group 151.png";
import quality from "../assets/about/Group 152.png";
import sustain from "../assets/about/Group 153.png";
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
const AboutUspsCarousel = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this value to control the visibility threshold
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };
  return (
    <div
      ref={targetRef}
      className={
        isVisible
          ? "fade-up-element show mt-12 bg-[#1f1f1f] text-white"
          : "fade-up-element mt-12 bg-[#1f1f1f] text-white"
      }
    >
      <Flickity
        className={"carousel relative top-[-2.2rem] aboutuspsCarousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        <Usps
          imageUrl={time}
          title="Technical Expertise"
          paragraph="We hold a diverse team of experts who specialize in knowledge of
            what goes into creating Alupak’s products."
        />
        <Usps
          imageUrl={quality}
          title="Regulatory Compliance"
          paragraph="We strictly follow all production and quality standards, laws,
            and guidelines to ensure the safe manufacturing of goods."
        />
        <Usps
          imageUrl={sustain}
          title="Competitive Pricing"
          paragraph="We offer good pricing points which are based on our quality
            production standards as well as the market rate."
        />
      </Flickity>
    </div>
  );
};

export default AboutUspsCarousel;
