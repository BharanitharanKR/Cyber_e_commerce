import React from "react";
import AllProducts from "../components/AllProducts";
import Tracker from "../components/Tracker";
import ShopPage from "../components/ShopPage";
import { Sidebar } from "lucide-react";
impoer SlideBar from "../components/Slidebar";  

const Deals = () => {
  return (
    <div>
      <AllProducts />
      <Tracker />
      <Slidebar />
    </div>
  );
};

export default Deals;
