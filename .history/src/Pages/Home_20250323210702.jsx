import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sub from "../components/Sub";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Adver from "../components/Adver";
import ApiPage from "../components/ApiPage";
import Advert from "../components/Advert";
const Home = () => {
  return (
    <div>
      <Hero />
      <Sub />
      <Categories />
      <FeaturedProducts />
      <Adver />
      <ApiPage />
      <Advert />
    </div>
  );
};

export default Home;
