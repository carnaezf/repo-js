// assets/js/main.js

function saludar() {
  alert("¡Hola desde un módulo JS!");
  console.log("Saludo desde main.js");
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("miBoton");
  boton.addEventListener("click", () => {
    saludar();
  });
});

// Evento Ready
$(document).ready(function () {
  let caja = $("#caja");

  caja.text("Nuevo Contenido para la caja");

  // Aplicando estilos desde jQuery
  caja.css({
    "background-color":"red",
    "color":"white",
    "width":"250px",
    "height":"250px",
    "cursor":"pointer",
    "display":"flex",
    "justify-content":"center",
    "align-items":"center",
    "flex-direction":"column",
  });

  // Evento click
  caja.click(function () {
    alert("Has dado click a la caja");
    console.log("Has dado click a la caja");

    //  Agregar contenido dinámicamente con append()
    $(this).append("<p>Has dado click a la caja</p>");
  });

  caja.mouseenter(function () {
    $(this).css("background-color", "blue");
    console.log("Mouse dentro de la caja");
  });

  caja.mouseleave(function () {
    $(this).css("background-color", "red");
    console.log("Mouse salió de la caja");
  });

  // Efectos
  $("#btnIncial").click(function () {
    // caja.hide();
    // caja.fadeOut();
    // caja.toggle();
    caja.fadeToggle();
  });

  $("#btnCambiarTexto").click(function () {
    caja.text("¡El texto ha sido cambiado con jQuery!");
    console.log("Texto cambiado con botón externo");
  });

  // Botón que anima el tamaño de la caja
  $("#btnAnimar").click(function () {
    caja.animate(
      {
        width: "350px",
        height: "350px",
        opacity: 0.8,
      },
      500
    );
  });

  // asincronia AJAX
  // Traer un ave usnado Ajax
  $.get("https://aves.ninjas.cl/api/birds/76-buteo-albigula", function (data) {
    // Agregamos el nombre
    caja.append("<p><strong>Nombre:</strong> " + data.name.spanish + "</p>");

    // Agregamos una imagen del ave
    caja.append(`<img src="${data.images.main}" width="250">`);

    console.log("Datos recibidos desde la API de Aves:", data);
  });

  // Obtener todas las aves con AJAX
  // $.get("https://aves.ninjas.cl/api/birds", function (aves) {
  //   aves.forEach((ave) => {
  //     caja.append(`
  //     <div style="margin-bottom: 20px;">
  //       <h4>${ave.name.spanish}</h4>
  //       <img src="${ave.images.main}" width="200">
  //       <hr>
  //     </div>
  //   `);
  //   });

  //   console.log("Aves cargadas:", aves);
  // });
});
