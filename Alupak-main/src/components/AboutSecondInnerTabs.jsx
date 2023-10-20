import React, { useRef, useEffect, useState } from "react";
import "../styles/animate.css";

const AboutSecondInnerTabs = ({ title1, title2, paragraph, imageUrl }) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
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
    <div className="relative">
      {/* ------------------ */}
      <div className="xs:flex xs:flex-col-reverse md:grid grid-cols-5 items-center my-8 mt-12 lg:gap-12">
        {/* @1 */}
        <div className="text-center relative col-span-2">
          <div>
            <h1 className="fontBoldAlupak text-[1.5rem] mb-4">
              <span>{title1}</span>{" "}
              <span className="text-[#FBD404]">{title2}</span>
            </h1>
            <p className="md:text-sm lg:text-base">{paragraph}</p>
          </div>
        </div>
        {/* @2 */}
        <div className="flex flex-row-reverse col-span-3">
          <div className="absolute z-[-1] xs:mt-[-.5rem] xm:mt-[-2rem]">
            <div
              ref={targetRef}
              className={
                isVisible
                  ? "background-animation_HA bg-yellow-400 xs:w-[5rem] xs:h-[7rem] lg:w-[9rem] lg:h-[5rem] xm:w-[15rem] xm:h-[15rem]"
                  : "bg-yellow-400 xs:w-[5rem] xs:h-[7rem] lg:w-[9rem] lg:h-[5rem] xm:w-[15rem] xm:h-[15rem]"
              }
            >
              {""}
            </div>
            <div
              ref={targetRef}
              className={
                isVisible
                  ? "background-animation_HA bg-yellow-400 xs:w-[2rem] xs:h-[9rem] md:h-[15rem] lg:w-[4rem] lg:h-[20rem] xm:w-[5rem] xm:h-[28rem] float-right sf:h-[15rem]"
                  : "bg-yellow-400 xs:w-[2rem] xs:h-[9rem] md:h-[15rem] lg:w-[4rem] lg:h-[20rem] xm:w-[5rem] xm:h-[28rem] float-right"
              }
            >
              {""}
            </div>
          </div>
          <img src={imageUrl} alt={title1} />
        </div>
      </div>
    </div>
  );
};

export default AboutSecondInnerTabs;
