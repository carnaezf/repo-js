// Strings
// Tambien podemos usar operadores con texto.

// concatenacion de cadenas
let myName = "Cesar"

let saludo = "Hola " + myName + "!"

console.log(saludo)

// console.log(typeof myName)
// console.log(typeof 1)

// Longitud

console.log(saludo.length)

// Acceso a caracteres
console.log(saludo[0]);
// console.log(saludo[-1]);

// Metodos Comunes

console.log(saludo.toLocaleLowerCase());
console.log(saludo.toLocaleUpperCase());

console.log("##indexOf##")

console.log(saludo.indexOf("Cesar"));

console.log(saludo.indexOf("Arnaez"));

// console.log("##include##")

console.log(saludo.includes("Cesar"))

console.log(saludo.includes("Arnaez"))


fruta = "Banana"

// console.log("##slice##")
console.log(fruta.slice(1, 4));

console.log(saludo.replace("Cesar", "Arnaez"));


// split
let palabras = saludo.split(" ") // ["Hola", "Cesar"]
console.log(palabras);
// console.log(typeof palabras);
console.log(palabras[1]);


// Trim
let sucio = "     Hola Mundo   "
console.log(sucio);

console.log(sucio.trim());


// Repeticiones
let lenguaje = "JS"

console.log(lenguaje.repeat(3));


// Template literals
let message = `Hola, estamos
aprendiendo
JS`

console.log(message);

let email = "prueba@prueba.cl"

console.log(`Hola, ${myName} el correo electronico es ${email}`);


console.log('###Bucle for###');

// Bucle for:
for (let i = 1; i < 5; i++ ) {
    console.log("Vuelta nro " + i);
    
}


for (let letra = 0; letra < fruta.length; letra++) {
    console.log(`${letra} ${fruta[letra]}`);

}


// Ejercicios:
// 1. Concatena dos cadenas de texto
// 2. muestra la longitud de una cadena de texto
// 3. muestra el primer y carácter de un string
// let primera_letra = parte_1.slice(0,1)
// 4. Convierte a mayúsculas y minusculas un string
// 5. Crea una cadena de texto en varias lineas
// 6. Interpola el valor de una variable en un string
// 7. Reemplaza todos los espacios en blanco de un string por guiones
// 8. comprueba si una cadena de texto contiene una palabra concreta
// 9. Comprueba si dos strings son iguales
// 10. comprueba si 2 strings tienen la misma longitud.









