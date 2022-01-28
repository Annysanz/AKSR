var hide_button = document.getElementById('es');
var show_button = document.getElementById('en');

hide_button.addEventListener('click', function() {
    show_button.style.display = 'block';
    hide_button.style.display = 'none';
});

show_button.addEventListener('click', function() {
    show_button.style.display = 'none';
    hide_button.style.display = 'block';
});