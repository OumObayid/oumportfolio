// src/pages/Skills.jsx
import SkillGroup from "../components/SkillGroup";

export default function Skills() {
  return (
    <section className="container my-3">

      {/* Titre de la page */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6" style={{ color: "#111827" }}>
          Compétences & Expertise
        </h2>
        <p className="text-muted fs-5">
          Découvrez mes compétences techniques organisées par domaine
        </p>
      </div>

      <div className="row g-4">
        {/* 1. Langages */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0 skill-card">
            <div className="card-body">
              <SkillGroup
                icon="💻"
                title="Langages"
                colorStart="#93C5FD"
                colorEnd="#1D4ED8"
                skills={[
                  { name: "JavaScript", percent: 95 },
                  { name: "PHP", percent: 85 },
                  { name: "TypeScript", percent: 90 },
                ]}
              />
            </div>
          </div>
        </div>

        {/* 2. Front-End */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0 skill-card">
            <div className="card-body">
              <SkillGroup
                icon="🎨"
                title="Front-End"
                colorStart="#D8B4FE"
                colorEnd="#6B21A8"
                skills={[
                  { name: "React.js", percent: 95 },
                  { name: "React Native", percent: 80 },
                  { name: "Vue.js", percent: 75 },
                  { name: "Angular", percent: 70 },
                ]}
              />
            </div>
          </div>
        </div>

        {/* 3. Back-End / CMS */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0 skill-card">
            <div className="card-body">
              <SkillGroup
                icon="⚙️"
                title="Back-End / CMS"
                colorStart="#6EE7B7"
                colorEnd="#047857"
                skills={[
                  { name: "Node.js", percent: 85 },
                  { name: "Express", percent: 80 },
                  { name: "Laravel", percent: 75 },
                  { name: "WordPress", percent: 85 },
                ]}
              />
            </div>
          </div>
        </div>

        {/* 4. Intégration */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0 skill-card">
            <div className="card-body">
              <SkillGroup
                icon="🌐"
                title="Intégration"
                colorStart="#FDE68A"
                colorEnd="#B45309"
                skills={[
                  { name: "HTML5", percent: 95 },
                  { name: "CSS3", percent: 95 },
                  { name: "Bootstrap", percent: 90 },
                  { name: "Sass", percent: 85 },
                ]}
              />
            </div>
          </div>
        </div>

        {/* 5. API & DB */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0 skill-card">
            <div className="card-body">
              <SkillGroup
                icon="🔗"
                title="API & DB"
                colorStart="#FCA5A5"
                colorEnd="#B91C1C"
                skills={[
                  { name: "MySQL", percent: 85 },
                  { name: "API REST", percent: 85 },
                  { name: "MongoDB", percent: 70 },
                  { name: "Firebase", percent: 75 },
                ]}
              />
            </div>
          </div>
        </div>

        {/* 6. Outils */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0 skill-card">
            <div className="card-body">
              <SkillGroup
                icon="🛠"
                title="Outils"
                colorStart="#E0E7FF"
                colorEnd="#3730A3"
                skills={[
                  { name: "Git", percent: 90 },
                  { name: "GitHub", percent: 90 },
                  { name: "VS Code", percent: 95 },
                  { name: "Postman", percent: 85 },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
