
let key = "2gNsFcvytQtqMu02c4sQSQyNjMo6te4TviGimlGc"; // Tu API Key

// ----- Mostrar imagen del día -----
const imagenDelDia = document.querySelector("#imagenDelDia");
const boton = document.querySelector("#boton");
const titulo = document.querySelector("#titulo");

boton.onclick = function () {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then(res => res.json())
    .then(fotoDelDia => {
      imagenDelDia.src = fotoDelDia.hdurl;
      titulo.textContent = fotoDelDia.title;
    });
};

// ----- Mostrar imagen según fecha -----
let imagenFecha = document.querySelector("#imagenFecha");
let botonFecha = document.querySelector("#botonFecha");
let fechaUsuario = document.querySelector("#fecha");

botonFecha.onclick = function () {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fechaUsuario.value}`)
    .then(res => res.json())
    .then(fotoFecha => {
      imagenFecha.src = fotoFecha.hdurl;
    });
};

// ----- Mostrar varias imágenes aleatorias -----
let contenedorImagen = document.querySelector(".contenedor-imagen");
let botonCantidad = document.querySelector("#botonCantidad");
let cantidadUsuario = document.querySelector("#cantidad");

botonCantidad.onclick = function () {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=${cantidadUsuario.value}`)
    .then(res => res.json())
    .then(fotos => {
      contenedorImagen.innerHTML = "";
      for (let i = 0; i < fotos.length; i++) {
        contenedorImagen.innerHTML += `<img src="${fotos[i].hdurl}" alt="Imagen aleatoria">`;
      }
    });

fetch("https://api.nasa.gov/planetary/apod?api_key=4jmR71o3hrbJsbrjwZmqU2l3mUCEW98eglp9T1el&count=3")
  .then(res => res.json())
  .then(imagenes => {
    // Guardamos el div contenedor
    
    contenedor.innerHTML = ""; // Limpiamos antes de ingresar
    for (let i = 0; i < imagenes.length; i++) {
      // En cada vuelta del bucle obtenemos un objeto (una "imagen" de la API)
      let img = imagenes[i];

      // Agregamos al contenedor un bloque de HTML dinámico
      contenedor.innerHTML += `
      <div class="tarjeta">
        <!-- Mostramos el título -->
        <h3>${img.title}</h3>
  
        <!-- Mostramos la fecha -->
        <p><strong>Fecha:</strong> ${img.date}</p>
  
     
          <img src="${img.url}" alt="${img.title}" width="400">
  
        <!-- Mostramos la explicación que viene en el objeto -->
        <p>${img.explanation}</p>
      </div>
    `;
    }

  });



let contenedor = document.querySelector("#contenedor");




  
};



