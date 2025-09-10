import { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    emailUser: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Validation simple des champs
  const validate = () => {
    const newErrors = {};
    if (!formData.emailUser) newErrors.emailUser = "Email requis";
    else if (!/\S+@\S+\.\S+/.test(formData.emailUser))
      newErrors.emailUser = "Email invalide";

    if (!formData.subject) newErrors.subject = "Sujet requis";
    if (!formData.message || formData.message.length < 10)
      newErrors.message = "Message trop court (minimum 10 caractères)";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");
    const data = {
      from: import.meta.env.VITE_MON_EMAIL_FROM,
      to: import.meta.env.VITE_MON_EMAIL_TO, // destinataire fixe
      subject: formData.subject,
      message: `<p><strong>De :</strong> ${formData.emailUser}</p>
            <p><strong>Message :</strong></p>
            <p>${formData.message}</p>`,
    };
    console.log(data);
    const urlAxios = `${import.meta.env.VITE_API_BASE_URL_SEND_EMAIL}/email/sendEmail.php`;
    console.log("URL Axios :", urlAxios);
    try {
      const response = await axios.post(urlAxios,data);
      console.log("response :", response);

      if (response.data.success) {
        setSuccessMsg("Message envoyé avec succès !");
        setFormData({ emailUser: "", subject: "", message: "" });
      } else {
        setErrorMsg(
          response.data.message || "Erreur lors de l'envoi du message."
        );
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Erreur de connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container my-3">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">Contactez-moi</h2>
        <p className="text-muted fs-5">
          N’hésitez pas à me laisser un message pour toute question ou
          collaboration.
        </p>
      </div>

      <div
        className="mx-auto p-4 shadow rounded"
        style={{ maxWidth: "600px", backgroundColor: "#f8f9fa" }}
      >
        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3" controlId="formFrom">
            <Form.Label>Votre email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Votre email"
              name="emailUser"
              value={formData.emailUser}
              onChange={handleChange}
              isInvalid={!!errors.emailUser}
            />
            <Form.Control.Feedback type="invalid">
              {errors.emailUser}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label>Sujet</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sujet"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              isInvalid={!!errors.subject}
            />
            <Form.Control.Feedback type="invalid">
              {errors.subject}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Votre message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="text-center">
            
            <Button
              variant="white"
              type="submit"
              disabled={loading}
              className="btn btn-sm btn-outline-dark mt-auto w-100 mt3" 
            >
              {loading ? <Spinner animation="border" size="sm" /> : "✈️   Envoyer"}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
