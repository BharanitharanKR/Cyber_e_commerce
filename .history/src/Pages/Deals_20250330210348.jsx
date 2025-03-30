import React, { useEffect } from "react";
import AllProducts from "../components/AllProducts";
import Tracker from "../components/Tracker";
import ShopPage from "../components/ShopPage";
import Page from "../components/Page";
import SearchBar from "../components/SearchBar";

const Deals = () => {
  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AllProducts />
      <Tracker />
      <SearchBar />
      <ShopPage />
      <Page />
    </div>
  );
};

export default Deals;
