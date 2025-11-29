import { Routes, Route, useLocation } from "react-router-dom";

import FooterNav from "./components/FooterNav";  // lo que tú renombraste
import Navbar from "./components/Navbar";

// IMPORTA TODAS LAS PÁGINAS
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Finanzas from "./pages/Finanzas";
import Bienestar from "./pages/Bienestar";
import Conversar from "./pages/Conversar";
import Ajustes from "./pages/Ajustes";
function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/"; // No header/footer en landing

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/finanzas" element={<Finanzas />} />
        <Route path="/bienestar" element={<Bienestar />} />
        <Route path="/conversar" element={<Conversar />} />
        <Route path="/ajustes" element={<Ajustes />} />
      </Routes>

      {!hideLayout && <FooterNav />}
    </>
  );
}

export default App;

