// Función de validación del formulario de contacto
function validateContactoForm(event) {
    // Evita que el formulario se envíe automáticamente si la validación falla
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación del campo Nombre
    // Expresión regular para verificar que el nombre tenga al menos 8 letras y no contenga números
    const nombreRegex = /^[a-zA-Z\s]{8,}$/;
    if (!nombreRegex.test(nombre)) {
        alert('El nombre debe contener al menos 8 letras y no debe incluir números.');
        return false;
    }

    // Validación del campo Correo Electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    // Validación del campo Mensaje
    if (mensaje.trim() === '') {
        alert('El campo Mensaje es obligatorio.');
        return false;
    }

    // Si todas las validaciones pasan, permite que el formulario se envíe
    return true;
}

// Cuando el documento esté listo, agrega el controlador de eventos 'submit' al formulario
document.addEventListener('DOMContentLoaded', function() {
    const contactoForm = document.getElementById('contactoForm');
    
    // Solo aplica el controlador de eventos al formulario de contacto
    if (contactoForm) {
        contactoForm.addEventListener('submit', function(event) {
            // Llama a la función de validación del formulario
            const formIsValid = validateContactoForm(event);

            // Si la validación falla, evita que el formulario se envíe
            if (!formIsValid) {
                event.preventDefault();
            }
        });
    }
});
