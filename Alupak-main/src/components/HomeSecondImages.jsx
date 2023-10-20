import React from "react";
import A1 from "../assets/home/Alumunium-product1.png";
import A2 from "../assets/home/Alumunium-product2.png";
import A3 from "../assets/home/Alumunium-product3.png";
import { Cards } from "../components/index";

const HomeSecondImages = () => {
  return (
    <div className="grid grid-cols-3 md:gap-3 lg:gap-5 xm:gap-8">
      <Cards
        imageUrl={A1}
        title="Aluminium Cartridge"
        paragraph="We specialize in designing and manufacturing the necessities for filling and packing silicon and polyurethane sealants in aluminum cartridges."
      />
      <Cards
        imageUrl={A2}
        title="Collapsable Aluminium Tubes"
        paragraph="Widely used in the beverage industry for packaging carbonated
        drinks, juices, energy drinks, and more."
      />
      <Cards
        imageUrl={A3}
        title="Rigid Aluminium Tubes"
        paragraph="Widely used in the beverage industry for packaging carbonated
            drinks, juices, energy drinks, and more."
      />
    </div>
  );
};

export default HomeSecondImages;
