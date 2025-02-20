document.getElementById('myNavbarToggler').addEventListener('click', function () {
    var navbarContent = document.getElementById('navbarSupportedContent');

    // Alterna a visibilidade da barra de navegação
    if (navbarContent.classList.contains('collapse')) {
        navbarContent.classList.remove('collapse');
        navbarContent.classList.add('show');
    } else {
        navbarContent.classList.remove('show');
        navbarContent.classList.add('collapse');
    }
});