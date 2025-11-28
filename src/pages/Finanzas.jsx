import React, { useState, useEffect } from "react";

export default function Finanzas() {
  const [ingresos, setIngresos] = useState(2800);
  const [gastos, setGastos] = useState(1350);
  const [balance, setBalance] = useState(1450);

  const [movimientos, setMovimientos] = useState([]);

  // cargar movimientos recientes al entrar
  useEffect(() => {
    const raw = localStorage.getItem("amparo_movimientos");
    if (raw) {
      try {
        setMovimientos(JSON.parse(raw));
      } catch {
        setMovimientos([]);
      }
    }
  }, []);

  // actualizar gráfico al cargar
  useEffect(() => {
    if (window.initGastosChart) {
      window.initGastosChart(gastos);
    }
  }, [gastos]);

  // acción actualizar simulador
  const actualizar = () => {
    const nuevoBalance = ingresos - gastos;
    setBalance(nuevoBalance);

    const fecha = new Date().toLocaleString();
    const entrada = {
      texto: `Ingresos: S/ ${ingresos} | Gastos: S/ ${gastos} | Balance: S/ ${nuevoBalance}`,
      fecha,
    };

    const lista = [entrada, ...movimientos].slice(0, 20);
    setMovimientos(lista);

    localStorage.setItem("amparo_movimientos", JSON.stringify(lista));
  };

  return (
    <>
  <link rel="stylesheet" href="/css/styles.css" />
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="/js/finanzas.js"></script>

      <link rel="stylesheet" href="/css/styles.css" />

      <div className="finanzas-container" style={{ paddingTop: "90px" }}>
        <h1 className="finanzas-title">Mis Finanzas</h1>
        <p className="finanzas-sub">
          Puedes modificar los datos para simular diferentes escenarios.
        </p>

        {/* --- FORMULARIO --- */}
        <div className="fin-simulador">
          <h3>Simular finanzas</h3>

          <label>Ingresos:</label>
          <input
            type="number"
            value={ingresos}
            onChange={(e) => setIngresos(parseFloat(e.target.value))}
          />

          <label>Gastos:</label>
          <input
            type="number"
            value={gastos}
            onChange={(e) => setGastos(parseFloat(e.target.value))}
          />

          <button id="btnActualizar" onClick={actualizar}>
            Actualizar
          </button>
        </div>

        {/* --- TARJETAS --- */}
        <div className="finanzas-grid">
          <div className="fin-card ingreso">
            <span className="fin-icon">📈</span>
            <h3>Ingresos</h3>
            <p className="monto">S/ {ingresos}</p>
          </div>

          <div className="fin-card gasto">
            <span className="fin-icon">💸</span>
            <h3>Gastos</h3>
            <p className="monto">S/ {gastos}</p>
          </div>

          <div className="fin-card balance">
            <span className="fin-icon">💰</span>
            <h3>Balance</h3>
            <p className="monto">S/ {balance}</p>
          </div>
        </div>

        {/* --- GRÁFICO --- */}
        <div className="fin-grafico">
          <h2>Distribución de gastos</h2>
          <div className="grafico-container">
            <canvas id="graficoGastos"></canvas>
          </div>
        </div>

        {/* --- MOVIMIENTOS --- */}
        <div className="fin-recientes">
          <h2>Movimientos recientes</h2>

          <div id="movimientosLista">
            {movimientos.length === 0 ? (
              <p>No hay movimientos aún.</p>
            ) : (
              movimientos.map((mov, i) => (
                <div key={i} className="mov-item">
                  <p>{mov.texto}</p>
                  <span className="mov-fecha">{mov.fecha}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
