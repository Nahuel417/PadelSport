import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateLogin } from '../../helpers/validations';
import axios from 'axios';

const CajaFormLogin = () => {
    const postFunction = async (formData) => {
        try {
            await axios.post('http://localhost:3000/users/login', formData);
            alert('enviado al back');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={validateLogin}
                onSubmit={(valores, { resetForm }) => {
                    postFunction(valores);
                    resetForm();
                }}>
                {({ errors }) => (
                    <Form action="./login.html" id="form">
                        <div className="contendor-form" id="contendor-form">
                            <div className="caja-login" id="caja-login">
                                <Field type="text" name="email" id="inputEmail" required />
                                <span className="span-correo">Correo Electrónico</span>
                                <p className="feedback-negativo">{errors.email}</p>
                            </div>

                            <div className="caja-login" id="caja-login">
                                <Field type="password" name="password" id="inputContrasenia" required />
                                <span className="span-contrasenia">Contraseña</span>
                                <p className="feedback-negativo">{errors.password}</p>
                            </div>

                            <div className="cookie-recuerdame" id="cookie-recuerdame">
                                <div>
                                    <Field type="checkbox" name="cookie" id="inputCookie" />
                                    <label>Recuerdame</label>
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
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default CajaFormLogin;
