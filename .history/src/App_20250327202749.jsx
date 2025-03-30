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
        <Route path="/deals" element={<Deals />} />
        {/* Dynamic Route for Product Pages */}
        <Route path="/Product/:title" element={<ProductName />} />
        <route path="/adver" element={<}
      </Routes>
    </Router>
  );
}

export default App;
