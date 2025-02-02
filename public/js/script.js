document.addEventListener("DOMContentLoaded", function () {
    // === Validación del formulario ===
    let form = document.getElementById("contactoForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        });
    }

    // === Animación de aparición en scroll ===
    let secciones = document.querySelectorAll(".fade-in");

    function mostrarSecciones() {
        secciones.forEach(function (seccion) {
            let posicion = seccion.getBoundingClientRect().top;
            let alturaPantalla = window.innerHeight;

            if (posicion < alturaPantalla - 100) {
                seccion.classList.add("show");
            }
        });
    }

    if (secciones.length > 0) {
        window.addEventListener("scroll", mostrarSecciones);
        mostrarSecciones(); // Para mostrar las secciones visibles al cargar
    }

    // === Botón de modo oscuro ===
    let modoOscuroBtn = document.getElementById("modoOscuro");

    if (modoOscuroBtn) {
        modoOscuroBtn.addEventListener("click", function () {
            document.body.classList.toggle("bg-dark");
            document.body.classList.toggle("text-white");

            let navbar = document.querySelector(".navbar");
            if (navbar) {
                navbar.classList.toggle("navbar-dark");
                navbar.classList.toggle("bg-dark");
                navbar.classList.toggle("navbar-light");
                navbar.classList.toggle("bg-light");
            }

            // Cambio de texto y estilo del botón
            if (document.body.classList.contains("bg-dark")) {
                modoOscuroBtn.textContent = "☀️ Modo Claro";
                modoOscuroBtn.classList.remove("btn-outline-light");
                modoOscuroBtn.classList.add("btn-outline-dark");
            } else {
                modoOscuroBtn.textContent = "🌙 Modo Oscuro";
                modoOscuroBtn.classList.remove("btn-outline-dark");
                modoOscuroBtn.classList.add("btn-outline-light");
            }
        });
    }
});