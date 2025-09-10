// src/pages/Projects.jsx
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projetsList from "../data/projetsList";

export default function Projects() {
  // Filtres
  const [selectedLang, setSelectedLang] = useState("Tout");

  // Construire les compteurs
  const counts = projetsList.reduce(
    (acc, project) => {
      acc["Tout"]++;
      acc[project.langage] = (acc[project.langage] || 0) + 1;
      return acc;
    },
    { Tout: 0 }
  );

  // Filtrer la liste selon le langage choisi
  const filteredProjects =
    selectedLang === "Tout"
      ? projetsList
      : projetsList.filter((p) => p.langage === selectedLang);

  // Pagination
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Changer de filtre → reset pagination
  const handleFilterChange = (lang) => {
    setSelectedLang(lang);
    setCurrentPage(1);
  };

  return (
    <section className="container my-3">
      {/* Titre */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">
          Projets & Réalisations
        </h2>
        <p className="text-muted fs-5">
          Découvrez quelques-uns de mes projets réalisés
        </p>
      </div>

      {/* Filtres */}
      <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
        {Object.entries(counts).map(([lang, count]) => (
          <button
            key={lang}
            className={`btn ${
              selectedLang === lang ? "btn-secondary" : "btn-outline-secondary"
            }`}
            onClick={() => handleFilterChange(lang)}
          >
            {lang} ({count})
          </button>
        ))}
      </div>

      {/* Liste paginée */}
      <div className="row g-4 d-flex justify-content-center">
        {currentProjects.map((project, i) => (
          <div key={i} className="col-md-6 col-lg-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  ← Précédent
                </button>
              </li>

              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Suivant →
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
}
