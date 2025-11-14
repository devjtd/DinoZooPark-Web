document.addEventListener('DOMContentLoaded', () => {
    // Inicialización o lógica específica de la página

    // Ejemplo: Alerta simple al cargar la página (opcional)
    // console.log("DinoZoo Park cargado. ¡Bienvenido, explorador!");

    // NOTA: El colapso del navbar ya es manejado por Bootstrap 5.3 (bootstrap.bundle.min.js)
    // Si necesitas añadir clases 'active' dinámicamente:
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Remover 'active' de todos
        link.classList.remove('active'); 
        
        // Asignar 'active' si la ruta coincide
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
        // Caso especial para la página de inicio
        if (currentPath === '/' && link.getAttribute('href') === '/') {
            link.classList.add('active');
        }
    });

});