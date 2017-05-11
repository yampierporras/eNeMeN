function iniciarTamaño() {
    document.documentElement.style.height = window.innerHeight + 'px';
    document.body.style.height = window.innerHeight + 'px';
}

function cambiarTamaño() {
    document.documentElement.style.height = window.innerHeight + 'px';
    document.body.style.height = window.innerHeight + 'px';
}

$(document).ready(function () {
    iniciarTamaño();
    var ancho = window.innerWidth;
    $(window).resize(function () {
        if (ancho != window.innerWidth) {
            ancho = window.innerWidth;
            cambiarTamaño();
        }
    });

    $('#menu-toggle').click(function () {
        $('#menu-items').slideToggle('slow');
    });

    $('#menu-items').click(function () {
        if (window.innerWidth <= 576 || window.innerWidth <= 728) {
            $(this).slideUp();
        }
    });
});
