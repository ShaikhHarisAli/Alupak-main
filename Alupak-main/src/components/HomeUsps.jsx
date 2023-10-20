import React, { useEffect, useState, useRef } from "react";
import time from "../assets/Timer.png";
import quality from "../assets/quality.png";
import sustain from "../assets/Sustain.png";
import { Usps } from "../components/index";

const HomeUsps = () => {
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
            ? "fade-up-element show bg-[#1f1f1f] text-white mb-4 lg:px-[5rem] mt-20"
            : "fade-up-element bg-[#1f1f1f] text-white mb-4 lg:px-[5rem] mt-20"
        }
      >
        <div className="grid grid-cols-3 gap-8 relative top-[-2.2rem]">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeUsps;
