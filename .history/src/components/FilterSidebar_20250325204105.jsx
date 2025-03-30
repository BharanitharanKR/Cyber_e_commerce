import { useState } from "react";

export default function FilterSidebar() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const categories = [
    { id: 1, name: "Laptops", count: 120 },
    { id: 2, name: "Mobiles", count: 85 },
    { id: 3, name: "Accessories", count: 48 },
  ];

  const brands = [
    { id: 1, name: "Apple", count: 50 },
    { id: 2, name: "Samsung", count: 24 },
    { id: 3, name: "Sony", count: 8 },
  ];

  // Handle category selection
  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Handle brand selection
  const toggleBrand = (brandId) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  return (
    <div className="w-64 bg-white p-4 shadow-md border rounded-lg">
      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex space-x-2">
          <input
            type="number"
            className="w-1/2 border p-2 rounded"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            className="w-1/2 border p-2 rounded"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Categories</h3>
        {categories.map((category) => (
          <label key={category.id} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              className="rounded"
              checked={selectedCategories.includes(category.id)}
              onChange={() => toggleCategory(category.id)}
            />
            <span>
              {category.name} ({category.count})
            </span>
          </label>
        ))}
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold mb-2">Brands</h3>
        {brands.map((brand) => (
          <label key={brand.id} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              className="rounded"
              checked={selectedBrands.includes(brand.id)}
              onChange={() => toggleBrand(brand.id)}
            />
            <span>
              {brand.name} ({brand.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
