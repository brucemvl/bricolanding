import { useState } from "react";
import axios from "axios";
import "../styles/newsletter.scss";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "https://brico-8fih.onrender.com/api/newsletter",
        { email }
      );

      setSuccess(true);
      setEmail("");
    } catch (err) {
      alert("Cette adresse est déjà enregistrée.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter__card">
        <h1>Telechargez l'application android</h1>

        <p>
          Laissez votre adresse email pour recevoir un lien de telechargement sur Playstore.
        </p>

        {success ? (
          <div className="newsletter__success">
            ✅ Merci ! Vous recevrez un lien dans quelques minutes.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Newsletter;