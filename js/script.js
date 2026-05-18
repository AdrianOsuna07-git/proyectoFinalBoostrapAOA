//Creamos los enlaces del menú de navegación
let linkHome = document.getElementById('link-home');
let linkClasico = document.getElementById('link-clasico');
let linkFiccion = document.getElementById('link-ficcion');
let linkTerror = document.getElementById('link-terror');
let linkRomance = document.getElementById('link-romance');

//Creamos los elementos de cada sección
let secClasica = document.getElementById('seccion-clasica');
let secFiccion = document.getElementById('seccion-ficcion');
let secHome = document.getElementById('seccion-home');
let secTerror = document.getElementById('seccion-terror');
let secRomance = document.getElementById('seccion-romance');

//Hacemos los event listener
linkHome.addEventListener("click", mostrarTodo);
linkClasico.addEventListener("click", filtrarClasico);
linkFiccion.addEventListener("click", filtrarFiccion)
linkTerror.addEventListener("click",filtraTerror);
linkRomance.addEventListener("click",filtrarRomance)

//Creamos las funciones
function mostrarTodo() {
    secHome.classList.remove('ocultar');
    secClasica.classList.add('ocultar');
    secFiccion.classList.add('ocultar');
    secTerror.classList.add('ocultar');
    secRomance.classList.add('ocultar')
}

function filtrarClasico() {
    secClasica.classList.remove('ocultar');
    secFiccion.classList.add('ocultar');
    secHome.classList.add('ocultar');
    secTerror.classList.add('ocultar');
    secRomance.classList.add('ocultar')
}

function filtrarFiccion() {
    secFiccion.classList.remove('ocultar');
    secClasica.classList.add('ocultar');
    secHome.classList.add('ocultar');
    secTerror.classList.add('ocultar');
    secRomance.classList.add('ocultar')
}

function filtraTerror(){
    secTerror.classList.remove('ocultar');
    secFiccion.classList.add('ocultar');
    secClasica.classList.add('ocultar');
    secHome.classList.add('ocultar');
    secRomance.classList.add('ocultar')
}

function filtrarRomance(){
    secRomance.classList.remove('ocultar');
    secClasica.classList.add('ocultar');
    secFiccion.classList.add('ocultar');
    secTerror.classList.add('ocultar');
    secHome.classList.add('ocultar');
}