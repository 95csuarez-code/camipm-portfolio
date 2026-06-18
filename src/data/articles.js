export const articles = [
  {
    id: 1,
    category: "linkedin",
    date: "2024-12-15",
    dateLabel: "15 Dic 2024",
    title: "5 Errores Comunes al Implementar Scrum en Equipos Técnicos",
    excerpt: "Análisis profundo de los desafíos más frecuentes y estrategias prácticas para superarlos basado en casos reales de transformación ágil.",
    readTime: "8 min lectura",
    views: "2,847",
    tags: ["Scrum", "Metodologías Ágiles"],
    featured: true,
    content: [
      {
        type: "intro",
        text: "Después de más de una década liderando equipos técnicos y implementando metodologías ágiles, he observado patrones recurrentes que pueden hacer fracasar incluso las mejores intenciones. Hoy comparto los 5 errores más comunes que veo al implementar Scrum y, más importante, cómo evitarlos."
      },
      {
        type: "h2", text: "1. Confundir Scrum con \"Reuniones Diarias\""
      },
      {
        type: "p", text: "El primer y más extendido error es reducir Scrum a \"hacer dailies\". He visto equipos que creen estar implementando Scrum simplemente porque tienen una reunión diaria de 15 minutos, pero ignoran completamente los principios fundamentales del framework."
      },
      { type: "h3", text: "¿Por qué ocurre este error?" },
      {
        type: "p", text: "La presión por mostrar resultados rápidos lleva a muchas organizaciones a adoptar solo las prácticas más visibles de Scrum, sin invertir tiempo en entender la filosofía subyacente. Es como intentar tocar piano aprendiendo solo las teclas, sin entender la música."
      },
      {
        type: "blockquote",
        text: "\"Scrum no es una metodología de reuniones, es una forma de pensar sobre el trabajo colaborativo y la entrega de valor continuo.\""
      },
      { type: "h3", text: "Cómo solucionarlo:" },
      {
        type: "ul", items: [
          "Invierte en formación real sobre los principios ágiles, no solo en las ceremonias",
          "Enfócate en el valor que cada ceremonia aporta al equipo y al producto",
          "Mide el éxito por la calidad del producto entregado, no por la cantidad de reuniones realizadas",
          "Asegúrate de que todos entienden el \"por qué\" antes del \"cómo\""
        ]
      },
      { type: "h2", text: "2. Ignorar la Importancia del Product Owner" },
      {
        type: "p", text: "En equipos técnicos, es común ver que el rol de Product Owner se asigna como una responsabilidad adicional a alguien que ya tiene otras funciones críticas. Esto es una receta para el desastre."
      },
      {
        type: "p", text: "Un Product Owner efectivo necesita tiempo, dedicación y habilidades específicas para gestionar el backlog, comunicarse con stakeholders y tomar decisiones de producto informadas. No es un rol que se pueda hacer \"a medias\"."
      },
      { type: "h3", text: "Señales de alarma:" },
      {
        type: "ul", items: [
          "El Product Owner está constantemente ocupado con otras tareas",
          "Las user stories son vagas o técnicamente orientadas",
          "El equipo no tiene claridad sobre las prioridades",
          "Las decisiones de producto se retrasan constantemente"
        ]
      },
      { type: "h3", text: "La solución:" },
      {
        type: "p", text: "Reconoce que el Product Owner es un rol de tiempo completo que requiere habilidades específicas. Si no puedes dedicar a alguien completamente a este rol, considera dividir las responsabilidades o buscar apoyo externo mientras desarrollas las capacidades internas."
      },
      { type: "h2", text: "3. Sprints Demasiado Largos (o Demasiado Cortos)" },
      {
        type: "p", text: "La duración del sprint es crucial para el éxito de Scrum, pero veo equipos que eligen duraciones basándose en conveniencia administrativa en lugar de optimización del flujo de trabajo."
      },
      { type: "h3", text: "Sprints de 4 semanas: El problema de la falsa seguridad" },
      {
        type: "p", text: "Muchos equipos técnicos prefieren sprints de 4 semanas porque \"necesitan tiempo para desarrollar funcionalidades completas\". Esto suele ser una señal de que las user stories no están bien definidas o que el equipo no ha aprendido a descomponer el trabajo efectivamente."
      },
      { type: "h3", text: "Sprints de 1 semana: La trampa de la hiperactividad" },
      {
        type: "p", text: "En el extremo opuesto, algunos equipos adoptan sprints de una semana pensando que más iteraciones significan más agilidad. Esto puede generar overhead ceremonial que reduce la productividad real."
      },
      { type: "h3", text: "Encontrando el equilibrio perfecto:" },
      {
        type: "ul", items: [
          "Comienza con sprints de 2 semanas como punto de partida",
          "Ajusta basándote en la capacidad real del equipo para entregar valor",
          "Considera la complejidad de tu dominio y la frecuencia de feedback necesaria",
          "Recuerda que puedes cambiar la duración después de algunas iteraciones"
        ]
      },
      { type: "h2", text: "4. Retrospectivas que No Generan Cambios Reales" },
      {
        type: "p", text: "Las retrospectivas son el corazón de la mejora continua en Scrum, pero frecuentemente se convierten en sesiones de quejas sin seguimiento o en ejercicios superficiales que no abordan los problemas reales del equipo."
      },
      { type: "h3", text: "Síntomas de retrospectivas inefectivas:" },
      {
        type: "ul", items: [
          "Siempre se identifican los mismos problemas",
          "Las acciones acordadas nunca se implementan",
          "El equipo muestra desinterés o participación mínima",
          "Se evitan las conversaciones difíciles"
        ]
      },
      { type: "h3", text: "Transformando las retrospectivas:" },
      {
        type: "p", text: "Una retrospectiva efectiva debe generar máximo 2-3 acciones concretas y asignar responsables específicos. Dedica los primeros 10 minutos de cada retrospectiva a revisar el progreso de las acciones anteriores."
      },
      {
        type: "blockquote",
        text: "\"La retrospectiva más exitosa que facilité resultó en que el equipo decidiera cambiar completamente su proceso de code review. Seis meses después, habían reducido el tiempo de integración en un 60%.\""
      },
      { type: "h2", text: "5. Métricas Incorrectas o Inexistentes" },
      {
        type: "p", text: "El último error crítico es no medir lo correcto o, peor aún, no medir nada en absoluto. He visto equipos obsesionados con velocity points que no reflejan valor real, o equipos que vuelan a ciegas sin ningún indicador de progreso."
      },
      { type: "h3", text: "Métricas que realmente importan:" },
      {
        type: "ul", items: [
          "Lead Time: Tiempo desde que se identifica una necesidad hasta que se entrega valor",
          "Cycle Time: Tiempo que toma completar una tarea una vez que se inicia",
          "Deployment Frequency: Qué tan frecuentemente se despliegan cambios a producción",
          "Mean Time to Recovery: Qué tan rápido se recupera el sistema de fallos"
        ]
      },
      { type: "h3", text: "Implementando un sistema de métricas efectivo:" },
      {
        type: "p", text: "Comienza con métricas simples y automatizables. No necesitas un dashboard complejo desde el día uno. Una hoja de cálculo compartida puede ser suficiente para empezar, siempre que el equipo revise y actúe sobre los datos regularmente."
      },
      { type: "h2", text: "Reflexiones Finales: El Camino Hacia la Maestría" },
      {
        type: "p", text: "Implementar Scrum exitosamente en equipos técnicos no es solo adoptar un conjunto de prácticas; es un cambio cultural profundo que requiere paciencia, experimentación y compromiso genuino con la mejora continua."
      },
      {
        type: "p", text: "Cada equipo es único, y lo que funciona para uno puede no funcionar para otro. La clave está en entender los principios fundamentales y adaptarlos inteligentemente a tu contexto específico."
      },
      {
        type: "p", text: "Si estás liderando esta transformación en tu equipo, recuerda que los errores son parte del proceso de aprendizaje. Lo importante es identificarlos rápidamente, aprender de ellos y ajustar el rumbo."
      },
      { type: "h3", text: "¿Cuál es tu siguiente paso?" },
      {
        type: "p", text: "Te invito a reflexionar: ¿cuál de estos errores reconoces en tu equipo actual? ¿Qué pequeño cambio podrías implementar esta semana para empezar a mejorarlo?"
      },
      {
        type: "p", text: "La transformación ágil es un viaje, no un destino. Cada paso cuenta, y cada mejora, por pequeña que sea, nos acerca a equipos más efectivos y productos de mayor valor."
      }
    ],
    comments: [
      { author: "Roberto Martínez", time: "hace 2 días", text: "Excelente artículo, Camila. Especialmente el punto sobre las retrospectivas. En mi equipo llevábamos meses haciendo retrospectivas que no generaban cambios reales. Implementamos tu sugerencia de máximo 2-3 acciones y ya vemos resultados." },
      { author: "Laura García", time: "hace 1 semana", text: "¿Podrías profundizar más sobre las métricas? Me interesa especialmente cómo medir el Lead Time en equipos que trabajan con múltiples productos simultáneamente." },
      { author: "Diego Fernández", time: "hace 1 semana", text: "Como Scrum Master, confirmo que estos son los errores más comunes. El punto sobre la duración de los sprints es clave. Muchos equipos se resisten a cambiar porque \"siempre lo hemos hecho así\"." }
    ]
  },
  {
    id: 2,
    category: "medium",
    date: "2024-12-08",
    dateLabel: "8 Dic 2024",
    title: "Del Código al Liderazgo: Mi Transición de Ingeniera a Project Manager",
    excerpt: "Reflexiones personales sobre el cambio de carrera y las habilidades que realmente importan en el liderazgo técnico moderno.",
    readTime: "12 min lectura",
    views: "1,543",
    tags: ["Liderazgo", "Carrera"],
    featured: false,
    content: [{ type: "intro", text: "Mi transición de ingeniera mecatrónica a project manager fue uno de los viajes más desafiantes y gratificantes de mi carrera..." }],
    comments: []
  },
  {
    id: 3,
    category: "linkedin",
    date: "2024-12-01",
    dateLabel: "1 Dic 2024",
    title: "Cómo Validar Ideas de Producto sin Gastar una Fortuna",
    excerpt: "Metodologías lean para startups y empresas que quieren innovar de manera inteligente y eficiente.",
    readTime: "6 min lectura",
    views: "3,201",
    tags: ["Product", "Lean"],
    featured: false,
    content: [{ type: "intro", text: "Validar una idea de producto no requiere invertir meses de desarrollo ni grandes presupuestos..." }],
    comments: []
  },
  {
    id: 4,
    category: "medium",
    date: "2024-11-24",
    dateLabel: "24 Nov 2024",
    title: "Gestión Ágil en Equipos Remotos: Lecciones Aprendidas",
    excerpt: "Estrategias probadas para mantener la productividad y cohesión del equipo en entornos distribuidos.",
    readTime: "10 min lectura",
    views: "2,109",
    tags: ["Remote", "Agilidad"],
    featured: false,
    content: [{ type: "intro", text: "Liderar equipos remotos con metodologías ágiles presenta desafíos únicos que requieren adaptaciones específicas..." }],
    comments: []
  },
  {
    id: 5,
    category: "linkedin",
    date: "2024-11-17",
    dateLabel: "17 Nov 2024",
    title: "OKRs vs KPIs: Cuándo Usar Cada Framework",
    excerpt: "Guía práctica para elegir el sistema de métricas adecuado para tu equipo y contexto organizacional.",
    readTime: "7 min lectura",
    views: "1,876",
    tags: ["OKRs", "Métricas"],
    featured: false,
    content: [{ type: "intro", text: "La elección entre OKRs y KPIs no es una decisión binaria sino contextual..." }],
    comments: []
  },
  {
    id: 6,
    category: "medium",
    date: "2024-11-10",
    dateLabel: "10 Nov 2024",
    title: "El Arte de las User Stories que Generan Valor Real",
    excerpt: "Técnicas avanzadas para escribir user stories que conecten necesidades del usuario con objetivos de negocio.",
    readTime: "9 min lectura",
    views: "4,012",
    tags: ["User Stories", "Agile"],
    featured: false,
    content: [{ type: "intro", text: "Una buena user story es mucho más que una frase en formato \"Como usuario, quiero...\"" }],
    comments: []
  }
];
