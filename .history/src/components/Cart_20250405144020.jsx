import React, { useState, useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const loadCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart) {
        setCartItems(storedCart);
      }
    };

    loadCart(); // Initial load of cart items

    // Listen for the cartUpdated event
    const handleCartUpdated = () => {
      loadCart();
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

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
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white border border-gray-200 rounded-md shadow-md mt-10">
      <h1 className="text-lg font-semibold">Shopping Cart</h1>
      <div className="border-t border-gray-100 my-4"></div>

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
              onClick={() => removeItem(item.id)}
            />
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover"
            />
            <span className="truncate w-36">{item.name}</span>
          </div>
          <span className="text-gray-400">${item.price}</span>
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
            <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white">
              Continue Shopping
            </button>
          </Link>
          <Link to="/checkout">
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
