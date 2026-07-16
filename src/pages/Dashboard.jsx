import Card from "../components/Card";
import RecentActivity from "../components/RecentActivity";
import Table from "../components/Table";
import { obtenerDashboard } from "../services/dashboardService";


function Dashboard() {

  const tarjetas = [

    {
      titulo: "Clientes",
      valor: 152,
    },

    {
      titulo: "Envíos",
      valor: 845,
    },

    {
      titulo: "Pendientes",
      valor: 21,
    },

    {
      titulo: "Entregados",
      valor: 824,
    },

  ];

  return (

    <>

      <h1>Dashboard</h1>

      <p>
        Bienvenido al sistema de gestión logística de
        RápidoExpress S.A.S.
      </p>

      <div className="cards">

        {

          tarjetas.map((tarjeta) => (

            <Card
              key={tarjeta.titulo}
              titulo={tarjeta.titulo}
              valor={tarjeta.valor}
            />
          

          ))
          
        }

      </div>
      <RecentActivity />
      <Table />
      

    </>
  )
}

export default Dashboard;