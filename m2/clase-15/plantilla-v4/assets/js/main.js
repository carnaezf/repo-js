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

