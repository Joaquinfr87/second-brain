window.BrainData = {
  user: {
    name: 'Carlos Mendoza',
    email: 'carlos@universidad.edu',
    avatar: 'CM'
  },
  stats: {
    notes: 142,
    pdfs: 38,
    emails: 56,
    recordings: 24,
    connections: 342
  },
  nodes: [
    // ── Notes ──
    {
      id: 'n1',
      label: 'POO y Herencia',
      type: 'note',
      description: 'Conceptos fundamentales de programación orientada a objetos y mecanismos de herencia.',
      content: 'La programación orientada a objetos se basa en cuatro pilares fundamentales: encapsulamiento, abstracción, herencia y polimorfismo. La herencia permite crear clases derivadas que reutilizan atributos y métodos de una clase base, facilitando la reutilización de código y la creación de jerarquías lógicas.',
      tags: ['POO', 'Herencia', 'Java', 'Clases'],
      date: '2025-07-10',
      connections: 6
    },
    {
      id: 'n2',
      label: 'Patrones de Diseño Singleton',
      type: 'note',
      description: 'Patrón de diseño creacional que garantiza una única instancia de una clase.',
      content: 'El patrón Singleton restringe la instanciación de una clase a un único objeto. Es útil cuando se necesita controlar el acceso a un recurso compartido como una conexión a base de datos o un pool de hilos. Se implementa mediante un constructor privado y un método estático de acceso.',
      tags: ['Patrones', 'Singleton', 'GoF', 'Diseño'],
      date: '2025-07-08',
      connections: 5
    },
    {
      id: 'n3',
      label: 'Algoritmos de Búsqueda',
      type: 'note',
      description: 'Algoritmos de búsqueda secuencial, binaria y por hash.',
      content: 'Los algoritmos de búsqueda permiten localizar elementos en estructuras de datos. La búsqueda secuencial recorre la estructura elemento por elemento con complejidad O(n). La búsqueda binaria requiere datos ordenados y reduce la complejidad a O(log n). Las tablas hash ofrecen búsqueda promedio O(1).',
      tags: ['Algoritmos', 'Búsqueda', 'Complejidad'],
      date: '2025-07-05',
      connections: 4
    },
    {
      id: 'n4',
      label: 'Estructuras de Datos Lineales',
      type: 'note',
      description: 'Listas, pilas, colas y sus aplicaciones prácticas.',
      content: 'Las estructuras de datos lineales almacenan elementos de forma secuencial. Las listas enlazadas permiten inserción y eliminación eficiente. Las pilas operan bajo el principio LIFO, útiles para retroceso y evaluación de expresiones. Las colas FIFO son fundamentales en sistemas de impresión y planificación de procesos.',
      tags: ['Estructuras', 'Listas', 'Pilas', 'Colas'],
      date: '2025-07-03',
      connections: 5
    },
    {
      id: 'n5',
      label: 'SQL Avanzado JOINs',
      type: 'note',
      description: 'Uniones simples, múltiples, externas y auto-referenciadas en SQL.',
      content: 'Los JOINs permiten combinar filas de dos o más tablas basándose en una columna relacionada. INNER JOIN retorna solo las filas con coincidencias en ambas tablas. LEFT y RIGHT JOIN incluyen todas las filas de una tabla aunque no haya coincidencia. FULL JOIN combina ambos. Los self JOINs relacionan una tabla consigo misma.',
      tags: ['SQL', 'JOINs', 'Bases de Datos'],
      date: '2025-07-07',
      connections: 4
    },
    {
      id: 'n6',
      label: 'Machine Learning Supervisado',
      type: 'note',
      description: 'Algoritmos de aprendizaje automático con datos etiquetados.',
      content: 'El aprendizaje supervisado utiliza conjuntos de datos etiquetados para entrenar modelos que hacen predicciones. Incluye regresión lineal, árboles de decisión, SVM y redes neuronales. La validación cruzada y las métricas como precisión, recall y F1-score son esenciales para evaluar el rendimiento del modelo.',
      tags: ['Machine Learning', 'Supervisado', 'Python', 'scikit-learn'],
      date: '2025-07-12',
      connections: 5
    },
    {
      id: 'n7',
      label: 'Redes Neuronales Artificiales',
      type: 'note',
      description: 'Arquitectura y funcionamiento de las redes neuronales.',
      content: 'Las redes neuronales artificiales están inspiradas en el cerebro humano. Compuestas de capas de neuronas interconectadas, cada una aplica pesos y funciones de activación. Las redes profundas (deep learning) utilizan múltiples capas ocultas para extraer características jerárquicas de los datos.',
      tags: ['Redes Neuronales', 'Deep Learning', 'IA'],
      date: '2025-07-11',
      connections: 5
    },
    {
      id: 'n8',
      label: 'Análisis de Complejidad Big O',
      type: 'note',
      description: 'Notación Big O para medir el rendimiento de algoritmos.',
      content: 'La notación Big O describe el crecimiento del tiempo de ejecución o espacio de memoria en función del tamaño de entrada. O(1) es constante, O(log n) logarítmico, O(n) lineal, O(n log n) linealítmico, O(n²) cuadrático. Comprender la complejidad es clave para elegir algoritmos eficientes.',
      tags: ['Complejidad', 'Big O', 'Rendimiento'],
      date: '2025-07-02',
      connections: 4
    },
    {
      id: 'n9',
      label: 'Principios SOLID',
      type: 'note',
      description: 'Cinco principios de diseño orientado a objetos para código mantenible.',
      content: 'SOLID: Single Responsibility (una clase, una responsabilidad), Open/Closed (abierto para extensión, cerrado para modificación), Liskov Substitution (los subtipos deben ser sustituibles), Interface Segregation (interfaces específicas) e Inversion of Dependence (depender de abstracciones). Estos principios promueven código flexible y escalable.',
      tags: ['SOLID', 'Diseño', 'Arquitectura'],
      date: '2025-07-09',
      connections: 6
    },
    {
      id: 'n10',
      label: 'Git y Control de Versiones',
      type: 'note',
      description: 'Sistema de control de versiones distribuido y flujo de trabajo con ramas.',
      content: 'Git permite rastrear cambios en el código fuente de forma distribuida. Conceptos clave incluyen repositorios, commits, ramas, merges y rebases. El flujo de trabajo feature-branch facilita el desarrollo colaborativo. Comandos esenciales: git add, git commit, git push, git pull y git merge.',
      tags: ['Git', 'GitHub', 'Control de Versiones'],
      date: '2025-07-06',
      connections: 3
    },
    {
      id: 'n11',
      label: 'Diseño de APIs REST',
      type: 'note',
      description: 'Principios de diseño para APIs RESTful escalables.',
      content: 'Las APIs REST se basan en recursos identificados por URIs, utilizando métodos HTTP (GET, POST, PUT, DELETE). Los principios incluyen statelessness, uniformidad de interfaz, caché y sistema de capas. El uso de códigos de respuesta HTTP adecuados y versionado es fundamental para APIs robustas.',
      tags: ['REST', 'API', 'HTTP', 'Web'],
      date: '2025-07-10',
      connections: 5
    },
    {
      id: 'n12',
      label: 'Ciberseguridad Básica',
      type: 'note',
      description: 'Fundamentos de seguridad informática y amenazas comunes.',
      content: 'La ciberseguridad protege sistemas y datos contra accesos no autorizados. Amenazas comunes incluyen phishing, ransomware y ataques DDoS. Principios CIA: Confidentiality, Integrity, Availability. Herramientas como firewalls, encriptación y autenticación de dos factores son esenciales para la defensa.',
      tags: ['Ciberseguridad', 'Seguridad', 'Encriptación'],
      date: '2025-07-04',
      connections: 3
    },
    // ── PDFs ──
    {
      id: 'n13',
      label: 'Artículo Deep Learning 2024',
      type: 'pdf',
      description: 'Revisión del estado del arte en aprendizaje profundo para el año 2024.',
      content: 'Este artículo revisa los avances más significativos en deep learning durante 2024, incluyendo modelos de lenguaje de gran escala, arquitecturas eficientes como Mixture of Experts, técnicas de alineamiento y avances en visión por computadora. Se discuten los desafíos de escalabilidad y sostenibilidad.',
      tags: ['Deep Learning', 'IA', 'Artículo'],
      date: '2025-07-01',
      connections: 4
    },
    {
      id: 'n14',
      label: 'Guía de Arquitectura de Software',
      type: 'pdf',
      description: 'Guía completa de arquitecturas monolítica, microservicios y serverless.',
      content: 'Esta guía compara arquitecturas de software tradicionales y modernas. Desde monolitos hasta microservicios y arquitectura serverless, analiza ventajas, desventajas y casos de uso. Incluye diagramas, patrones de comunicación entre servicios y estrategias de despliegue.',
      tags: ['Arquitectura', 'Microservicios', 'Software'],
      date: '2025-07-03',
      connections: 4
    },
    {
      id: 'n15',
      label: 'Paper Algoritmos Genéticos',
      type: 'pdf',
      description: 'Investigación sobre algoritmos genéticos y optimización combinatoria.',
      content: 'Este paper presenta una nueva variante de algoritmos genéticos aplicada a problemas de optimización combinatoria. Incluye operadores de cruce adaptativos, selección por torneo y mutación dirigida. Los resultados muestran mejoras del 15% sobre métodos convencionales en problemas de asignación de recursos.',
      tags: ['Algoritmos Genéticos', 'Optimización', 'Investigación'],
      date: '2025-06-28',
      connections: 3
    },
    {
      id: 'n16',
      label: 'Manual SQL Server',
      type: 'pdf',
      description: 'Manual de referencia para administración y consultas en SQL Server.',
      content: 'Guía de referencia completa de SQL Server que cubre instalación, configuración, diseño de esquemas, consultas avanzadas, procedimientos almacenados, triggers y optimización de rendimiento. Incluye ejemplos prácticos conAdventureWorks y mejores prácticas para producción.',
      tags: ['SQL Server', 'Bases de Datos', 'Manual'],
      date: '2025-06-25',
      connections: 3
    },
    {
      id: 'n17',
      label: 'Tesis Minería de Datos',
      type: 'pdf',
      description: 'Tesis sobre técnicas de minería de datos aplicadas a datos educativos.',
      content: 'Tesis de maestría que explora la aplicación de técnicas de minería de datos para predecir el rendimiento académico de estudiantes. Utiliza clasificación, clustering y reglas de asociación sobre un conjunto de datos de 10,000 registros. Los modelos alcanzaron un 87% de precisión.',
      tags: ['Minería de Datos', 'Educación', 'Tesis'],
      date: '2025-06-20',
      connections: 3
    },
    {
      id: 'n18',
      label: 'Libro Patrones de Diseño GoF',
      type: 'pdf',
      description: 'Referencia clásica de patrones de diseño de Gamma, Helm, Johnson y Vlissides.',
      content: 'El libro que definió 23 patrones de diseño orientado a objetos organizados en creacionales, estructurales y de comportamiento. Incluye Singleton, Factory, Observer, Strategy, y Decorator entre otros. Cada patrón contiene problema, solución, consecuencias y implementación en C++ y Smalltalk.',
      tags: ['Patrones', 'GoF', 'Libro', 'Diseño'],
      date: '2025-06-15',
      connections: 5
    },
    {
      id: 'n19',
      label: 'Estándar IEEE para Documentación',
      type: 'pdf',
      description: 'Estándares IEEE para documentación técnica y académica.',
      content: 'Compilación de estándares IEEE para la documentación de proyectos de software, incluyendo formato de informes técnicos, normas de citación, estructura de tesis y presentación de artículos. Esencial para la elaboración de documentos académicos de calidad profesional.',
      tags: ['IEEE', 'Documentación', 'Estándares'],
      date: '2025-06-18',
      connections: 2
    },
    {
      id: 'n20',
      label: 'Paper Computer Vision',
      type: 'pdf',
      description: 'Artículo sobre avances en visión por computadora con transformers.',
      content: 'Este paper presenta ViT-X, una arquitectura híbrida CNN-Transformer para visión por computadora. El modelo supera a ResNet y ViT estándar en ImageNet con un 20% menos de parámetros. Incluye técnicas de atención multi-escala y aprendizaje auto-supervisado pre-entrenado.',
      tags: ['Computer Vision', 'Transformers', 'Deep Learning'],
      date: '2025-07-02',
      connections: 4
    },
    // ── Emails ──
    {
      id: 'n21',
      label: 'Reunión Proyecto Final',
      type: 'email',
      description: 'Invitación a la reunión de coordinación del proyecto final de la carrera.',
      content: 'Estimado Carlos, te invitamos a la reunión de coordinación del proyecto final programada para el viernes 18 de julio a las 14:00. Se discutirá la división de tareas, el cronograma de entrega y los requisitos técnicos del sistema a desarrollar. Confirma tu asistencia.',
      tags: ['Reunión', 'Proyecto', 'Universidad'],
      date: '2025-07-14',
      connections: 3
    },
    {
      id: 'n22',
      label: 'Feedback del Profesor García',
      type: 'email',
      description: 'Retroalimentación del profesesor sobre el avance del proyecto.',
      content: 'Hola Carlos, revisé el avance de tu módulo de autenticación. El diseño está bien estructurado pero sugiero agregar manejo de excepciones más robusto y documentación de los endpoints. La arquitectura que propusiste es escalable. Programemos una reunión para revisar los tests unitarios.',
      tags: ['Feedback', 'Profesor', 'Proyecto'],
      date: '2025-07-12',
      connections: 2
    },
    {
      id: 'n23',
      label: 'Confirmación Práctica Laboratorio',
      type: 'email',
      description: 'Confirmación de lugar y fecha para la práctica de laboratorio.',
      content: 'Estimado estudiante, se confirma tu lugar en la práctica de laboratorio de Bases de Datos para el martes 15 de julio de 10:00 a 12:00 en el laboratorio 3 del edificio de ingeniería. Traer laptop personal con MySQL instalado. La práctica cubrirá consultas JOIN y transacciones.',
      tags: ['Laboratorio', 'Bases de Datos', 'Práctica'],
      date: '2025-07-10',
      connections: 2
    },
    {
      id: 'n24',
      label: 'Invitación Conferencia IA',
      type: 'email',
      description: 'Invitación a la conferencia internacional sobre Inteligencia Artificial.',
      content: 'Estimado Carlos, tienes una invitación para asistir a la Conferencia Internacional de Inteligencia Artificial ICAI 2025 que se realizará del 25 al 27 de julio. Incluye talleres de machine learning, paneles sobre ética en IA y networking con investigadores. Regístrate antes del 20 de julio.',
      tags: ['Conferencia', 'IA', 'Evento'],
      date: '2025-07-09',
      connections: 3
    },
    {
      id: 'n25',
      label: 'Recordatorio Entrega Parcial 2',
      type: 'email',
      description: 'Recordatorio de entrega de la segunda parcial de Programación IV.',
      content: 'Recordatorio: La segunda entrega parcial de Programación IV es el viernes 19 de julio a las 23:59. Debe incluir la implementación del patrón de diseño elegido, documentación UML actualizada y al menos el 80% de cobertura de tests. No se aceptarán entregas tardías.',
      tags: ['Entrega', 'Parcial', 'Programación IV'],
      date: '2025-07-13',
      connections: 2
    },
    {
      id: 'n26',
      label: 'Corrección Examen Parcial',
      type: 'email',
      description: 'Notificación de calificación y correcciones del examen parcial.',
      content: 'Hola Carlos, tu examen parcial de Estructuras de Datos fue calificado con 85/100. Las áreas de mejora incluyen: complejidad temporal de operaciones en árboles AVL y aplicación de Dijkstra en grafos con pesos negativos. Revisa las soluciones en el campus virtual.',
      tags: ['Examen', 'Calificación', 'Estructuras de Datos'],
      date: '2025-07-08',
      connections: 2
    },
    {
      id: 'n27',
      label: 'Grupo de Estudio Algoritmos',
      type: 'email',
      description: 'Invitación a unirse al grupo de estudio de algoritmos avanzados.',
      content: 'Hey Carlos, estamos formando un grupo de estudio de algoritmos para preparar el examen final. Nos reunimos los miércoles de 16:00 a 18:00 en la biblioteca. Cubriremos: grafos, programación dinámica, backtracking y análisis de complejidad. ¿Te unes?',
      tags: ['Grupo de Estudio', 'Algoritmos', 'Colaboración'],
      date: '2025-07-11',
      connections: 3
    },
    // ── Recordings ──
    {
      id: 'n28',
      label: 'Clase de Programación IV',
      type: 'recording',
      description: 'Grabación de la clase sobre patrones de diseño y arquitectura de software.',
      content: 'En esta clase se cubrieron los patrones de diseño creacionales (Singleton, Factory, Builder) y su implementación en Java. Se discutió la diferencia entre patrones creacionales, estructurales y de comportamiento. Se realizó un ejercicio práctico de refactorización usando el patrón Strategy.',
      tags: ['Programación IV', 'Patrones', 'Clase'],
      date: '2025-07-14',
      connections: 3
    },
    {
      id: 'n29',
      label: 'Reunión Sprint 3',
      type: 'recording',
      description: 'Grabación de la reunión de planificación del sprint 3 del proyecto.',
      content: 'Sprint 3 planning meeting: Se definieron las historias de usuario para el módulo de reportes. Se estimaron las tareas con story points y se asignaron responsabilidades. Puntos clave: integrar gráficos Chart.js, implementar exportación PDF y diseñar el dashboard de métricas.',
      tags: ['Sprint', 'Proyecto', 'Planning'],
      date: '2025-07-13',
      connections: 2
    },
    {
      id: 'n30',
      label: 'Tutoría Bases de Datos',
      type: 'recording',
      description: 'Sesión de tutoría sobre normalización y diseño de bases de datos.',
      content: 'Sesión de tutoría que cubrió la normalización de bases de datos hasta la forma normal boyce-codd (BCNF). Se analizaron dependencias funcionales, de transitividad y multivaluadas. Se resolvieron ejercicios prácticos de diseño de esquemas para un sistema de inventario.',
      tags: ['Tutoría', 'Bases de Datos', 'Normalización'],
      date: '2025-07-11',
      connections: 3
    },
    {
      id: 'n31',
      label: 'Presentación Proyecto Final',
      type: 'recording',
      description: 'Grabación de la presentación del avance del proyecto final.',
      content: 'Presentación del avance del proyecto final: Sistema de gestión de conocimiento con arquitectura de microservicios. Se demostró el módulo de autenticación JWT, la API REST de notas y la interfaz de usuario con React. El profesor sugeró mejorar la documentación de la API.',
      tags: ['Presentación', 'Proyecto Final', 'Demo'],
      date: '2025-07-12',
      connections: 3
    },
    {
      id: 'n32',
      label: 'Exposición Redes Neuronales',
      type: 'recording',
      description: 'Exposición sobre redes neuronales convolucionales y su aplicación.',
      content: 'Exposición sobre CNN (Convolutional Neural Networks). Se explicaron las capas de convolución, pooling y fully connected. Se demostró la implementación con TensorFlow y Keras para clasificación de imágenes. Se discutieron arquitecturas populares: VGG, ResNet, EfficientNet.',
      tags: ['Redes Neuronales', 'CNN', 'Exposición'],
      date: '2025-07-10',
      connections: 3
    },
    {
      id: 'n33',
      label: 'Workshop Git Avanzado',
      type: 'recording',
      description: 'Taller práctico sobre técnicas avanzadas de Git.',
      content: 'Workshop que cubrió rebase interactivo, cherry-pick, bisect para debugging, bisect para búsqueda de commits problemáticos, y estrategias de branching como Git Flow y GitHub Actions. Se practicó la resolución de conflictos de merge y el uso de stash.',
      tags: ['Git', 'Workshop', 'Avanzado'],
      date: '2025-07-08',
      connections: 2
    },
    {
      id: 'n34',
      label: 'Conferencia Machine Learning',
      type: 'recording',
      description: 'Conferencia sobre tendencias actuales en machine learning.',
      content: 'Conferencia magistral sobre las tendencias en ML para 2025: aprendizaje auto-supervisado, modelos fundacionales multimodales, ML en el edge y federal learning para preservación de privacidad. Incluyó demostraciones en vivo y panel de preguntas con investigadores de Google y Meta.',
      tags: ['Conferencia', 'Machine Learning', 'Tendencias'],
      date: '2025-07-06',
      connections: 4
    },
    {
      id: 'n35',
      label: 'Debate Ética en IA',
      type: 'recording',
      description: 'Debate sobre las implicaciones éticas de la inteligencia artificial.',
      content: 'Debate académico sobre ética en IA. Temas discutidos: sesgo algorítmico, transparencia en modelos de decisión, impacto en el empleo, privacidad de datos y regulación gubernamental. Se presentaron casos de estudio de discriminación algorítmica y se propusieron marcos éticos de evaluación.',
      tags: ['Ética', 'IA', 'Debate', 'Sociedad'],
      date: '2025-07-04',
      connections: 3
    }
  ],

  edges: [
    // POO y Herencia relationships
    { source: 'n1', target: 'n2', label: 'relates to', strength: 'strong' },
    { source: 'n1', target: 'n9', label: 'applies principles of', strength: 'strong' },
    { source: 'n1', target: 'n18', label: 'foundational for', strength: 'medium' },
    { source: 'n1', target: 'n11', label: 'underpins', strength: 'weak' },
    { source: 'n1', target: 'n4', label: 'uses', strength: 'medium' },

    // Patrones de Diseño relationships
    { source: 'n2', target: 'n18', label: 'documented in', strength: 'strong' },
    { source: 'n2', target: 'n9', label: 'implements', strength: 'strong' },
    { source: 'n2', target: 'n14', label: 'applied in', strength: 'medium' },
    { source: 'n2', target: 'n28', label: 'taught in', strength: 'medium' },

    // Algoritmos de Búsqueda relationships
    { source: 'n3', target: 'n8', label: 'analyzed by', strength: 'strong' },
    { source: 'n3', target: 'n4', label: 'implemented in', strength: 'strong' },
    { source: 'n3', target: 'n27', label: 'studied in', strength: 'medium' },

    // Estructuras de Datos relationships
    { source: 'n4', target: 'n8', label: 'evaluated by', strength: 'strong' },
    { source: 'n4', target: 'n3', label: 'contains algorithms', strength: 'strong' },
    { source: 'n4', target: 'n26', label: 'tested in exam', strength: 'weak' },
    { source: 'n4', target: 'n30', label: 'discussed in tutorial', strength: 'medium' },

    // SQL relationships
    { source: 'n5', target: 'n16', label: 'reference in', strength: 'strong' },
    { source: 'n5', target: 'n23', label: 'practiced in lab', strength: 'medium' },
    { source: 'n5', target: 'n30', label: 'extends with', strength: 'medium' },

    // Machine Learning relationships
    { source: 'n6', target: 'n7', label: 'uses architecture of', strength: 'strong' },
    { source: 'n6', target: 'n13', label: 'reviewed in', strength: 'strong' },
    { source: 'n6', target: 'n34', label: 'discussed in', strength: 'medium' },
    { source: 'n6', target: 'n17', label: 'applied in', strength: 'medium' },

    // Redes Neuronales relationships
    { source: 'n7', target: 'n20', label: 'improved by', strength: 'strong' },
    { source: 'n7', target: 'n32', label: 'presented in', strength: 'strong' },
    { source: 'n7', target: 'n13', label: 'covered in', strength: 'medium' },
    { source: 'n7', target: 'n35', label: 'raises concerns in', strength: 'medium' },

    // Complejidad relationships
    { source: 'n8', target: 'n3', label: 'measures', strength: 'strong' },
    { source: 'n8', target: 'n4', label: 'evaluates', strength: 'strong' },
    { source: 'n8', target: 'n27', label: 'studied in group', strength: 'medium' },

    // SOLID relationships
    { source: 'n9', target: 'n11', label: 'guides design of', strength: 'strong' },
    { source: 'n9', target: 'n2', label: 'complements', strength: 'strong' },
    { source: 'n9', target: 'n14', label: 'informs architecture', strength: 'medium' },
    { source: 'n9', target: 'n1', label: 'builds on OOP', strength: 'medium' },

    // Git relationships
    { source: 'n10', target: 'n33', label: 'advanced in workshop', strength: 'strong' },
    { source: 'n10', target: 'n29', label: 'used in sprint', strength: 'medium' },

    // APIs REST relationships
    { source: 'n11', target: 'n9', label: 'follows principles of', strength: 'strong' },
    { source: 'n11', target: 'n5', label: 'exposes data via', strength: 'medium' },
    { source: 'n11', target: 'n14', label: 'part of architecture', strength: 'medium' },
    { source: 'n11', target: 'n31', label: 'demonstrated in', strength: 'weak' },

    // Ciberseguridad relationships
    { source: 'n12', target: 'n11', label: 'secures', strength: 'medium' },
    { source: 'n12', target: 'n35', label: 'raises issues in', strength: 'weak' },

    // PDF cross-references
    { source: 'n13', target: 'n7', label: 'covers', strength: 'strong' },
    { source: 'n13', target: 'n6', label: 'references', strength: 'medium' },
    { source: 'n14', target: 'n9', label: 'applies', strength: 'strong' },
    { source: 'n14', target: 'n11', label: 'includes', strength: 'medium' },
    { source: 'n15', target: 'n8', label: 'optimized by', strength: 'medium' },
    { source: 'n16', target: 'n5', label: 'documented in', strength: 'strong' },
    { source: 'n17', target: 'n6', label: 'uses techniques from', strength: 'strong' },
    { source: 'n18', target: 'n2', label: 'defines', strength: 'strong' },
    { source: 'n18', target: 'n1', label: 'applies to', strength: 'medium' },
    { source: 'n20', target: 'n7', label: 'extends', strength: 'strong' },

    // Email connections
    { source: 'n21', target: 'n31', label: 'leads to', strength: 'medium' },
    { source: 'n22', target: 'n11', label: 'reviews', strength: 'weak' },
    { source: 'n23', target: 'n5', label: 'practices', strength: 'medium' },
    { source: 'n24', target: 'n34', label: 'relates to', strength: 'medium' },
    { source: 'n25', target: 'n28', label: 'content of', strength: 'medium' },
    { source: 'n27', target: 'n8', label: 'studies', strength: 'medium' },

    // Recording connections
    { source: 'n28', target: 'n2', label: 'teaches', strength: 'strong' },
    { source: 'n29', target: 'n10', label: 'uses', strength: 'medium' },
    { source: 'n30', target: 'n5', label: 'covers', strength: 'strong' },
    { source: 'n31', target: 'n11', label: 'demonstrates', strength: 'medium' },
    { source: 'n32', target: 'n7', label: 'explains', strength: 'strong' },
    { source: 'n34', target: 'n6', label: 'discusses', strength: 'strong' },
    { source: 'n35', target: 'n7', label: 'questions ethics of', strength: 'medium' }
  ],

  recentActivity: [
    { text: 'Created note "POO y Herencia" with class hierarchy diagrams', time: '2 horas atrás', type: 'note' },
    { text: 'Uploaded PDF "Artículo Deep Learning 2024"', time: '5 horas atrás', type: 'pdf' },
    { text: 'Read email "Recordatorio Entrega Parcial 2"', time: '8 horas atrás', type: 'email' },
    { text: 'Listened to recording "Clase de Programación IV"', time: '1 día atrás', type: 'recording' },
    { text: 'Updated note "Principios SOLID" with new examples', time: '1 día atrás', type: 'note' },
    { text: 'Shared PDF "Guía de Arquitectura de Software" with study group', time: '2 días atrás', type: 'pdf' },
    { text: 'Replied to email "Grupo de Estudio Algoritmos"', time: '2 días atrás', type: 'email' },
    { text: 'Recorded "Exposición Redes Neuronales" presentation', time: '3 días atrás', type: 'recording' }
  ],

  recentFiles: [
    { name: 'POO_y_Herencia_Notas.pdf', type: 'note', date: '2025-07-15', size: '2.4 KB' },
    { name: 'Deep_Learning_2024_Revison.pdf', type: 'pdf', date: '2025-07-15', size: '1.8 MB' },
    { name: 'Recordatorio_Entrega_Parcial2.msg', type: 'email', date: '2025-07-14', size: '12.3 KB' },
    { name: 'Clase_ProgramacionIV_S14.mp4', type: 'recording', date: '2025-07-14', size: '245.6 MB' },
    { name: 'SOLID_Principios_Actualizado.md', type: 'note', date: '2025-07-13', size: '3.1 KB' },
    { name: 'Arquitectura_Software_Guia.pdf', type: 'pdf', date: '2025-07-13', size: '4.2 MB' },
    { name: 'Respuesta_Grupo_Algoritmos.msg', type: 'email', date: '2025-07-12', size: '8.7 KB' },
    { name: 'Exposicion_Redes_Neuronales.mp4', type: 'recording', date: '2025-07-10', size: '189.3 MB' }
  ]
};
