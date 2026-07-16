import "../styles/RecentActivity.css";

function RecentActivity() {
  const actividades = [
    "Pedido #203 entregado",
    "Nuevo envío registrado",
    "Cliente Juan Pérez agregado",
    "Envío #185 retrasado",
  ];

  return (
    <div className="activity">
      <h3>Actividad reciente</h3>

      <ul>
        {actividades.map((actividad, index) => (
          <li key={index}>{actividad}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;