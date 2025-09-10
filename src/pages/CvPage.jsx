import { motion } from "framer-motion";
import "./CvPage.css";

export default function CvPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="container my-3">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">Mon CV</h2>
        <p className="text-muted fs-5">
          Découvrez mon parcours, mes expériences et ma passion pour le
          développement web.
        </p>
      </div>

      {/* Expérience */}
      <h3 className="cv-section-title mb-3">💼 Expérience</h3>
      <div className="row mb-4">
        {[
          {
            title: "Développeur Web – Auto-formation & Projets personnels",
            description:
              "Réalisation de sites web et Mise en pratique continue.",
          },
          {
            title: "Stage d'un mois au cabinet médical à Safi",
            description:
              "Application web pour la gestion d'un cabinet médical.",
          },
          {
            title: "Centre de compétences industrielles à l’OCP de Safi",
            description:
              "Développement d’un logiciel de gestion de pièces de rechange et de maintenance des machines.",
          },
        ].map((exp, i) => (
          <div className="col-md-4" key={i}>
            <motion.div
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="cv-card cv-experience">
                <h5>{exp.title}</h5>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Formation */}
      <h3 className="cv-section-title mb-3">🎓 Formation</h3>
      <div className="row mb-4">
        {[
          {
            title: "Master universitaire professionnelle",
            school: "FST de Settat",
            year: "(2021-2023)",
            description:
              "Ingénierie de Conception et de Développement d’Applications",
          },
          {
            title: "Licence professionnelle",
            school: "ENSA de Safi",
            year: "(2018-2019)",
            description: "Ingénierie et Conception des Systèmes d'Informations",
          },
          {
            title: "Technicien spécialisé",
            school: "ISTA de Safi",
            year: "(2016-2018)",
            description: "Développement informatique",
          },
        ].map((edu, i) => (
          <div className="col-md-4" key={i}>
            <motion.div
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="cv-card cv-formation">
                <h5>{edu.title}</h5>
                <p>
                  <strong className="text-muted h6">{edu.school}</strong>
                  <span> {edu.year}</span>
                </p>
                <p>{edu.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Compétences */}
      <h3 className="cv-section-title mb-3">🛠️ Compétences techniques</h3>
      <div className="row mb-4">
        {[
          {
            label: "Langages",
            items: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "Typescript",
              "jQuery",
              "PHP",
            ],
          },
          {
            label: "Frameworks",
            items: [
              "React Js",
              "Angular",
              "Vue Js",
              "Laravel",
              "React Native",
              "Flutter",
              "Bootstrap5",
            ],
          },
          { label: "CMS", items: ["Wordpress"] },
          {
            label: "Bases de données",
            items: ["MySQL", "Firebase", "Mongo DB"],
          },
          { label: "Outils", items: ["Git", "Github", "Vs Code", "Postman"] },
        ].map((comp, i) => (
          <div className="col-md-4" key={i}>
            <motion.div
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="cv-card skills">
                <h5>{comp.label}</h5>
                <div className="d-flex flex-wrap gap-2">
                  {comp.items.map((item, j) => (
                    <span className="badge bg-secondary" key={j}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Projets */}
      <h3 className="cv-section-title mb-3">🚀 Projets</h3>
      <div className="row mb-4">
        {[
          {
            name: "Oumportfolio",
            desc: "Présentation du profil et parcours, \n  React js - Php - Mysql",
          },
          {
            name: "Flowers Oum",
            desc: "Plateforme vente fleurs et articles floraux, \n Angular - PHP - MySQL",
          },
          {
            name: "LearnWeb",
            desc: "Cours et tutoriels Angular, React, Laravel, Node.js, \n WordPress",
          },
          { name: "Ardeco", desc: "Ecommerce livraison à domicile, \n Laravel" },
          {
            name: "eshop",
            desc: "E-commerce paiement en ligne avec API Stripe, \n React js - Firebase - Node js",
          },
          { name: "Learning", desc: "Site web de formation en ligne, \n Laravel" },
          { name: "MyFoods", desc: "Site web eCommerce avec panier et order, \n Angular 13 - firebase" },
          { name: "Spaceteck", desc: "Services agence communication digitale, \n Html5 - Css3 - Javascript" },
          {
            name: "MemoryGame",
            desc: "Jeu pour stimuler mémoire et concentration, \n Html5 - Css3 - Javascript", 
          },
          {
            name: "Portfolio",
            desc: "Présentation claire et structurée des projets, \n Html5 - Css3 - Javascript",
          },
        ].map((proj, i) => (
          <div className="col-md-4" key={i}>
            <motion.div
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="cv-card projects">
                <h5>{proj.name}</h5>
                <p>{proj.desc}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
