import React, { useEffect } from "react";

export default function Bienestar() {
  
  useEffect(() => {
    // ====== OBTENER ELEMENTOS ======
    const botones = Array.from(document.querySelectorAll(".emocion-btn"));
    const mensaje = document.getElementById("mensaje-emocion");
    const comentario = document.getElementById("comentario");
    const historial = document.getElementById("historial");
    const guardarBtn = document.getElementById("guardar-btn");

    if (!botones.length || !mensaje || !comentario || !historial || !guardarBtn) {
      console.warn("Bienestar: elementos faltantes.");
      return;
    }

    // ===== MENSAJES =====
    const mensajes = {
      feliz: "¡Qué bueno! Me alegra saber que estás teniendo un buen día 😊",
      neutral: "Está bien sentirse así, todos tenemos días tranquilos 😐",
      triste: "Lo siento... Estoy aquí para acompañarte en lo que necesites 😢"
    };

    let emocionSeleccionada = null;

    function clearSelected() {
      botones.forEach(b => b.classList.remove("selected"));
    }

    // ===== HISTORIAL =====
    function cargarHistorial() {
      const raw = localStorage.getItem("amparo_historial_bienestar");
      if (!raw) return;

      let items = [];
      try {
        items = JSON.parse(raw);
      } catch {
        items = [];
      }

      historial.innerHTML = "";

      if (!items.length) {
        historial.innerHTML = `<p class="historial-empty">Aún no hay registros.</p>`;
        return;
      }

      items.forEach(item => {
        const node = document.createElement("div");
        node.className = "historial-item";
        node.innerHTML = `
          <strong>${item.icon}</strong> — ${item.texto}
          <div class="hist-fecha">${item.fecha}</div>
        `;
        historial.appendChild(node);
      });
    }

    function guardarHistorial(item) {
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

      arr.unshift(item);
      if (arr.length > 100) arr = arr.slice(0, 100);

      localStorage.setItem(key, JSON.stringify(arr));
    }

    // ===== CLIC EMOCIONES =====
    botones.forEach(btn => {
      btn.onclick = () => {
        const em = btn.dataset.emocion;
        emocionSeleccionada = em;

        mensaje.textContent = mensajes[em] || "";
        clearSelected();
        btn.classList.add("selected");
        comentario.focus();
      };
    });

    // ===== GUARDAR =====
    guardarBtn.onclick = () => {
      if (!emocionSeleccionada) {
        alert("Selecciona una emoción antes de guardar.");
        return;
      }

      const texto = comentario.value.trim() || "Sin comentario";
      const icono = document.querySelector(`.emocion-btn[data-emocion="${emocionSeleccionada}"]`).textContent;

      const fechaStr = new Date().toLocaleString();

      const item = { icon: icono, texto, fecha: fechaStr };

      // añadir al DOM
      const nodo = document.createElement("div");
      nodo.className = "historial-item";
      nodo.innerHTML = `
        <strong>${icono}</strong> — ${texto}
        <div class="hist-fecha">${fechaStr}</div>
      `;

      const empty = historial.querySelector(".historial-empty");
      if (empty) empty.remove();

      if (historial.firstChild) historial.insertBefore(nodo, historial.firstChild);
      else historial.appendChild(nodo);

      // guardar
      guardarHistorial(item);

      // reset
      mensaje.textContent = "";
      comentario.value = "";
      clearSelected();
      emocionSeleccionada = null;

      guardarBtn.textContent = "Guardado ✓";
      setTimeout(() => (guardarBtn.textContent = "💾 Guardar registro"), 1200);
    };

    // cargar historial una vez
    cargarHistorial();

  }, []); // <-- solo se ejecuta al montar el componente

  return (
    <>
      <link rel="stylesheet" href="/css/styles.css" />

      <div className="bienestar-container" style={{ paddingTop: "100px" }}>
        
        <h2 className="bienestar-title">¿Cómo te sientes hoy?</h2>

        <div className="emociones-box">
          <button className="emocion-btn" data-emocion="feliz">😊</button>
          <button className="emocion-btn" data-emocion="neutral">😐</button>
          <button className="emocion-btn" data-emocion="triste">😢</button>
        </div>

        <p id="mensaje-emocion" className="mensaje-emocion"></p>

        <textarea
          id="comentario"
          className="comentario-box"
          placeholder="Escribe aquí lo que sientes..."
        ></textarea>

        <div className="guardar-box">
          <button id="guardar-btn" className="guardar-btn">
            💾 Guardar registro
          </button>
        </div>

        <h3 className="historial-title">Historial</h3>
        <div id="historial" className="historial-box">
          <p className="historial-empty">Aún no hay registros.</p>
        </div>
      </div>
    </>
  );
}
