import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Deals from "./pages/Deals"; // ✅ Import Deals (which contains AllProducts)
import ProductName from "./pages/ProductName"; // ✅ Ensure correct file path & casing

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eals" element={<Deals />} />
        {/* Dynamic Route for Product Pages */}
        <Route path="/product/:title" element={<ProductName />} />
      </Routes>
    </Router>
  );
}

export default App;
