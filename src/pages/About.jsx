import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="my-3 bg-light">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">À propos de moi</h2>
        <p className="text-muted fs-5">
    Découvrez mon parcours, mes compétences et ma passion pour le développement web.
        </p>
      </div>
      <Container>
        <Row className="align-items-center mb-5">
          {/* Photo */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            <Image
              src="/images/photo.png"
              roundedCircle
              fluid
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
              alt="Photo de profil"
            />
          </Col>

          {/* Présentation */}
          <Col md={7}>
            
            <p className="text-muted">
              Bonjour 👋, je suis <strong>Oumaima El Obayid</strong>, diplômée
              d’un <strong>Bac+5 en développement web</strong>. Enthousiaste et
              curieuse, je souhaite rejoindre une équipe stimulante pour
              appliquer mes compétences, relever de nouveaux défis et évoluer
              dans un environnement professionnel enrichissant.
            </p>
            <p className="text-muted">
              Durant mes études, j’ai réalisé plusieurs projets académiques et
              personnels, ce qui m’a permis de me familiariser avec la
              conception front-end et back-end, ainsi qu’avec les bonnes
              pratiques de développement.
            </p>
            <p className="text-muted">
              Curieuse, motivée et organisée, je suis prête à relever de
              nouveaux défis et à contribuer efficacement à des projets
              innovants.
            </p>
            <Link className="btn btn-sm btn-outline-dark mt-auto w-100 mt3" to="/cv" >
              📄 Voir mon CV
            </Link>
          </Col>
        </Row>

        {/* Parcours académique */}
        <Row className="mb-5">
          <Col>
            <h3 className="fw-bold mb-4">Parcours académique</h3>
            <Row>
              <Col md={4} className="mb-3">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>Formation</Card.Title>
                    <Card.Text>
                      Bac+5 en développement web, avec des projets académiques
                      en React, Angulaire, Laravel, WOrdpress, ... PHP et bases
                      de données.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>Projets personnels</Card.Title>
                    <Card.Text>
                      Création de sites web et applications pour pratiquer les
                      technologies front-end et back-end, incluant des
                      fonctionnalités complètes.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>Objectifs professionnels</Card.Title>
                    <Card.Text>
                      Rejoindre une entreprise ou un projet stimulant pour
                      appliquer mes compétences, continuer à apprendre et
                      contribuer à des projets innovants.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Motivation et valeurs */}
        <Row>
          <Col>
            <h3 className="fw-bold mb-4">Motivation</h3>
            <p className="text-muted">
              Je valorise la curiosité, l’apprentissage continu et le travail
              collaboratif. Chaque projet est pour moi une opportunité de
              progresser et de fournir un travail de qualité, centré sur
              l’utilisateur final.
            </p>
            <p className="text-muted">
              Passionnée par le web et les nouvelles technologies, je cherche à
              contribuer à des projets innovants tout en continuant à me
              perfectionner.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
