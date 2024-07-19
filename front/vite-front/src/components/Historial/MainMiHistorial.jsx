import React, { useEffect, useState } from 'react';
import './MainMiHistorial.css';
import CajaTurno from './CajaTurno';
import CajaThead from './CajaThead';
import axios from 'axios';

const MainMiHistorial = () => {
    const [turnos, setTurno] = useState([]);

    const fetchData = async () => {
        try {
            await axios.get('http://localhost:3000/appointments').then((res) => setTurno(res.data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <main id="main">
                <div className="contenedor-main-historial">
                    <h3>Historial de Turnos</h3>
                    <hr className="linea-titulo" />

                    <p className="aviso">
                        Historial completo con todos los turnos realizados. <b>Recuerde que para cancelar un turno deberá hacerlo como maximo con 12hs de antelación.</b>
                    </p>

                    <div className="contenedor-turnos" id="contenedor-turnos">
                        <CajaThead />

                        {turnos?.length ? (
                            turnos.map((turno) => {
                                return <CajaTurno key={turno.id} turno={turno} />;
                            })
                        ) : (
                            <p className="ningun-turno">No se encontraron turnos realizados.</p>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default MainMiHistorial;
