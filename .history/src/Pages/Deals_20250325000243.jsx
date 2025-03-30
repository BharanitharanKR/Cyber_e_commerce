import React from "react";
import AllProducts from "../components/AllProducts"; // ✅ Correct Import

const Deals = () => {
  return (
    <div>
      <AllProducts /> {/* ✅ Renders AllProducts inside Deals */}
    </div>
  );
};

export default Deals;
