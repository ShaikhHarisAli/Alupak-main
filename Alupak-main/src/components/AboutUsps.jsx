import React, { useEffect, useState, useRef } from "react";
import time from "../assets/about/Group 151.png";
import quality from "../assets/about/Group 152.png";
import sustain from "../assets/about/Group 153.png";
import { Usps, AboutUspsCarousel } from "../components/index";

const AboutUsps = () => {
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
    <React.Fragment>
      <div className="lg:block xs:hidden mt-40">
        <div
          ref={targetRef}
          className={
            isVisible
              ? "fade-up-element show bg-[#1f1f1f] text-white mb-4 lg:px-[5rem] mt-20"
              : "fade-up-element bg-[#1f1f1f] text-white mb-4 lg:px-[5rem] mt-20"
          }
        >
          <div className="grid grid-cols-3 gap-8 relative top-[-2.2rem]">
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
          </div>
        </div>
      </div>

      {/* ----------- */}
      <div className="lg:hidden xs:block">
        <AboutUspsCarousel />
      </div>
    </React.Fragment>
  );
};

export default AboutUsps;
