import React, { useEffect, useState, useRef } from "react";
import aboitMission from "../assets/about/Mask Group 39.png";
import mobabout from "../assets/about/Mask Group 45.png";

const AboutMission = () => {
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
      className={isVisible ? "fade-up-element show" : "fade-up-element"}
    >
      <img className="xs:hidden lg:block" src={aboitMission} />
      <img className="xs:block lg:hidden" src={mobabout} />
    </div>
  );
};

export default AboutMission;
