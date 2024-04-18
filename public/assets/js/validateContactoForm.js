function validateContactoForm() {
    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validar el nombre (solo letras, acentos, "ñ/Ñ" y espacios)
    const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert('El nombre solo puede contener letras, acentos, "ñ", "Ñ" y espacios.');
        return false;
    }

    // Validar el correo electrónico (debe seguir el formato de un correo electrónico válido)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return false;
    }

    // Validar el mensaje (debe tener contenido y no puede estar vacío)
    if (mensaje.length === 0) {
        alert('El mensaje no puede estar vacío.');
        return false;
    }

    // Si todas las validaciones son exitosas, retorna true
    return true;
}

// Asocia la función validateContactoForm con el evento onsubmit del formulario
document.getElementById('contactoForm').onsubmit = function() {
    return validateContactoForm();
};
