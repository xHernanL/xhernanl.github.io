document.addEventListener("DOMContentLoaded", function(){
  juegos = JSON.parse(juegos);

  var listado = document.getElementById("listajuegos");

  for(var i = 0; i < juegos.length; i++){
    listado.innerHTML = listado.innerHTML + "<li><h1>" + juegos[i].nombre + "</h1><a href='" + juegos[i].link + "'</a><img src='" + juegos[i].foto + "'></li>";
    }
});
