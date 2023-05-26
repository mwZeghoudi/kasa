import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Home from "../Content/Home";
import About from "../Content/About";
import Housing from "../Content/Housing";

export default function Routing() {
  return (
    <Routes>
      <Route path="/kasa" element={<Home />} />
      <Route path="/kasa/about" element={<About />} />
      <Route path="/kasa/housing/:productId" element={<Housing />} />
      <Route path="/kasa/*" element={<NotFoundPage />} />
      <Route path="/kasa/not-found" element={<NotFoundPage />} />
    </Routes>
  );
}
