import React from "react";
import Cyber_logo from "../assets/Cyber_logo.png";
import FooterLogo from "../assets/FooterLogo.png";
const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Subscribe Section */}
      <div className="bg-red-700 w-full flex justify-center items-center py-20 px-8">
        <div className="max-w-2xl text-center text-white">
          <h1 className="text-3xl font-bold mb-4">
            Subscribe to our Newsletter
          </h1>
          <p className="text-white mb-6">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>

          {/* Input Box with Button */}
          <div className="flex items-center border-2 border-white rounded-md overflow-hidden w-full max-w-[400px] mx-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 flex-1 outline-none text-black"
            />
            <button className="bg-white text-red-700 px-5 py-3 hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black w-full flex justify-center py-20 px-8">
        <div className="max-w-[1400px] w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-14 text-center text-white">
          {/* Column 1 - Logo & Subscription */}
          <div className="flex flex-col items-center">
            <img src={FooterLogo} className="mb-6 w-32" />
            <h2 className="text-xl font-semibold mb-3">Subscribe</h2>
            <p className="text-white mb-5">Get 10% off your first order</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-500 rounded p-3 w-full max-w-[300px] text-black"
            />
          </div>

          {/* Column 2 - Support */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-3">Support</h2>
            <p className="text-white">123, GCT College Coimbatore</p>
            <p className="text-white">GoPay@gmail.com</p>
            <p className="text-white">+88015-88888-9999</p>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Column 4 - Follow Us */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <a href="#" className="text-white hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
