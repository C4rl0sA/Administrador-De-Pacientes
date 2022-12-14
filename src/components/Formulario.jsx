import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const Formulario = ({ onNewCita }) => {
  const {
    mascota,
    propietario,
    fecha,
    hora,
    sintomas,
    onInputChange,
    formState,
    setFormState,
  } = useForm({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });
  const [error, setActualizarError] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      return setActualizarError(true);
    }
    //Si la validacion pasa poner de nuevo en false el error
    setActualizarError(false);

    //Asignar un id
    formState.id = uuidv4();
    //agregar cita
    onNewCita(formState);

    //Borrar datos
    setFormState({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };

  return (
    <>
      <h2>Crear cita</h2>

      {error ? (
        <p className='alerta-error'>Todos los campos son obligatorios</p>
      ) : null}

      <form className='form' onSubmit={onSubmitForm}>
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre mascota'
          value={mascota}
          onChange={onInputChange}
        />
        <label>Nombre Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre dueño de la mascota'
          value={propietario}
          onChange={onInputChange}
        />
        <label>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          value={fecha}
          onChange={onInputChange}
        />
        <label>Hora</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          value={hora}
          onChange={onInputChange}
        />
        <label>Síntomas</label>
        <textarea
          name='sintomas'
          value={sintomas}
          onChange={onInputChange}
        ></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Agregar cita
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  onNewCita: PropTypes.func.isRequired,
};
