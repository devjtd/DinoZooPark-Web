document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los elementos del DOM necesarios
    const gifOverlay = document.getElementById('gifGateOverlay'); // La capa que contiene el GIF
    const body = document.body; // Necesario para añadir la clase que revela el contenido
    
    // Duración en milisegundos del GIF de apertura (2 segundos del GIF + margen)
    const GIF_DURATION = 2500; // 2.5 segundos

    /**
     * Función que inicia la transición: Oculta el GIF y revela la página.
     */
    function revealContent() {
        // 1. Ocultar el overlay del GIF (clase 'gif-hidden' en CSS)
        gifOverlay.classList.add('gif-hidden');
        
        // 2. Mostrar el contenido principal de la página (clase 'content-visible' en CSS)
        body.classList.add('content-visible');
        
        // 3. Esperar 1 segundo (duración de la transición CSS) para remover el elemento del DOM.
        setTimeout(() => {
            // Solo remueve si el elemento existe para evitar errores
            if (gifOverlay) {
                gifOverlay.remove(); 
            }
        }, 1000);
    }

    // ----------------------------------------------------
    // INICIAR SECUENCIA
    // ----------------------------------------------------
    
    // Inicia el temporizador de 2.5 segundos (GIF_DURATION)
    // Después de 2.5s, llama a la función revealContent
    setTimeout(revealContent, GIF_DURATION);
});