import React from "react";
import {
  ProductBanner,
  ProductPageImageGrid,
  ProductIndustries,
  ProductPageImageGridCarousel,
} from "../index";

const Products = () => {
  return (
    <React.Fragment>
      <ProductBanner />
      <div className="xs:hidden md:block">
        <ProductPageImageGrid />
      </div>
      <div className="xs:block md:hidden">
        <ProductPageImageGridCarousel />
      </div>
      <ProductIndustries />
    </React.Fragment>
  );
};

export default Products;
