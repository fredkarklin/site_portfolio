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

// Formulário (opcional: feedback ao enviar)
document.getElementById('contato-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  this.reset();
});
