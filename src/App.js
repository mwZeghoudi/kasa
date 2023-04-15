import "./App.css";
import Navbar from "./View/Layout/NavBar";
import Footer from "./View/Layout/Footer";
import NotFoundPage from "./View/Layout/NotFoundPage";
function App() {
  return (
    <div>
      <Navbar />
      <NotFoundPage />
      <Footer />
    </div>
  );
}

export default App;
