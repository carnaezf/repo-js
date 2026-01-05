// assets/js/main.js

import { saludar } from './modules/saludo.js'

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('miBoton')
    boton.addEventListener('click', () => {
        saludar()
    })
})


// EJemplo 1
const inputNombre = document.getElementById("inputNombre");
console.log(inputNombre.value); // Muestra el valor actual del input


// Modificando Valores
inputNombre.value = "Texto agregado desde JavaScript";


// Ejemplo 2: Efectos form
inputNombre.style.backgroundColor = "#e6ffe6"; // Cambia el color de fondo del input
inputNombre.style.border = "2px solid #28a745"; // Cambia el borde para darle énfasis visual
inputNombre.focus(); // Coloca el cursor dentro del input.