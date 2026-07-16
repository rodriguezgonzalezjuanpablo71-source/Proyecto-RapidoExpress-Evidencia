import "../styles/Table.css";

function Table() {

  const envios = [

    {
      codigo: "ENV001",
      cliente: "Juan Pérez",
      estado: "Entregado",
    },

    {
      codigo: "ENV002",
      cliente: "María Gómez",
      estado: "En camino",
    },

    {
      codigo: "ENV003",
      cliente: "Carlos Ruiz",
      estado: "Pendiente",
    },

    {
      codigo: "ENV004",
      cliente: "Ana Torres",
      estado: "Cancelado",
    },

  ];

  return (

    <div className="table-container">

      <h3>Últimos envíos</h3>

      <table>

        <thead>

          <tr>

            <th>Código</th>

            <th>Cliente</th>

            <th>Estado</th>

          </tr>

        </thead>

        <tbody>

          {

            envios.map((envio) => (

              <tr key={envio.codigo}>

                <td>{envio.codigo}</td>

                <td>{envio.cliente}</td>

                <td>{envio.estado}</td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default Table;