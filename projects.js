document.addEventListener('DOMContentLoaded', function() {
    // Para la card de C#
    const csharpCard = document.querySelector('.card-csharp');
    const videoCsharp = csharpCard.querySelector('video');

    csharpCard.addEventListener('mouseover', function() {
        videoCsharp.play().catch(e => {
            
        });
    });

    csharpCard.addEventListener('mouseout', function() {
        videoCsharp.pause();
        videoCsharp.currentTime = 0; // Reinicia el video al principio
    });

    // Para la card de TypeScript & Angular
    const angularCard = document.querySelector('.card-ts-angular');
    const videoAngular = angularCard.querySelector('video');

    angularCard.addEventListener('mouseover', function() {
        videoAngular.play().catch(e => {
            
        });
    });

    angularCard.addEventListener('mouseout', function() {
        videoAngular.pause();
        videoAngular.currentTime = 0; // Reinicia el video al principio
    });

    // Para la card de Ionic
    const ionicCard = document.querySelector('.card-ionic');
    const videoIonic = ionicCard.querySelector('video');

    ionicCard.addEventListener('mouseover', function() {
        videoIonic.play().catch(e => {
            
        });
    });

    ionicCard.addEventListener('mouseout', function() {
        videoIonic.pause();
        videoIonic.currentTime = 0; // Reinicia el video al principio
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Para la card de BDD
    const bddCard = document.querySelector('.card-bdd');
    const videoBdd = bddCard.querySelector('video');

    bddCard.addEventListener('mouseover', function() {
        videoBdd.play().catch(e => {
            
        });
    });

    bddCard.addEventListener('mouseout', function() {
        videoBdd.pause();
        videoBdd.currentTime = 0; // Reinicia el video al principio
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Para la tarjeta de Carrito de Compra
    const carritoCard = document.querySelector('.card-carrito');
    const videoCarrito = carritoCard.querySelector('video');

    carritoCard.addEventListener('mouseover', function() {
        videoCarrito.play().catch(e => {
            
        });
    });

    carritoCard.addEventListener('mouseout', function() {
        videoCarrito.pause();
        videoCarrito.currentTime = 0; // Reinicia el video al principio
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Para la tarjeta de Java
    const javaCard = document.querySelector('.card-java-javafx');
    const videoJava = javaCard.querySelector('video');

    javaCard.addEventListener('mouseover', function() {
        videoJava.play().catch(e => {
            
        });
    });

    javaCard.addEventListener('mouseout', function() {
        videoJava.pause();
        videoJava.currentTime = 0; // Reinicia el video al principio
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Para la tarjeta PHP - Symfony
    const phpSymfonyCard = document.querySelector('.card-php-symfony');
    const videoPhpSymfony = phpSymfonyCard.querySelector('video');

    phpSymfonyCard.addEventListener('mouseover', function() {
        videoPhpSymfony.play().catch(e => {
            
        });
    });

    phpSymfonyCard.addEventListener('mouseout', function() {
        videoPhpSymfony.pause();
        videoPhpSymfony.currentTime = 0; // Reinicia el video al principio
    });

    // Para la tarjeta Fin de Ciclo
    const findeCicloCard = document.querySelector('.card-findeCiclo');
    const videoFindeCiclo = findeCicloCard.querySelector('video');

    findeCicloCard.addEventListener('mouseover', function() {
        videoFindeCiclo.play().catch(e => {
            
        });
    });

    findeCicloCard.addEventListener('mouseout', function() {
        videoFindeCiclo.pause();
        videoFindeCiclo.currentTime = 0; // Reinicia el video al principio
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btnReturn = document.querySelector('.btn-return');

    if (btnReturn) {
        console.log('Botón encontrado');
        btnReturn.addEventListener('click', function(event) {
            event.preventDefault(); // Previene la navegación inmediata
            console.log('Botón clicado, comenzando animación');

            // Asegúrate de que la clase fade-out se aplica correctamente
            document.body.classList.add('fade-out');

            // Confirmar que la clase se ha aplicado antes de continuar
            setTimeout(() => {
                console.log('Clase fade-out aplicada, redirigiendo a:', btnReturn.href);
                window.location.href = btnReturn.href;
            }, 1000); // Tiempo igual a la duración del fade-out
        });
    } else 
    {
        console.error('Botón "Return" no encontrado');
    }
});
  