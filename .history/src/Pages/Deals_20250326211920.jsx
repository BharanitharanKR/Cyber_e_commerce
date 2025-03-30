import React from "react";
import AllProducts from "../components/AllProducts";
import Tracker from "../components/Tracker";
import ShopPage from "../components/ShopPage";
import { Sidebar } from "lucide-react";


const Deals = () => {
  return (
    <div>
      <AllProducts />
      <Tracker />
      <Sidebar />{" "}
    </div>
  );
};

export default Deals;
