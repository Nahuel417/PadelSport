import { useState } from 'react';
import userDatos from '../../helpers/userDatos';

const CajaInfoPerfil = () => {
    const [user, setUser] = useState(userDatos[0]);

    return (
        <div className="caja-info">
            <h4 id="nombreCompleto-perfil">{`${user.name} ${user.last_name}`}</h4>
            <p id="email-perfil">{user.email}</p>
            <p id="fecha-perfil">{user.birthday}</p>

            <div className="caja-botones">
                <button type="submit" id="boton-cerrarSesion">
                    Cerrar Sesión
                </button>
                <button type="submit" id="boton-eliminar">
                    Eliminar Usuario
                </button>
            </div>
        </div>
    );
};

export default CajaInfoPerfil;
