import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Ecommerse from "./Pages/Ecommerse";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecommerce" element={<Ecommerse />} />
          <Route path="/softwair" element={<Ecommerse />} />
          <Route path="/about" element={<Ecommerse />} />
          <Route path="/contact" element={<Ecommerse />} />
        </Routes>

        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
