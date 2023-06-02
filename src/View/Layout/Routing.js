import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Home from "../Content/Home";
import About from "../Content/About";
import Housing from "../Content/Housing";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:productId" element={<Housing />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
    </Routes>
  );
}
