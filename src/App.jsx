// import { Outlet, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./Pages/Home";
// import Ecommerse from "./Pages/Ecommerse";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/ecommerce" element={<Ecommerse />} />
//           <Route path="/softwair" element={<Ecommerse />} />
//           <Route path="/about" element={<Ecommerse />} />
//           <Route path="/contact" element={<Ecommerse />} />
//         </Routes>

//         <Outlet />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
// import Home from "../pages/Home
// import Features from "./pages/Features"
// import Resources from "./pages/Resources"
// import Help from "./pages/Help"
// import Enterprise from "./pages/Enterprise"
// import Pricing from "./pages/Pricing"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import Help from "./Pages/Help"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="blog" element={<Blog/>} />
          {/* <Route path="resources" element={<Resources />} /> */}
          <Route path="help" element={<Help/>} />
          {/* <Route path="enterprise" element={<Enterprise />} /> */}
          {/* <Route path="pricing" element={<Pricing />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}


