// Obtenemos el elemento de la pantalla donde se muestran los números
const pantalla = document.getElementById('pantalla');

// Obtenemos todos los botones de la calculadora
const botones = document.querySelectorAll('button');

// Recorremos todos los botones
botones.forEach(boton => {

  // Agregamos un evento para poder clicar cada botón
  boton.addEventListener('click', () => {

    // Guarda el texto al presionar un botón
    const valor = boton.textContent;

    // Si el botón es "C", limpiamos la pantalla
    if (valor === 'C') {
      pantalla.value = '';

    // Si el botón es "=", realizamos la operación solicitada
    } else if (valor === '=') {
      try {
        // Con este fragmento evaluamos la expresión matemática solicitada
        pantalla.value = eval(pantalla.value);
      } catch {
        // Si hay un error en la operación solicitada, mostraremos "Error"
        pantalla.value = 'Error';
      }

    // Si es otro botón distinto, lo agregamos a la pantalla
    } else {
      pantalla.value += valor;
    }
  });
});
