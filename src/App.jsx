import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Envios from "./pages/Envios";
import Reportes from "./pages/Reportes";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path="/clientes"
        element={
          <MainLayout>
            <Clientes />
          </MainLayout>
        }
      />

      <Route
        path="/envios"
        element={
          <MainLayout>
            <Envios />
          </MainLayout>
        }
      />

      <Route
        path="/reportes"
        element={
          <MainLayout>
            <Reportes />
          </MainLayout>
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>
  );
}

export default App;