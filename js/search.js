// Semantic Search Logic
document.addEventListener('DOMContentLoaded', () => {
  SearchEngine.init();
});

const SearchEngine = {
  query: '',
  activeFilter: 'all',

  init() {
    const input = document.getElementById('searchInput');
    const filters = document.querySelectorAll('[data-type-filter]');

    if (input) {
      input.addEventListener('input', (e) => {
        this.query = e.target.value.trim();
        this.performSearch();
      });
      // Focus on load
      input.focus();
    }

    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilter = btn.dataset.typeFilter;
        this.performSearch();
      });
    });

    // Check URL params for pre-filled query
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q && input) {
      input.value = q;
      this.query = q;
      this.performSearch();
    }
  },

  performSearch() {
    const results = document.getElementById('searchResults');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');

    if (!this.query) {
      if (results) results.innerHTML = '';
      if (resultCount) resultCount.textContent = '';
      if (noResults) noResults.style.display = 'none';
      this.showPopularTopics();
      return;
    }

    const queryLower = this.query.toLowerCase();

    // Search through all nodes
    let matched = BrainData.nodes.map(node => {
      let score = 0;
      const searchable = [
        node.label,
        node.description,
        node.content || '',
        ...(node.tags || []),
        node.type
      ].join(' ').toLowerCase();

      // Exact label match = highest score
      if (node.label.toLowerCase().includes(queryLower)) score += 100;

      // Tag match
      if (node.tags && node.tags.some(t => t.toLowerCase().includes(queryLower))) score += 60;

      // Description match
      if (node.description.toLowerCase().includes(queryLower)) score += 40;

      // Content match
      if ((node.content || '').toLowerCase().includes(queryLower)) score += 20;

      // Fuzzy: check individual words
      const words = queryLower.split(/\s+/);
      words.forEach(word => {
        if (word.length < 2) return;
        if (searchable.includes(word)) score += 10;
      });

      // Find related connections
      const connections = BrainData.edges
        .filter(e => e.source === node.id || e.target === node.id)
        .map(e => {
          const otherId = e.source === node.id ? e.target : e.source;
          return BrainData.nodes.find(n => n.id === otherId);
        })
        .filter(Boolean);

      // Boost score if connected nodes match
      connections.forEach(conn => {
        const connSearchable = [conn.label, conn.description, ...(conn.tags || [])].join(' ').toLowerCase();
        if (words.some(w => w.length >= 2 && connSearchable.includes(w))) {
          score += 5;
        }
      });

      return { ...node, score, connections };
    });

    // Filter by type
    if (this.activeFilter !== 'all') {
      matched = matched.filter(n => n.type === this.activeFilter);
    }

    // Sort by score, only include matches
    matched = matched.filter(n => n.score > 0).sort((a, b) => b.score - a.score);

    // Calculate max score for relevance bar
    const maxScore = matched.length > 0 ? matched[0].score : 1;

    if (results) {
      if (matched.length === 0) {
        results.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        if (resultCount) resultCount.textContent = '0 resultados';
      } else {
        if (noResults) noResults.style.display = 'none';
        if (resultCount) resultCount.textContent = `${matched.length} resultado${matched.length !== 1 ? 's' : ''}`;

        results.innerHTML = matched.map(node => {
          const relevance = Math.round((node.score / maxScore) * 100);
          const relClass = relevance >= 80 ? 'high' : relevance >= 50 ? 'medium' : 'low';
          const colorMap = { note: 'var(--note-color)', pdf: 'var(--pdf-color)', email: 'var(--email-color)', recording: 'var(--recording-color)' };

          return `
            <a href="detail.html?node=${node.id}" class="result-card glass glass-hover" style="display:block;text-decoration:none;color:inherit;padding:1.25rem;">
              <div style="display:flex;align-items:flex-start;gap:1rem;">
                <div class="result-type-icon" style="width:44px;height:44px;border-radius:var(--radius-md);background:${colorMap[node.type]}15;color:${colorMap[node.type]};display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">
                  <i class="bi ${App.typeIcon(node.type)}"></i>
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">
                    <h4 style="font-size:0.95rem;font-weight:600;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${node.label}</h4>
                    <span class="badge badge-${node.type}" style="flex-shrink:0;">${App.typeName(node.type)}</span>
                  </div>
                  <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.5;margin:0 0 0.75rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${node.description}</p>
                  <div style="display:flex;align-items:center;justify-content:space-between;">
                    <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                      ${node.tags.slice(0, 3).map(t => `<span class="badge badge-tag" style="font-size:0.65rem;padding:0.15rem 0.45rem;">${t}</span>`).join('')}
                    </div>
                    <div style="display:flex;align-items:center;gap:0.5rem;">
                      <span style="font-size:0.7rem;color:var(--text-muted);">${node.connections.length} conexiones</span>
                      <div class="relevance-bar" style="width:50px;height:4px;background:var(--bg-tertiary);border-radius:var(--radius-full);overflow:hidden;">
                        <div style="width:${relevance}%;height:100%;background:${relClass === 'high' ? 'var(--success)' : relClass === 'medium' ? 'var(--warning)' : 'var(--text-muted)'};border-radius:var(--radius-full);transition:width 0.5s var(--ease-standard);"></div>
                      </div>
                      <span style="font-size:0.68rem;font-weight:600;color:${relClass === 'high' ? 'var(--success)' : relClass === 'medium' ? 'var(--warning)' : 'var(--text-muted)'};">${relevance}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>`;
        }).join('');
      }
    }
  },

  showPopularTopics() {
    const container = document.getElementById('popularTopics');
    if (!container) return;

    const topics = [
      { label: 'Programación', icon: 'bi-code-slash', query: 'programación' },
      { label: 'Machine Learning', icon: 'bi-robot', query: 'machine learning' },
      { label: 'Bases de Datos', icon: 'bi-database', query: 'base de datos' },
      { label: 'Redes Neuronales', icon: 'bi-diagram-3', query: 'neuronal' },
      { label: 'Patrones de Diseño', icon: 'bi-puzzle', query: 'patrón' },
      { label: 'Git', icon: 'bi-git', query: 'git' }
    ];

    container.innerHTML = topics.map(t => `
      <button class="glass-sm glass-hover" onclick="SearchEngine.setQuery('${t.query}')" style="display:flex;align-items:center;gap:0.5rem;padding:0.6rem 1rem;border:1px solid var(--border);background:var(--surface);color:var(--text-secondary);border-radius:var(--radius-full);font-size:0.825rem;cursor:pointer;font-family:inherit;">
        <i class="bi ${t.icon}" style="color:var(--accent);"></i>
        ${t.label}
      </button>
    `).join('');
  },

  setQuery(q) {
    const input = document.getElementById('searchInput');
    if (input) {
      input.value = q;
      this.query = q;
      this.performSearch();
      input.focus();
    }
  }
};
