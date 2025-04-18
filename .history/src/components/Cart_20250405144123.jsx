import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      img: "/assets/TV.png", // ✅ Updated path from public folder
      name: "4K UHD LED Smart TV",
      price: 70,
      quantity: 1,
      oldPrice: 99,
    },
    {
      id: 2,
      img: "/assets/head.png", // ✅ Updated path from public folder
      name: "Wired Gaming Headphones",
      price: 250,
      quantity: 3,
      oldPrice: 250,
    },
  ]);

  // Handle quantity change
  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white border border-gray-200 rounded-md shadow-md m">
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

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-5 items-center border-t border-gray-100 py-4"
        >
          <div className="flex items-center col-span-2 gap-4">
            <IoClose
              className="text-red-500 cursor-pointer"
              onClick={() => removeItem(item.id)}
            />
            <img
              src={item.img}
              alt={item.name}
              className="w-12 h-12 object-cover"
            />
            <span className="truncate w-36">{item.name}</span>
          </div>
          <span
            className={`text-gray-400 ${
              item.oldPrice !== item.price ? "line-through" : ""
            }`}
          >
            ${item.oldPrice}
          </span>
          <div className="flex items-center gap-2 border px-3 py-1 rounded">
            <FiMinus
              className="cursor-pointer"
              onClick={() => updateQuantity(item.id, "decrease")}
            />
            <span>{item.quantity}</span>
            <FiPlus
              className="cursor-pointer"
              onClick={() => updateQuantity(item.id, "increase")}
            />
          </div>
          <span className="font-semibold ml-6">
            ${item.price * item.quantity}
          </span>
        </div>
      ))}

      {/* Total Price */}
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-lg font-semibold">Total: ${totalPrice}</h2>
        <div className="flex gap-4">
          <Link to="/deals">
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
    </div>
  );
};

export default Cart;
