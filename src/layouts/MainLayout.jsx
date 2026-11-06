import Sidebar from "../components/Sidebar";
import "../styles/Layout.css";

function MainLayout({ children }) {
  return (
    <div className="layout">

      {/* Menu lateral de navegacion */}
      <Sidebar />

      {/* Contenido principal de cada modulo */}
      <main className="main-content">
        {children}
      </main>

    </div>
  );
}

export default MainLayout;

