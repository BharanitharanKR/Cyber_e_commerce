import React from "react";
import Cyber_logo from "../assets/Cyber_logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      {/* Subscribe Section */}
      <div className="bg-red-700 w-full flex justify-center items-center py-10 px-4">
        <div className="max-w-2xl text-center text-white">
          <h1 className="text-2xl font-bold mb-2">
            Subscribe to our Newsletter
          </h1>
          <p className="text-gray-200 mb-4">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>

          {/* Input Box with Button */}
          <div className="flex items-center border-2 border-white rounded-md overflow-hidden w-96 mx-auto">
            <input
              type="text"
              placeholder="Enter text here..."
              className="p-2 flex-1 outline-none text-black"
            />
            <button className="bg-white text-red-700 px-4 py-2 hover:bg-gray-200">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black w-screen flex justify-center py-16">
        <div className="max-w-[1200px] text-white grid grid-cols-4 gap-20 px-6">
          {/* Column 1 - Logo & Subscription */}
          <div className="flex flex-col items-start">
            <img src={Cyber_logo} className="mb-4 w-32" />
            <h2 className="text-xl font-semibold mb-2">Subscribe</h2>
            <p className="text-gray-200 mb-4">Get 10% off your first order</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-500 rounded p-2 w-full text-black"
            />
          </div>

          {/* Column 2 - Support */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Support</h2>
            <p className="text-gray-200">123, GCT College Coimbatore</p>
            <p className="text-gray-200">GoPay@gmail.com</p>
            <p className="text-gray-200">+88015-88888-9999</p>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <a href="#" className="text-gray-200 hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-400">
              Services
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Column 4 - Follow Us */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <a href="#" className="text-gray-200 hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
