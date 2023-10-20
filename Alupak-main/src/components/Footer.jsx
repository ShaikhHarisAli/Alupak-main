import React, { useState } from "react";
import { FooterMenu, Socials, ContactModal } from "./index";
import { footerData } from "../data/data";
import logo from "../assets/logo footer.png";
import bg_logo from "../assets/Logo footer bg.png";
import mail from "../assets/iconmail.svg";
import location from "../assets/iconlocation.svg";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="absolute w-full h-auto bg-[#1f1f1f] text-white xs:footerShadow lg:shadow-inner xm:px-12">
      {/* ----------------------------------------- */}
      <div className="">
        {/* xs:hidden md:block */}
        <img
          className="md:w-[34%] absolute top-0 md:bottom-0 md:h-[-webkit-fill-available] xs:h-[22rem]"
          src={bg_logo}
          alt="bg"
        />
      </div>

      <div className="md:pb-6 lg:pb-11 xs:px-8 md:px-0 xs:pt-24 md:pt-12 xs:pb-8">
        {/* md:block */}
        <div className="md:grid md:grid-cols-7 md:gap-2 md:ml-4 md:mr-4 lg:ml-16 lg:mr-16 lg:gap-1 lg:mx-16 xm:mx-20 md:mt-4 xs:flex flex-col">
          <div className="relative col-span-2">
            <img
              className="m-auto mb-4 mt-[-2rem] xs:w-[35%] md:w-[40%]"
              src={logo}
              alt="image_logo"
            />
            <p className="xs:text-[12px] lg:text-[13px] text-center mb-4 text-[#d4d4d8]">
              Manufacturing high-quality aluminum collapsible tubes and more
              similar packaging materials since 2005.
            </p>
            <Socials />
          </div>
          {/* -- */}
          {footerData.map(({ title, content }) => (
            <FooterMenu
              key={title}
              title={title}
              content={content}
              onContactClick={handleContactClick}
            />
          ))}
          {isModalOpen && <ContactModal onClose={handleCloseModal} />}
          {/* -- */}
          <div className="text-sm col-span-2 xs:mt-4 md:mt-0">
            <div className="flex items-center gap-3 mb-4">
              <img className="md:w-[6%] lg:w-[4%]" src={mail} alt="mail" />

              <div className="md:text-[12px] lg:text-[13px]">
                <a href="mailto:exmaple@gmail.com">exmaple@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <img className="md:w-[6%] lg:w-[4%]" src={location} alt="loc" />
              <div className="md:text-[12px] lg:text-[13px]">
                Plot 1&2 Sector B-VII, Export Processing Zone, Landhi Industrial
                Area, Sector B Karachi Export Processing Zone (KEPZ) Landhi
                Town, Karachi, Karachi City, Sindh.
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------- */}
      </div>
    </footer>
  );
};

export default Footer;
