import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Ensure Navbar is imported
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar should be outside <Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Deals />} />
      </Routes>
    </Router>
  );
}

export default App;
