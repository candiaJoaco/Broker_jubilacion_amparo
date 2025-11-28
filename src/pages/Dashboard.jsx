import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [emocion, setEmocion] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [comentario, setComentario] = useState("");

  // mensajes predefinidos
  const mensajes = {
    feliz: "¡Qué bueno! Me alegra saber que estás teniendo un buen día 😊",
    neutral: "Está bien sentirse así, todos tenemos días tranquilos 😐",
    triste: "Lo siento... Estoy aquí para acompañarte en lo que necesites 😢",
  };

  // inicializar gráfico si existe
  useEffect(() => {
    if (window.initDashboardChart) {
      window.initDashboardChart();
    }
  }, []);

  // guardar registro y redirigir
  const guardarYRedirigir = () => {
    if (!emocion) {
      alert("Selecciona una emoción antes de guardar.");
      return;
    }

    const icon = emocion === "feliz" ? "😊" : emocion === "neutral" ? "😐" : "😢";
    const fechaStr = new Date().toLocaleString();

    // guardar en localStorage
    const key = "amparo_historial_bienestar";
    const raw = localStorage.getItem(key);
    let arr = [];

    if (raw) {
      try {
        arr = JSON.parse(raw);
      } catch {
        arr = [];
      }
    }

    arr.unshift({
      icon,
      texto: comentario || "Sin comentario",
      fecha: fechaStr,
    });

    // limitar historial
    if (arr.length > 100) arr = arr.slice(0, 100);

    localStorage.setItem(key, JSON.stringify(arr));

    // redirigir a Bienestar
    navigate("/bienestar");
  };

  return (
    <>
      <link rel="stylesheet" href="/css/styles.css" />

      <div style={{ paddingTop: "100px", paddingBottom: "40px" }}>
        {/* ======================== BIENVENIDA ======================== */}
        <section className="welcome-card">
          <h1>Hola, Usuario 👋</h1>
          <p className="day-advice">
            Consejo del día: Mantén tus gastos esenciales bajo control.
          </p>
        </section>

        {/* ======================== GRID PRINCIPAL ======================== */}
        <section className="grid-2">
          {/* ------------ RESUMEN FINANCIERO ------------ */}
          <div className="dash-finanzas-container">
            <h2 className="section-title">Resumen Financiero</h2>

            <div className="resumen-cards">
              <div className="resumen-card ingreso">
                <h3>Ingresos</h3>
                <p className="monto">S/ 2,800</p>
              </div>

              <div className="resumen-card gasto">
                <h3>Gastos</h3>
                <p className="monto">S/ 1,350</p>
              </div>

              <div className="resumen-card balance">
                <h3>Balance</h3>
                <p className="monto">S/ 1,450</p>
              </div>
            </div>

            <div className="finanzas-dashboard-box">
              <canvas id="graficoDash" height="140"></canvas>
            </div>
          </div>

          {/* ------------ BIENESTAR RÁPIDO ------------ */}
          <div className="dash-bienestar-container">
            <h2 className="section-title">Bienestar Rápido</h2>

            <div className="dash-emociones-box">
              <button
                className={`dash-emocion-btn ${emocion === "feliz" ? "selected" : ""}`}
                onClick={() => {
                  setEmocion("feliz");
                  setMensaje(mensajes.feliz);
                }}
              >
                😊
              </button>

              <button
                className={`dash-emocion-btn ${emocion === "neutral" ? "selected" : ""}`}
                onClick={() => {
                  setEmocion("neutral");
                  setMensaje(mensajes.neutral);
                }}
              >
                😐
              </button>

              <button
                className={`dash-emocion-btn ${emocion === "triste" ? "selected" : ""}`}
                onClick={() => {
                  setEmocion("triste");
                  setMensaje(mensajes.triste);
                }}
              >
                😢
              </button>
            </div>

            <p className="dash-mensaje">{mensaje}</p>

            <textarea
              className="dash-comentario"
              placeholder="Escribe aquí lo que sientes..."
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>

            <div className="dash-guardar-box">
              <button className="dash-guardar-btn" onClick={guardarYRedirigir}>
                💾 Guardar y ver bienestar
              </button>
            </div>
          </div>

          {/* ------------ ACTIVIDAD RECIENTE ------------ */}
          <div className="card panel-actividad">
            <h2>Actividad Reciente</h2>
            <ul className="activity-list">
              <li>✔ Añadiste tus gastos diarios.</li>
              <li>✔ Alcanzaste tu meta semanal de ahorro.</li>
              <li>⚠ Aumentaste los gastos en ocio un 15%.</li>
            </ul>
          </div>

          {/* ------------ CHAT ------------ */}
          <div className="card panel-chat">
            <h2>Asistente Conversacional</h2>

            <div className="chat-area" id="chatArea">
              <div className="chat-msg ai">
                Hola, soy Amparo. ¿En qué puedo ayudarte hoy?
              </div>
            </div>

            <div className="chat-input">
              <input type="text" id="msgInput" placeholder="Escribe aquí..." />
              <button id="sendBtn">Enviar</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
