import { Container } from "react-bootstrap";
import GuestbookList from "../components/GuestbookList";

export default function Guestbook() {
  return (
    <section id="about" className="my-3 bg-light">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">Livre d’or</h2>
        <p className="text-muted fs-5">
          Laissez un message pour partager votre avis ou encouragement !{" "}
        </p>
      </div>
      <Container>
        <GuestbookList />
      </Container>
    </section>
  );
}
