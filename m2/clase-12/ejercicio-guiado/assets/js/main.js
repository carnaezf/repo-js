// assets/js/main.js

// script.js

// Paso 1: Mostrar saludo usando textContent
function mostrar() {
  const nombreInput = document.getElementById('nombre');  // Input
  const salida = document.getElementById('salida');       // Párrafo de salida

  const nombre = nombreInput.value.trim(); // Quitamos espacios

  if (nombre === '') {
    salida.textContent = 'Por favor, escribe tu nombre arriba.';
    return;
  }

  // Cambiamos solo el texto, sin HTML
  salida.textContent = `¡Hola, ${nombre}!`;
}


// Paso 2: Agregar una línea al historial usando innerHTML
let contador = 0;

function formatear() {
  const nombre = document.getElementById('nombre').value.trim();
  const historial = document.getElementById('historial');

  if (!nombre) return;

  contador++;

  // Agregamos HTML con formato (negritas, énfasis)
  const item = ` 
    <p class="historial-item">
      <strong>${contador}.</strong> Guardado: <em>${nombre}</em>
    </p>
  `;
  
  historial.innerHTML += item;
}


// Paso 3: Mostrar resumen con alert y resetear el formulario/DOM
function finalizar() {
  const nombre = document.getElementById('nombre').value.trim();
  const mensajeBase = nombre ? `¡Listo, ${nombre}!` : '¡Listo!';
  alert(`${mensajeBase}\nEntradas en el historial: ${contador}`);

  // Limpiar interfaz
  document.getElementById('salida').textContent = '';
  document.getElementById('historial').innerHTML = '';
  document.getElementById('nombre').value = '';

  // Reiniciar contador
  contador = 0;
}

