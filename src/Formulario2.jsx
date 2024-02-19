import React, { useState } from 'react';

const Formulario2 = () => {
  const [producto, setProducto] = useState({
    nombreProducto: '',
    unidadDeMedida: 'gramos',
    cantidad: '',
    precioUnitario: '',
  });

  const [productosComparados, setProductosComparados] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { unidadDeMedida, precioUnitario, cantidad, nombreProducto } =
      producto;
    const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

    if (!nombreProducto.trim()) {
      alert('El campo Nombre del producto es obligatorio');
      return;
    }

    if (!cantidad.trim()) {
      alert('El campo Cantidad es obligatorio');
      return;
    }

    if (!isNumber(cantidad)) {
      alert('La cantidad debe ser un número válido');
      return;
    }

    if (!precioUnitario.trim()) {
      alert('El campo Precio unitario es obligatorio');
      return;
    }

    if (!isNumber(precioUnitario)) {
      alert('El precio unitario debe ser un número válido');
      return;
    }

    let result = precioUnitario / cantidad;
    if (
      unidadDeMedida.toLowerCase() === 'gramos' ||
      unidadDeMedida.toLowerCase() === 'mililitros'
    ) {
      result *= 1000 / 1; // Ajustar el resultado para obtener el precio por unidad de medida (kilogramo o litro)
    }
    const nuevoProducto = {
      productoComparado: nombreProducto,
      precioDeReferencia: result,
    };
    setProductosComparados([...productosComparados, nuevoProducto]);
    // Limpiar los campos del formulario después de agregar el producto comparado
    setProducto({
      nombreProducto: '',
      unidadDeMedida: 'gramos',
      cantidad: '',
      precioUnitario: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="nombreProducto"
          value={producto.nombreProducto}
          onChange={handleChange}
          placeholder="Nombre del producto"
        />
        <input
          name="precioUnitario"
          value={producto.precioUnitario}
          onChange={handleChange}
          placeholder="Precio unitario"
        />
        <input
          name="cantidad"
          value={producto.cantidad}
          onChange={handleChange}
          placeholder="Cantidad"
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
        <button type="submit">Enviar</button>
      </form>

      <h2>Productos Comparados:</h2>
      <ul>
        {productosComparados.map((producto, index) => (
          <li key={index}>
            {producto.productoComparado}: {producto.precioDeReferencia}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          setProductosComparados([]);
        }}
      >
        Borrar Productos
      </button>
    </div>
  );
};

export default Formulario2;
