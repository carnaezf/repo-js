
# Plantilla Frontend V3 – HTML + Bootstrap + JavaScript Modular

Esta es la tercera versión de nuestra plantilla base para prácticas de desarrollo Frontend. Ofrece una estructura sencilla y escalable que incluye:

- HTML5 semántico y estructurado  
- Bootstrap 5.3 cargado desde CDN  
- CSS externo para estilos personalizados  
- JavaScript modular para mejor organización  
- Arquitectura simple para desarrollo incremental  

## Estructura de Carpetas

plantilla-v3/
├── index.html
├── readme.md
├── assets/
│ ├── css/
│ │ └── style.css
│ ├── fonts/
│ ├── iconos/
│ ├── img/
│ └── js/
│ ├── main.js
│ └── modules/
│ └── saludo.js



## Archivos Clave

### `index.html`

Archivo principal HTML que incluye:

- Bootstrap 5.3 vía CDN para diseño responsive  
- Hoja de estilos propia (`style.css`)  
- Script principal modular (`main.js`)  

Ejemplo de inclusión de JavaScript modular:

<script type="module" src="assets/js/main.js"></script>


### `style.css`

Define estilos base personalizables para:

- Colores  
- Tipografías  
- Espaciados  
- Layout general  

### `main.js`

Archivo de entrada para JavaScript. Importa módulos desde `/modules` para mantener el código organizado:

import { saludar } from './modules/saludo.js';

saludar('Bienvenid@ a la plantilla V3');



### `saludo.js`

Ejemplo de módulo reutilizable que muestra una función simple de saludo:

export function saludar(nombre) {
console.log(Hola ${nombre});
}



## Cómo usar esta plantilla

- Abre `index.html` en tu navegador web.  
- Abre la consola del navegador (F12) para ver mensajes de JavaScript.  
- Personaliza HTML, CSS y JS según tus necesidades.  
- Agrega más módulos en `assets/js/modules/` para funcionalidades adicionales.