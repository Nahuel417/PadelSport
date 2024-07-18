import CajaFormLogin from './CajaFormLogin';
import './MainLogin.css';

const MainLogin = () => {
    return (
        <>
            <main id="main">
                <div className="contenedor-main-login">
                    <h3>Iniciar Sesión</h3>
                    <hr className="linea-titulo" />

                    <form action="./login.html" id="form">
                        <CajaFormLogin />
                    </form>
                </div>
            </main>
        </>
    );
};

export default MainLogin;
