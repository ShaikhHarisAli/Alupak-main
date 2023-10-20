import React from "react";
// import blackLogo from "../assets/logoalu.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/main.css";

const MobileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 z-50 shadow-lg`}
      onClick={onClose}
    >
      <div className="fixed top-0 left-0 bottom-0 w-[80%] bg-[#f8fafc] rounded-r-lg  shadow-lg transform translate-x-0 transition-transform ease-in-out duration-300">
        <div className="flex justify-center p-4">
          {/* <img src={logo} alt="logo" /> */}
          <h1 className="text-[#475569] text-[1.5rem] font-black">MENU</h1>
          <span className="text-gray-600 px-3 py-2 text-[2rem] absolute top-0 right-0">
            {" "}
            &times;
          </span>
        </div>
        <hr />

        <div className="p-4 text-center">
          <ul className="flex flex-col gap-4">
            <li
              className="md:px-2 lg:px-4 tracking-wider"
              onClick={handleClickNav}
            >
              <NavLink exact to="/products" className="text-[#64748b]">
                Products
              </NavLink>
            </li>
            <li
              className="md:px-2 lg:px-4 tracking-wider"
              onClick={handleClickNav}
            >
              <NavLink exact to="about-us" className="text-[#64748b]">
                About Us
              </NavLink>
            </li>
            <li
              className="md:px-2 lg:px-4 tracking-wider"
              onClick={handleClickNav}
            >
              <NavLink exact to="/careers" className="text-[#64748b]">
                Careers
              </NavLink>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default MobileMenu;
