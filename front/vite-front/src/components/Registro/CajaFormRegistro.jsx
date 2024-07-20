import { Form, Formik } from 'formik';
import CajaLabelRegistro from './CajaLabelRegistro';
import { useState } from 'react';
import { labelsRegistro1, labelsRegistro2 } from '../../helpers/inputsDatos';
import { validateRegister } from '../../helpers/validations';
import axios from 'axios';

const CajaFormRegistro = () => {
    const [labels1, setLabels1] = useState(labelsRegistro1);
    const [labels2, setLabels2] = useState(labelsRegistro2);

    const postFunctionRegister = async (formData) => {
        try {
            axios.post('http://localhost:3000/users/register', formData);
            alert('enviado al back');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    birthday: '',
                }}
                validate={validateRegister}
                onSubmit={(valores, { resetForm }) => {
                    postFunctionRegister(valores);
                    resetForm();
                }}>
                {({ errors }) => (
                    <Form action="" id="form">
                        {console.log(errors)}
                        <div className="form-registro">
                            <div className="contendor-form-registro" id="contendor-form-registro">
                                <div className="caja-inputs-1" id="caja-inputs-1">
                                    {labels1.map((label, index) => {
                                        const inputName =
                                            label === 'nombre' ? 'name' : label === 'contraseña' ? 'password' : label === 'Fecha de Nacimiento' ? 'birthday' : 'email';

                                        return <CajaLabelRegistro key={index} label={label} errores={errors[inputName]} />;
                                    })}
                                </div>

                                <div className="caja-inputs-2" id="caja-inputs-2">
                                    {labels2.map((label, index) => {
                                        const inputName = label === 'apellido' ? 'last_name' : label === 'Confirmar Contraseña' ? 'confirmPassword' : 'email';

                                        return <CajaLabelRegistro key={index} label={label} errores={errors[inputName]} />;
                                    })}
                                </div>
                            </div>
                            <p>* Todos los cambios son obligatorios</p>

                            <div className="caja-boton-registro">
                                <button type="submit" className="boton-registro">
                                    Registrarme
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default CajaFormRegistro;
