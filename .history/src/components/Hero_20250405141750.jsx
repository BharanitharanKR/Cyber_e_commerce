import React from "react";
import { FaTruck, FaHeadphones, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Reusable Feature Card Component
const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg shadow-md w-[250px] bg-white">
    {icon}
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[514px] bg-hero-gradient">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 h-full">
          {/* Left: Text Content */}
          <div className="mt-24 ml-12 md:mt-48 text-white text-center md:text-left space-y-4 md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold uppercase">
              Biggest Season Sale
            </h1>
            <p className="text-lg md:text-xl">Never Hold Back on This!</p>
            <p className="text-xl md:text-3xl font-semibold text-yellow-400">
              Discounts up to -50%
            </p>
            <Link to="/deals">
              <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-lg text-lg font-semibold shadow-lg">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Right: Image */}
          <div className="h-[528px] md:w-1/2 flex items-center justify-center md:justify-end">
            <img
              src="/assets/Phone.png"
              alt="Sale Banner"
              loading="lazy"
              className="w-full md:w-[600px] h-[500px] object-cover drop-shadow-lg relative bottom-[-8px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="max-w-[1320px] p-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border border-gray-100 rounded-lg shadow-lg">
        {[
          {
            icon: (
              <img
                src="/assets/CreditCard.png"
                className="w-10"
                alt="Secure Payment"
              />
            ),
            title: "Secure Payment",
            desc: "Your money is safe",
          },
          {
            icon: <FaTruck className="text-black text-3xl" />,
            title: "Fast Delivery",
            desc: "Get your order quickly",
          },
          {
            icon: <FaHeadphones className="text-black text-3xl" />,
            title: "24/7 Support",
            desc: "We're here to help",
          },
          {
            icon: <FaShieldAlt className="text-black text-3xl" />,
            title: "Buyer Protection",
            desc: "Safe shopping guaranteed",
          },
        ].map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Design Blocks Section */}
      <div className="w-full bg-gray-200 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          {/* PlayStation Block */}
          <div className="relative bg-white flex items-center p-6 rounded-lg shadow-md overflow-hidden">
            <img
              src="/assets/ps5.png"
              alt="PS5"
              loading="lazy"
              className="w-32 md:w-[315px] h-auto object-contain -ml-10 md:-ml-20"
            />
            <div className="flex flex-col gap-2 ml-6">
              <p className="w-52 text-black font-semibold text-[30px]">
                PlayStation 5
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Version
              </p>
              <button className="mt-2 px-2 w-28 py-2 border rounded border-gray-400 text-black transition hover:bg-gray-300">
                Buy Now
              </button>
            </div>
          </div>

          {/* AirPods & Vision Pro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AirPods Box */}
            <div className="bg-white flex items-center p-6 rounded-lg shadow-md">
              <img
                src="/assets/airpods.png"
                alt="AirPods"
                loading="lazy"
                className="w-28 md:w-[243px] h-auto object-contain"
              />
            </div>

            {/* Vision Pro Box */}
            <div className="bg-gray-600 flex items-center p-6 rounded-lg shadow-md">
              <img
                src="/assets/vision.png"
                alt="Vision Pro"
                loading="lazy"
                className="w-28 md:w-[312px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white flex flex-col md:flex-row items-center justify-between p-6 rounded-lg shadow-md relative overflow-hidden">
          <div className="flex flex-col gap-4 md:gap-6 items-start md:w-1/2 z-10">
            <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2 md:mb-0">
              MacBook <span className="font-bold">Air</span>
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Buy the new powerful MacBook
            </p>
            <button className="mt-4 px-6 py-2 text-black border border-gray-500 rounded-md transition-colors hover:bg-gray-500 hover:text-white">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src="/assets/lap.png"
              alt="MacBook Pro"
              loading="lazy"
              className="w-full max-w-[353px] h-auto md:h-[549px] object-contain transform hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
