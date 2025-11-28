const sendBtn = document.getElementById("sendBtn");
const msgInput = document.getElementById("msgInput");
const chatArea = document.getElementById("chatArea");

sendBtn.addEventListener("click", () => {
    const text = msgInput.value.trim();
    if (!text) return;

    // Mensaje del usuario
    chatArea.innerHTML += `<div class="chat-msg user">${text}</div>`;
    
    // Respuesta temporal de la IA
    setTimeout(() => {
        chatArea.innerHTML += `<div class="chat-msg ai">Estoy procesando tu consulta 😊</div>`;
        chatArea.scrollTop = chatArea.scrollHeight;
    }, 600);

    msgInput.value = "";
    chatArea.scrollTop = chatArea.scrollHeight;
});

document.addEventListener("DOMContentLoaded", () => {

    const chatForm = document.getElementById("chatForm");
    const userInput = document.getElementById("userInput");
    const chat = document.getElementById("chatMessages");

    if (!chatForm || !userInput || !chat) return; // seguridad

    chatForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const text = userInput.value.trim();
        if (!text) return;

        // Crear mensaje del usuario
        const userMsg = document.createElement("div");
        userMsg.classList.add("msg", "user");
        userMsg.innerHTML = `<div class="bubble">${text}</div>`;
        chat.appendChild(userMsg);

        // Limpiar el input
        userInput.value = "";

        // Auto scroll
        chat.scrollTop = chat.scrollHeight;
    });

});

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       1. GRAFICO (MISMO QUE FINANZAS)
       =============================== */

    const ctx = document.getElementById("graficoDash");
    if (ctx) {
        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Hogar", "Comida", "Salud", "Otros"],
                datasets: [{
                    data: [450, 300, 180, 420],
                    backgroundColor: ["#299fd7", "#66c4ff", "#aee3ff", "#d8f2ff"]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }


    /* ===============================
       2. EMOCIONES DENTRO DEL DASHBOARD
       =============================== */

    const botones = document.querySelectorAll(".dash-emocion-btn");
    const mensaje = document.getElementById("dash-mensaje-emocion");
    const comentario = document.getElementById("dash-comentario");
    const btnGuardar = document.getElementById("dash-guardar-btn");

    let emocionSeleccionada = null;

    const mensajes = {
        feliz: "¡Qué bueno! Me alegra que tu día vaya bien 😊",
        neutral: "Día tranquilo, está bien sentirse así 😐",
        triste: "Lamento que no te sientas bien, estoy contigo 😢"
    };

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            emocionSeleccionada = btn.dataset.emocion;

            // Selección visual
            botones.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");

            // Mensaje
            mensaje.textContent = mensajes[emocionSeleccionada];
        });
    });


    /* ===============================
       3. GUARDAR Y REDIRIGIR A BIENESTAR
       =============================== */
    btnGuardar.addEventListener("click", () => {

        if (!emocionSeleccionada) {
            alert("Selecciona una emoción antes de guardar.");
            return;
        }

        const comment = comentario.value.trim() || "Sin comentario";
        const icon = document.querySelector(
            `.dash-emocion-btn[data-emocion="${emocionSeleccionada}"]`
        ).textContent;

        const fecha = new Date().toLocaleString();

        // Guardar el registro en el historial de Bienestar
        const key = "amparo_historial_bienestar";
        const raw = localStorage.getItem(key);
        let arr = raw ? JSON.parse(raw) : [];

        arr.unshift({
            icon,
            texto: comment,
            fecha
        });

        localStorage.setItem(key, JSON.stringify(arr));

        // Redirección a Bienestar
        window.location.href = "/bienestar/";
    });

});


