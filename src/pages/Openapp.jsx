import { useEffect } from "react";

export default function Openapp() {
  useEffect(() => {
    // tente d'ouvrir l'application
    window.location.href = "bricoconnect://";

    // fallback si l'app n'est pas installée
    const timer = setTimeout(() => {
      window.location.href = "https://briconnectapp.com";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Ouverture de Briconnect...</h1>
      <p>Si rien ne se passe, vous allez être redirigé automatiquement.</p>
    </div>
  );
}