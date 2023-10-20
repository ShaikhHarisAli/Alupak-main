import React from "react";
import { DownloadCard, DownloadsUsefulLinksCarousel, Button } from "./index";
import d1 from "../assets/downloads/growth.png";
import d2 from "../assets/downloads/medal (1).png";
import d3 from "../assets/downloads/acrylic.png";
import d4 from "../assets/downloads/Iconcircle.png";
import d5 from "../assets/downloads/shield.png";
import d6 from "../assets/downloads/setting.png";
import d7 from "../assets/downloads/layers.png";
import d8 from "../assets/downloads/test.png";
import d9 from "../assets/downloads/acrylic2.png";
//
import l1 from "../assets/alupak download/Alupak Development.pdf";
import l2 from "../assets/alupak download/Alupak ISO Certificate.pdf";
import l3 from "../assets/alupak download/Aluminium Can apk.pdf";
import l4 from "../assets/alupak download/Aluminium Information apk.pdf";
import l5 from "../assets/alupak download/Certificate of Compliance apk.pdf";
import l6 from "../assets/alupak download/Internal Lacquer apk.pdf";
import l7 from "../assets/alupak download/Basecoat apk.pdf";
import l8 from "../assets/alupak download/Latex Sealing Compound apk.pdf";
import l9 from "../assets/alupak download/Collapsibles Aluminium Tubes apk.pdf";

const DownloadsUsefulLinks = () => {
  return (
    <div className="my-8 xs:mx-4">
      <div className="flex flex-col items-center mb-12">
        <h6 className="fontBoldAlupak text-[1.5rem]">USEFUL LINKS</h6>
        <span className="bg-[#ffd303] h-[.2rem] w-[7rem] mt-3 mb-2"></span>
        <p className="text-center text-[.9rem]">
          Here are some of our significant links to unlock details of our{" "}
          <br className="xs:hidden md:block" />
          certifications and materials.
        </p>
      </div>
      {/* ----------- */}
      <div className="grid grid-cols-3 md:gap-4 lg:gap-12 lg:mx-16 xm:mx-40 sx:hidden md:grid">
        <DownloadCard
          imageUrl={d1}
          title="Alucan Development"
          paragraph="Our local business unit has covered a journey of expansions to produce and deliver the best final products to all clients till date."
          link={l1}
        />

        <DownloadCard
          imageUrl={d2}
          title="Alucan ISO Certificate"
          paragraph="ISO 9001:2015 certified by the Bureau Veritas Certification Holding SAS – UK Branch"
          link={l2}
        />

        <DownloadCard
          imageUrl={d3}
          title="Aluminium Cartridge"
          paragraph="Manufacturing single-use containers for packaging primarily made of aluminum."
          link={l3}
        />

        <DownloadCard
          imageUrl={d4}
          title="Aluminium Information"
          paragraph="Using aluminum is an effective solution for packaging as it is lightweight, magnetizable, stable, and transport energy-saving."
          link={l4}
        />

        <DownloadCard
          imageUrl={d5}
          title="Certificate of Compliance"
          paragraph="Certified by high authorities as being within raw material production standards and does not come in direct contact with animal-origin materials."
          link={l5}
        />

        <DownloadCard
          imageUrl={d6}
          title="Internal Lacquer Ammonia"
          paragraph="The quality of our aluminum collapsible is thoroughly checked which abides by the chemical resistance of internal protective coating."
          link={l6}
        />

        <DownloadCard
          imageUrl={d7}
          title="Basecoat"
          paragraph="Discover the secrets of our premium basecoat – click here to find out more!"
          link={l7}
        />
        <DownloadCard
          imageUrl={d8}
          title="Latex sealing compound"
          paragraph="Easy processing and high proceedings security. Good Latex - cyclization also by using internal lacquers with slip agent. Very good all-round properties and resistant for various fillings."
          link={l8}
        />
        <DownloadCard
          imageUrl={d9}
          title="Collapsible Aluminium Tube"
          paragraph="Effortlessly package ointments and more with our collapsible aluminum tubes – the epitome of convenience and durability. Click here to download the manual!"
          link={l9}
        />
      </div>
      {/* ----------- */}
      <div className="md:hidden xs:block">
        <DownloadsUsefulLinksCarousel />
      </div>
    </div>
  );
};

export default DownloadsUsefulLinks;
