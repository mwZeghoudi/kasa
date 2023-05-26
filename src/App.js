import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./View/Layout/Routing";
import Header from "./View/Layout/Header";
import Footer from "./View/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
