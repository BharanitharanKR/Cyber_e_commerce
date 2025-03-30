import { Slider } from "./components/ui/slider";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function FilterSidebar() {
  return (
    <div className="w-64 p-4 bg-gray-900 text-white rounded-xl">
      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Price Range</h3>
        <Slider defaultValue={[33]} max={100} step={1} />
        <div className="flex justify-between text-sm mt-2">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>

      {/* Search Box */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Search</h3>
        <Input
          placeholder="Search..."
          className="mt-2 bg-gray-800 text-white"
        />
      </div>

      {/* Checkbox Filters */}
      <div>
        <h3 className="text-lg font-semibold">Categories</h3>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Mobiles</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Computers</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Accessories</span>
          </label>
        </div>
      </div>
    </div>
  );
}
