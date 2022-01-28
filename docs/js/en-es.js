var hide_button = document.getElementById('en');
var show_button = document.getElementById('es');

// escuchamos el evento click del botón ocultar
hide_button.addEventListener('click', function() {
    // mostramos el botón de mostrar
    show_button.style.display = 'block';
    // ocultamos el botón de ocultar
    hide_button.style.display = 'none';
});

show_button.addEventListener('click', function() {
    // mostramos el botón de mostrar
    show_button.style.display = 'none';
    // mostramos el botón de mostrar
    hide_button.style.display = 'block';
});