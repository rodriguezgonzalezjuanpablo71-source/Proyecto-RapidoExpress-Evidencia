import Card from "../components/Card";
import RecentActivity from "../components/RecentActivity";
import { obtenerDashboard } from "../services/dashboardService";

function Dashboard() {

  const datos = obtenerDashboard();

  return (
    <>

      <h1>Dashboard</h1>

      <p>
        Bienvenido al sistema de gestión logística de
        RápidoExpress S.A.S.
      </p>

      <div className="cards">

        {datos.tarjetas.map((tarjeta) => (
          <Card
            key={tarjeta.titulo}
            titulo={tarjeta.titulo}
            valor={tarjeta.valor}
          />
        ))}

      </div>

      <RecentActivity />

    </>
  );
}

export default Dashboard;