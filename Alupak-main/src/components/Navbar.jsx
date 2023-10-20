import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/Alupak logo.svg";
import blackLogo from "../assets/logoalu.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Search, MobileMenu, ContactModal } from "./index";
import "../styles/main.css";

const Navbar = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const [activeLink, setActiveLink] = useState(""); // Set the initial active link
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsContactOpen, setModalIsContactOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledMob, setIsScrolledMob] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScrollMob = () => {
      const headerHeight = headerRef.current.clientHeight;
      setIsScrolledMob(window.scrollY > headerHeight);
    };
    window.addEventListener("scroll", handleScrollMob);
    return () => {
      window.removeEventListener("scroll", handleScrollMob);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Search Modal Function
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Contact Modal Function
  const openModalContact = () => {
    setModalIsContactOpen(true);
  };
  const CloseContact = () => {
    setModalIsContactOpen(false);
  };

  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <header className="">
        {/* @-Desktop */}
        <nav
          className={`${
            isScrolled
              ? "bg-white z-50 py-2 px-6 lg:py-4 lg:px-12 shadow-lg"
              : "bg-transparent z-50 py-4 px-6 lg:py-8 lg:px-12"
          } xs:hidden md:flex justify-between items-center navbar fixed top-0 left-0 w-full transition-all`}
        >
          <div
            className={`${isScrolled ? "w-[10%]" : ""} `}
            onClick={handleClickNav}
          >
            <Link to="/">
              <img
                className={`${
                  isScrolled ? "hidden" : ""
                } md:w-[60%] lg:w-[85%]`}
                src={logo}
                alt="logo"
              />

              <img
                className={`${isScrolled ? "" : "hidden"} `}
                src={blackLogo}
                alt="logo"
              />
            </Link>
          </div>

          <div>
            <ul className="flex gap-4">
              <li
                className="md:px-2 lg:px-4 tracking-wider"
                onClick={handleClickNav}
              >
                <NavLink
                  exact
                  to="/products"
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  }  md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]`}

                  // className={`${
                  //   activeLink === "products" ? "text-[#ffd303]" : "text-white"
                  // } md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303] ${
                  //   isScrolled ? "text-black" : "text-white"
                  // }`}
                  // onClick={() => handleLinkClick("products")}
                >
                  Products
                </NavLink>
              </li>
              <li
                className="md:px-2 lg:px-4 tracking-wider"
                onClick={handleClickNav}
              >
                <NavLink
                  exact
                  to="about-us"
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  }  md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]`}
                >
                  About Us
                </NavLink>
              </li>
              <li
                className="md:px-2 lg:px-4 tracking-wider"
                onClick={handleClickNav}
              >
                <NavLink
                  exact
                  to="/careers"
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  }  md:text-xs lg:text-sm xl:text-[.9rem] hover-underline-animation hover:text-[#ffd303]`}
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>
          {/* ----------------------------------- */}
          <div className="flex">
            <button className="px-8" onClick={openModal}>
              <svg
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } w-4 h-4 hover:text-[#ffd303]`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
            <Button value={"Contact Us"} onClick={openModalContact} />
          </div>
          {/* ----------------------------------- */}
          {/* Contact Form */}
          {modalIsContactOpen && <ContactModal CloseContact={CloseContact} />}
          {/* Search box */}
          {modalIsOpen && <Search closeModal={closeModal} />}
        </nav>
        {/* -------------------------------------- */}
        {/* @-Mobile */}
        <nav
          ref={headerRef}
          className={`${
            isScrolledMob ? "bg-white shadow-lg justify-between px-4" : "bg-transparent justify-around "
          } xs:flex md:hidden items-center py-4 navbar fixed top-0 w-full z-50 left-0 right-0 transition-all`}
        >
          <div>
            <button onClick={handleMenuToggle} className="border-none">
              <i
                ref={headerRef}
                className={`${
                  isScrolledMob ? "text-black" : "text-white"
                } fa-solid fa-bars text-[1.25rem]`}
              ></i>
            </button>
            <MobileMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
          </div>

          <div
            ref={headerRef}
            className={`${isScrolledMob ? "w-[30%]" : ""} `}
            onClick={handleClickNav}
          >
            <Link to="/">
              <img
                ref={headerRef}
                className={`${isScrolledMob ? "hidden" : ""} xs:w-[62%] m-auto`}
                src={logo}
                alt="logo"
              />

              <img
                ref={headerRef}
                className={`${isScrolledMob ? "" : "hidden"} xs:w-[] m-auto`}
                src={blackLogo}
                alt="logo"
              />
            </Link>
          </div>

          <div>
            <button className="border-none" onClick={openModal}>
              <svg
                ref={headerRef}
                className={`${
                  isScrolledMob ? "text-black" : "text-white"
                } w-4 h-4 hover:text-[#ffd303]`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
            {/* Search box */}
            {modalIsOpen && <Search closeModal={closeModal} />}
          </div>
        </nav>
        {/* ---------------------------------------------- */}
      </header>
    </React.Fragment>
  );
};

export default Navbar;
