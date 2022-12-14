import React from 'react';
import PropTypes from 'prop-types';

export const Cita = ({
  id,
  mascota,
  propietario,
  fecha,
  hora,
  sintomas,
  onDeleteCita,
}) => {
  return (
    <div className='cita'>
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Síntomas: <span>{sintomas}</span>
      </p>
      <button
        className='button eliminar u-full-width'
        onClick={() => onDeleteCita(id)}
      >
        Eliminar cita
      </button>
    </div>
  );
};

Cita.propTypes = {
  onDeleteCita: PropTypes.func.isRequired,
};
