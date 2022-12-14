import { useState, useEffect } from 'react';
import { Cita, Formulario } from './components';

export const App = () => {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  const onNewCita = (newCita) => {
    guardarCitas([...citas, newCita]);
  };

  const onDeleteCita = (citaId) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== citaId);
    guardarCitas(nuevasCitas);
  };

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario onNewCita={onNewCita} />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} {...cita} onDeleteCita={onDeleteCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
