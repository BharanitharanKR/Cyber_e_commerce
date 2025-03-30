import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import TV from "../assets/TV.png";
import head from "../assets/head";
const Cart = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white border border-gray-200 rounded-md shadow-md">
      {/* Header */}
      <h1 className="text-lg font-semibold">Shopping Cart</h1>
      <div className="border-t border-gray-100 my-4"></div>

      {/* Table Headers */}
      <div className="grid grid-cols-5 text-gray-500 text-sm font-medium py-2">
        <span className="col-span-2">PRODUCTS</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
        <span>SUB-TOTAL</span>
      </div>

      {/* Product 1 */}
      <div className="grid grid-cols-5 items-center border-t border-gray-100 py-4">
        <div className="flex items-center col-span-2 gap-4">
          <IoClose className="text-red-500 cursor-pointer" />
          <img
            src="https://via.placeholder.com/50"
            alt="TV"
            className="w-12 h-12 object-cover"
          />
          <span className="truncate w-36">4K UHD LED Smart TV</span>
        </div>
        <span className="text-gray-400 line-through ">$99</span>
        <div className="flex items-center gap-2 border px-3 py-1 rounded">
          <FiMinus className="cursor-pointer" />
          <span>01</span>
          <FiPlus className="cursor-pointer" />
        </div>
        <span className="font-semibold ml-6">$70</span>
      </div>

      {/* Product 2 */}
      <div className="grid grid-cols-5 items-center border-t border-gray-100 py-4">
        <div className="flex items-center col-span-2 gap-4">
          <IoClose className="text-red-500 cursor-pointer" />
          <img
            src="https://via.placeholder.com/50"
            alt="Headphones"
            className="w-12 h-12 object-cover"
          />
          <span className="truncate w-36">Wired Gaming Headphones</span>
        </div>
        <span className="font-semibold">$250</span>
        <div className="flex items-center gap-2 border px-3 py-1 rounded">
          <FiMinus className="cursor-pointer" />
          <span>03</span>
          <FiPlus className="cursor-pointer" />
        </div>
        <span className="font-semibold ml-6">$250</span>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-6">
        <Link to="/deals">
          {" "}
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
            ← RETURN TO SHOP
          </button>
        </Link>
        <Link to="/billing">
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
            Buy CART
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
