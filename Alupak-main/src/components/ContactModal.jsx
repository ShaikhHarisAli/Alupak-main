import React from "react";
import "../styles/modal.css";
import img from "../assets/contact.png";
import mobimg from "../assets/home/mob.png";
import { ButtonBlack } from "./index";

const ContactModal = ({ CloseContact }) => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full modal-container z-50">
      <div className="relative bg-white rounded-lg xs:w-[80%] md:max-w-md md:min-w-[70vw] lg:max-w-md lg:min-w-[50vw] min-h-[50vh]">
        {/* @-content */}
        <div className="xs:flex flex-col-reverse md:grid grid-cols-6 relative">
          <div className="col-span-4 p-5 xs:text-left">
            <h1 className="xs:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] fontBoldAlupak md:mb-4 lg:mb-6 xs:mb-4">
              Contact Us
            </h1>
            <div className="md:grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-4">
              {/* 1 */}
              <div className="mb-2">
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First Name<span className="text-[#ffd303]">*</span>
                </label>
                <input
                  type="text"
                  className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
                  required
                />
              </div>
              {/* 2 */}
              <div className="mb-2">
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name<span className="text-[#ffd303]">*</span>
                </label>
                <input
                  type="text"
                  className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
                  required
                />
              </div>
              {/* 3 */}
              <div className="mb-2 col-span-2">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email address<span className="text-[#ffd303]">*</span>
                </label>
                <input
                  type="email"
                  className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
                  required
                />
              </div>
              {/* 4 */}
              <div className="mb-2 col-span-2">
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="mt-8 float-right">
              <ButtonBlack value={"Submit"} />
            </div>
          </div>
          {/* ------------------------------------------- */}
          <div className="col-span-2">
            <img
              src={img}
              className="md:h-[100%] rounded-br-lg rounded-tr-lg md:block xs:hidden "
            />
            <img
              src={mobimg}
              className="rounded-t-lg xs:block md:hidden w-full h-[10rem] object-cover"
            />
          </div>
        </div>
        {/* @-close button */}
        <div
          className="block text-right cursor-pointer text-xl absolute top-[-3%] right-[-3%]"
          onClick={CloseContact}
        >
          <span className="text-white bg-[#3f3f46] rounded-full px-3 py-2">
            {" "}
            &times;
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
