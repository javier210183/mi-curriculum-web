document.addEventListener('DOMContentLoaded', function() {
    const returnButton = document.querySelector('.btn-return');

    returnButton.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la navegación inmediata

        // Añade la clase para iniciar la animación de desvanecimiento
        document.body.classList.add('fade-out');

        // Espera a que la animación termine antes de navegar
        setTimeout(() => {
            window.location.href = returnButton.href;
        }, 1000); // Tiempo igual a la duración del fade-out
    });
});