import React from 'react';

const CajaPaginas = () => {
    return (
        <div className="caja-paginas">
            <li>
                <p>PÁGINAS</p>
            </li>
            <li>
                <a href="./index.html">Home</a>
            </li>
            <li>
                <a href="./views/misTurnos.html">Mi Historial</a>
            </li>
            <li>
                <a href="./views/sacarTurno.html">Alquilar Cancha</a>
            </li>
            <li>
                <a href="./views/login.html">Iniciar Sesión</a>
            </li>
        </div>
    );
};

export default CajaPaginas;
