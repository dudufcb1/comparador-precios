import { React, useState } from 'react';

const Formulario1 = () => {
  const [producto, setProducto] = useState({
    nombreProducto: '',
    unidadDeMedida: '',
    cantidad: '',
    precioUnitario: '',
  });

  function handleChange(e) {
    e.preventDefault();
  }

  return (
    <form>
      <input
        name="precioProducto"
        value={producto.precioUnitario}
        onChange={handleChange}
      />
      <input
        name="nombreProducto"
        value={producto.nombreProducto}
        onChange={handleChange}
      />

      <select
        name="unidadDeMedida"
        value={producto.unidadDeMedida}
        onChange={handleChange}
      >
        <option value="gramos">Gramos</option>
        <option value="mililitros">Mililitros</option>
        <option value="unidades">Unidades</option>
      </select>

      <button>Enviar</button>
    </form>
  );
};

export default Formulario1;
