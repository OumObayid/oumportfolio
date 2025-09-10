import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/routes"; 
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function AppWrapper() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
  
   <div
  className="d-flex flex-column"
  style={{
    minHeight: "60vh",
    backgroundImage: isHome
      ? "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), linear-gradient(rgba(255,165,0,0.2), rgba(255,165,0,0.2)), url('/images/hero.jpg')"
      : "none",
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
  }}
>
  <Header />

  <main className="flex-grow-1">
    <AppRoutes />
  </main>

  <Footer />
</div>

  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
