document.addEventListener('DOMContentLoaded', () => {
    const saltarCreditosBtn = document.getElementById('saltarCreditosBtn');
    
    // 🚀 SINCRONIZACIÓN: 20 segundos (20000 milisegundos)
    const duracionAnimacionMs = 20 * 1000; 

    // Función para redirigir a index.html
    const redirectToIndex = () => {
        // Redirecciona al archivo de inicio
        window.location.href = 'index.html'; 
    };

    // 1. Redirigir automáticamente después de que termine la animación
    const timeoutId = setTimeout(redirectToIndex, duracionAnimacionMs);

    // 2. Evento para el botón "Saltar Créditos"
    saltarCreditosBtn.addEventListener('click', () => {
        clearTimeout(timeoutId); // Cancela la redirección automática
        redirectToIndex(); // Redirige inmediatamente
    });
});