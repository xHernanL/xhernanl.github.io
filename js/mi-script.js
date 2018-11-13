document.addEventListener("DOMContentLoaded", function(){

    var precio = 40;
    var costoEnvio = 0;
    var subtotal = 0;

    var campoCantidad = document.getElementById("cantidad");
    var encabezadoSubtotal = document.getElementById("subtotal");
    var encabezadoTotal = document.getElementById("total");

    var envioComun = document.getElementById("comun");
    var envioEspecial = document.getElementById("especial")
    var envioPremium = document.getElementById("premium");
    var totalEnvio = document.getElementById("total-envio");

    var divOtorgado = document.getElementById("division-otorgado");

    var radioDigital = document.getElementById("digital");
    var radioFisico = document.getElementById("fisico");
    radioDigital.addEventListener("change", function(){
        divOtorgado.style.display = "none";
    });

    radioFisico.addEventListener("change", function(){
        divOtorgado.style.display = "block";
    });

    campoCantidad.addEventListener("change", function() {
      var cantidad = campoCantidad.value;
      cantidad = parseInt(cantidad);

      subtotal = cantidad * precio;
      encabezadoSubtotal.innerHTML = subtotal;
      encabezadoTotal.innerHTML = subtotal * 1.22;
    });

    envioComun.addEventListener("change", function () {
      costoEnvio = subtotal * 0.005;
      totalEnvio.innerHTML = costoEnvio;

      encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
      precioTotal.innerHTML = (costoEnvio + subtotal) * 1.22;

    });

    envioEspecial.addEventListener("change", function () {
      costoEnvio = subtotal * 0.02;
      totalEnvio.innerHTML = costoEnvio;

      encabezadoSubtotal.innerHTML = subtotal + costoEnvio;

    });


    envioPremium.addEventListener("change", function () {
      costoEnvio = subtotal * 0.05;
      totalEnvio.innerHTML = costoEnvio;

      encabezadoSubtotal.innerHTML = subtotal + costoEnvio;

    });
});
