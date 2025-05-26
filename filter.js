console.log("filter.js carregado com sucesso!");

// Filtro de Tags
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM carregado, iniciando filtro de tags...");
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log("Botão clicado:", button.getAttribute('data-tag'));
      
      // Remove a classe 'active' de todos os botões
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Adiciona a classe 'active' ao botão clicado
      button.classList.add('active');

      const selectedTag = button.getAttribute('data-tag');

      projectCards.forEach(card => {
        const cardTags = card.getAttribute('data-tags').split(',').map(tag => tag.trim());

        if (selectedTag === 'all' || cardTags.includes(selectedTag)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});