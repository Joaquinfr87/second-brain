// Knowledge Graph - Cytoscape.js Configuration
document.addEventListener('DOMContentLoaded', () => {
  if (typeof cytoscape === 'undefined') {
    console.error('Cytoscape.js not loaded');
    return;
  }
  KnowledgeGraph.init();
});

const KnowledgeGraph = {
  cy: null,
  selectedNode: null,

  // Color map for node types
  colors: {
    note: '#60a5fa',
    pdf: '#f472b6',
    email: '#4ade80',
    recording: '#c084fc'
  },

  // Sizes based on connection count
  sizes: {
    small: 30,
    medium: 40,
    large: 55
  },

  init() {
    this.buildGraph();
    this.initToolbar();
    this.initFilters();
    this.updateStats();
  },

  buildGraph() {
    // Prepare elements from BrainData
    const elements = [];

    BrainData.nodes.forEach(node => {
      const connections = BrainData.edges.filter(
        e => e.source === node.id || e.target === node.id
      ).length;

      let size = this.sizes.small;
      if (connections >= 4) size = this.sizes.large;
      else if (connections >= 2) size = this.sizes.medium;

      elements.push({
        group: 'nodes',
        data: {
          id: node.id,
          label: node.label,
          type: node.type,
          description: node.description,
          size: size
        }
      });
    });

    BrainData.edges.forEach((edge, i) => {
      elements.push({
        group: 'edges',
        data: {
          id: 'e' + i,
          source: edge.source,
          target: edge.target,
          label: edge.label,
          strength: edge.strength
        }
      });
    });

    this.cy = cytoscape({
      container: document.getElementById('cy'),
      elements: elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#a78bfa',
            'label': 'data(label)',
            'text-valign': 'bottom',
            'text-halign': 'center',
            'color': '#e4e4ef',
            'font-size': '10px',
            'font-family': 'Inter, sans-serif',
            'text-margin-y': 8,
            'width': 'data(size)',
            'height': 'data(size)',
            'border-width': 2,
            'border-color': 'rgba(255,255,255,0.1)',
            'overlay-padding': '6px',
            'transition-property': 'background-color, border-color, width, height, box-shadow',
            'transition-duration': '300ms',
            'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)'
          }
        },
        {
          selector: 'node:selected',
          style: {
            'border-width': 3,
            'border-color': '#a78bfa',
            'background-color': '#a78bfa',
            'box-shadow': '0 0 20px rgba(167, 139, 250, 0.5)',
            'width': 60,
            'height': 60
          }
        },
        {
          selector: 'node.highlighted',
          style: {
            'border-width': 3,
            'border-color': '#c084fc',
            'box-shadow': '0 0 15px rgba(192, 132, 252, 0.4)'
          }
        },
        {
          selector: 'node.dimmed',
          style: {
            'opacity': 0.15
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 1.5,
            'line-color': 'rgba(167, 139, 250, 0.2)',
            'target-arrow-color': 'rgba(167, 139, 250, 0.2)',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 0.8,
            'curve-style': 'bezier',
            'transition-property': 'line-color, width, opacity',
            'transition-duration': '300ms'
          }
        },
        {
          selector: 'edge[strength = "strong"]',
          style: {
            'width': 2.5,
            'line-color': 'rgba(167, 139, 250, 0.4)'
          }
        },
        {
          selector: 'edge[strength = "weak"]',
          style: {
            'line-style': 'dashed',
            'line-color': 'rgba(167, 139, 250, 0.12)',
            'width': 1
          }
        },
        {
          selector: 'edge.highlighted',
          style: {
            'line-color': 'rgba(192, 132, 252, 0.6)',
            'width': 3,
            'z-index': 999
          }
        },
        {
          selector: 'edge.dimmed',
          style: {
            'opacity': 0.1
          }
        }
      ],
      layout: {
        name: 'cose',
        animate: true,
        animationDuration: 800,
        animationEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        nodeRepulsion: 8000,
        idealEdgeLength: 120,
        edgeElasticity: 0.1,
        gravity: 0.25,
        numIter: 1500,
        initialTemp: 300,
        coolingFactor: 0.95,
        minTemp: 1.0
      },
      minZoom: 0.3,
      maxZoom: 3,
      wheelSensitivity: 0.3,
      boxSelectionEnabled: false
    });

    // Fix: Apply colors via direct style since data() function in style doesn't work as expected
    this.cy.nodes().forEach(node => {
      const type = node.data('type');
      const color = this.colors[type] || '#a78bfa';
      node.style('background-color', color);
    });

    // Node click handler
    this.cy.on('tap', 'node', (evt) => {
      this.selectNode(evt.target);
    });

    // Background click handler - deselect
    this.cy.on('tap', (evt) => {
      if (evt.target === this.cy) {
        this.deselectAll();
      }
    });

    // Hover effects
    this.cy.on('mouseover', 'node', (evt) => {
      const node = evt.target;
      const neighborhood = node.neighborhood().add(node);
      this.cy.elements().addClass('dimmed');
      neighborhood.removeClass('dimmed');
      neighborhood.edges().addClass('highlighted');
      node.connectedEdges().addClass('highlighted');
    });

    this.cy.on('mouseout', 'node', () => {
      if (!this.selectedNode) {
        this.cy.elements().removeClass('dimmed highlighted');
      }
    });
  },

  selectNode(node) {
    this.selectedNode = node;
    const neighborhood = node.neighborhood().add(node);
    this.cy.elements().addClass('dimmed');
    neighborhood.removeClass('dimmed');
    node.connectedEdges().addClass('highlighted');
    node.addClass('highlighted');

    // Show detail in panel
    this.showNodeDetail(node.data('id'));
  },

  deselectAll() {
    this.selectedNode = null;
    this.cy.elements().removeClass('dimmed highlighted');
    // Reset panel
    const panel = document.getElementById('nodeDetailPanel');
    if (panel) {
      panel.innerHTML = '<div class="panel-section"><h4><i class="bi bi-info-circle"></i> Selecciona un nodo</h4><p style="font-size:0.825rem;color:var(--text-secondary)">Haz clic en cualquier nodo del grafo para ver sus detalles y conexiones.</p></div>';
    }
  },

  showNodeDetail(nodeId) {
    const nodeData = BrainData.nodes.find(n => n.id === nodeId);
    if (!nodeData) return;

    const connections = BrainData.edges
      .filter(e => e.source === nodeId || e.target === nodeId)
      .map(e => {
        const otherId = e.source === nodeId ? e.target : e.source;
        const other = BrainData.nodes.find(n => n.id === otherId);
        return { ...e, otherNode: other };
      })
      .filter(c => c.otherNode);

    const panel = document.getElementById('nodeDetailPanel');
    if (!panel) return;

    const typeColor = this.colors[nodeData.type] || '#a78bfa';

    panel.innerHTML = `
      <div class="panel-section">
        <div class="node-header" style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
          <div style="width:44px;height:44px;border-radius:var(--radius-md);background:${typeColor}20;color:${typeColor};display:flex;align-items:center;justify-content:center;font-size:1.2rem;">
            <i class="bi ${App.typeIcon(nodeData.type)}"></i>
          </div>
          <div>
            <h4 style="margin:0;font-size:0.95rem;">${nodeData.label}</h4>
            <span class="badge badge-${nodeData.type}" style="margin-top:0.25rem;">${App.typeName(nodeData.type)}</span>
          </div>
        </div>
        <p style="font-size:0.825rem;color:var(--text-secondary);line-height:1.6;margin-bottom:1rem;">${nodeData.description}</p>
        <div class="node-meta" style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;">
          ${nodeData.tags.map(t => `<span class="badge badge-tag">${t}</span>`).join('')}
        </div>
        <div style="font-size:0.75rem;color:var(--text-muted);display:flex;gap:1rem;">
          <span><i class="bi bi-calendar3"></i> ${App.formatDate(nodeData.date)}</span>
          <span><i class="bi bi-diagram-3"></i> ${connections.length} conexiones</span>
        </div>
      </div>
      <div class="panel-section">
        <h4><i class="bi bi-link-45deg"></i> Conexiones (${connections.length})</h4>
        <div class="node-connections">
          ${connections.map(c => {
            const oc = this.colors[c.otherNode.type] || '#a78bfa';
            return `
              <div class="connection-item" style="display:flex;align-items:center;gap:0.6rem;padding:0.6rem 0;border-bottom:1px solid var(--border);cursor:pointer;" onclick="KnowledgeGraph.focusNode('${c.otherNode.id}')">
                <div style="width:8px;height:8px;border-radius:var(--radius-full);background:${oc};flex-shrink:0;"></div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:0.825rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.otherNode.label}</div>
                  <div style="font-size:0.7rem;color:var(--text-muted);">${c.label}</div>
                </div>
                <span class="badge badge-${c.otherNode.type}" style="font-size:0.65rem;padding:0.15rem 0.5rem;">${App.typeName(c.otherNode.type)}</span>
              </div>`;
          }).join('')}
        </div>
      </div>
      <div class="panel-section">
        <h4><i class="bi bi-file-earmark-text"></i> Contenido</h4>
        <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.6;">${nodeData.content || 'Sin contenido disponible.'}</p>
      </div>
      <a href="detail.html?node=${nodeId}" class="btn btn-ghost" style="width:100%;font-size:0.825rem;">
        <i class="bi bi-box-arrow-up-right"></i> Ver página completa
      </a>
    `;
  },

  focusNode(nodeId) {
    const node = this.cy.getElementById(nodeId);
    if (node) {
      this.cy.animate({
        center: { eles: node },
        zoom: 1.5
      }, { duration: 500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });
      this.selectNode(node);
    }
  },

  // Toolbar: change layout
  initToolbar() {
    const layoutBtns = document.querySelectorAll('[data-layout]');
    layoutBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const layoutName = btn.dataset.layout;
        layoutBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.changeLayout(layoutName);
      });
    });

    // Zoom controls
    document.getElementById('zoomIn')?.addEventListener('click', () => {
      this.cy.animate({ zoom: this.cy.zoom() * 1.3, center: { eles: this.cy.elements() } }, { duration: 300 });
    });
    document.getElementById('zoomOut')?.addEventListener('click', () => {
      this.cy.animate({ zoom: this.cy.zoom() / 1.3, center: { eles: this.cy.elements() } }, { duration: 300 });
    });
    document.getElementById('zoomFit')?.addEventListener('click', () => {
      this.cy.animate({ fit: { eles: this.cy.elements(), padding: 40 } }, { duration: 500 });
    });
  },

  changeLayout(name) {
    const layouts = {
      cose: { name: 'cose', animate: true, animationDuration: 800, nodeRepulsion: 8000, idealEdgeLength: 120, gravity: 0.25 },
      circle: { name: 'circle', animate: true, animationDuration: 800, padding: 40 },
      breadthfirst: { name: 'breadthfirst', animate: true, animationDuration: 800, directed: false, spacingFactor: 1.2 },
      concentric: { name: 'concentric', animate: true, animationDuration: 800, concentric: (node) => node.degree(), minNodeSpacing: 80 }
    };
    this.cy.layout(layouts[name] || layouts.cose).run();
  },

  // Filter by type
  initFilters() {
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        const wasActive = btn.classList.contains('active');

        // Reset all
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));

        if (wasActive) {
          // Show all
          this.cy.elements().removeClass('dimmed');
          this.cy.nodes().style('display', 'element');
          this.cy.edges().style('display', 'element');
        } else {
          btn.classList.add('active');
          this.cy.nodes().forEach(node => {
            if (node.data('type') === filter) {
              node.style('display', 'element');
              node.removeClass('dimmed');
            } else {
              node.style('display', 'none');
            }
          });
          // Hide edges where either endpoint is hidden
          this.cy.edges().forEach(edge => {
            const src = edge.source();
            const tgt = edge.target();
            if (src.style('display') === 'none' || tgt.style('display') === 'none') {
              edge.style('display', 'none');
            } else {
              edge.style('display', 'element');
            }
          });
        }
      });
    });
  },

  // Update stats in panel
  updateStats() {
    const statsEl = document.getElementById('graphStats');
    if (statsEl) {
      statsEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;padding:0.3rem 0;">
          <span style="color:var(--text-muted);">Nodos</span>
          <span style="font-weight:600;">${BrainData.nodes.length}</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;padding:0.3rem 0;">
          <span style="color:var(--text-muted);">Conexiones</span>
          <span style="font-weight:600;">${BrainData.edges.length}</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;padding:0.3rem 0;">
          <span style="color:var(--text-muted);">Densidad</span>
          <span style="font-weight:600;">${(BrainData.edges.length / (BrainData.nodes.length * (BrainData.nodes.length - 1) / 2) * 100).toFixed(1)}%</span>
        </div>
      `;
    }
  }
};
