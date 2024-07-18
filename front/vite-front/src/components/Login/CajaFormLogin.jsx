const CajaFormLogin = () => {
    return (
        <div className="contendor-form" id="contendor-form">
            <div className="caja-login" id="caja-login">
                <input type="text" name="email" id="inputEmail" required />
                <span className="span-correo">Correo Electrónico</span>
                <span className="feedback-negativo" id="feedback-negativo"></span>
            </div>

            <div className="caja-login" id="caja-login">
                <input type="password" name="password" id="inputContrasenia" required />
                <span className="span-contrasenia">Contraseña</span>
                <span className="feedback-negativo" id="feedback-negativo"></span>
            </div>

            <div className="cookie-recuerdame" id="cookie-recuerdame">
                <div>
                    <input type="checkbox" name="cookie" id="inputCookie" />
                    <label for="cookie">Recuerdame</label>
                </div>

                <span>
                    <a href="#">¿Olvidaste tu contraseña? </a>
                </span>
            </div>

            <div className="caja-boton-login">
                <button type="submit" className="boton-login">
                    Ingresar
                </button>
            </div>
        </div>
    );
};

export default CajaFormLogin;
