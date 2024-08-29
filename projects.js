document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar la reproducción de video
    function handleVideoPlayback(cardClass) {
        const card = document.querySelector(cardClass);
        const video = card.querySelector('video');

        card.addEventListener('mouseover', function() {
            if (video.paused) {
                video.play().catch(e => {
                    // Error silencioso
                });
            }
        });

        card.addEventListener('mouseout', function() {
            if (!video.paused) {
                video.pause();
                video.currentTime = 0; // Reinicia el video al principio
            }
        });
    }

    // Llamadas a la función para cada tarjeta
    handleVideoPlayback('.card-csharp');
    handleVideoPlayback('.card-ts-angular');
    handleVideoPlayback('.card-ionic');
    handleVideoPlayback('.card-bdd');
    handleVideoPlayback('.card-carrito');
    handleVideoPlayback('.card-java-javafx');
    handleVideoPlayback('.card-php-symfony');
    handleVideoPlayback('.card-findeCiclo');
});

document.addEventListener('DOMContentLoaded', function() {
    const btnReturn = document.querySelector('.btn-return');

    if (btnReturn) {
        btnReturn.addEventListener('click', function(event) {
            event.preventDefault(); // Previene la navegación inmediata
            document.body.classList.add('fade-out');

            // Redirigir después de la animación
            setTimeout(() => {
                window.location.href = btnReturn.href;
            }, 1000); // Tiempo igual a la duración del fade-out
        });
    }
});
