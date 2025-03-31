import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Tracker from "./components/Tracker";
import Deals
import ProductName from "./pages/ProductName"; // ✅ Ensure correct file path & casing
import Billing from "./pages/Billing";
import Chase from "./Pages/Chase";
import Compared from "./Pages/Compared";
import Confirm from "./Pages/Confirm";
import Carting from "./Pages/Carting";
import WishList from "./Pages/WishList";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/ProductName" element={<ProductName />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Chase" element={<Chase />} />
        <Route path="/Compared" element={<Compared />} />
        <Route path="/Confirm" element={<Confirm />} />
        <Route path="/Carting" element={<Carting />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
    </Router>
  );
}

export default App;
