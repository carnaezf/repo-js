function mensajeExterno() {
    alert("Hola, soy JS externo");
    console.log("Mensaje desde JS externo")
}


console.log("\n--let--")
// 1. Ejemplo Let
let nombre = "Ana"
console.log("Valor inicial de nombre: ", nombre);

nombre = "Carlos"
console.log("Valor reasignado: ", nombre);


// 2. Ejemplo de Const
console.log("\n-- const --")

const PI = 3.1416
console.log(PI);

// PI = 3.15 // Error si se activa activa esta linea el codigo rompe
 
// 3. Ejemplo Var
console.log("\n-- var --")
var fruta = "Manzana";
console.log("Valor inicial de fruta: ", fruta);

fruta = "Pera" // reasiganacion permitida

// 4. Ejemplo de hoisting
console.log("\n-- Hoisting --")

{
    console.log("Valor de comida ANTES de declararla (var): ", comida);

    var comida = "Pizza"

    console.log("Valor de comida DESPUES de declararla (var): ", comida);
}


// Operadores aritmeticos
console.log("\n--- Aritméticos ---");
let a = 5;
let b = 10;

console.log("Suma de a + b: ", a + b)
console.log("Resta: ", a - b)
console.log("Multiplicacion: ", a * b)

console.log(a)

a++;

console.log(a)













