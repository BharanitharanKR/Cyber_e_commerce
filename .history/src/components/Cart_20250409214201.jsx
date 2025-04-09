import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ⬅️ Import cart

const Carting = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart(); // ⬅️ Use cart

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white border border-gray-200 rounded-md shadow-md mt">
      <h1 className="text-lg font-semibold">Shopping Cart</h1>
      <div className="border-t border-gray-100 my-4"></div>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          <div className="grid grid-cols-5 text-gray-500 text-sm font-medium py-2">
            <span className="col-span-2">PRODUCTS</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>SUB-TOTAL</span>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center border-t border-gray-100 py-4"
            >
              <div className="flex items-center col-span-2 gap-4">
                <IoClose
                  className="text-red-500 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                />
                <img
                  src={item.image || item.img}
                  alt={item.name}
                  className="w-12 h-12 object-cover"
                />
                <span className="truncate w-36">{item.name}</span>
              </div>
              <span>${item.price}</span>
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
        </>
      )}
    </div>
  );
};

export default Carting;
