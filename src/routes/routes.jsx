import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Contact from "../pages/Contact";
import Projets from "../pages/Projets";
import Skills from "../pages/skills";
import About from "../pages/About";
import Guestbook from "../pages/Guestbook";
import CvPage from "../pages/CvPage"
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/cv" element={<CvPage />} />
      <Route path="/guestbook" element={<Guestbook />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}
