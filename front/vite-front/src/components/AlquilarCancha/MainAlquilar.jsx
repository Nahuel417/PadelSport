import React from 'react';
import './MainAlquilar.css';
import InputsAlquilar from './InputsAlquilar';

const Main = () => {
    return (
        <>
            <main id="main">
                <div className="contenedor-main-alquilar">
                    <h3>Alquilar una Cancha</h3>
                    <hr className="linea-titulo" />

                    <p className="aviso">
                        Complete el siguiente formulario para alquilar una cancha. <b>Recuerde que el horario para hacerlo es de 15:00hs a 23:00hs.</b>
                    </p>

                    <form action="">
                        <InputsAlquilar />
                    </form>
                </div>
            </main>
        </>
    );
};

export default Main;
