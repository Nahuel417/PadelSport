import { useEffect, useState } from 'react';
import { editUserAppointment } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const CajaTurno = ({ turno: { id, asunto, fecha, horario, cancha, entrenador, status } }) => {
    const [estado, setEstado] = useState(status);
    const dispatch = useDispatch();

    const postFunctionLogin = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
            const appointmentData = response.data;

            dispatch(editUserAppointment({ id: appointmentData.id, status: 'cancelado' }));
            setEstado('cancelado');
        } catch (error) {
            console.log(error);
            alert('No se puedo cancelar el turno');
        }
    };

    const cambiarEstado = () => {
        if (confirm('¿Desea cancelar el turno?') && status === 'activo') {
            postFunctionLogin();
        }
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
            <div className="caja-entrenador">
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
