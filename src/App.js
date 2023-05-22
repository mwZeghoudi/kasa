import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./View/Layout/Header";
import Footer from "./View/Layout/Footer";
import NotFoundPage from "./View/Layout/NotFoundPage";
import Home from "./View/Content/Home";
import About from "./View/Content/About";
import Housing from "./View/Content/Housing";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/kasa" element={<Home />} />
        <Route path="/kasa/about" element={<About />} />
        <Route path="/kasa/housing/:productId" element={<Housing />} />
        <Route path="/kasa/*" element={<NotFoundPage />} />
        <Route path="/kasa/not-found" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
