import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import photo from "/images/photo.png";

function Header() {
  return (
    <nav
      style={{ zIndex: 2000 }}
      className="px-5 navbar navbar-expand-lg navbar-dark bg-dark w-100 navbar-custom"
    >
      <div className="container-fluid">
        {/* Logo à gauche */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Link>

        {/* Bouton hamburger pour mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens et photo utilisateur */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projets">
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Compétences
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                A propos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cv">
                Cv
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/guestbook">
                Livre d'or
              </Link>
            </li>
            <li className="nav-item ms-3">
              <img
                src={photo}
                alt="Profil"
                width="50"
                height="50"
                className="rounded-circle"
                style={{ border: "1.5px solid rgba(255, 255, 255, 0.55)" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
