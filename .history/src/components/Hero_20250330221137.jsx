import React from "react";
import Phone from "../assets/Phone.png";
import ps5 from "../assets/ps5.png";
import airpods from "../assets/airpods.png";
import vision from "../assets/vision.png";
import lap from "../assets/lap.png";
import CreditCard from "../assets/CreditCard.png";
import { FaTruck, FaHeadphones, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[614px] bg-hero-gradient">
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
            <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-lg text-lg font-semibold shadow-lg">
              Shop Now
            </button>
          </div>

          {/* Right: Image */}
          <div className="h-[628px] md:w-1/2 flex items-center justify-center md:justify-end">
            <img
              src={Phone}
              alt="Sale Banner"
              className="w-full md:w-[600px] h-auto object-cover drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="max-w-[1320px] p-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border border-gray-100 rounded-lg shadow-lg">
        {[
          {
            icon: (
              <img src={CreditCard} className="w-10" alt="Secure Payment" />
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
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg shadow-md w-[250px] bg-white"
          >
            {feature.icon}
            <div>
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* PlayStation 5 Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Playstation 5</h2>
          <p className="text-gray-600 mb-4">
            Incredibly powerful CPUs, GPUs, and an SSD with Integrated I/O will
            redefine your PlayStation experience.
          </p>
          <div className="border-t border-gray-200 pt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Apple AirPods Max Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Apple AirPods Max</h2>
          <p className="text-gray-600 mb-2">Computational audio.</p>
          <p className="text-gray-600 mb-4">Listen, it's powerful</p>
          <div className="border-t border-gray-200 pt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Apple Vision Pro Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Apple Vision Pro</h2>
          <p className="text-gray-600 mb-4">
            An immersive way to experience entertainment
          </p>
          <div className="border-t border-gray-200 pt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Macbook Air Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Macbook Air</h2>
          <p className="text-gray-600 mb-4">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <div className="border-t border-gray-200 pt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

