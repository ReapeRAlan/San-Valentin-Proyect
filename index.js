document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('song');
    const loader = document.querySelector('.loader');
    const lyrics = document.querySelectorAll('.lyric-line');
  
    // Array con los tiempos en segundos para cada línea de la letra
    const lyricTimes = [
        29,   // "Have you got colour in your cheeks?" 
        34,   // "Do you ever get that fear that you can't shift"
        38,   // "The type that sticks around like summat in your teeth?"
        42,   // "Are there some aces up your sleeve?" [corrección inicial del usuario]
        46,   // "Have you no idea that you're in deep?" [corrección inicial del usuario]
        48,   // "I dreamt about you nearly every night this week" [corrección inicial del usuario]
        54,   // "How many secrets can you keep?" [corrección inicial del usuario]
        58,
        60,   // "'Cause there's this tune I found that makes me think of you somehow" [corrección inicial del usuario]
        62,   // "And I play it on repeat" [corrección inicial del usuario]
        66,   // "Until I fall asleep" [corrección inicial del usuario]
        69,   // "Spilling drinks on my settee" [corrección inicial del usuario]
        73,   // "(Do I wanna know?)" [corrección inicial del usuario]
        75,   // "If this feeling flows both ways" [corrección inicial del usuario]
        79,   // "(Sad to see you go)" [corrección inicial del usuario]
    
        // A partir de aquí: ajustes para sincronizar el resto de la canción
        82,   // "Was sorta hoping that you'd stay" (original: 85 → retraso por pausa vocal)
        85,   // "(Baby, we both know)" (original: 89 → compensación por ritmo arrastrado)
        87,   // "That the nights were mainly made..." (original: 91 → ajuste acumulado)
        90,   // "Crawling back to you" (original: 99 → sincronía con entrada de batería)
        95,  // crawling
        98,  // "
        104,  // Cause I always do
        106,  // Maybe I'm too busy being yours to fall for somebody new
        114,  // "Now I've thought it through" (original: 120 → compensación)
        117,  // "Crawling back to you" (original: 123 → entrada suavizada)
        121,  // "So have you got the guts?" (original: 127 → pausa instrumental acortada)
        126,  // "Been wondering if your heart's still open" (original: 131 → sincronía vocal)
        128,  // "And if so I wanna know what time it shuts" (original: 135 → ajuste acumulado)
        133,  // "Simmer down and pucker up" (original: 140 → fraseo más rápido)
        136,  // "I'm sorry to interrupt" (original: 143 → alineación con guitarra)
        139,  // "It's just I'm constantly on the cusp..." (original: 146 → fluidez narrativa)
        141,  // "I don't know if you feel the same..." (original: 152 → retraso intencional)
        146,  // "But we could be together..." (original: 157 → ajuste por respiración vocal)
        154,  // "(Do I wanna know?)" (original: 162 → entrada anticipada)
        160,  // "If this feeling flows both ways" (original: 165 → sincronía exacta)
        164,  // "(Sad to see you go)" (original: 169 → pausa reducida)
        166,  // "Was sorta hoping that you'd stay" (original: 171 → ajuste acumulado)
        169,  // "(Baby, we both know)" (original: 175 → compensación)
        172,  // "That the nights were mainly made..." (original: 178 → alineación con fade-out)
        175,  // "(Do I wanna know?)" (original: 186 → entrada limpia)
        177,  // "Too busy being yours to fall" (original: 189 → ajuste rítmico)
        180,  // "(Sad to see you go)" (original: 193 → sincronía con batería)
        185,  // "crawling back
        187,  // "(Do I wanna know?)" (original: 199 → entrada precisa)
        189,
        194, // tenias tiempo?
        195,
        196,
        197, // quiza estoy muy
        198,
        200,
        201,
        203,
        205,
        208,
        209,
        220,
        280
        // "Do you want me crawling back to you?" (original: 202 → cierre con fade-out del video :cite[10])
    ];
    

    // Verifica que el audio y el loader existan
    if (!audio || !loader) return;

    const hideLoader = () => {
        loader.style.display = 'none';
        document.body.classList.remove("not-loaded");
    };

    audio.addEventListener('loadeddata', hideLoader); // Cuando los datos iniciales están cargados
    audio.addEventListener('canplay', hideLoader); // Cuando puede reproducirse
    audio.addEventListener('canplaythrough', hideLoader); // Cuando puede reproducirse sin interrupciones
    
    // 2. Timeout de respaldo por si falla la carga
    const backupTimeout = setTimeout(hideLoader, 5000); // 5 segundos máximo
    
    // 3. Manejar errores
    audio.addEventListener('error', () => {
        clearTimeout(backupTimeout);
        hideLoader();
    });

    let isPlaying = false;
    const handlePlayPause = () => {
        if (!isPlaying) {
            audio.play().catch(err => console.log("Esperando interacción..."));
            isPlaying = true;
        } else {
            audio.pause();
            isPlaying = false;
        }
    };
    
    // Agregar ambos tipos de eventos para móvil/desktop
    document.body.addEventListener('click', handlePlayPause);
    document.body.addEventListener('touchstart', handlePlayPause);

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        lyrics.forEach((lyric, index) => {
            if (currentTime >= lyricTimes[index] && currentTime < lyricTimes[index + 1]) {
                lyric.classList.add('active');
    
                if (index > 0) {
                    lyrics[index - 1].classList.remove('active');
                    lyrics[index - 1].classList.add('exit');
                }
            } else {
                lyric.classList.remove('active');
                lyric.classList.remove('exit');
            }
        });
    });
});

  
  
  
