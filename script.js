document.getElementById('form-reserva').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const servicio = document.getElementById('servicio').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const nombre = document.getElementById('nombre').value;

  // Formatear fecha bonita
  const fechaObj = new Date(fecha + 'T00:00:00');
  const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = fechaObj.toLocaleDateString('es-ES', opcionesFecha);

  const numeroWhatsApp = "591XXXXXXXX"; // <--- CAMBIAR AQUÍ

  // Mensaje para el salón
  let mensaje = "*NUEVA SOLICITUD DE CITA* ✨\n\n";
  mensaje += "👤 *Clienta:* " + nombre + "\n";
  mensaje += "💅 *Servicio:* " + servicio + "\n";
  mensaje += "📅 *Fecha:* " + fechaFormateada + "\n";
  mensaje += "⏰ *Hora:* " + hora + "\n\n";
  mensaje += "_Quedo atenta a la confirmación._";

  const mensajeCodificado = encodeURIComponent(mensaje);

  window.open("https://wa.me/" + numeroWhatsApp + "?text=" + mensajeCodificado, "_blank");
});