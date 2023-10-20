import React from "react";
import fb from "../assets/iconfb.svg";
import twitter from "../assets/icontwitter.svg";
import linkedin from "../assets/iconlinkedin.svg";
import yt from "../assets/iconyoutube.svg";
import call from "../assets/iconcall.svg";

const Socials = () => {
  return (
    <div className="mobMenu grid grid-cols-5 xs:gap-2 sg:gap-4 xll:gap-[0rem] justify-items-center items-center sx:my-6 md:mt-6 lg:mt-0 text-white">
      {/* @Facebook */}
      <p className=" rounded-full social-icon hover:animate-bounce">
        <a
          href="https://www.facebook.com/image.est1993/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-4" src={fb} alt="fb" />
          {/* <i class="fa-brands fa-facebook-f sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i> */}
        </a>
      </p>
      {/* @Twitter */}
      <p className="rounded-full social-icon hover:animate-bounce">
        <a
          href="https://twitter.com/image_est1993?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-4" src={twitter} alt="twitter" />
          {/* <i class="fa-brands fa-twitter sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i> */}
        </a>
      </p>
      {/* @Linkedin */}
      <p className=" rounded-full social-icon hover:animate-bounce">
        <a
          href="https://pk.linkedin.com/company/image-pakistan-ltd"
          target="_blank"
          rel="noreferrer"
        >
          {/* <i class="fa-brands fa-linkedin-in sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i> */}
          <img className="w-4" src={linkedin} alt="ln" />
        </a>
      </p>
      {/* @Youtube */}
      <p className="rounded-full social-icon hover:animate-bounce">
        <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">
          {/* <i class="fa-brands fa-youtube sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i> */}
          <img className="w-4" src={yt} alt="yt" />
        </a>
      </p>
      {/* @Call */}
      <p className=" rounded-full social-icon hover:animate-bounce">
        <a type="email" href="mailto:info@image.net.pk" rel="noreferrer">
          {/* <i class="fa fa-phone sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i> */}
          {/* <i class="fa fa-phone fa-light "></i> */}
          <img className="w-4" src={call} alt="call" />
        </a>
      </p>
      {/* @Email */}
      {/* <p className="bg-white rounded-full social-icon hover:animate-bounce">
        <a type="email" href="mailto:info@image.net.pk" rel="noreferrer">
          <i class="fa-sharp fa-regular fa-envelope sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p> */}

      {/* @Instagram */}
      {/* <p className="bg-white rounded-full social-icon hover:animate-bounce">
        <a
          href="https://www.instagram.com/image.est1993/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-instagram sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p> */}

      {/* @Snapchat */}
      {/* <p className="bg-white rounded-full social-icon">
        <a href="https://www.w3schools.com/">
          <i class="fa-brands fa-snapchat sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p> */}
    </div>
  );
};

export default Socials;
