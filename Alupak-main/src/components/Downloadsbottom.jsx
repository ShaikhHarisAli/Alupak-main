import React, { useState } from "react";
import db from "../assets/downloads/Downloads page.png";
import { Button, ContactModal } from "./index";
import { useNavigate } from "react-router-dom";

const Downloadsbottom = () => {
  const navigate = useNavigate();
  const [modalIsContactsOpen, setModalIsContactsOpen] = useState(false);
  // @-Contact Modal Function
  const openModalContacts = () => {
    setModalIsContactsOpen(true);
  };
  const CloseContact = () => {
    setModalIsContactsOpen(false);
  };
  return (
    <div className="xs:flex xs:flex-col-reverse md:grid grid-cols-2">
      <div className="bg-[#F2F2F2] xs:p-6 lg:p-12 xm:px-16 xm:py-12 flex flex-col justify-center xs:text-center lg:text-left">
        <h1 className="fontBoldAlupak xs:text-[1.2rem] lg:text-[1.9rem] mb-4">
          DO YOU WANT TO CUSTOMIZE <br className="xs:block md:hidden" /> YOUR
          PRODUCTS?
        </h1>
        <div>
          <p className="mb-4 xs:text-sm md:text-xs lg:text-base">
            Alupak believes in providing packaging solutions to fit all needs
            made for different types of industrial standards and requirements.
            Hence, we are pledged to manufacture aluminum products customized
            for every need, and every industry and secure the quality and
            properties of each produced goods. If you are looking for such a
            customized solution, please feel free to email us your requirements.
          </p>

          <Button value={"GET IN TOUCH WITH US"} onClick={openModalContacts} />

          {/* ----------------------------------- */}
          {/* Contact Form */}
          {modalIsContactsOpen && <ContactModal CloseContact={CloseContact} />}
        </div>
      </div>
      <div>
        <img className="" src={db} />
      </div>
    </div>
  );
};

export default Downloadsbottom;
