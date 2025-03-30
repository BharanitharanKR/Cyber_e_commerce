import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Cart = () => {
  return (
    <div className="w-screen m-7 p-8 mx-auto p-6 bg-white border border-gray-200 rounded-md shadow-md">
      {/* Header */}
      <h1 className="text-lg font-semibold">Shopping Card</h1>
      <div className="border-t border-gray-100 my-4"></div>

      {/* Table Headers */}
      <div className="grid grid-cols-4 text-gray-500 text-sm font-medium py-2">
        <span className="col-span-2">PRODUCTS</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
        <span>SUB-TOTAL</span>
      </div>

      {/* Product 1 */}
      <div className="grid grid-cols-4 items-center border-t border-gray-100 py-4">
        <div className="flex items-center col-span-2 gap-4">
          <IoClose className="text-red-500 cursor-pointer" />
          <img
            src="https://via.placeholder.com/50"
            alt="TV"
            className="w-12 h-12 object-cover"
          />
          <span>4K UHD LED Smart TV with Chromecast Built-in</span>
        </div>
        <span className="text-gray-400 line-through">$99</span>
        <span className="font-semibold">$70</span>
        <div className="flex items-center gap-2 border p-2 rounded">
          <FiMinus className="cursor-pointer" />
          <span>01</span>
          <FiPlus className="cursor-pointer" />
        </div>
        <span className="font-semibold">$70</span>
      </div>

      {/* Product 2 */}
      <div className="grid grid-cols-4 items-center border-t border-gray-100 py-4">
        <div className="flex items-center col-span-2 gap-4">
          <IoClose className="text-red-500 cursor-pointer" />
          <img
            src="https://via.placeholder.com/50"
            alt="Headphones"
            className="w-12 h-12 object-cover"
          />
          <span>Wired Over-Ear Gaming Headphones with USB</span>
        </div>
        <span className="font-semibold">$250</span>
        <div className="flex items-center gap-2 border p-2 rounded">
          <FiMinus className="cursor-pointer" />
          <span>03</span>
          <FiPlus className="cursor-pointer" />
        </div>
        <span className="font-semibold">$250</span>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-6">
        <button className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
          ← RETURN TO SHOP
        </button>
        <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
          UPDATE CART
        </button>
      </div>
    </div>
  );
};

export default Cart;
