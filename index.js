
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
};



