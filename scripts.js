document.addEventListener('DOMContentLoaded', function() {
    const disorderedLettersContainer = document.getElementById('disordered-letters');
    const word = "WELCOME".split('');
    const letters = [];
    const positions = [
        { top: '5%', left: '15%' },
        { top: '20%', left: '80%' },
        { top: '45%', left: '5%' },
        { top: '60%', left: '85%' },
        { top: '75%', left: '20%' },
        { top: '85%', left: '60%' },
        { top: '50%', left: '70%' }
    ];
    
    word.forEach((letter, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = letter;
        span.style.top = positions[index].top;
        span.style.left = positions[index].left;
        span.style.transform = `translateZ(${Math.random() * 300}px) rotateY(${Math.random() * 360}deg)`;
        disorderedLettersContainer.appendChild(span);
        letters.push(span);
    });

    // Selecciona el nuevo div central para los eventos
    const centralArea = document.querySelector('.central-area'); 

    centralArea.addEventListener('mouseenter', function() {
        letters.forEach((letter, index) => {
            letter.classList.add('in-position');
            letter.style.top = '20%'; // Ajusta la alineación vertical
            letter.style.left = `${35 + index * 6}%`; // Ajusta la alineación horizontal
            letter.style.transform = 'translate(-50%, -50%) translateZ(0)';
        });
    });

    centralArea.addEventListener('mouseleave', function() {
        letters.forEach((letter, index) => {
            letter.classList.remove('in-position');
            letter.style.top = positions[index].top;
            letter.style.left = positions[index].left;
            letter.style.transform = `translateZ(${Math.random() * 300}px) rotateY(${Math.random() * 360}deg)`;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const btnProjects = document.querySelector('a[href="projects.html"]');

    btnProjects.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la navegación inmediata
        
        // Añade una clase para iniciar la animación de desvanecimiento
        document.body.classList.add('fade-out');
        
        // Espera a que la animación termine antes de navegar
        setTimeout(() => {
            window.location.href = btnProjects.href;
        }, 1000); // Tiempo igual a la duración del fade-out
    });
});
