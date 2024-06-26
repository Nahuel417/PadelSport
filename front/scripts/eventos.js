// * EVENTO MENU * //
let ubicacionPrincipal = window.scrollY;
let header = document.getElementById('contenedor-header');

const eventoMenu = window.addEventListener('scroll', () => {
    let ubicacionActual = window.scrollY;

    if (ubicacionPrincipal <= ubicacionActual) {
        header.classList.add('stycky');
    } else {
        header.classList.add('styckya');
        header.classList.remove('stycky');
    }

    if (ubicacionActual <= 20) {
        header.classList.remove('styckya');
    }

    ubicacionPrincipal = ubicacionActual;
});
// * EVENTO MENU * //
