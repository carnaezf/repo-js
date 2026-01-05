// assets/js/main.js

import { saludar } from "./modules/saludo.js";

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("miBoton");
  boton.addEventListener("click", () => {
    saludar();
  });
});

/*
// Ejemplo:
let edad = Number(prompt("Ingresa tu edad:"));

if (edad >= 18) {
//   alert("Eres mayor de edad. Puedes ingresar.");
  console.log('Estas dentro del sistema');
  
} else {
//   alert("Eres menor de edad. Acceso restringido.");
  console.log('Estas fuera del sistema, espera a cumplir 18');
}*/

// ¿Qué es una Template String?
// ejercicio 1

let nombre = "Ana";
let edad = 30;

// Usando comillas normales:
console.log("Hola, " + nombre + ". Tienes " + edad + " años.");

// Usando template strings (mejor forma):
console.log(`Hola, ${nombre}. Tienes ${edad} años.`);

// Ejercicio 2
let precio = 1500;
let cantidad = 3;

console.log(`Total a pagar: $${precio * cantidad}`);


/*
// Ejercicio directo para practicar
let usuario = prompt("¿Cuál es tu nombre?");
let ciudad = prompt("¿En qué ciudad estás?");

alert(`¡Hola ${usuario}! Bienvenido/a desde ${ciudad}.`);


*/
//  ¿Qué es una condición?
5 > 3; // true
10 == 10; // true
"hola" === "adiós"; // false

// ejemplo2
let edadUsuario = 20;

if (edadUsuario >= 18) {
  console.log("Eres mayor de edad");
}

// Ejemplo 3 — Condición con else

let edadUsuario2 = 16;

if (edadUsuario2 >= 18) {
  console.log("Puedes entrar al sistema");
} else {
  console.log("Acceso denegado, eres menor de edad");
}

// Ejemplo 4 — Condición con else if (varias posibilidades)

let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}


/*
// Aplicación práctica: Validar entrada

let usuario2 = prompt("¿Cuál es tu nombre?");
let edadUsuario3 = Number(prompt("¿Cuántos años tienes?"));

if (edadUsuario3 >= 18) {
  alert(`Bienvenido/a, ${usuario2}. Puedes continuar.`);
} else {
  alert(`Lo siento, ${usuario2}. Necesitas ser mayor de edad.`);
}

*/

// Ejemplo 1 switch
// Ejemplo: Día de la semana
let dia = "martes";

switch (dia) {
  case "lunes":
    console.log("¡Ánimo, comienza la semana!");
    break;
  case "martes":
    console.log("Segundo día, ya vamos avanzando");
    break;
  case "miércoles":
    console.log("Mitad de semana");
    break;
  case "jueves":
    console.log("¡Casi es viernes!");
    break;
  case "viernes":
    console.log("¡Por fin viernes!");
    break;
  default:
    console.log("¡Es fin de semana!");
}

// Resultado en consola:
// "Segundo día, ya vamos avanzando"

// Ejemplo 2: Evaluar una fruta
let fruta = "manzana";

switch (fruta) {
  case "manzana":
    console.log("Es roja y crujiente");
    break;
  case "banana":
    console.log("Es amarilla y dulce");
    break;
  case "naranja":
    console.log("Es anaranjada y jugosa");
    break;
  default:
    console.log("No conozco esta fruta");
}

// Funciones
// Función tradicional básica ejemplo 1
function saludarFn(nombre) {
  return "Hola, " + nombre + "!";
}

console.log(saludarFn("Ana")); // "Hola, Ana!"

// Función tradicional como expresión Ejemplo 2
const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(4, 5)); // 20

// ejemplo 3

// Arrow function básica
const saludarArrow = (nombre) => {
  return "Hola, " + nombre + "!";
};

console.log(saludarArrow("Carlos")); // "Hola, Carlos!"

// Arrow function simplificada (una línea) Ejemplo 4
const sumarArrow = (a, b) => a + b;

console.log(sumarArrow(10, 15)); // 25



// Arrow function con un solo parámetro
const cuadrado = (x) => x * x;

console.log(cuadrado(7)); // 49

// Arrow function sin parámetros ejemplo 6
const obtenerHora = () => new Date().getHours();

console.log("Son las " + obtenerHora() + " horas");



