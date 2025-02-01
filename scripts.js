const peliculasTendencia = [
    {
      titulo: "El Padrino",
      año: 1972,
      imagen: "peliculas/drama/El_Padrino/el-padrino.jpg",
      imagen_horizontal: "peliculas/drama/El_Padrino/el-padrino-horizontal.webp",
      genero: "Drama",
      descripcion:
        "La compleja historia de una familia mafiosa liderada por un implacable padre de familia y hombre de honor (inmenso Marlon Brando) y cuyo poder hereda su hijo más pacífico (asombroso un primerizo Al Pacino de mirada gélida) es, ante todo, un ejercicio narrativo apabullante, de insuperable nivel.",
      valoracion: 4.5,
    },
    {
      titulo: "Mundos Paralelos",
      año: 2022,
      imagen: "peliculas/drama/mundos_paralelos/mundos-paralelos.webp",
      imagen_horizontal:
        "peliculas/drama/mundos_paralelos/mundos-paralelos-horizontal.webp",
      genero: "Drama",
      descripcion:
        "Las vidas de cuatro antiguos amigos se ven alteradas cuando un misterioso suceso los separa, enviándolos a dimensiones paralelas. Intentan comprender lo que ha sucedido y se esfuerzan por hacer retroceder el tiempo, para volver a su realidad.",
      valoracion: 3.5,
    },
    {
      titulo: "Titanic",
      año: 1997,
      imagen: "peliculas/romance/titanic/titanic.jpg",
      imagen_horizontal:
        "https://www.100hdwallpapers.com/wallpapers/1920x1080/titanic_movie-hd_wallpapers.jpg",
      genero: "Romance",
      descripcion:
        "Una joven de la alta sociedad abandona a su arrogante pretendiente por un artista humilde en el trasatlántico que se hundió durante su viaje inaugural.",
      valoracion: 5,
    },
    {
      titulo: "Busqueda Implacable",
      año: 2008,
      imagen: "peliculas/accion/taken-1/taken1.jpg",
      imagen_horizontal: "https://s1.dmcdn.net/v/VSTvk1bQ7BKNUaQ-g/x1080",
      genero: "Accion",
      descripcion:
        "El exagente de las fuerzas especiales de élite Bryan Millis se ve enredado en la trama de una organización criminal cuando intenta salvar a su hija Kim, pero solo tiene 96 horas para rescatarla antes de perder el rastro.",
      valoracion: 5,
    },
    {
      titulo: "Busqueda Implacable 2",
      año: 2012,
      imagen: "peliculas/accion/taken-2/taken2.jpg",
      imagen_horizontal: "https://s2.dmcdn.net/v/VSU4h1bQ7BQWj7n87/x1080",
      genero: "Accion",
      descripcion:
        "En Estambul, Bryan y su familia se encuentran con Murad, cuyo hijo murió a manos de Bryan durante el rescate de Kim. Murad quiere vengarse y ahora es Kim quien debe salvar a su padre.",
      valoracion: 3,
    },
    {
      titulo: "Orgullo y prejuicio",
      año: 2005,
      imagen: "peliculas/romance/orgullo-y-prejuicio/orgullo-y-prejuicio.jpg",
      imagen_horizontal:
        "https://discordiamag.com/wp-content/uploads/2021/02/Portada-e1676814355157.jpg",
      genero: "Romance",
      descripcion:
        "Elizabeth Bennet conoce al apuesto y adinerado Sr. Darcy, con quien, rápidamente, inicia una intensa y compleja relación.",
      valoracion: 2,
    },
  ];
  
  const peliculasRecienEstrenadas = [
    {
      titulo: "Godzilla y Kong: El nuevo imperio",
      año: 2024,
      imagen: "peliculas/ciencia-ficcion/gozdilla-y-kong/gozdilla-y-kong.jpg",
      imagen_horizontal:
        "https://e.rpp-noticias.io/xlarge/2024/03/18/573157_1554528.webp",
      genero: "Ciencia ficción",
      descripcion:
        "Godzilla y Kong se enfrentan a una amenaza colosal escondida en lo profundo del planeta, desafiando su propia existencia y la supervivencia de la raza humana.",
      valoracion: 4,
    },
    {
      titulo: "Abigail",
      año: 2024,
      imagen: "https://pics.filmaffinity.com/Abigail-133797089-large.jpg",
      imagen_horizontal:
        "https://m.media-amazon.com/images/M/MV5BMGNmNWY2ZjUtYjE4My00MWY0LTliMzItZTI4ODA2MzU2YjFmXkEyXkFqcGdeQWFybm8@._V1_.jpg",
      genero: "Terror",
      descripcion:
        "Abigail es una película de terror estadounidense dirigida por Matt Bettinelli-Olpin y Tyler Gillett a partir de un guion escrito por Stephen Shields y Guy Busick.",
      valoracion: 2,
    },
    {
      titulo: "Garfield: fuera de casa",
      año: 2024,
      imagen:
        "peliculas/infantil/garfield-fuera-de-casa/garfield-fuera-de-casa.webp",
      imagen_horizontal:
        "https://imagenes.heraldo.es/files/image_990_556/uploads/imagenes/2023/11/14/garfield-pelicula-2024-trailer-estreno.jpeg",
      genero: "Infantil",
      descripcion:
        "El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su largamente perdido padre.",
      valoracion: 2.5,
    },
    {
      titulo: "Kung Fu Panda 4",
      año: 2024,
      imagen: "peliculas/infantil/kung-fu-panda-4/kung-fu-panda-4.jpg",
      imagen_horizontal:
        "https://rubik-audiovisual.com/wp-content/uploads/2024/03/kung-fu-panda-4-scaled.jpg",
      genero: "Infantil",
      descripcion:
        "Po está entrenando a un nuevo guerrero que ocupe su lugar para que él pueda convertirse en líder espiritual del Valle de la Paz. Sin embargo, la irrupción de una malvada hechicera que puede cambiar de apariencia trastoca sus planes.",
      valoracion: 4,
    },
    {
      titulo: "Despicable Me 4",
      año: 2024,
      imagen: "peliculas/infantil/despicable-me-4/despicable-me-4.jpg",
      imagen_horizontal:
        "https://cooperativa.cl/noticias/site/artic/20240129/imag/foto_0000000220240129093758.jpg",
      genero: "Infantil",
      descripcion:
        "Despicable Me 4 es una próxima película de comedia animada estadounidense producida por Illumination y distribuida por Universal Pictures.",
      valoracion: 5,
    },
    {
      titulo: "Mufasa",
      año: 2024,
      imagen: "peliculas/ciencia-ficcion/mufasa/mufasa.jpeg",
      imagen_horizontal:
        "https://i0.wp.com/efe.com/wp-content/uploads/2024/12/Mufasa1.jpg?fit=900%2C486&ssl=1",
      genero: "Ciencia ficción",
      descripcion:
        "Una inundación separa al cachorro Mufasa de sus padres, pero el rey de los leones lo acoge como a uno de los suyos tras demostrar su valentía. Al crecer, una manada de leones desterrados y los celos de su hermana adoptiva lo pondrán en peligro.",
      valoracion: 3.5,
    },
  ];
  
  const seriesPopulares = [
    {
      titulo: "How to Get Away with Murder",
      año: 2014,
      imagen: "series/suspenso/murder/murder.jpg",
      imagen_horizontal: "series/suspenso/murder/murder-horizontal.webp",
      genero: "Suspenso",
      descripcion:
        "Annalise Keating es una brillante y carismática profesora de derecho penal, que inesperadamente, tiene que aplicar todo el conocimiento práctico junto con sus estudiantes cuando se ven involucrados en un complot de asesinato en la universidad.",
      valoracion: 5,
    },
    {
      titulo: "La ley de los Audaces",
      año: 2011,
      imagen: "series/drama-legal/suits/433386.webp",
      imagen_horizontal: "series/drama-legal/suits/gettyimages-880283214.webp",
      genero: "Drama Legal",
      descripcion:
        "El gran abogado corporativo de Manhattan, Harvey Specter y su equipo, se lanzan a un juego por obtener el poder cuando un nuevo socio se une a la empresa. Con sus dos mejores colegas fuera y Jessica de regreso en Chicago, Specter y el equipo intentan adaptarse a una nueva situación sin ellos.",
      valoracion: 5,
    },
    {
      titulo: "Stranger Things",
      año: 2016,
      imagen: "series/terror/stranger-things/5638861.webp",
      imagen_horizontal: "series/terror/stranger-things/Stranger_Things_logo.png",
      genero: "Terror",
      descripcion:
        "Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.",
      valoracion: 4.5,
    },
    {
      titulo: "Cobra Kai",
      año: 2018,
      imagen:
        "series/drama/cobra-kai/MV5BYWU4ZmI0NTItZjcyNy00MzQ5LThiNDQtZDZkNjg1NWUwN2RhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      imagen_horizontal: "series/drama/cobra-kai/16102988786234.webp",
      genero: "Drama",
      descripcion:
        "Treinta y cuatro años después de los eventos del torneo de karate All Valley de 1984, Johnny Lawrence busca la redención al abrir un dojo Cobra Kai, reavivando su rivalidad con un exitoso Daniel LaRusso.",
      valoracion: 4.5,
    },
  ];
  
  function crearModal(pelicula) {
    // Crear contenedor del modal
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.3s ease;
      `;
  
    // Contenido del modal
    const modalContenido = document.createElement("div");
    modalContenido.classList.add("modalContenido");
    modalContenido.style.cssText = `
          background-color: #1E1E1E;
          border-radius: 20px;
          width: 90%;
          max-width: 1100px;
          max-height: 90%;
          overflow: hidden;
          display: flex;
          box-shadow: 0 30px 60px -15px rgba(255, 255, 255, 0.1);
          position: relative;
          transform: scale(0.9);
          transition: transform 0.3s ease;
          color: #F0F0F0;
      `;
  
    // Sección de imagen horizontal
    const imagenHorizontal = document.createElement("div");
    imagenHorizontal.classList.add("imagenHorizontal");
    imagenHorizontal.style.cssText = `
          width: 60%;
      `;
  
    const backgroundImage = document.createElement("img");
    backgroundImage.src = pelicula.imagen_horizontal;
    backgroundImage.style.cssText = `
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.5) contrast(1.2);
      `;
    imagenHorizontal.appendChild(backgroundImage);
  
    // Sección de detalles
    const detalles = document.createElement("div");
    detalles.classList.add("detalles");
    detalles.style.cssText = `
          width: 40%;
          padding: 35px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #121212;
          border-left: 1px solid rgba(255,255,255,0.1);
      `;
  
    // Título
    const titulo = document.createElement("h2");
    titulo.textContent = pelicula.titulo;
    titulo.style.cssText = `
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #FFFFFF;
          font-weight: bold;
          background: linear-gradient(90deg, #FFFFFF, #A0A0A0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      `;
  
    // Género y Año
    const generoAno = document.createElement("p");
    generoAno.textContent = `Género: ${pelicula.genero} | Año: ${pelicula.año}`;
    generoAno.style.cssText = `
          color: #888888;
          margin-bottom: 15px;
          font-size: 1.1rem;
      `;
  
    // Sistema de calificación con estrellas
    const calificacion = document.createElement("div");
    calificacion.style.cssText = `
      display: flex;
      margin-bottom: 15px;
      align-items: center;
  `;
  
    // Función para crear estrellas
    function crearEstrellas(valoracion) {
      calificacion.innerHTML = ""; // Limpiar estrellas anteriores
  
      for (let i = 1; i <= 5; i++) {
        const estrella = document.createElement("span");
        estrella.innerHTML = "★";
  
        // Lógica para manejar medias estrellas
        if (i <= Math.floor(valoracion)) {
          // Estrella completa
          estrella.style.color = "#FFD700";
        } else if (i - 1 < valoracion && i > Math.floor(valoracion)) {
          // Media estrella
          estrella.style.background = `linear-gradient(90deg, #FFD700 50%, #444 50%)`;
          estrella.style.backgroundClip = "text";
          estrella.style.webkitBackgroundClip = "text";
          estrella.style.webkitTextFillColor = "transparent";
        } else {
          // Estrella vacía
          estrella.style.color = "#444";
        }
  
        estrella.style.cssText += `
              font-size: 1.5rem;
              margin-right: 5px;
          `;
  
        calificacion.appendChild(estrella);
      }
    }
  
    crearEstrellas(pelicula.valoracion || 0);
  
    // Descripción
    const descripcion = document.createElement("p");
    descripcion.textContent = pelicula.descripcion;
    descripcion.style.cssText = `
          color: #CCCCCC;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1rem;
      `;
  
    // Botón de cerrar
    const botonCerrar = document.createElement("button");
    botonCerrar.innerHTML = "&times;";
    botonCerrar.style.cssText = `
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 2.5rem;
          color: #888888;
          cursor: pointer;
          transition: color 0.3s ease;
          line-height: 1;
      `;
    botonCerrar.addEventListener("mouseover", () => {
      botonCerrar.style.color = "#FFFFFF";
    });
    botonCerrar.addEventListener("mouseout", () => {
      botonCerrar.style.color = "#888888";
    });
  
    // Botón de ver ahora
    const botonVer = document.createElement("button");
    botonVer.textContent = "Ver ahora";
    botonVer.style.cssText = `
          background: linear-gradient(45deg, #4A90E2, #6A3CE2);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 30px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
      `;
    botonVer.addEventListener("mouseover", () => {
      botonVer.style.transform = "scale(1.05)";
      botonVer.style.boxShadow = "0 10px 20px rgba(74, 144, 226, 0.4)";
    });
    botonVer.addEventListener("mouseout", () => {
      botonVer.style.transform = "scale(1)";
      botonVer.style.boxShadow = "none";
    });
  
    // Agregar evento de cierre
    botonCerrar.addEventListener("click", () => {
      modal.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(modal);
      }, 300);
    });
  
    // Agregar elementos
    detalles.appendChild(titulo);
    detalles.appendChild(generoAno);
    detalles.appendChild(calificacion);
    detalles.appendChild(descripcion);
    detalles.appendChild(botonVer);
  
    modalContenido.appendChild(imagenHorizontal);
    modalContenido.appendChild(detalles);
    modalContenido.appendChild(botonCerrar);
  
    modal.appendChild(modalContenido);
  
    // Cerrar modal al hacer clic fuera
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(modal);
        }, 300);
      }
    });
  
    return modal;
  }
  
  // Modificar la función crearTarjetaPelicula para usar el nuevo modal
  function crearTarjetaPelicula(pelicula) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const imagen = document.createElement("img");
    imagen.src = pelicula.imagen;
    imagen.alt = pelicula.titulo;
  
    const contenido = document.createElement("div");
    contenido.classList.add("card-content");
    contenido.textContent = pelicula.titulo;
  
    // Evento de clic para mostrar el modal
    card.addEventListener("click", () => {
      const modal = crearModal(pelicula);
      document.body.appendChild(modal);
  
      // Pequeño retraso para la animación de entrada
      setTimeout(() => {
        modal.style.opacity = "1";
        modal.querySelector("div").style.transform = "scale(1)";
      }, 50);
    });
  
    // Añadir imagen y contenido a la tarjeta
    card.appendChild(imagen);
    card.appendChild(contenido);
  
    return card;
  }
  
  // Función para mostrar las películas de recién estreno en tarjetas
  function mostrarPeliculasRecienEstrenadas() {
    const contenedorRecienEstrenadas = document.querySelector(
      ".card-container-recien-estrenadas"
    );
  
    peliculasRecienEstrenadas.forEach((peliculasTendencia) => {
      const card = crearTarjetaPelicula(peliculasTendencia);
      contenedorRecienEstrenadas.appendChild(card);
    });
  }
  
  // Función para mostrar las series populares estreno en tarjetas
  function mostrarSeriesPopulares() {
    const contenedorSeriesPopulares = document.querySelector(
      ".card-container-series-populares"
    );
  
    seriesPopulares.forEach((peliculasTendencia) => {
      const card = crearTarjetaPelicula(peliculasTendencia);
      contenedorSeriesPopulares.appendChild(card);
    });
  }
  
  // Función para mostrar todas las películas en tarjetas
  function mostrarTodasLasPeliculas() {
    const contenedor = document.querySelector(".card-container");
  
    peliculasTendencia.forEach((peliculasTendencia) => {
      const card = crearTarjetaPelicula(peliculasTendencia);
      contenedor.appendChild(card);
    });
  }
  
  // Llama a las funciones para mostrar las películas cuando la página cargue
  window.onload = () => {
    mostrarTodasLasPeliculas();
    mostrarPeliculasRecienEstrenadas();
    mostrarSeriesPopulares();
  };
  
  let menuList = document.getElementById("menuList");
  menuList.style.maxHeight = "0px";
  
  function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
      menuList.style.maxHeight = "400px";
    } else {
      menuList.style.maxHeight = "0px";
    }
  }
  