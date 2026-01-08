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



// Clase 3
let nombre = "Sofía";

// Mostramos por Consola
console.log(nombre); // Muestra: Sofía

// POdemos usarla para otras acciones
alert("Hola " + nombre + ", ¡bienvenida!");


// Como nombrar variables

// Ejemplos adicionales correctos
let nombreUsuario = "Laura";      // Nombre claro y válido
let totalCarrito = 15200;         // Representa el total en una tienda online
let estaLogueado = true;          // Booleano que indica estado de sesión
let temperaturaActual = 28.5;     // Valor numérico descriptivo


// Ejemplos incorrectos
let x = "Laura";           //  Muy genérico
// let 1usuario = "Carlos";   //  Empieza con número
// let mi nombre = "Ana";     //  Tiene espacios
// let @correo = "mail.com";  //  Tiene caracteres especiales

// Mas ejemplos de arrays

let numeros = [10, 20, 30, 40];
console.log(numeros[3]); // 40


let mezcla = [true, 42, "hola"];
console.log(mezcla[1]); // 42



// Más ejemplos de Objetos:

let producto = {
  nombre: "Laptop",
  precio: 800,
  disponible: true
};

console.log(producto.precio); // 800
let usuario = {
  nombre: "Carlos",
  correo: "carlos@mail.com"
};

console.log(usuario.correo); // "carlos@mail.com"


// Ejercicios
// Creamos un array con los días de la semana
let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Mostramos el primer elemento del array (índice 0)
console.log(diasSemana[0]); // Resultado: "Lunes"


// Diferemcias let con VAR

if (true) {
  let edad = 30;
}
console.log("Edad dentro de funcion",edad); // Error: edad no está definida fuera del bloque


// Const
const cliente = { nombre: "Ana" };
cliente.nombre = "Laura";  // Esto sí se permite
console.log(cliente.nombre); // "Laura"

// Pero esto no se permite:
// cliente = { nombre: "Pedro" }; // Error: No puedes re-asignar un const
