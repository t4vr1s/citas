import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const Formulario = ({ mostrarCita }) => {
  const initialState = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  };

  const [cita, setCita] = useState(initialState);

  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar formulario, agregar id, guardar la cita y limpiar formulario
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      setError(true);
      return;
    }

    setError(false);

    cita.id = uuidv4();

    mostrarCita(cita);

    setCita(initialState);
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <>
      <h2>Agendar Cita</h2>

      {error && (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      )}

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="mascota">Nombre Mascota</label>
        <input
          type="text"
          id="mascota"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleInputChange}
          value={mascota}
        />

        <label htmlFor="propietario">Nombre Dueño</label>
        <input
          type="text"
          id="propietario"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Propietario"
          onChange={handleInputChange}
          value={propietario}
        />

        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          className="u-full-width"
          onChange={handleInputChange}
          value={fecha}
        />

        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          id="hora"
          name="hora"
          className="u-full-width"
          onChange={handleInputChange}
          value={hora}
        />

        <label htmlFor="sintomas">Síntomas</label>
        <textarea
          name="sintomas"
          id="sintomas"
          cols="30"
          rows="10"
          className="u-full-width"
          onChange={handleInputChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agendar Cita
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  mostrarCita: PropTypes.func.isRequired,
};
