let imagenes = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

let index = 0;

function cambiarFondo() {
    document.querySelector("header").style.backgroundImage = "url('" + imagenes[index] + "')";
    
    index++;
    if (index >= imagenes.length) {
        index = 0;
    }
}

setInterval(cambiarFondo, 3000);
cambiarFondo();

function mostrarMensaje() {
    alert("Reserva enviada! Te contactamos pronto.");
}