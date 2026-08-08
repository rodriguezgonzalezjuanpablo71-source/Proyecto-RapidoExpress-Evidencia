function Table({ columnas, datos }) {
  return (
    <table>
      <thead>
        <tr>
          {columnas.map((columna) => (
            <th key={columna}>{columna}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {datos.map((fila, indice) => (
          <tr key={indice}>
            {fila.map((dato, posicion) => (
              <td key={posicion}>{dato}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;