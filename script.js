let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    var navElement = document.getElementById("nav");
    navElement.classList.toggle("responsive");
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion para la animacion del texto escrito a mano
document.addEventListener('DOMContentLoaded', function () {
    var text = document.getElementById('web-developer-text').innerHTML;
    document.getElementById('web-developer-text').innerHTML = '';

    var i = 0;
    var interval = setInterval(function () {
        document.getElementById('web-developer-text').innerHTML += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(interval);
        }
    }, 200); 
});

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("typescript");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("gestion");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

/*funcion para actualizar el año automáticamente*/
function actualizarAno() {
    var anoActual = new Date().getFullYear();
    var elemento = document.getElementById('derechos-autor');
    elemento.innerHTML = '\u00A9 ' + anoActual + ' Luis Trujillo. <a href="https://github.com/Luiso-o/mi_portafolio/tree/main" target="_blank">OpenSource.</a>';
    elemento.style.textAlign = 'center'; 
}

window.onload = actualizarAno;