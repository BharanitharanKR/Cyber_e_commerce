import React from "react";
import Cyber_logo from "../assets/Cyber_logo.png";

const Footer = () => {
    return (
        <div>
            <div className="bg-red-700 w-screen h-[360px] jus">

            </div>
        <div className="w-screen bg-black flex justify-center items-center py-10">
          <div className=" w-[1600px] text-white p-10 grid grid-cols-4 gap-10">
            {/* Column 1 - Logo & Subscription */}
            <div className="flex flex-col items-start">
              <img src={Cyber_logo} className="mb-4 w-32 " />
              <h2 className="text-xl font-semibold mb-2">Subscribe</h2>
              <p className="text-gray-200 mb-4">Get 10% off your first order</p>
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-black rounded p-2 w-full"
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
              <a href="#" className="text-gray-200 hover:text-black">
                Home
              </a>
              <a href="#" className="text-gray-200 hover:text-black">
                About
              </a>
              <a href="#" className="text-gray-200 hover:text-black">
                Services
              </a>
              <a href="#" className="text-gray-200 hover:text-black">
                Contact
              </a>
            </div>

            {/* Column 4 - Follow Us */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <a href="#" className="text-gray-200 hover:text-black">
                Facebook
              </a>
              <a href="#" className="text-gray-200 hover:text-black">
                Twitter
              </a>
              <a href="#" className="text-gray-200 hover:text-black">
                Instagram
              </a>
              <a href="#" className="text-gray-200 hover:text-black">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;
