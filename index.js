document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('song');
    const loader = document.querySelector('.loader');
    const lyrics = document.querySelectorAll('.lyric-line');
  
    // Array con los tiempos en segundos para cada línea de la letra
    const lyricTimes = [
      0,      // "Quiero"
      2.5,    // "Parar un momento"
      6.5,    // "Soñar que estoy dentro"
      11.5,   // "De tus ojos"
      15.5,   // "Quiero"
      18.5,   // "Soñar que te beso"
      22.5,   // "Después darme cuenta"
      24.5,   // "Que sigo despierto"
      26,     // "Y no me la creo"
      31,     // "Que tú estás aquí"
      34.5,   // "Simulando que no dices nada"
      39,     // "Y yo siento así"
      42.5,   // "Diez mil palabras"
      47,     // "Yo no te pido que seas normal..."
      51,     // "Que seas intensa cuando amanezca"
      53,     // "Que estés tan loca como tú quieras"
      55,     // "Como tú sientas, como tú estés"
      57.5,     // "Como tú sepas que solo eres tú"
      63,     // "Que digas todo sin preguntar..."
      67,     // "Que tengas miedo cuando te asustes"
      69,     // "Que sueltes lágrimas si te lucen"
      71,     // "Que rompas todo si es necesario"
      73,     // "Los dos estamos para arreglarlo"
      75,     // "Que a mí me gustas tal como eres"
      77,     // "A mí me gustas tal como estás"
      79,     // "Es la verdad"
      81.5,     // "Así"
      82.5,     // "Sin maquillar"
      87,     // "Es la verdad"
      89.5,     // "Así"
      90.5,   // "Sin maquillar"
      95,
      99
    ];

    // Verifica que el audio y el loader existan
    if (!audio || !loader) {
        console.error("Elementos no encontrados");
        return;
    }

    // Maneja la carga exitosa del audio
    const handleCanPlay = () => {
        loader.style.display = 'none';
        document.body.classList.remove("not-loaded");
        // Remueve el listener después de usarlo
        audio.removeEventListener('canplaythrough', handleCanPlay);
    };

    // Maneja errores de carga
    const handleError = () => {
        loader.style.display = 'none';
        console.error("Error al cargar el audio");
    };

    // Agrega los listeners
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);

    // Inicia la reproducción con interacción del usuario
    document.body.addEventListener('click', () => {
        document.body.addEventListener('click', () => {
          if (audio.paused) {
              // Si el audio está pausado, inicia la reproducción
              audio.play().catch(error => {
                  console.log("Esperando interacción del usuario...");
              });
          } else {
              // Si el audio está reproduciéndose, pausa
              audio.pause();
          }
      }); 
    });
    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
  
      lyrics.forEach((lyric, index) => {
          if (currentTime >= lyricTimes[index] && currentTime < lyricTimes[index + 1]) {
              // Añade la clase 'active' a la línea actual
              lyric.classList.add('active');
  
              // Remueve la clase 'active' y añade 'exit' a la línea anterior
              if (index > 0) {
                  lyrics[index - 1].classList.remove('active');
                  lyrics[index - 1].classList.add('exit');
              }
          } else {
              // Remueve las clases si no es el momento de la línea
              lyric.classList.remove('active');
              lyric.classList.remove('exit');
          }
      });
  });
});

  
  
  
