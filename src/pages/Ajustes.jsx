import React from "react";

export default function Ajustes() {
  return (
    <>
      <link rel="stylesheet" href="/css/styles.css" />

      <div className="ajustes-container" style={{ paddingTop: "90px" }}>
        <h1 className="ajustes-title">Ajustes</h1>

        {/* PERFIL */}
        <div className="ajustes-card perfil-card">
          <div className="perfil-info">
            <img
              src="/img/profile.png"
              alt="perfil"
              className="perfil-img"
            />
            <div>
              <h3>Nombre del Usuario</h3>
              <p>ID: 000123</p>
            </div>
          </div>
          <a href="#" className="btn-ajustes">Editar perfil</a>
        </div>

        {/* NOTIFICACIONES */}
        <div className="ajustes-card">
          <h3>Notificaciones</h3>

          <div className="ajustes-item">
            <span>Recordatorios diarios</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="ajustes-item">
            <span>Alertas financieras</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="ajustes-item">
            <span>Consejos de bienestar</span>
            <input type="checkbox" />
          </div>
        </div>

        {/* PREFERENCIAS */}
        <div className="ajustes-card">
          <h3>Preferencias</h3>

          <div className="ajustes-item">
            <span>Modo oscuro</span>
            <input type="checkbox" />
          </div>

          <div className="ajustes-item">
            <span>Sonidos de la app</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        {/* SEGURIDAD */}
        <div className="ajustes-card">
          <h3>Seguridad</h3>

          <div className="ajustes-item">
            <span>Cambiar contraseña</span>
            <a href="#" className="link-ajustes">Modificar</a>
          </div>

          <div className="ajustes-item">
            <span>Ver actividad reciente</span>
            <a href="#" className="link-ajustes">Ver</a>
          </div>
        </div>

        {/* CERRAR SESIÓN */}
        <div className="cerrar-sesion">
          <a href="#" className="cerrar-btn">Cerrar sesión</a>
        </div>
      </div>
    </>
  );
}
