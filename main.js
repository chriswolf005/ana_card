
  // Agrega un evento click al botón
  document.querySelector('.btn-pink').addEventListener('click', function() {
    // Obtiene la posición de la sección de galería
    const galeria = document.querySelector('#galeria');
    const galeriaPosition = galeria.offsetTop;

    // Desplaza suavemente la página a la posición de la sección de galería
    window.scrollTo({
      top: galeriaPosition,
      behavior: 'smooth'
    });
  });

