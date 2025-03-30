import React from "react";
import AllProducts from "../components/AllProducts"; // ✅ Correct Import

const Deals = () => {
  return (
    <div>
      <h2>Deals Page</h2>
      <AllProducts /> {/* ✅ Renders AllProducts inside Deals */}
    </div>
  );
};

export default Deals;
