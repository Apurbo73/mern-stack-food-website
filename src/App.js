import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/sign-up" element={<Signup />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
