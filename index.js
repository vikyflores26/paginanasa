
 let key = "2gNsFcvytQtqMu02c4sQSQyNjMo6te4TviGimlGc"


 let imagenDelDia = document.querySelector('#imagenDelDia')
let boton = document.querySelector('#boton')
let titulo = document.querySelector('h1')


boton.onclick = function () {

 fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
   .then(res => res.json())
   .then(fotoDelDia => {
    
     imagenDelDia.src = fotoDelDia.hdurl
     titulo.textContent = fotoDelDia.title
   })
}




let imagenFecha = document.querySelector('#imagenFecha')

// Guardamos el botón correspondiente
let botonFecha = document.querySelector('#botonFecha')

// Guardamos el input date
let fechaUsuario = document.querySelector('#fecha')

botonFecha.onclick = function () {
 console.log(fechaUsuario) // Puedes quitar este log si no lo necesitas

 // Solicitamos información a la API utilizando el valor seleccionado en el input
 fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fechaUsuario.value}`)
   .then(res => res.json())
   .then(fotoFecha => {
     // Mostramos la imagen de la fecha seleccionada
     imagenFecha.src = fotoFecha.hdurl
   })
}


// Mostrar fotos aleatorias

// Guardamos el contenedor de las imágenes a mostrar al azar
let contenedorImagen = document.querySelector('.contenedor-imagen')

// Guardamos el botón correspondiente
let botonCantidad = document.querySelector('#botonCantidad')

// Guardamos el input con la cantidad
let cantidadUsuario = document.querySelector('#cantidad')

botonCantidad.onclick = function () {
 // Solicitamos información a la API
 console.log(cantidadUsuario.value)

 fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=${cantidadUsuario.value}`)
   .then(res => res.json())
   .then(fotos => {
     // Borramos el contenido previo, para que no se acumule con lo nuevo
     contenedorImagen.innerHTML = ""

     // Mostramos todas las imágenes recibidas
     for (let i = 0; i < fotos.length; i++) {
       contenedorImagen.innerHTML = `${contenedorImagen.innerHTML} <img src="${fotos[i].url}" alt="${fotos[i].title}">`
     }
   })
}
let contenedor = document.querySelector("#contenedor");

fetch("https://api.nasa.gov/planetary/apod?api_key=2gNsFcvytQtqMu02c4sQSQyNjMo6te4TviGimlGc&count=1")
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



