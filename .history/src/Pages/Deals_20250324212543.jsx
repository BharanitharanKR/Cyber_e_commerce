import React from "react";
import Dropdown from "..//components/Dropdown";

const Deals = () => {
  return (
    <nav className="bg-white shadow-md  mt-60p-4 flex justify-between">
      <Dropdown />
      <div className="flex space-x-4">
        <button>Track Order</button>
        <button>Compare</button>
        <button>Customer Support</button>
        <button>Need Help</button>
      </div>
    </nav>
  );
};

export default Deals;
