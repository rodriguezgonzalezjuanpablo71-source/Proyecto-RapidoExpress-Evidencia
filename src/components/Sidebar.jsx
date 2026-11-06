import { NavLink, Link } from "react-router-dom";
import "../styles/Sidebar.css";


function Sidebar() {
  // Opciones principales del menu de navegacion
  // Test Id Es el ID que le damos para las pruebas en selenium
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: "▦",
      testId: "nav-dashboard",
    },
    {
      name: "Envíos",
      path: "/envios",
      icon: "⇧",
      testId: "nav-envios",
    },
    {
      name: "Clientes",
      path: "/clientes",
      icon: "♙",
      testId: "nav-clientes",
    },
    {
      name: "Reportes",
      path: "/reportes",
      icon: "▤",
      testId: "nav-reportes",
    },
  ];

  return (
    <aside className="sidebar">
      {/* Identidad de la empresa */}
      <Link to="/" className="sidebar-brand">
        <div className="brand-icon">R</div>

        <div className="brand-text">
          <h2>RápidoExpress</h2>
          <span>GESTIÓN LOGÍSTICA</span>
        </div>
      </Link>

      {/* Navegacion principal ---
      data-testid es una marca que añadimos para localizar elementos durante las pruebas automatizadas
      para que sea mas facil de ubicar */
      }
      <nav className="sidebar-nav" aria-label="Navegación principal">
        <p className="sidebar-section-title">MENÚ PRINCIPAL</p>

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            data-testid={item.testId}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "activado" : "no activado"}`
            }
          >
            <span className="sidebar-link-icon" aria-hidden="true">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Informacion inferior del menu */}
      <div className="sidebar-footer">
        <div className="sidebar-status">
          <span className="status-dot"></span>

          <div>
            <strong>Sistema activo</strong>
            <small>Panel administrativo</small>
          </div>
        </div>

        <Link to="/login" className="sidebar-logout">
          <span aria-hidden="true">↪</span>
          Cerrar sesión
        </Link>

        <p className="sidebar-version">RápidoExpress S.A.S. · v1.0</p>
      </div>
    </aside>
  );
}

export default Sidebar;