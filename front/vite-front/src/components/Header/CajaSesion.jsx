import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CajaSesion = () => {
    const ruta = useLocation();

    return (
        <div className="caja-sesion">
            {ruta.pathname === '/login' ? (
                <Link to="/registro"> Registrarse </Link>
            ) : ruta.pathname === '/registro' || ruta.pathname === '/' ? (
                <Link to="/login"> Iniciar Sesion </Link>
            ) : (
                <Link to="/mi-perfil"> Mi Perfil </Link>
            )}
        </div>
    );
};

export default CajaSesion;
