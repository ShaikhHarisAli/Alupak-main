import React from "react";
import Flickity from "react-flickity-component";
import "../styles/flickity.css";
import P1 from "../assets/Vector Smart Object/p1.png";
import P2 from "../assets/Vector Smart Object/p2.png";
import P3 from "../assets/Vector Smart Object/p3.png";
import { ProductIndustriesCard } from "../components/index";

const flickityOptions = {
  initialIndex: 1,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};

const ProductsIndustiresCarousel = () => {
  return (
    <div className="mt-12">
      <Flickity
        className={"carousel ProductCarouselIndustries"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        <ProductIndustriesCard
          imageUrl={P1}
          title="Pharmaceutical"
          paragraph="Creating secure packaging for most crucial products such as that from pharmaceuticals is our utmost priority and expertise."
        />
        <ProductIndustriesCard
          imageUrl={P2}
          title="Paint"
          paragraph="Creating packaging that could let the end customer use paints to their fullest quality and quantity for viable results."
        />
        <ProductIndustriesCard
          imageUrl={P3}
          title="Dying Pigments"
          paragraph="Making the use of dying pigments easy and efficient as we offer secure packaging to lock the true quality of products."
        />

        <ProductIndustriesCard
          imageUrl={P1}
          title="Pharmaceutical"
          paragraph="Creating secure packaging for most crucial products such as that from pharmaceuticals is our utmost priority and expertise."
        />
        <ProductIndustriesCard
          imageUrl={P2}
          title="Paint"
          paragraph="Creating packaging that could let the end customer use paints to their fullest quality and quantity for viable results."
        />
        <ProductIndustriesCard
          imageUrl={P3}
          title="Dying Pigments"
          paragraph="Making the use of dying pigments easy and efficient as we offer secure packaging to lock the true quality of products."
        />
      </Flickity>
    </div>
  );
};

export default ProductsIndustiresCarousel;
