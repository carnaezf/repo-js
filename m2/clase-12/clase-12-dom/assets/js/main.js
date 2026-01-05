// assets/js/main.js

import { saludar } from './modules/saludo.js'

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('miBoton')
    boton.addEventListener('click', () => {
        saludar()
    })
})



// Clase DOM


// Ejemplo 1: cambiar el texto del título (wow suave)

const titulo = document.getElementById('tituloPrincipal');
titulo.textContent = 'Bienvenid@ a la DEMO del DOM ';


titulo.style.color = 'purple';
titulo.style.fontSize = '3rem';
titulo.style.textTransform = 'uppercase';




// Ejemplo 2: cambiar el texto del título

const body = document.body;
body.classList.add('bg-dark', 'text-white');

const contenedor = document.querySelector('.container');
contenedor.classList.add('border', 'border-light', 'rounded-3');

// Luego, para volver atrás:

// body.classList.remove('bg-dark', 'text-white');
// contenedor.classList.remove('border', 'border-light', 'rounded-3');


// Ejemplo 3
const boton = document.getElementById('miBoton');

boton.textContent = 'BOOST ACTIVADO';
boton.classList.remove('btn-primary');
boton.classList.add('btn-danger', 'btn-lg');  // usamos Bootstrap

// Incluso puedes deshabilitarlo:
boton.disabled = true;
boton.textContent = 'Botón deshabilitado zzz';

// Y devolverlo a la vida:
boton.disabled = false;
boton.textContent = 'Haz clic aquí de nuevo :)';


// Ejemplo 4
const zona = document.getElementById('zonaDinamica');

const card = document.createElement('div');
card.className = 'card shadow-lg';

card.innerHTML = `
  <div class="card-body text-center">
    <h5 class="card-title">Tarjeta creada con JavaScript</h5>
    <p class="card-text">
      Este elemento <strong>no existía</strong> en el HTML original.
      Lo creamos ahora mismo desde la consola usando el DOM.
    </p>
    <button class="btn btn-success" id="botonMagico">
      Click de magia 
    </button>
  </div>
`;

zona.appendChild(card);

// Luego, en la consola:

const botonMagico = document.getElementById('botonMagico');
botonMagico.addEventListener('click', () => {
  document.body.classList.toggle('bg-dark');
  document.body.classList.toggle('text-white');
});


// Ejemplo 5
const btn = document.getElementById('miBoton');

let intervalo = setInterval(() => {
  btn.classList.toggle('btn-warning');
  btn.classList.toggle('btn-outline-warning');
}, 300);

// Para detener la animación:
clearInterval(intervalo);
btn.classList.remove('btn-warning', 'btn-outline-warning');
