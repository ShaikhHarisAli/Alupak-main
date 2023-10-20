import { Button } from "../components/index";
import banner2 from "../assets/home/bannerHome.png";
import mobBanner from "../assets/home/Mask Group 44@2x.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-[100vw] xs:hidden md:block h-[95vh]"
        src={banner2}
        alt="banner"
      />
      <img className="md:hidden xs:block" src={mobBanner} />
      <div className="banner-text absolute left-[-100%] top-[50%] text-white text-[24px] md:w-[70%] lg:w-[60%] xs:px-[2rem] md:px-[6rem] xs:text-center md:text-left ">
        <h1 className="xs:text-[1.2rem] ssx:text-[1.5rem] lg:text-[2rem] xm:text-[2.9rem] font-extrabold mb-4 fontBoldAlupak tracking-[.01rem] xs:mt-[3rem]">
          Keeping your product’s <br className="xs:hidden md:block" /> quality
          untapped and intact
        </h1>
        <p className="md:text-[.9rem] xs:mb-12 md:mb-3 xs:text-[13px]">
          Our packaging materials are manufactured to keep your products safe,
          secure and as they <br className="xs:hidden lg:block" /> have been
          packed.
        </p>
        <div className="text-black">
          <Button value={"Read More"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
