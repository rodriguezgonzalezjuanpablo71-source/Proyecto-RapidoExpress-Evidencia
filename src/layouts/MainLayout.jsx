import Sidebar from "../components/Sidebar";

import "../styles/Layout.css";

function MainLayout({ children }) {
  return (
    <div className="layout">

      <Sidebar />

      <main className="content">

        {children}

      </main>

    </div>
  );
}

export default MainLayout;