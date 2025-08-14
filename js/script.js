fetch('data/services.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.services-grid');
    Object.values(data).forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <i class="${service.icon}"></i>
        <h3>${service.title}</h3>
        <ul>${service.items.map(item => `<li>${item}</li>`).join('')}</ul>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading services:', err));
