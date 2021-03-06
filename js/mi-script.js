document.addEventListener("DOMContentLoaded", function(){

  var precio = 40;
  var costoEnvio = 0;
  var subtotal = 0;
  var num;

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
  var reseteoJ = document.getElementById("reseteo");

  reseteoJ.addEventListener("click", function(){
    encabezadoTotal.innerHTML = 0;
    encabezadoSubtotal.innerHTML = 0;
    envioComun.innerHTML = 0;
    envioEspecial.innerHTML = 0;
    envioPremium.innerHTML = 0;
    totalEnvio.innerHTML = 0;
    subtotal.innerHTML = 0;
  });

  radioDigital.addEventListener("change", function(){
    divOtorgado.style.display = "none";
    costoEnvio = 0;
    encabezadoSubtotal.innerHTML = subtotal;
    num = subtotal * 1.22;
    encabezadoTotal.innerHTML = num.toFixed(2);
  });

  radioFisico.addEventListener("change", function(){
    divOtorgado.style.display = "block";
  });

  campoCantidad.addEventListener("change", function() {
    var cantidad = campoCantidad.value;
    cantidad = parseInt(cantidad);

    subtotal = cantidad * precio;
    encabezadoSubtotal.innerHTML = subtotal;
    num = subtotal * 1.22;
    encabezadoTotal.innerHTML = num.toFixed(2);
  });

  envioComun.addEventListener("change", function () {
    costoEnvio = subtotal * 0.005;
    totalEnvio.innerHTML = costoEnvio;

    encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
    num = (costoEnvio + subtotal) * 1.22;
    encabezadoTotal.innerHTML = num.toFixed(2);
  });

  envioEspecial.addEventListener("change", function () {
    costoEnvio = subtotal * 0.02;
    totalEnvio.innerHTML = costoEnvio;

    encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
    num = (costoEnvio + subtotal) * 1.22;
    encabezadoTotal.innerHTML = num.toFixed(2);
    });


  envioPremium.addEventListener("change", function () {
    costoEnvio = subtotal * 0.05;
    totalEnvio.innerHTML = costoEnvio;

    encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
    num = (costoEnvio + subtotal) * 1.22;
    encabezadoTotal.innerHTML = num.toFixed(2);
    });
});
