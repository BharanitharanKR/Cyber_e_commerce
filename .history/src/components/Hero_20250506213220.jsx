import React from "react";
import { FaTruck, FaHeadphones, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Reusable Feature Card Component
const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg shadow-md w-full md:w-[250px] bg-white">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h4 className="text-base md:text-lg font-semibold">{title}</h4>
      <p className="text-gray-600 text-xs md:text-sm">{desc}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div>
      {/* Hero Section - Enhanced Responsive Design */}
      <section className="relative h-[500px] sm:h-[450px] md:h-[514px] bg-hero-gradient overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center h-full px-4 md:px-6 relative">
          {/* Left: Text Content */}
          <div className="mt-8 md:mt-0 text-white text-center md:text-left space-y-2 md:space-y-4 md:w-1/2 z-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase">
              Biggest Season Sale
            </h1>
            <p className="text-base md:text-xl">Never Hold Back on This!</p>
            <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-yellow-400">
              Discounts up to -50%
            </p>
            <Link to="/deals">
              <button className="mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-3 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-lg text-base md:text-lg font-semibold shadow-lg">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Right: Image - Improved for mobile */}
          <div className="absolute bottom-0 right-0 left-0 md:relative md:bottom-auto md:right-auto md:left-auto md:h-full md:w-1/2 flex justify-center md:justify-end items-end">
            <img
              src="/assets/Phone.png"
              alt="Sale Banner"
              loading="lazy"
              className="w-56 sm:w-64 md:w-[450px] lg:w-[550px] h-auto object-contain drop-shadow-lg transform-none md:transform md:translate-y-0"
            />
          </div>
        </div>
      </section>

      {/* Features Section - Improved Grid */}
      <div className="max-w-[1320px] p-4 md:p-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border border-gray-100 rounded-lg shadow-lg bg-white">
        {[
          {
            icon: (
              <img
                src="/assets/CreditCard.png"
                className="w-8 md:w-10"
                alt="Secure Payment"
              />
            ),
            title: "Secure Payment",
            desc: "Your money is safe",
          },
          {
            icon: <FaTruck className="text-black text-2xl md:text-3xl" />,
            title: "Fast Delivery",
            desc: "Get your order quickly",
          },
          {
            icon: <FaHeadphones className="text-black text-2xl md:text-3xl" />,
            title: "24/7 Support",
            desc: "We're here to help",
          },
          {
            icon: <FaShieldAlt className="text-black text-2xl md:text-3xl" />,
            title: "Buyer Protection",
            desc: "Safe shopping guaranteed",
          },
        ].map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Design Blocks Section - More responsive adjustments */}
      <div className="w-full bg-gray-200 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6 mt-4">
        {/* Left Side */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* PlayStation Block - Better mobile layout */}
          <div className="relative bg-white flex flex-col sm:flex-row items-center p-4 md:p-6 rounded-lg shadow-md overflow-hidden">
            <div className="flex justify-center w-full sm:w-auto sm:justify-start">
              <img
                src="/assets/ps5.png"
                alt="PS5"
                loading="lazy"
                className="w-32 sm:w-40 md:w-[200px] lg:w-[250px] xl:w-[315px] h-auto object-contain sm:-ml-10 md:-ml-20"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left w-full sm:w-auto">
              <p className="text-black font-semibold text-xl sm:text-2xl md:text-[30px]">
                PlayStation 5
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Version
              </p>
              <button className="mx-auto sm:mx-0 mt-2 px-2 w-28 py-2 border rounded border-gray-400 text-black transition hover:bg-gray-300">
                Buy Now
              </button>
            </div>
          </div>

          {/* AirPods & Vision Pro - Better spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* AirPods Box */}
            <div className="bg-white flex items-center justify-center p-4 md:p-6 rounded-lg shadow-md">
              <img
                src="/assets/airpods.png"
                alt="AirPods"
                loading="lazy"
                className="w-24 sm:w-28 md:w-[150px] lg:w-[180px] h-auto object-contain"
              />
            </div>

            {/* Vision Pro Box */}
            <div className="bg-gray-600 flex items-center justify-center p-4 md:p-6 rounded-lg shadow-md">
              <img
                src="/assets/vision.png"
                alt="Vision Pro"
                loading="lazy"
                className="w-24 sm:w-28 md:w-[150px] lg:w-[180px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side - MacBook Section */}
        <div className="bg-white flex flex-col md:flex-row items-center justify-between p-4 md:p-6 rounded-lg shadow-md relative overflow-hidden">
          <div className="flex flex-col gap-3 md:gap-6 items-center md:items-start text-center md:text-left md:w-1/2 z-10">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              MacBook <span className="font-bold">Air</span>
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              Buy the new powerful MacBook
            </p>
            <button className="mt-2 md:mt-4 px-5 py-2 text-black border border-gray-500 rounded-md transition-colors hover:bg-gray-500 hover:text-white">
              Shop Now
            </button>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center items-center">
            <img
              src="/assets/lap.png"
              alt="MacBook Pro"
              loading="lazy"
              className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[353px] h-auto object-contain transform hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
