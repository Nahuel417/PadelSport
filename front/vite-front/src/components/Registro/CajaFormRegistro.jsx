import CajaInputs1 from './CajaInputs1';
import CajaInputs2 from './CajaInputs2';

const CajaFormRegistro = () => {
    return (
        <>
            <div className="contendor-form-registro" id="contendor-form-registro">
                <CajaInputs1 />

                <CajaInputs2 />
            </div>
            <p>*Todos los cambios son obligatorios</p>

            <div className="caja-boton-registro">
                <button type="submit" className="boton-registro">
                    Registrarme
                </button>
            </div>
        </>
    );
};

export default CajaFormRegistro;
