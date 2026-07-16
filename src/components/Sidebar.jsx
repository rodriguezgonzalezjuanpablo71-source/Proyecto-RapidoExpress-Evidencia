import { Link } from "react-router-dom";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2> RápidoExpress</h2>
      </div>

      <nav>

        <Link to="/">  Dashboard</Link>

        <Link to="/envios">  Envíos</Link>

        <Link to="/clientes">  Clientes</Link>

        <Link to="/reportes">  Reportes</Link>

      </nav>

      <div className="logout">

        <Link to="/login">

            Cerrar sesión

        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;