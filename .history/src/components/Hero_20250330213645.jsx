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
          <div className="mt-24 mr-36  ml-12 md:mt-48 text-white text-center md:text-left space-y-4 md:w-1/2">
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
      <div className="w-[1320px] p-8 m-16 mx-auto flex flex-col  md:flex-row justify-between items-center gap-2 p-2 border border-gray-100 rounded-lg shadow-lg">
        {[
          {
            icon: <img src={CreditCard} className="w-10" />,
            title: "Secure Payment",
            desc: "Your money is safe",
          },
          {
            icon: <FaTruck className="text-black text-3xl" />,
            title: "Fast Delivery",
            desc: "Get your order quickly",
          },
          {
            icon: <FaHeadphones className="text text-3xl" />,
            title: "24/7 Support",
            desc: "We're here to help",
          },
          {
            icon: <FaShieldAlt className="text text-3xl" />,
            title: "Buyer Protection",
            desc: "Safe shopping guaranteed",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4    p-4 rounded-lg shadow-md w-[250px]"
          >
            {feature.icon}
            <div>
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Design Blocks Section */}
      <div className="w-full bg-gray-200 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {/* Left Side */}
        <div className="flex flex-col gap-4">
          {/* Top Half */}
          <div className="bg-white flex items-center p-6 rounded-lg shadow-md">
            <img
              src={ps5}
              alt="PS5"
              className="w-32 md:w-[315px] h-auto object-contain"
            />
            <p className="ml-16 border border-gray-400 rounded-md   p-2  text-black text-10xl md:text-2xl ">
              Play Station
            </p>
            <p></p>
          </div>

          {/* Bottom Half */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bottom Left Box */}
            <div className="bg-gray-200 flex items-center p-6 rounded-lg shadow-md">
              <img
                src={airpods}
                alt="AirPods"
                className="w-28 md:w-[243px] h-auto object-contain"
              />
              <p className="ml-4 text-black text-xl md:text-2xl"></p>
            </div>

            {/* Bottom Right Box */}
            <div className="bg-gray-600 flex items-center p-6 rounded-lg shadow-md">
              <img
                src={vision}
                alt="Vision Pro"
                className="w-28 md:w-[312px] h-auto object-contain"
              />
              <p className="ml-4 text-white text-xl md:text-2xl"></p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-gray-200 flex flex-col md:flex-row items-center justify-between p-6 rounded-lg shadow-md">
          <p className="text-black text-xl md:text-2xl text-center md:text-left">
            Right Side Text
          </p>
          <img
            src={lap}
            alt="Laptop"
            className="w-[353px] h-[549px]  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
