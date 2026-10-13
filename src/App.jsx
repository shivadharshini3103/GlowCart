
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

import FaceCare from "./Pages/Shop/FaceCare";
import SkinCare from "./Pages/Shop/SkinCare";
import HairCare from "./Pages/Shop/HairCare";

function App() {
  const location = useLocation();

  return (
    <>
     
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/facecare" element={<FaceCare />} />
        <Route path="/shop/skincare" element={<SkinCare />} />
        <Route path="/shop/haircare" element={<HairCare />} />

        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;