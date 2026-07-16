// App initialization
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  init() {
    this.checkAuth();
    this.initSidebar();
    this.initUploadModal();
    this.initMobileMenu();
  },

  // Auth: store login state in sessionStorage
  checkAuth() {
    // If on a protected page (not index.html) and not logged in, redirect to index.html
    const page = window.location.pathname.split('/').pop() || 'index.html';
    if (page !== 'index.html' && page !== '' && !sessionStorage.getItem('sb_loggedIn')) {
      window.location.href = 'index.html';
    }
  },

  // Login form handler (only on index.html)
  handleLogin(email, password) {
    // Simulate login - any non-empty credentials work
    if (!email || !password) {
      const errorEl = document.getElementById('loginError');
      if (errorEl) {
        errorEl.style.display = 'block';
        errorEl.textContent = 'Por favor completa todos los campos';
        errorEl.style.animation = 'none';
        errorEl.offsetHeight; // trigger reflow
        errorEl.style.animation = 'shake 0.3s ease-in-out';
      }
      return false;
    }
    sessionStorage.setItem('sb_loggedIn', 'true');
    sessionStorage.setItem('sb_user', JSON.stringify(BrainData.user));
    window.location.href = 'dashboard.html';
  },

  handleLogout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
  },

  // Sidebar: set active nav item based on current page
  initSidebar() {
    const page = window.location.pathname.split('/').pop() || 'dashboard.html';
    document.querySelectorAll('.nav-item').forEach(item => {
      const href = item.getAttribute('href');
      if (href === page) {
        item.classList.add('active');
      }
      // Close mobile menu on nav click
      item.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
      });
    });
  },

  // Mobile menu toggle
  initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (toggle && sidebar) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('active');
      });
    }
    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar?.classList.remove('open');
        overlay.classList.remove('active');
      });
    }
  },

  // Upload modal (on dashboard)
  initUploadModal() {
    const modal = document.getElementById('uploadModal');
    const btn = document.getElementById('uploadBtn');
    const close = modal?.querySelector('.modal-close');
    const overlay = modal?.querySelector('.modal-overlay');

    if (btn && modal) {
      btn.addEventListener('click', () => {
        modal.style.display = 'block';
      });
    }
    if (close) close.addEventListener('click', () => modal.style.display = 'none');
    if (overlay) overlay.addEventListener('click', () => modal.style.display = 'none');

    // Drop zone
    const dropZone = document.querySelector('.drop-zone');
    if (dropZone) {
      dropZone.addEventListener('dragover', e => {
        e.preventDefault();
        dropZone.classList.add('dragover');
      });
      dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
      dropZone.addEventListener('drop', e => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        // Simulate upload
        App.simulateUpload();
      });
      dropZone.addEventListener('click', () => {
        App.simulateUpload();
      });
    }
  },

  simulateUpload() {
    const dropZone = document.querySelector('.drop-zone');
    if (dropZone) {
      dropZone.innerHTML = '<i class="bi bi-check-circle" style="font-size:2rem;color:var(--success)"></i><p style="margin-top:0.5rem;color:var(--success)">Archivo subido correctamente</p>';
      setTimeout(() => {
        document.getElementById('uploadModal').style.display = 'none';
        setTimeout(() => {
          dropZone.innerHTML = '<i class="bi bi-cloud-arrow-up" style="font-size:2.5rem;color:var(--accent);margin-bottom:0.5rem"></i><p style="font-weight:500">Arrastra tu archivo aquí</p><p style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem">o haz clic para seleccionar</p>';
        }, 300);
      }, 1500);
    }
  },

  // Helper: get node by ID
  getNode(id) {
    return BrainData.nodes.find(n => n.id === id);
  },

  // Helper: get connections for a node
  getNodeConnections(nodeId) {
    return BrainData.edges
      .filter(e => e.source === nodeId || e.target === nodeId)
      .map(e => {
        const otherId = e.source === nodeId ? e.target : e.source;
        const other = BrainData.nodes.find(n => n.id === otherId);
        return { ...e, otherNode: other };
      })
      .filter(c => c.otherNode);
  },

  // Helper: format date nicely
  formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  },

  // Helper: type display name
  typeName(type) {
    const names = { note: 'Nota', pdf: 'PDF', email: 'Correo', recording: 'Grabación' };
    return names[type] || type;
  },

  // Helper: type icon
  typeIcon(type) {
    const icons = { note: 'bi-file-earmark-text', pdf: 'bi-file-earmark-pdf', email: 'bi-envelope', recording: 'bi-mic' };
    return icons[type] || 'bi-file';
  }
};
