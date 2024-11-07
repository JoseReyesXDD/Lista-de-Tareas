    const botonAgregar = document.getElementById("boton-agregar-01");
    const inputTarea = document.getElementById("input-nombre-tarea");
    const inputFecha = document.getElementById("input-fecha-tarea");
    const listaTareas = document.getElementById("tareas-por-hacer");


    document.getElementById("boton-agregar-01").addEventListener("click", function() {
        // Obtener los datos de los input
        const nombreTarea = document.getElementById("input-nombre-tarea").value;
        const fechaTarea = document.getElementById("input-fecha-tarea").value;

        // Crear un nuevo elemento de lista <li> para la tarea
        const nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add("tarea"); // se le añade la clase tarea

        // Añadir el contenido de la tarea con fecha
        nuevaTarea.innerHTML = `${nombreTarea} - ${fechaTarea} <button class="boton-completada" onclick="completarTarea(this)">✓</button>`;

        // Agregar la tarea a la lista de tareas por hacer
        document.getElementById("tareas-por-hacer").appendChild(nuevaTarea);

        // Limpiar los campos de entrada
        document.getElementById("input-nombre-tarea").value = "";
        document.getElementById("input-fecha-tarea").value = "";
    });

    function completarTarea(boton) {
        const tarea = boton.parentElement;

        // Mover la tarea a la lista de tareas hechas
        tarea.classList.remove("tarea");
        tarea.classList.add("tarea-hecha");

        // Eliminar el botón "Completar" y agregar un botón "Eliminar"
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("boton-eliminar");

        botonEliminar.onclick = function () {
            tarea.remove();
        };

        tarea.removeChild(boton); // Eliminar el botón "Completar"
        tarea.appendChild(botonEliminar); // Agregar el botón "Eliminar"

        // Agregar la tarea a la lista de tareas hechas
        document.getElementById("tareas-hechas").appendChild(tarea);
    }

        // Función para eliminar una tarea
        function eliminarTarea(boton) {
            const tarea = boton.parentElement;
            tarea.remove();
        }