import React, { useState } from 'react';

const CajaTurno = ({ turno: { asunto, fecha, horario, cancha, entrenador, status } }) => {
    const [estado, setEstado] = useState(status);

    const cambiarEstado = () => {
        if (status === 'activo') setEstado('cancelado');
        return;
    };

    return (
        <div className="caja-turno">
            <div>
                <span>{fecha}</span>
            </div>
            <div>
                <span>{horario}</span>
            </div>
            <div>
                <span>{asunto}</span>
            </div>
            <div>
                <span>{cancha}</span>
            </div>
            <div className={`caja-spanEstado ${estado}`}>
                <span className={`span-estado ${estado}`}>{estado}</span>
            </div>
            <div>
                <span>{entrenador}</span>
            </div>
            <div>
                <button className={estado !== 'cancelado' ? 'boton-cancelar' : 'boton-cancelado'} onClick={() => cambiarEstado()} disabled={estado === 'cancelado'}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default CajaTurno;
