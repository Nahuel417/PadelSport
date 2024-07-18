import { Link } from 'react-router-dom';

const CajaList = () => {
    return (
        <div className="caja-ul">
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/historial"> Mi Historial </Link>
                </li>
                <li>
                    <Link to="/alquilar-cancha"> Alquilar Cancha </Link>
                </li>
                <li>
                    <Link to="/about"> About </Link>
                </li>
            </ul>
        </div>
    );
};

export default CajaList;
