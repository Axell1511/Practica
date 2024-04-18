function validateForm() {
  // Obtiene referencias a los campos del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
 
  
  // Validar el nombre (solo letras y espacios)
  const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
  if (!nombreRegex.test(nombre)) {
      alert('El nombre solo puede contener letras y espacios.');
      return false;
  }

  // Validar el apellido (solo letras y espacios)
  if (!nombreRegex.test(apellido)) {
      alert('El apellido solo puede contener letras y espacios.');
      return false;
  }

  // Validar el correo electrónico (debe seguir el formato de un correo electrónico válido)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return false;
  }

  // Validar el número de teléfono en el formato 000-000-0000
  const telefonoRegex = /^\d{3}-\d{3}-\d{4}$/;
  if (!telefonoRegex.test(telefono)) {
      alert('Por favor, introduce un número de teléfono válido en el formato 000-000-0000.');
      return false;
  }

  // Validar la contraseña
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/;
  if (!passwordRegex.test(password)) {
      alert('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula y un carácter alfanumérico.');
      return false;
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return false;
  }

  return true;
}

// Asocia la función validateForm con el evento onsubmit del formulario
document.getElementById('registrationForm').onsubmit = function() {
  return validateForm();
};



  
  