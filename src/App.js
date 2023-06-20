import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
