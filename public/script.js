// Función para cargar los proyectos desde la API
async function cargarProyectos() {
    try {
        const res = await fetch('/api/info');  // Llamamos a la API
        const data = await res.json();  // Convertimos la respuesta a JSON

        const proyectosDiv = document.getElementById('proyectos');
        proyectosDiv.innerHTML = ''; // Limpiamos antes de agregar

        data.proyectos.forEach(proyecto => {
            const proyectoHTML = `
                <div class="col-md-4">
                    <div class="proyecto">
                        <h3>${proyecto.nombre}</h3>
                        <p>${proyecto.descripcion}</p>
                        <a href="${proyecto.link}" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            `;
            proyectosDiv.innerHTML += proyectoHTML;
        });
    } catch (error) {
        console.error("Error al cargar los proyectos:", error);
    }
}

// Ejecutamos la función cuando la página cargue
window.onload = cargarProyectos;
