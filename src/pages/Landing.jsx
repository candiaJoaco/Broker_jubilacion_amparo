export default function Landing() {
  return (
    <>
    <link rel="stylesheet" href="/css/landing.css" />
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-box">
          <img src="/img/logo.png" alt="Amparo Logo" />
          <span className="logo-text">Amparo</span>
        </div>

        <nav>
          <a href="#">Inicio</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#funciones">Funciones</a>
          <a href="#contacto">Contacto</a>
          <a href="/dashboard" className="btn-ingresar">Ingresar</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Un acompañante inteligente para tu bienestar financiero y emocional</h1>
          <p>
            Amparo une inteligencia artificial con un acompañamiento humano y
            empático para guiarte en tu vida financiera y emocional. Te ayuda a
            vivir tu retiro con mayor tranquilidad, claridad y apoyo en cada
            decisión importante.
          </p>
          <a href="#beneficios" className="btn-empezar">Conocer más</a>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <h2>¿Qué es Amparo?</h2>
        <p>
          Amparo es una plataforma diseñada para acompañar a personas en etapa
          de retiro o transición financiera. Ofrece claridad económica,
          apoyo emocional y un asistente conversacional empático que te guía
          paso a paso.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="beneficios" id="beneficios">
        <h2>Beneficios del sistema</h2>

        <div className="beneficios-grid">
          <div className="beneficio-card">
            <h3>🧠 IA Empática</h3>
            <p>Recibe orientación clara y humana. Amparo te explica conceptos financieros sin complicaciones.</p>
          </div>

          <div className="beneficio-card">
            <h3>💰 Orden Financiero</h3>
            <p>Visualiza tus ingresos, gastos y metas con herramientas fáciles de entender.</p>
          </div>

          <div className="beneficio-card">
            <h3>💬 Apoyo Emocional</h3>
            <p>Registra cómo te sientes y recibe mensajes motivadores en momentos clave.</p>
          </div>

          <div className="beneficio-card">
            <h3>📈 Seguimiento Diario</h3>
            <p>Monitorea avances financieros y emocionales sin estrés ni sobrecarga visual.</p>
          </div>
        </div>
      </section>

      {/* FUNCIONES */}
      <section className="funciones" id="funciones">
        <h2>Componentes del sistema</h2>

        <div className="funciones-grid">

          <div className="funcion-card">
            <h3>Dashboard Principal</h3>
            <p>Tu vista general con estado financiero, emocional y el mejor consejo del día.</p>
          </div>

          <div className="funcion-card">
            <h3>Panel Financiero</h3>
            <p>Gráficas simples, metas y recomendaciones accionables de ahorro.</p>
          </div>

          <div className="funcion-card">
            <h3>Bienestar Emocional</h3>
            <p>Registra tu estado de ánimo y recibe apoyo contextual.</p>
          </div>

          <div className="funcion-card">
            <h3>Asistente Conversacional</h3>
            <p>Chatea con Amparo por texto o voz para recibir orientación inmediata.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto">
        <p>© 2025 Amparo – Acompañamiento Inteligente</p>
        <p>Creado por Team Conauti</p>
      </footer>
    </>
  );
}
