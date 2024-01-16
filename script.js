let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

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

//funcion para chat por WathsApp
function enviarWhatsapp() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    if (!nombre || !telefono || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    var mensajeWhatsapp = "Hola, soy " + nombre + ". Mi número de teléfono es " + telefono + ". Mi mensaje es: " + mensaje;
    mensajeWhatsapp = encodeURIComponent(mensajeWhatsapp);
    var enlaceWhatsapp = "https://wa.me/34657626639?text=" + mensajeWhatsapp;
    window.open(enlaceWhatsapp);
}

/*funcion para actualizar el año automáticamente*/
function actualizarAno() {
    var anoActual = new Date().getFullYear();
    document.getElementById('derechos-autor').innerHTML = '\u00A9 ' + anoActual + ' Luis Trujillo. <a href="https://github.com/Luiso-o/mi_portafolio/tree/main" target="_blank">OpenSource.</a>';
}

window.onload = actualizarAno;