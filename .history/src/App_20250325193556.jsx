import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Deals from "./pages/Deals"; // ✅ Import Deals (which contains AllProducts)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </Router>
  );
}

export default App;
