function calcularDescuento() {
    const monto = parseFloat(document.getElementById('nombre').value);
    let mensaje = "";

    if (monto >= 65000) {
        mensaje = "¡Aplica un 25% de descuento!";
    } else if (monto >= 35000) {
        mensaje = "¡Aplica un 15% de descuento!";
    } else if (monto >= 20000) {
        mensaje = "¡Aplica un 5% de descuento!";
    } else {
        mensaje = "No aplica descuento.";
    }

    alert(mensaje); // Muestra el resultado en una ventana emergente.
}
