import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sub from "../components/Sub";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Adver from "../components/Adver";
import ApiPage from "../components/ApiPage";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sub />
      <Categories />
      <FeaturedProducts />
      <Adver />
      <ApiPage />
      <Advert />
      <Footer />
    </div>
  );
};

export default Home;
