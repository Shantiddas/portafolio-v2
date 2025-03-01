// Verifica que los botones existan antes de añadir eventos
const lightButton = document.getElementById('btn-light');
const darkButton = document.getElementById('btn-dark');

if (lightButton && darkButton) {
    lightButton.addEventListener('click', () => {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Guarda el modo en localStorage
    });

    darkButton.addEventListener('click', () => {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Guarda el modo en localStorage
    });

    // Carga el modo guardado al iniciar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    }
} else {
    console.log('Botones no encontrados. Revisa index.html.');
}

// Validación del formulario de registro
const form = document.getElementById('registroForm');
if (form) {
    form.addEventListener('submit', (e) => {
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const nombre = document.querySelector('input[name="nombre"]').value;

        if (!email.includes('@') || password.length < 8 || nombre.trim() === '') {
            e.preventDefault();
            alert('Por favor, corrige los errores:\n- El email debe incluir "@".\n- La contraseña debe tener al menos 8 caracteres.\n- El nombre no puede estar vacío.');
        }
    });
} else {
    console.log('Formulario no encontrado. Revisa index.html.');
}