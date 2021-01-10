import { Fragment, useEffect, useState } from 'react';
import { Cita } from './component/Cita';
import { Formulario } from './component/Formulario';

function App() {
  let initialState = JSON.parse(localStorage.getItem('citas'));

  if (!initialState) {
    initialState = [];
  }
  const [citas, setCitas] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const mostrarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => id !== cita.id);
    setCitas(nuevasCitas);
  };

  const tituloH2 = citas.length > 0 ? 'Administrar Citas' : 'Agrega una Cita';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario mostrarCita={mostrarCita} />
          </div>
          <div className="one-half column">
            {<h2>{tituloH2}</h2>}

            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
