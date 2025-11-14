document.addEventListener('DOMContentLoaded', function() {
    const dinoTrail = document.getElementById('dinoTrail');
    const footprint = '🐾'; // Emoji de huella

    document.addEventListener('mousemove', (event) => {
        // Creamos una nueva huella cada vez que el mouse se mueve
        const trailElement = document.createElement('div');
        trailElement.textContent = footprint;
        trailElement.classList.add('dino-footprint');

        // Posiciona la huella ligeramente por debajo y a la izquierda del cursor
        trailElement.style.left = `${event.clientX + 10}px`;
        trailElement.style.top = `${event.clientY + 10}px`;
        
        // Aplica una ligera rotación aleatoria para que parezcan pasos naturales
        const randomRotation = Math.random() * 40 - 20; // Entre -20 y 20 grados
        trailElement.style.transform = `rotate(${randomRotation}deg)`;

        dinoTrail.appendChild(trailElement);

        // Hace que la huella aparezca suavemente
        setTimeout(() => {
            trailElement.style.opacity = 0.5;
            trailElement.style.transform = `rotate(${randomRotation}deg) scale(1)`;
        }, 10);

        // Inicia el desvanecimiento y la eliminación después de 1 segundo
        setTimeout(() => {
            trailElement.classList.add('fading');
        }, 800);

        // Elimina el elemento del DOM después de que la transición haya terminado (2 segundos total)
        setTimeout(() => {
            dinoTrail.removeChild(trailElement);
        }, 1800);

        // Limitar la frecuencia de las huellas para no saturar el DOM
        // Usamos un timeout corto y solo permitimos una huella a la vez
        document.removeEventListener('mousemove', arguments.callee);
        setTimeout(() => {
            document.addEventListener('mousemove', arguments.callee);
        }, 50); 
    }, { once: true });
});