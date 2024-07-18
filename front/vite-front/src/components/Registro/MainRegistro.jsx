import CajaFormRegistro from './CajaFormRegistro';
import './MainRegistro.css';

const MainRegistro = () => {
    return (
        <>
            <main id="main">
                <div className="contenedor-main-registro">
                    <h3>Formulario de registro</h3>
                    <hr className="linea-titulo" />

                    <form action="./login.html" id="form">
                        <div className="form-registro">
                            <CajaFormRegistro />
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default MainRegistro;
