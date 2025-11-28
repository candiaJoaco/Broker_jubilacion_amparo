window.initGastosChart = function (gastos) {
    const ingresos = localStorage.getItem("sim_ing") ? parseInt(localStorage.getItem("sim_ing")) : 2800;
    const balance = ingresos - gastos;

    const ingresosEl = document.getElementById("ingresos");
    const gastosEl = document.getElementById("gastos");
    const balanceEl = document.getElementById("balance");

    if (ingresosEl) ingresosEl.textContent = `S/ ${ingresos}`;
    if (gastosEl) gastosEl.textContent = `S/ ${gastos}`;
    if (balanceEl) balanceEl.textContent = `S/ ${balance}`;

    const ctx = document.getElementById("graficoGastos");
    if (!ctx) return;

    if (window.gastosChart) window.gastosChart.destroy();

    window.gastosChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Alimentación", "Medicinas", "Servicios", "Otros"],
            datasets: [
                {
                    data: [
                        gastos * 0.4,
                        gastos * 0.2,
                        gastos * 0.3,
                        gastos * 0.1
                    ],
                }
            ]
        },
        options: {
            cutout: "60%",
            plugins: { legend: { display: true, position: "bottom" } }
        }
    });
};
