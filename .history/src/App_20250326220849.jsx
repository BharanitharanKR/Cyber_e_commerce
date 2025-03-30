import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Deals from "./pages/Deals"; // ✅ Import Deals (which contains AllProducts)
import ProductName from "./Pages/ProductName";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path
      </Routes>
    </Router>
  );
}

export default App;
