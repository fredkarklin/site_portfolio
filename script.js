// Carrossel simples
const items = document.querySelectorAll('.carousel-item');
let current = 0;

document.querySelector('.carousel-next').addEventListener('click', () => {
  items[current].classList.remove('active');
  current = (current + 1) % items.length;
  items[current].classList.add('active');
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
  items[current].classList.remove('active');
  current = (current - 1 + items.length) % items.length;
  items[current].classList.add('active');
});

//particles.js
particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } }, // Quantidade de nós
      color: { value: '#ffffff' }, // Cor das partículas (branco, ajustável)
      shape: { type: 'circle', stroke: { width: 0 } }, // Partículas como círculos
      opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } }, // Opacidade variável
      size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.5 } }, // Tamanho variável
      line_linked: {
        enable: true,
        distance: 150, // Distância pra formar linhas
        color: '#58a6ff', // Cor das linhas (teu azul)
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2, // Velocidade do movimento
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out'
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' }, // Linhas se formam ao passar o mouse
        onclick: { enable: true, mode: 'push' }, // Adiciona partículas ao clicar
        resize: true
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });