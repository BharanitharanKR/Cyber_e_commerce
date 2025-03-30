import { useState } from "react";

const Deals = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4">
      <select
        className="border rounded px-4 py-2"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="phones">Phones</option>
        <option value="computers">Computers</option>
        <option value="smart-watches">Smart Watches</option>
        <option value="cameras">Cameras</option>
        <option value="headphones">Headphones</option>
        <option value="gaming">Gaming</option>
      </select>

      <div className="flex gap-4">
        <a href="#">Track Order</a>
        <a href="#">Compare</a>
        <a href="#">Customer Support</a>
        <a href="#">Need Help</a>
      </div>
    </div>
  );
};

export default TopBar;
