import React, { useState, useEffect } from "react";

export default function Bienestar() {
  const [emocion, setEmocion] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [comentario, setComentario] = useState("");
  const [historial, setHistorial] = useState([]);

  // mensajes predefinidos
  const mensajes = {
    feliz: "¡Qué bueno! Me alegra saber que estás teniendo un buen día 😊",
    neutral: "Está bien sentirse así, todos tenemos días tranquilos 😐",
    triste: "Lo siento... Estoy aquí para acompañarte en lo que necesites 😢",
  };

  // cargar historial al entrar
  useEffect(() => {
    const raw = localStorage.getItem("amparo_historial_bienestar");
    if (raw) {
      try {
        setHistorial(JSON.parse(raw));
      } catch {
        setHistorial([]);
      }
    }
  }, []);

  // guardar automáticamente cuando cambia
  useEffect(() => {
    localStorage.setItem(
      "amparo_historial_bienestar",
      JSON.stringify(historial)
    );
  }, [historial]);

  // guardar registro
  const guardar = () => {
    if (!emocion) {
      alert("Selecciona una emoción antes de guardar.");
      return;
    }

    const icon = emocion === "feliz" ? "😊" : emocion === "neutral" ? "😐" : "😢";
    const fechaStr = new Date().toLocaleString();

    const nuevo = {
      icon,
      texto: comentario || "Sin comentario",
      fecha: fechaStr,
    };

    setHistorial((prev) => [nuevo, ...prev].slice(0, 100));

    // limpiar
    setComentario("");
    setMensaje("");
    setEmocion(null);
  };

  return (
    <>
      <link rel="stylesheet" href="/css/styles.css" />

      <div className="bienestar-container" style={{ paddingTop: "80px" }}>
        <h2 className="bienestar-title">¿Cómo te sientes hoy?</h2>

        {/* EMOCIONES */}
        <div className="emociones-box">
          <button
            className={`emocion-btn ${emocion === "feliz" ? "selected" : ""}`}
            onClick={() => {
              setEmocion("feliz");
              setMensaje(mensajes.feliz);
            }}
          >
            😊
          </button>

          <button
            className={`emocion-btn ${emocion === "neutral" ? "selected" : ""}`}
            onClick={() => {
              setEmocion("neutral");
              setMensaje(mensajes.neutral);
            }}
          >
            😐
          </button>

          <button
            className={`emocion-btn ${emocion === "triste" ? "selected" : ""}`}
            onClick={() => {
              setEmocion("triste");
              setMensaje(mensajes.triste);
            }}
          >
            😢
          </button>
        </div>

        {/* MENSAJE */}
        <p className="mensaje-emocion">{mensaje}</p>

        {/* COMENTARIO */}
        <textarea
          className="comentario-box"
          placeholder="Escribe aquí lo que sientes..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />

        {/* BOTÓN GUARDAR */}
        <div className="guardar-box">
          <button className="guardar-btn" onClick={guardar}>
            💾 Guardar registro
          </button>
        </div>

        {/* HISTORIAL */}
        <h3 className="historial-title">Historial</h3>

        <div className="historial-box">
          {historial.length === 0 ? (
            <p className="historial-empty">Aún no hay registros.</p>
          ) : (
            historial.map((item, idx) => (
              <div key={idx} className="historial-item">
                <strong>{item.icon}</strong> — {item.texto}
                <div className="hist-fecha">{item.fecha}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
