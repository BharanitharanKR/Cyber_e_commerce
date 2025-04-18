import React, { useState } from 'react'

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Categories = [
    "smartPhones"
        "Laptops",
    "Headphones",
    "Tablets",
    "Cameras",
    "Gaming Consoles",
    "Smartwatches",
    "Speakers",
    "Accessories",
    "Monitors",
  ];
}

const AllProducts = () => {
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}
      className='flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-md hover:bg-gray-100' {
      }> QA</button>
    </div>
  )
}

export default AllProducts