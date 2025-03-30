import React from "react";
import ManiImage from "../assets/MainImage.png";

const ProductPage = () => {
  return (
    <div className="container mx-auto pl-16 pr-16 flex gap-6">
      {/*Left Side Image */}
      <div>
        <img src={MainImage} alt="Product" />
      </div>
    </div>
  );
};
export default ProductPage;
