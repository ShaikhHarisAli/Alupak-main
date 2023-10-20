import React, { useRef, useEffect, useState } from "react";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";
import { AboutHistoryCarousel, AboutUsps } from "./index";

const AboutHistory = () => {
  const targetRef = useRef(null);
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleAnimateClick = () => {
    setShowAnimation(!showAnimation);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowAnimation(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // ------------------

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
    <>
      <div className="xs:mx-4 lg:mx-40 xs:mb-[6rem]">
        <div className="text-center">
          <h1 className="text-[1.5rem] font-black mb-[-1.5rem] md:hidden">
            Entered the business in 2005
          </h1>

          {/* -- */}
          <div className="md:grid grid-cols-12 xs:hidden">
            {/* @1 */}
            <div className="col-span-11">
              <h1 className="xs:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.5rem] font-black mb-8">
                Entered the business in 2005
              </h1>
              {/* ---- */}
              <div
                ref={componentRef}
                className={`grid grid-cols-3 items-center xs:mx-12 md:mx-[unset] relative md:left-[36%] lg:left-[31%] xl:left-[33%] xm:left-[36%] top-[50%] ${
                  showAnimation ? "animate" : ""
                }`}
              >
                {/* 1 */}
                <div
                  className={`card bg-[#F8F7F5] p-6 md:h-[8rem] lg:h-[10rem] xm:h-[15rem] flex flex-col justify-center ${
                    showAnimation ? "left" : ""
                  }`}
                >
                  <h6 className="font-black text-[1.2rem]">Work</h6>
                  <p className="md:text-[13px] xm:text-sm">
                    Pharmaceutical, Cosmetics & Toiletries, Food Items,
                    Industrial Products, Household Goods.
                  </p>
                </div>

                {/* 3 */}
                <div
                  className={`card bg-[#F8F7F5] p-6 md:h-[8rem] lg:h-[10rem] xm:h-[15rem] flex flex-col justify-center ${
                    showAnimation ? "right" : ""
                  }`}
                >
                  <h6 className="font-black text-[1.2rem]">Promises</h6>
                  <p className="md:text-[13px] xm:text-sm">
                    Aluminium keeps its promises. The collapsible aluminium tube
                    is still an unbeatable packaging.
                  </p>
                </div>
                {/* 2 */}
                <div
                  className={`card bg-[#FBD404] text-white p-6 md:h-[13rem] lg:h-[15rem] xm:h-[20rem] flex flex-col justify-center ${
                    showAnimation ? "middle" : ""
                  }`}
                >
                  <h1 className="md:text-[1.5rem] lg:text-[2rem]">
                    <span> Presence of</span> <br />{" "}
                    <span className="fontBoldAlupak md:text-[2rem] lg:text-[2.2rem]">
                      18 YEARS
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            {/* @2 */}
            <div className="xs:hidden md:grid lg:mr-[-5rem] xm:mr-[-1rem]">
              <h1
                ref={targetRef}
                className={
                  isVisible
                    ? "2xl:tracking-in-expand vertical-text md:text-[2.5rem] lg:text-[3rem] xm:text-[5rem] font-black text-[#475569] pt-4 tracking-wider"
                    : "vertical-text md:text-[2.5rem] lg:text-[3rem] xm:text-[5rem] font-black text-[#475569] pt-4 tracking-wider"
                }
              >
                History
              </h1>
            </div>
          </div>
          {/* ---------------------------------- */}
          <div className="md:hidden xs:block">
            <AboutHistoryCarousel />
          </div>
        </div>
      </div>
      {/* ---- */}
      <AboutUsps />
    </>
  );
};

export default AboutHistory;
