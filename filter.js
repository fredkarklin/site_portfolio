console.log("filter.js carregado com sucesso!");

// Filtro de Tags (Dropdown)
document.addEventListener('DOMContentLoaded', () => {
  const filterDropdown = document.querySelector('#filter-dropdown');
  const projectCards = document.querySelectorAll('.project-card');

  filterDropdown.addEventListener('change', () => {
    const selectedTag = filterDropdown.value;

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