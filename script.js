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
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('neural-canvas');
    const ctx = canvas.getContext('2d');
    
    // Ajusta o tamanho do canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Array de partículas
    const particles = [];
    const particleCount = 80;
  
    // Posição do mouse
    let mouse = { x: null, y: null };
  
    // Classe para cada partícula
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2; // Velocidade X
        this.vy = (Math.random() - 0.5) * 2; // Velocidade Y
        this.number = Math.floor(Math.random() * 10); // Número aleatório 0-9
        this.size = Math.random() * 10 + 10; // Tamanho variável (10-20px)
        this.opacity = Math.random() * 0.4 + 0.3; // Opacidade 0.3-0.7
      }
  
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.font = `${this.size}px monospace`; // Fonte tech
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.number, this.x, this.y);
      }
  
      update() {
        this.x += this.vx;
        this.y += this.vy;
        // Quicar nas bordas
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }
  
    // Inicializa partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  
    // Conecta partículas próximas
    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(88, 166, 255, ${1 - distance / 150})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
  
    // Conecta partículas ao mouse
    function connectToMouse() {
      if (!mouse.x || !mouse.y) return;
      particles.forEach(p => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(88, 166, 255, ${1 - distance / 200})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    }
  
    // Adiciona partículas ao clicar
    canvas.addEventListener('click', () => {
      for (let i = 0; i < 4; i++) { // Adiciona 4 partículas
        particles.push(new Particle());
        if (particles.length > 200) particles.shift(); // Limita a 200 partículas
      }
    });
  
    // Atualiza posição do mouse
    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
  
    // Limpa o mouse quando sai do canvas
    canvas.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });
  
    // Animação principal
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      connectToMouse();
      requestAnimationFrame(animate);
    }
  
    animate();
  
    // Ajusta o canvas ao redimensionar
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  });



  