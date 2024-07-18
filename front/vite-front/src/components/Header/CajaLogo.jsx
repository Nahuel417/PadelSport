import React from 'react';
import { Link } from 'react-router-dom';

const CajaLogo = () => {
    return (
        <div className="caja-logo">
            <Link className="logo" to="/about">
                <img src="https://thumbs.dreamstime.com/b/dise%C3%B1o-del-logotipo-de-padel-sport-moderno-logo-dise%C3%B1os-sencillos-y-modernos-187545892.jpg" alt="" />
            </Link>
        </div>
    );
};

export default CajaLogo;
