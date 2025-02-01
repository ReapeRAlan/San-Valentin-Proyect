
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

  };
  const lyrics = document.querySelectorAll('.lyric-line');
  const audio = document.getElementById('song');

  // Array con los tiempos en segundos para cada línea de la letra
  const lyricTimes = [0, 2.5, 6.5, 11.5, 15.5, 18]; // Ajusta estos tiempos según la canción
  audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    lyrics.forEach((lyric, index) => {
        if (currentTime >= lyricTimes[index] && currentTime < lyricTimes[index + 1]) {
            lyric.classList.add('active');
        } else {
            lyric.classList.remove('active');
        }
    });
});

