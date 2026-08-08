import Table from "../components/Table";
import clientesData from "../data/clientesData";

function Clientes() {
  return (
    <div>
      <h1>Clientes</h1>

      <p>
        Gestión de los clientes registrados en RápidoExpress S.A.S.
      </p>

      <Table
        columnas={["ID", "Nombre", "Correo", "Teléfono"]}
        datos={clientesData}
      />
    </div>
  );
}

export default Clientes;