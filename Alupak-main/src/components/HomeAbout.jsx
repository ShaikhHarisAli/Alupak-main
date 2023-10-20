import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AbputBanner2 from "../assets/home/aboutb.png";
import mobBanner from "../assets/home/Mask Group 10@2x.png";
import stamp from "../assets/isocertified.png";
import "../styles/banner.css";
import { Button } from "../components/index";

const HomeAbout = () => {
  const navigate = useNavigate();
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0, // Adjust this value to control the visibility threshold
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
    <React.Fragment>
      <div
        ref={targetRef}
        className={
          isVisible
            ? "fade-up-element show image-container"
            : "fade-up-element image-container"
        }
      >
        <img
          className="xs:hidden md:block"
          src={AbputBanner2}
          alt="banner_about"
        />
        <img
          className="xs:block md:hidden h-[80vh] object-cover"
          src={mobBanner}
          alt="banner_about"
        />
        <div className="text-overlay text-white xs:px-[2rem] xs:py-[2rem] md:px-[3rem] lg:px-[7rem]">
          <div>
            <h1 className="text-[#ffd303] xs:text-[2.5rem] lg:text-[3rem] font-black fontBoldAlupak xs:mb-4 md:mb-[unset]">
              About Us
            </h1>
            <p className="md:mb-2 xs:mb-4 xs:text-xs lg:mb-4 md:text-xs ssx:text-sm lg:text-sm">
              Alupak is Pakistan’s trusted aluminum collapsible tube supplier
              since 2005 based in Karachi, ISO 9001-2015 certified as well as
              proudly meeting European standards. For 18 years, we have been
              manufacturing high-quality packaging materials via aluminum
              collapsible tubes, rigid containers, marker barrels, and capacitor
              cans.
            </p>
            <div className="text-black relative z-50">
              <Button
                value={"Read More"}
                onClick={() => navigate("/about-us")}
              />
            </div>
          </div>
          {/*  */}
          {/* xs:hidden md:block */}
          <div className="absolute w-[100%] xs:left-0 xs:top-[-96px] md:top-[unset] md:left-[-61px] lg:left-[-91px]">
            <img
              className="xs:w-[50%] md:w-[25%] lg:w-[30%] xsm:w-[20%] xs:m-auto md:m-[unset]"
              src={stamp}
              alt="stamp"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeAbout;
