document.addEventListener("DOMContentLoaded", function(){
    juegos = JSON.parse(juegos);

    var nombre = document.getElementById("nombre-gta");
    nombre.innerHTML = juegos[0].nombre;

    var galeriaTitle = document.getElementById("galeria-title");
    galeriaTitle.innerHTML = juegos[0].galeriatitle;

    var genero = document.getElementById("genero-gta");
    genero.innerHTML = juegos[0].genero;

    var jugadores = document.getElementById("jugadores-gta");
    jugadores.innerHTML = juegos[0].jugadores;

    var descripcion = document.getElementById("descripcion-gta");
    descripcion.innerHTML = juegos[0].descripcion;

    var valoracion = document.getElementById("valoracion-gta");
    valoracion.innerHTML = juegos[0].valoracion;

    var precio = document.getElementById("precio-gta");
    precio.innerHTML = juegos[0].precio;

    var imgPortada = document.getElementById("img-portada");
    imgPortada.setAttribute("src", juegos[0].portada);

    var imgGaleria = document.getElementById("img-1");
    imgGaleria.setAttribute("src", juegos[0].imagen1);

    var imgGaleria = document.getElementById("img-2");
    imgGaleria.setAttribute("src", juegos[0].imagen2);

    var imgGaleria = document.getElementById("img-3");
    imgGaleria.setAttribute("src", juegos[0].imagen3);

    var imgGaleria = document.getElementById("img-4");
    imgGaleria.setAttribute("src", juegos[0].imagen4);

    var imgGaleria = document.getElementById("img-5");
    imgGaleria.setAttribute("src", juegos[0].imagen5);

    var imgGaleria = document.getElementById("img-6");
    imgGaleria.setAttribute("src", juegos[0].imagen6);

    });
