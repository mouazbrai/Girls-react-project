// MainLayout
import { Routes, Route } from "react-router-dom";
import Home from "../../features/Home/Home";
import About from "../../features/Home/About";
import Review from "../../features/Home/Review";
import Contact from "../../features/Home/Contact";

const MainLayout = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default MainLayout;