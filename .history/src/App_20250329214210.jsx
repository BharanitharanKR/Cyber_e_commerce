import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tracker from "./components/Tracker";
import Home from "./pages/Home";
import Deals from "./pages/Deals"; // ✅ Import Deals (which contains AllProducts)
import ProductName from "./pages/ProductName"; // ✅ Ensure correct file path & casing
import Billing from "./pages/Billing";
import Chase from "./Pages/Chase";
import Compared from "./Pages/Compared";
import Confirm from "./Pages/Confirm";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        {/* Dynamic Route for Product Pages */}
        <Route path="/Product/:title" element={<ProductName />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Chase" element={<Chase />} />
        <Route path="/Compared" element={<Compared />} />
        <Route path="/Confirm" element={<Confirm />} />
        <Route path="/Confirm" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
