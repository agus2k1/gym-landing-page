function mensajePlan(plan) {
  switch(plan) {
    case 'basico':
      return "Elegiste el Plan Básico: acceso a sala, app y clases personalizadas.";
    case 'anual':
      return "Elegiste el Plan Anual: beneficios exclusivos, evaluación trimestral y más.";
    case 'mensual':
      return "Elegiste el Plan Mensual: acceso total y rutinas personalizadas.";
    default:
      return "Plan no reconocido.";
  }
}

function validarConfirmacion() {
  let respuesta;
  while (true) {
    respuesta = prompt("¿Querés asociarte a este plan? (sí/no)").toLowerCase();
    if (respuesta === 'sí' || respuesta === 'si') return true;
    if (respuesta === 'no') return false;
    alert("Por favor, responde con 'sí' o 'no'.");
  }
}

document.querySelectorAll('.card-button').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const plan = button.getAttribute('data-plan');
    const mensaje = mensajePlan(plan);
    alert(mensaje);

    if (validarConfirmacion()) {
      alert("¡Gracias por asociarte! Serás redirigido al login.");
    } else {
      alert("No te preocupes, seguí explorando los planes.");
    }
  });
});
