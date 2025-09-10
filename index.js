
let contenedor = document.querySelector("#contenedor");
fetch("https://api.nasa.gov/planetary/apod?api_key=2gNsFcvytQtqMu02c4sQSQyNjMo6te4TviGimlGc&count=3")
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




