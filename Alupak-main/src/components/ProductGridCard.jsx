import React, { useState } from "react";
import p1 from "../assets/p1.png";
import v1 from "../assets/acrylic-1.png";
import "../styles/product.css";

const ProductGridCard = () => {
  const [showTexte, setShowTexte] = useState(false);
  const toggleTexte = () => {
    setShowTexte(!showTexte);
  };
  return (
    <div className="container">
      {/* visible */}
      <div className="div1">
        <img src={p1} className="rounded-lg shadow-lg" />
        <div
          onClick={toggleTexte}
          className="rounded-b-lg absolute left-0 right-0 bottom-0 bg-[#ffd303] flex items-center justify-between px-4 py-2 font-semibold text-[#334155] cursor-pointer arrow"
        >
          <h6>Aluminum Cartridge</h6>
          <i className="fas fa-angle-up"></i>
        </div>
      </div>
      {/* collapsable yellow */}
      {showTexte && (
        <div
          className={`hidden-text div2 ${showTexte ? "open" : "closed"}`}
          onClick={toggleTexte}
        >
          <div className="info text-center py-8 px-10 bg-[#ffd303] div2 rounded-lg">
            <img className="w-[20%] m-auto" src={v1} />
            <h1 className="font-bold my-3">Aluminum Cartridge</h1>
            <p className="text-sm mb-2">
              Aluminium tubes are unbreakable, clean, lightweight and compact.
              Valuable materials are dosed sparingly and
              hygienically.…appealing.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGridCard;
