document.addEventListener('DOMContentLoaded', function () {
  const disorderedLettersContainer = document.getElementById('disordered-letters');
  const centralArea = document.querySelector('.central-area');
  if (!disorderedLettersContainer || !centralArea) return;

  const word = "WELCOME".split('');
  const letters = [];
  const positions = [
    { top: '5%',  left: '15%' },
    { top: '20%', left: '80%' },
    { top: '45%', left: '5%'  },
    { top: '60%', left: '85%' },
    { top: '75%', left: '20%' },
    { top: '85%', left: '60%' },
    { top: '50%', left: '70%' }
  ];

  // Crear letras desordenadas
  word.forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = ch;
    span.style.top  = positions[i].top;
    span.style.left = positions[i].left;
    span.style.transform = 'translateZ(0)'; // evita blur por 3D
    disorderedLettersContainer.appendChild(span);
    letters.push(span);
  });

  const isTouch = matchMedia('(hover: none)').matches;

  const setOrdered = () => {
    letters.forEach((letter, i) => {
      letter.classList.add('in-position');
      letter.style.top  = '20%';
      letter.style.left = `${35 + i * 6}%`;
      letter.style.transform = 'translate(-50%, -50%) translateZ(0)';
    });
  };

  const setScrambled = () => {
    letters.forEach((letter, i) => {
      letter.classList.remove('in-position');
      letter.style.top  = positions[i].top;
      letter.style.left = positions[i].left;
      // En desktop mantenemos el efecto 3D; en móvil, 2D limpio (sin borrosidad)
      letter.style.transform = isTouch
        ? 'translateZ(0)'
        : `translateZ(${Math.random() * 300}px) rotateY(${Math.random() * 360}deg)`;
    });
  };

  if (isTouch) {
    // MÓVIL: muéstralo ordenado desde el inicio (sin hover)
    setOrdered();
    // Si quieres permitir alternar al tocar, descomenta:
    // centralArea.addEventListener('touchstart', (e) => {
    //   e.preventDefault();
    //   setOrdered();
    // }, { passive: false });
  } else {
    // DESKTOP: como ya tenías, hover para ordenar / desordenar
    centralArea.addEventListener('mouseenter', setOrdered);
    centralArea.addEventListener('mouseleave', setScrambled);
  }
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
