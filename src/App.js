import "./App.css";
import Navbar from "./View/Layout/NavBar";
import Footer from "./View/Layout/Footer";
import NotFoundPage from "./View/Layout/NotFoundPage";
import Home from "./View/Content/Home";
import About from "./View/Content/About";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <NotFoundPage />
      <Footer />
    </div>
  );
}

export default App;
