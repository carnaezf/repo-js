// assets/js/main.js

import { saludar } from "./modules/saludo.js";

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("miBoton");
  boton.addEventListener("click", () => {
    saludar();
  });
});

// Template Strings
// ejercicio 1
let nombre = "Ana";
let edad = 30;

console.log("Hola, " + nombre + ". Tienes " + edad + " años");

console.log(`Hola, ${nombre}. Tienes ${edad} años`);

// Ejercicio 2
let precio = 1500;
let cantidad = 3;

console.log(`Total a pagar: $${precio * cantidad}`);

// Condicionales

let edadUsuario = 15;

if (edadUsuario >= 18) {
  //false
  console.log("Eres mayor de edad"); // Esto nunca se ejecuta
} else {
  console.log("Eres menor de edad");
}

/*
// Aplicacion practica: Validar Entrada

let usuario = prompt("¿Cual es tu nombre?")
let edad2 = Number(prompt("Cuantos años tienes?"))

console.log(typeof usuario)
console.log(typeof edad2)
*/

// Ejemplo switch

let dia = "Sabado";

switch (dia) {
  case "lunes":
    console.log("Esto no se ejecuta");
    break;
  case "martes":
    console.log("Segundo dia!!!");
    break;
  case "miercoles":
    console.log("Esto no se ejecuta");
    break;
  case "ljueves":
    console.log("Esto no se ejecuta");
    break;
  case "vienes":
    console.log("Esto no se ejecuta");
    break;

  default:
    console.log("Es fin de semana!");
    break;
}

console.log("Esto esta fuera del bloque switch");

// Segundo ejemplo switch
let color = "morado";
console.log(color);

let mensajeColor;
console.log(mensajeColor);

switch (color) {
  case "rojo":
    mensajeColor = "El color es rojo";
    break;
  case "azul":
    mensajeColor = "El color es azul";
    break;

  default:
    mensajeColor = "Color no reconocido";
    break;
}

console.log(mensajeColor);

// Funciones sin argumento
function saludar2() {
  console.log("Hola desde una funcion");
}
saludar2()


let nombre3 = "Carlos"

// Funcion con argumento
function saludarConArgumento(nombre) {
  console.log(`Hola ${nombre}`);
}


saludarConArgumento(nombre3)


function saludarfn(nombre){
    return `Hola ${nombre}`
}

console.log(saludarfn(nombre3))

let nombreFuncion = saludarfn(nombre3)
console.log(nombreFuncion);



// Arrow function
// let saludaArrow = (nombre) => {
//     return `Hola ${nombre}`
// }


// Arrow function
let saludaArrow = (nombre) => `Hola ${nombre}`



console.log(saludaArrow(nombre3))


