import "./App.css";
import React from "react";
import Header from "./layouts/header";
// import Sidemenu from "./components/layouts/side-menu";
// import FormDangnhap from "./components/login/form-dang-nhap";
// import { Divider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Content from "./components/layouts/content";
import Home from "./layouts/home";
import Product from "./layouts/product";
import About from "./layouts/about";
import Contact from "./layouts/contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
