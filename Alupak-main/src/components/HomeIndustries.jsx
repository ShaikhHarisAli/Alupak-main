import React, { useRef, useEffect, useState } from "react";
import { HomeIndustriesImages, Button } from "./index";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const HomeIndustries = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="relative my-12">
      <div className="absolute z-[-1]">
        <div
          ref={targetRef}
          className={
            isVisible
              ? "xs:bg-[#ffd303] md:bg-transparent xs:w-[calc(100vw-4rem)] xs:h-[2.5rem] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-7.1rem)] md:h-[4rem] lg:h-[5rem] background-animation"
              : "xs:bg-[#ffd303] md:bg-transparent xs:w-[calc(100vw-4rem)] xs:h-[2.5rem] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-7.1rem)] md:h-[4rem] lg:h-[5rem]"
          }
        >
          {""}
        </div>
        <div
          ref={targetRef}
          className={
            isVisible
              ? "xs:bg-[#ffd303] md:bg-transparent xs:w-[13%] md:w-[50%] xs:h-[5rem] md:h-[13rem] lg:h-[20rem] absolute right-0 background-animationV"
              : "xs:bg-[#ffd303] md:bg-transparent xs:w-[13%] md:w-[50%] xs:h-[5rem] md:h-[13rem] lg:h-[20rem] absolute right-0"
          }
        >
          {""}
        </div>
      </div>
      {/* ------- */}
      <div className="grid md:grid-cols-5 md:pt-8 lg:pt-12 lg:mx-0 xm:mx-12 md:ml-[4rem] lg:ml-[5rem] xm:ml-[10rem]">
        {/* mobile */}
        <div className="xs:block md:hidden">
          <h2
            ref={targetRef}
            className={
              isVisible
                ? "tracking-in-expand fontBoldAlupak xs:text-[2rem] font-black text-[#475569] pt-4 tracking-wider text-center"
                : "fontBoldAlupak xs:text-[2rem] font-black text-[#475569] pt-4 tracking-wider text-center"
            }
          >
            Industries
          </h2>
        </div>

        <div className="md:col-span-4 xs:mx-4 md:mx-0">
          <HomeIndustriesImages />
        </div>
        {/* desktop */}
        <div className="xs:hidden md:block">
          <h2
            ref={targetRef}
            className={
              isVisible
                ? "tracking-in-expand vertical-text md:text-[2.5rem] lg:text-[3rem] xm:text-[5rem] font-black text-[#475569] pt-4 tracking-wider"
                : "vertical-text md:text-[2.5rem] lg:text-[3rem] xm:text-[5rem] font-black text-[#475569] pt-4 tracking-wider"
            }
          >
            Industries
          </h2>
        </div>
      </div>
      {/*  */}
      <div className="text-center m-8 md:mx-[8rem] lg:mx-[10rem] xsm:mx-[20rem]">
        <p className="mb-4 xs:text-sm md:text-xs lg:text-sm">
          Maintaining the quality of final goods while dispatching them for use
          is an integral quest of major industries. Alupak promises to secure
          the true essence of products with quality packaging materials.
        </p>
        <Button value={"Read More"} />
      </div>
    </div>
  );
};

export default HomeIndustries;
