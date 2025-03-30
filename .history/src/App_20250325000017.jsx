import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Deals from "./pages/Deals"; // ✅ Import Deals page

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar remains fixed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} /> {/* ✅ Corrected Route */}
      </Routes>
    </Router>
  );
}

export default App;
