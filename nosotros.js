document.addEventListener('DOMContentLoaded', function() {
    const vibrationOverlay = document.getElementById('vibrationOverlay');
    const trex = document.getElementById('trex');
    const mainTitle = document.getElementById('mainTitle');
    const counters = document.querySelectorAll('.count');

    // 1. Contador Animado (Para la sección Dino-Facts)
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/[^\d.]/g, ''); // Limpia texto para float
            
            const speed = 200; // Velocidad de la animación
            const inc = target / speed;

            if (count < target) {
                // Si el target es decimal (99.9), ajusta la precisión
                const newCount = (target > 10) ? Math.ceil(count + inc) : (count + inc).toFixed(1);
                counter.innerText = newCount;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        // Inicializa el contador al aparecer en pantalla (simple)
        setTimeout(updateCount, 500); 
    });


    // 2. EFECTO DE TEMBLOR (T-Rex)
    function activateVibration() {
        // Activa el temblor en el body
        document.body.classList.add('vibration-active');

        // Efecto de distorsión en el título
        mainTitle.style.transform = 'translate(1px, 1px)';

        // Desactiva después de un tiempo corto
        setTimeout(() => {
            document.body.classList.remove('vibration-active');
            mainTitle.style.transform = 'translate(0, 0)';
        }, 500);
    }

    // Escucha el evento de fin de animación (cuando el T-Rex cruza)
    trex.addEventListener('animationiteration', () => {
        // Ejecuta el temblor cuando la animación termina y empieza de nuevo
        activateVibration();
    });

    // Temblor inicial
    setTimeout(activateVibration, 2000);

});