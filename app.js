const boton = document.querySelectorAll(".botonPun")



boton.forEach(boton => {
    boton.addEventListener("click", () => {
        botonElegido(boton);
    });
});



function botonElegido(boton) {
    let valor = boton.getAttribute("value");
}



// PRUEBA DE CONEXION
