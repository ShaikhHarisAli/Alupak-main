import React, { useEffect, useState, useRef } from "react";
import aboitMission from "../assets/about/ab-w.png";
import mobcert from "../assets/about/cer.png";
const AboutCertificate = () => {
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
        isVisible ? "fade-up-element show my-12" : "fade-up-element my-12"
      }
    >
      <img className="xs:hidden lg:block" src={aboitMission} />
      <img className="xs:block lg:hidden w-[90%]" src={mobcert} />
    </div>
  );
};

export default AboutCertificate;
