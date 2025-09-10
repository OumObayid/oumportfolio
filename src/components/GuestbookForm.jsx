import { useState } from "react";
import axios from "axios";
import "../styles/sCustom.css";
export default function GuestbookForm({ onAdd }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const base_apiUrl = import.meta.env.VITE_API_BASE_URL_SEND_EMAIL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { name: name, message: message };
    const urlAxios = `${base_apiUrl}/guestbook/addGuestbook.php`;
    try {
      const response = await axios.post(urlAxios, data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("📥 Réponse API :", response.data);

      if (response.data.success) {
        setStatus("Merci pour votre message !");
        onAdd(); // recharge la liste
        setName("");
        setMessage("");
      } else {
        setStatus(response.data.message || "Erreur inconnue.");
      }
    } catch (error) {
      console.error("Erreur axios :", error);
      setStatus("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="p-4 border rounded-lg shadow bg-white mb-5"
      style={{
        backgroundImage: "url('/images/fond.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center mt-4"
      >
        <div className="card p-4 shadow-sm w-50">
          <h5 className="mb-3 text-center">✨ Laissez un message</h5>

          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              placeholder="Votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-sm btn-outline-dark mt-auto w-100"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {status && (
            <p className="mt-2 text-center text-success small">{status}</p>
          )}
        </div>
      </form>
    </div>
  );
}
