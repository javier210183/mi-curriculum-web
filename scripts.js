document.addEventListener('DOMContentLoaded', function () {
  const disorderedLettersContainer = document.getElementById('disordered-letters');
  const centralArea = document.querySelector('.central-area');
  if (!disorderedLettersContainer || !centralArea) return;

  const word = "WELCOME".split('');
  const letters = [];

  // Generador de posiciones con distancia mínima para evitar “amontonamiento”
  function generatePositions(minDist = 14, maxTries = 200){
    const pos = [];
    const rand = (min, max) => Math.random() * (max - min) + min;

    for (let i = 0; i < word.length; i++){
      let tries = 0, ok = false, t=0, l=0;

      while (!ok && tries < maxTries){
        // márgenes para no pegarse a bordes
        t = rand(8, 85);   // top en %
        l = rand(10, 86);  // left en %
        ok = pos.every(p => {
          const dt = p.t - t;
          const dl = p.l - l;
          return Math.hypot(dt, dl) >= minDist; // distancia en “porcentajes”
        });
        tries++;
      }
      pos.push({ t, l });
    }
    return pos.map(p => ({ top: p.t + '%', left: p.l + '%' }));
  }

  // Crea letras inicialmente desordenadas (luego decidimos el estado inicial)
  const initialPositions = generatePositions(16);
  word.forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = ch;
    span.style.top  = initialPositions[i].top;
    span.style.left = initialPositions[i].left;
    span.style.transform = 'translateZ(0)'; // 2D limpio (evita blur)
    disorderedLettersContainer.appendChild(span);
    letters.push(span);
  });

  const isTouch = matchMedia('(hover: none)').matches;
  const root = document.documentElement; // para poner clases de estado en <html> o usa document.body

  const setOrdered = () => {
    root.classList.remove('letters-scrambling');
    root.classList.add('letters-ordered');

    letters.forEach((letter, i) => {
      letter.classList.add('in-position');
      letter.style.top  = '20%';
      letter.style.left = `${35 + i * 6}%`;
      letter.style.transform = 'translate(-50%, -50%) translateZ(0)';
    });
  };

  const setScrambled = () => {
    root.classList.remove('letters-ordered');
    root.classList.add('letters-scrambling');

    // Recalcula posiciones aleatorias con separación mínima en cada scramble
    const p = generatePositions(16);
    letters.forEach((letter, i) => {
      letter.classList.remove('in-position');
      letter.style.top  = p[i].top;
      letter.style.left = p[i].left;
      // Desktop: mantenemos 3D suave; Móvil: rotación 2D sin profundidad
      letter.style.transform = isTouch
        ? `rotate(${Math.random() * 20 - 10}deg)` // ±10º ligeros (no marean)
        : `translateZ(${Math.random() * 220}px) rotateY(${Math.random() * 40 - 20}deg)`;
    });
  };

  if (isTouch) {
    // MÓVIL: empieza DESORDENADO con separación y tamaño reducido (CSS .letters-scrambling)
    setScrambled();
    let ordered = false;

    centralArea.addEventListener('touchstart', (e) => {
    // Si el toque viene de un <a>, no lo bloquees
    if (e.target.tagName.toLowerCase() === 'a') return;

    e.preventDefault(); // solo cuando es un toque sobre el área, no sobre un enlace
    if (ordered) { setScrambled(); } else { setOrdered(); }
    ordered = !ordered;
    }, { passive: false });

  } else {
    // DESKTOP: hover como tenías
    centralArea.addEventListener('mouseenter', setOrdered);
    centralArea.addEventListener('mouseleave', setScrambled);
    // estado inicial: desordenado, pero ya con distancia mínima
    setScrambled();
  }
});



/*////////////////*///////////////

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
