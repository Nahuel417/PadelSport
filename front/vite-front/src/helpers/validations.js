export const validateLogin = (valores) => {
    let errores = {};

    //* email */
    const isEmail = /^.+@.+\..+$/;
    if (!valores.email) errores.email = 'Debe ingresar un email';
    else if (!isEmail.test(valores.email)) errores.email = 'Debe ingresar un email valido';

    //* password */
    // const isAlphanumeric = /^[a-zA-Z0-9]+$/;
    function isAlphanumeric(password) {
        return password.split('').some((caracter) => caracter >= '0' && caracter <= '9');
    }

    if (!valores.password) errores.password = 'Debe ingresar una contraseña';
    else if (valores.password.length <= 7 || !isAlphanumeric(valores.password)) errores.password = 'La contraseña debe tener al menos 8 caracteres y un numero';

    return errores;
};
