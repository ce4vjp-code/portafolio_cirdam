// Micro-interacciones, filtrado y sincronización con Dev.to

document.addEventListener('DOMContentLoaded', () => {
    // 1. Tilt 3D Micro-interaction Handler
    function attachTiltEffect(card) {
        if (!card) return;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            setTimeout(() => {
                card.style.transition = 'transform 0.1s ease';
            }, 500);
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    }

    // Attach initial tilt effect to existing cards
    document.querySelectorAll('.card').forEach(attachTiltEffect);

    // 2. Category Filtering Handler
    function applyFilter(filterValue) {
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.classList.remove('is-hidden');
            } else {
                card.classList.add('is-hidden');
            }
        });
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            applyFilter(filterValue);
        });
    });

    // 3. Dynamic Dev.to Articles Sync
    async function loadDevToArticles() {
        const username = 'ce4vjpcode';
        const endpoint = `https://dev.to/api/articles?username=${username}`;
        const container = document.querySelector('.projects-grid');

        if (!container) return;

        try {
            const response = await fetch(endpoint);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const articles = await response.json();

            if (Array.isArray(articles) && articles.length > 0) {
                // Remove pre-rendered fallback devto cards to replace with fresh API data
                document.querySelectorAll('.card[data-category="devto"]').forEach(el => el.remove());

                // Find active filter
                const activeBtn = document.querySelector('.filter-btn.active');
                const currentFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';

                // Insert at the top in correct order
                const firstNonDevToCard = container.querySelector('.card:not([data-category="devto"])');
                articles.forEach(article => {
                    const card = document.createElement('article');
                    card.className = 'card theme-devto';
                    card.setAttribute('data-category', 'devto');

                    // Check if hidden by current filter
                    if (currentFilter !== 'all' && currentFilter !== 'devto') {
                        card.classList.add('is-hidden');
                    }

                    const coverHtml = article.cover_image 
                        ? `<img src="${article.cover_image}" alt="${article.title}" class="article-cover" loading="lazy">`
                        : '';

                    const tagsHtml = (article.tag_list && article.tag_list.length > 0)
                        ? `<div class="article-tags">${article.tag_list.map(t => `<span class="tag-pill">#${t}</span>`).join('')}</div>`
                        : '';

                    const readingTime = article.reading_time_minutes ? `${article.reading_time_minutes} min de lectura` : 'Lectura rápida';
                    const dateFormatted = article.readable_publish_date || 'Reciente';

                    card.innerHTML = `
                        <div class="card-top">
                            <span class="card-icon">✍️</span>
                            <span class="badge badge-devto">Dev.to · Artículo</span>
                        </div>
                        ${coverHtml}
                        <h2 class="card-title">${article.title}</h2>
                        <div class="article-meta">
                            <span>📅 ${dateFormatted}</span>
                            <span>⏱️ ${readingTime}</span>
                        </div>
                        <p class="card-desc">${article.description || ''}</p>
                        ${tagsHtml}
                        <div class="card-actions">
                            <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Leer en Dev.to
                            </a>
                        </div>
                    `;

                    if (firstNonDevToCard) {
                        container.insertBefore(card, firstNonDevToCard);
                    } else {
                        container.appendChild(card);
                    }
                    attachTiltEffect(card);
                });
            }
        } catch (err) {
            console.warn('No se pudieron cargar artículos en vivo desde Dev.to (usando fallback offline):', err);
        }
    }

    loadDevToArticles();
});


