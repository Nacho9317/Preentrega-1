// Capturar elementos del DOM
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const submitBtn = document.getElementById('submit-btn');

// Event listener para el botón de enviar
submitBtn.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();
    const edad = parseInt(edadInput.value.trim());

    // Validar el nombre
    if (nombre === '') {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar la edad
    if (isNaN(edad) || edad <= 0 || edad > 150) {
        alert("Por favor, ingresa una edad válida.");
        return;
    }
    
    if (edad < 18) {
        alert("Lo sentimos, debes ser mayor de edad para acceder a nuestros servicios.");
        // Limpiar los campos
        nombreInput.value = '';
        edadInput.value = '';
        return;
    }

    // Mostrar mensaje de bienvenida
    alert("Hola " + nombre + ". Bienvenido a nuestro consultorio.");

    // Obtener selección de tratamiento
    const opcion = mostrarTratamientos();

    // Determinar el tratamiento seleccionado
    let tratamientoSeleccionado;
    switch(opcion) {
        case 1:
            tratamientoSeleccionado = "Masaje relajante";
            break;
        case 2:
            tratamientoSeleccionado = "Limpieza facial";
            break;
        case 3:
            tratamientoSeleccionado = "Tratamiento de exfoliación corporal";
            break;
        case 4:
            tratamientoSeleccionado = "Depilación láser";
            break;
        case 5:
            tratamientoSeleccionado = "Masaje de tejido profundo";
            break;
        default:
            tratamientoSeleccionado = "Tratamiento no reconocido";
    }

    // Mostrar el tratamiento seleccionado
    alert("Has seleccionado el tratamiento: " + tratamientoSeleccionado + ". Nos pondremos en contacto contigo para coordinar los detalles.");
});

// Función para mostrar los tratamientos disponibles y obtener la selección del usuario
function mostrarTratamientos() {
    let opcion;
    // Mostrar tratamientos disponibles y pedir al usuario que seleccione uno
    do {
        opcion = parseInt(prompt("Estos son los tratamientos que ofrecemos:\n1. Masaje relajante\n2. Limpieza facial\n3. Tratamiento de exfoliación corporal\n4. Depilación láser\n5. Masaje de tejido profundo\n\nPor favor, selecciona el número correspondiente al tratamiento que le interesa:"));
    } while (isNaN(opcion) || opcion < 1 || opcion > 5); // Se asume que las opciones válidas están entre 1 y 5
    return opcion;
}
