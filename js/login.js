document.addEventListener('DOMContentLoaded', () => {
    const loginFormCard = document.getElementById('login-form');
    const registerFormCard = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    // Función para cambiar la vista con clases CSS para la transición
    function switchForm(showId, hideId) {
        const showElement = document.getElementById(showId);
        const hideElement = document.getElementById(hideId);

        if (showElement && hideElement) {
            // 1. Ocultar el elemento actual
            hideElement.classList.remove('active');
            hideElement.classList.add('hidden');

            // 2. Mostrar el nuevo elemento (pequeño retraso para que CSS maneje la transición)
            setTimeout(() => {
                showElement.classList.remove('hidden');
                showElement.classList.add('active');
            }, 100); 
        }
    }

    // Event Listeners para cambiar
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchForm('register-form', 'login-form');
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchForm('login-form', 'register-form');
    });

    // Manejo de envío de formularios (Simulación)
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (loginForm.checkValidity()) {
            console.log('Login Enviado. Simulando autenticación...');
            alert('¡Acceso concedido! Bienvenido al Centro de Control de InGen.');
            // Redirigir o manejar el éxito
        } else {
            alert('Por favor, introduce credenciales válidas.');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (registerForm.checkValidity()) {
            console.log('Registro Enviado. Simulando creación de cuenta...');
            alert('¡Solicitud de credenciales enviada! Espere la aprobación del Nivel de Seguridad.');
            
            // Cambiar automáticamente a la vista de Login y resetear
            registerForm.reset();
            switchForm('login-form', 'register-form');
        } else {
            alert('Por favor, revisa que todos los campos sean válidos (Contraseña mínima de 8 caracteres, etc.).');
        }
    });
});