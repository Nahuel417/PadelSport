import React, { useState } from 'react';
import { canchas, entrenadores } from '../../helpers/inputsDatos';

const CajaInputsDatos = ({ label }) => {
    const [misCanchas, setMisCancha] = useState(canchas);
    const [misEntrenadores, setMisEntrenadores] = useState(entrenadores);

    const tipoInput = (label) => {
        if (label === 'Dia') return 'date';
        else if (label === 'Horario') return 'time';
        else if (label === 'Cancha' || label === 'Entrenador') return 'select';
    };

    return (
        <div className="caja-inputsDatos">
            <div className="caja-label">
                <label> {label} </label>
            </div>
            <div className="caja-select">
                {tipoInput(label) !== 'select' ? (
                    <input type={tipoInput(label)} />
                ) : (
                    <select name={label}>
                        <option value="" selected>
                            - -
                        </option>
                        {label === 'Cancha'
                            ? misCanchas.map((cancha, index) => {
                                  return (
                                      <option value={cancha} key={index}>
                                          {cancha}
                                      </option>
                                  );
                              })
                            : misEntrenadores.map((entrenador, index) => {
                                  return (
                                      <option value={entrenador} key={index}>
                                          {entrenador}
                                      </option>
                                  );
                              })}
                    </select>
                )}

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6z" />
                </svg>
            </div>
        </div>
    );
};

export default CajaInputsDatos;
