import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App bg-[#E9F6FF]">
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Product" element={<Product/>} />
          <Route index path="/" element={<Auth/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
