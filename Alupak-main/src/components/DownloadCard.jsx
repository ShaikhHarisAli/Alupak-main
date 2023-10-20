import React from "react";
import "../styles/main.css";
import DownloadIcons from "../assets/downloads/Icon ionic-md-code-download.svg";

const DownloadCard = ({ imageUrl, title, paragraph, link }) => {
  const handleDownload = () => {
    const pdfUrl = link;

    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = link;
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <div
      className="DownloadCardHover text-center border-2 border-[#ffd303] p-6 hover:bg-[#ffd303] cursor-pointer
    transform xs:bg-[#ffd303] lg:bg-white transition duration-500 justify-between xs:mx-2 md:mx-[unset]"
    >
      <a
        className="flex flex-col items-center "
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col items-center">
          <div className="t4s-eff-border-run relative bg-[#F5F5F5] p-4 rounded-full w-[fit-content]">
            <img className="w-[2rem]" src={imageUrl} alt={title} />
          </div>
          <div className="xs:py-4 xs:px-2 sg:px-4 md:py-2 md:px-2 lg:px-4 md:pt-2 xm:py-4 xm:px-8 xm:pt-8">
            <h6 className="font-bold xs:mb-2 text-lg md:mb-2 xm:mb-4">
              {title}
            </h6>
            <p className="xs:text-sm md:text-xs xm:text-sm">{paragraph}</p>
          </div>
        </div>

        <div className="">
          <a
            className="mt-6 text-xs underline flex gap-1 p-4"
            onClick={handleDownload}
          >
            <spn className="font-black">Downloads</spn>
            <img src={DownloadIcons} />
          </a>
        </div>
      </a>
    </div>
  );
};

export default DownloadCard;
