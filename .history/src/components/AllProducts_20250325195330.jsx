export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-2 border-b">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700 flex items-center">
          All Category ▼
        </button>
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-6 text-gray-600 text-sm">
        <div className="flex items-center gap-1">
          <span>📍</span> Track Order
        </div>
        <div className="flex items-center gap-1">
          <span>🔄</span> Compare
        </div>
        <div className="flex items-center gap-1">
          <span>🎧</span> Customer Support
        </div>
        <div className="flex items-center gap-1">
          <span>ℹ️</span> Need Help
        </div>
      </div>

      {/* Right Section */}
      <div className="text-gray-700 flex items-center gap-2">
        <span>📞</span> +123-456-7890
      </div>
    </nav>
  );
}
export defa