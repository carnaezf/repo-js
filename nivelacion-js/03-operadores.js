// Operadores


let a = 5
let b = 10

// Operadores aritmeticos
console.log(100 + 10); // Suma
console.log(a + 2) 
console.log(a - b) // Resta
console.log(5 * 2) // Multiplicacion
console.log(5 / 2) // Division
console.log(5 % 2) // Modulo
console.log(5 ** b) // Exponente


console.log(a);

// incremeto

++a
console.log("Operador de incremento: ", a);


// Decremento
--b
console.log(b);

// Operadores de asignacion
let myVariable = 2
console.log(myVariable);

// myVariable = myVariable + 2
myVariable +=  2

console.log(myVariable)


// Operadores de comparacion (Verdadero o falso)
console.log(a, b);
console.log(a > b);
console.log(a < b);
console.log(10 >= 10);
console.log(a <= b);

console.log(a == 6);
console.log(6 == "6"); // valor
console.log(6 === "6"); // valor and typeof


console.log(6 != "6"); // valor
console.log(6 !== "6"); // valor and typeof


console.log('true' == true);


// Operadores Logicos
console.log(50 > 10 && 25 >20) 
console.log(true && false)
console.log(false || false)

/*
Investigar:
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators

*/

// AND (&&): todas las condiciones deben ser verdaderas
console.log(5 < 10 && 15 < 20); // true
console.log(false && false);    // false
console.log(true && true);      // true

// OR (||): al menos una condición debe ser verdadera
console.log(5 > 10 || 15 > 20); // false
console.log(5 < 10 || 15 > 20); // true
console.log(false || true);     // true


// NOT (!)
console.log(!true)
console.log(!(5 > 10 || 15 > 20)); // false

// Operador Ternario:
const isRaining = true


isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")