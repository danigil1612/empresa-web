export type Locale = 'es' | 'ca' | 'en'

export const localeOptions: Array<{
  code: Locale
  short: string
  label: string
}> = [
  { code: 'ca', short: 'CA', label: 'Català' },
  { code: 'es', short: 'ES', label: 'Castellano' },
  { code: 'en', short: 'EN', label: 'English' },
]

export const messages = {
  es: {
    common: {
      nav: {
        methodology: 'Metodología',
        product: 'Producto',
        company: 'Empresa',
        demo: 'Pide una demo',
        dashboard: 'Acceso dashboard',
      },
      language: {
        label: 'Cambiar idioma',
        menu: 'Selecciona un idioma',
      },
      a11y: {
        home: 'Pulse, inicio',
        menu: 'Abrir o cerrar navegación',
        primaryNav: 'Navegación principal',
        footerNav: 'Navegación del pie',
        skipToContent: 'Saltar al contenido principal',
      },
      actions: {
        demo: 'Pide una demo',
        discover: 'Descubrir más',
        product: 'Ver producto',
        back: 'Volver al formulario',
        backToTop: 'Volver arriba',
      },
      error: {
        notFoundEyebrow: 'Página no encontrada',
        notFoundTitle: 'Esta señal todavía no existe.',
        notFoundText:
          'La dirección puede haber cambiado o la página aún no está disponible. Puedes volver al inicio o pedir una demo.',
        genericEyebrow: 'Algo no ha ido bien',
        genericTitle: 'Necesitamos un momento.',
        genericText:
          'No hemos podido cargar esta página. Vuelve al inicio y continúa explorando Pulse.',
        home: 'Volver al inicio',
      },
      footer: {
        description:
          'Señales emocionales claras para cuidar a las personas y proteger el rendimiento.',
        explore: 'Explora',
        contact: 'Contacto',
        email: '[Email corporativo pendiente de confirmar]',
        legal: '[Aviso legal y privacidad pendientes]',
        closing: 'Bienestar medible. Decisiones humanas.',
      },
      dashboardMissing: 'Configura NUXT_PUBLIC_DASHBOARD_URL',
      mockup: {
        aria: 'Representación conceptual de la vista agregada de Pulse',
        period: 'Esta semana',
        state: 'Estado del equipo',
        stable: 'Estable',
        trend: 'Tendencia global',
        change: '+6 puntos este mes',
        signals: 'Señales detectadas',
        energy: 'Energía',
        focus: 'Foco',
        connection: 'Conexión',
        insight: 'Insight de la semana',
        insightText: 'La energía mejora; conviene revisar la carga del equipo.',
        note: 'Mockup conceptual · Sin datos reales',
      },
      cta: {
        eyebrow: 'El siguiente paso',
        title: 'Empieza a escuchar antes de que sea tarde.',
        text: 'Te enseñamos cómo Pulse puede convertir señales emocionales en decisiones útiles para tu organización.',
      },
    },
    home: {
      seo: {
        title: 'Bienestar real para equipos',
        description:
          'Pulse detecta señales de desgaste, desconexión y bienestar antes de que afecten al rendimiento del equipo.',
      },
      hero: {
        eyebrow: 'Bienestar que ayuda a decidir',
        title: 'Detecta el desgaste de tu equipo antes de que',
        accent: 'afecte al rendimiento.',
        lead: 'Pulse convierte el estado emocional real de tu equipo en señales claras para RR. HH., liderazgo y dirección.',
        how: 'Cómo funciona',
        trust: [
          { value: '5 s', label: 'para responder' },
          { value: '100%', label: 'visión agregada' },
          { value: '1 señal', label: 'para empezar a actuar' },
        ],
        note: 'Datos orientativos · Pendientes de validación con cliente',
        positive: 'Señal positiva esta semana',
        risk: 'Riesgo de desconexión',
      },
      problem: {
        eyebrow: 'El problema empieza antes de verse',
        title: 'Tu empresa probablemente está perdiendo esto sin saberlo.',
        intro:
          'Cuando faltan señales tempranas, el coste humano y el coste de negocio avanzan juntos.',
        cards: [
          {
            number: '01',
            title: 'Desgaste invisible',
            text: 'El cansancio emocional se acumula en silencio hasta convertirse en rotación, bajas o pérdida de foco.',
          },
          {
            number: '02',
            title: 'Decisiones tardías',
            text: 'Sin señales frecuentes, RR. HH. y liderazgo actúan cuando el problema ya es evidente.',
          },
          {
            number: '03',
            title: 'Escucha que no activa',
            text: 'Una encuesta anual explica el pasado. El equipo necesita una escucha ligera para decidir en el presente.',
          },
        ],
      },
      methodology: {
        eyebrow: 'La metodología Pulse',
        title: 'Escuchamos a tu equipo. Detectamos patrones.',
        accent: 'Te damos decisiones claras.',
        link: 'Descubre la metodología',
        steps: [
          {
            tag: '1. El equipo responde',
            title: 'Cinco segundos para decir cómo está.',
            text: 'Una interacción simple y recurrente reduce la fricción y facilita una participación natural.',
          },
          {
            tag: '2. Pulse detecta',
            title: 'Señales anónimas, patrones útiles.',
            text: 'La información se observa de forma agregada para identificar cambios sin exponer a ninguna persona.',
          },
          {
            tag: '3. Tú decides',
            title: 'Contexto claro para actuar mejor.',
            text: 'La organización ve tendencias y prioridades para orientar conversaciones y medidas concretas.',
          },
        ],
      },
      product: {
        eyebrow: 'Una lectura distinta',
        title: 'No medimos satisfacción. Medimos estado emocional real.',
        intro:
          'Pulse reduce la distancia entre lo que vive el equipo y lo que la organización necesita saber para cuidarlo.',
        link: 'Explora el producto',
        benefits: [
          {
            title: 'Recogida anónima.',
            text: 'Sin exposición individual ni conversaciones forzadas.',
          },
          {
            title: 'Señales continuas.',
            text: 'Una lectura más cercana al momento real del equipo.',
          },
          {
            title: 'Visión global.',
            text: 'Menos ruido y más contexto para priorizar decisiones.',
          },
        ],
        comparisonTitle: 'De una fotografía puntual a una señal continua',
        comparisonAccent: 'Pulse es la evolución',
        columns: ['Qué cambia', 'Encuesta tradicional', 'Apps de bienestar', 'Pulse'],
        rows: [
          ['Frecuencia', 'Puntual', 'Variable', 'Continua'],
          ['Fricción para el equipo', 'Alta', 'Media', 'Muy baja'],
          ['Lectura emocional', 'Superficial', 'Parcial', 'En contexto'],
          ['Visión organizativa', 'Retrospectiva', 'Fragmentada', 'Accionable'],
        ],
      },
      trust: {
        eyebrow: 'Confianza antes que promesas',
        title: 'La credibilidad se construye con datos reales.',
        text: 'La estructura queda preparada para incorporar estudios, casos y testimonios cuando el cliente los apruebe. Hasta entonces, Pulse no inventa resultados.',
        items: [
          'Base científica pendiente de documentar',
          'Casos reales pendientes de aprobación',
          'Métricas de impacto pendientes de validar',
        ],
      },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        title: 'Lo esencial, antes de pedir una demo.',
        items: [
          {
            question: '¿Pulse identifica a personas concretas?',
            answer:
              'No. La propuesta se basa en una lectura agregada y anónima. Los criterios definitivos de anonimato deben validarse con el cliente.',
          },
          {
            question: '¿Cuánto tarda el equipo en responder?',
            answer:
              'La experiencia está diseñada para resolverse en unos cinco segundos. Este dato debe confirmarse con el producto final.',
          },
          {
            question: '¿Pulse sustituye las conversaciones con el equipo?',
            answer:
              'No. Pulse aporta señales y contexto para que RR. HH. y liderazgo puedan conversar y actuar mejor.',
          },
          {
            question: '¿Dónde se consulta la información?',
            answer:
              'En el dashboard externo de Pulse. Esta web corporativa solo enlaza con él y no almacena información del equipo.',
          },
        ],
      },
    },
    methodology: {
      seo: {
        title: 'Metodología',
        description:
          'Descubre cómo Pulse recoge señales anónimas, detecta patrones emocionales y ofrece una visión agregada para decidir.',
      },
      hero: {
        eyebrow: 'Metodología',
        title: 'No medimos satisfacción.',
        accent: 'Medimos estado emocional real.',
        description:
          'Una metodología de escucha continua que transforma respuestas simples en una visión emocional útil, agregada y accionable.',
      },
      journey: {
        eyebrow: 'Tres momentos, una visión',
        title: 'De una señal individual a un patrón útil para el equipo.',
        steps: [
          {
            eyebrow: 'El equipo responde',
            title: 'Una señal rápida y fácil de compartir.',
            text: 'Cada interacción recoge el estado del momento con una mecánica breve. Sin formularios largos ni preguntas que interrumpan el trabajo.',
          },
          {
            eyebrow: 'Pulse conecta los puntos',
            title: 'Las respuestas se convierten en patrones.',
            text: 'La lectura agregada permite observar evolución, cambios y posibles zonas de tensión sin señalar a personas.',
          },
          {
            eyebrow: 'La organización decide',
            title: 'Una señal clara orienta el siguiente paso.',
            text: 'RR. HH. y liderazgo reciben una visión compartida para priorizar conversaciones, revisar dinámicas y acompañar al equipo.',
          },
        ],
        question: '¿Cómo llegas hoy?',
        choices: ['Con energía', 'En equilibrio', 'Necesito aire'],
        example: 'Ejemplo conceptual · Copy pendiente de validar',
        priority: 'Prioridad sugerida',
        priorityText: 'Revisar la carga percibida del equipo',
        priorityDetail:
          'Señal agregada en evolución durante las últimas semanas.',
      },
      model: {
        eyebrow: 'El modelo',
        title: 'Dos ejes para comprender el estado emocional real.',
        text: 'El modelo organiza las señales en dos ejes sencillos: energía y agradabilidad. Así permite observar estados distintos sin reducirlos a “bien” o “mal”.',
        energy: 'Energía',
        pleasantness: 'Agradabilidad',
        selected: 'Estado seleccionado',
        quadrants: [
          {
            title: 'Tensión y conflicto',
            subtitle: 'Alta energía + desagradable',
          },
          {
            title: 'Energía con foco',
            subtitle: 'Alta energía + agradable',
          },
          {
            title: 'Desconexión y desgaste',
            subtitle: 'Baja energía + desagradable',
          },
          {
            title: 'Calma sin impulso',
            subtitle: 'Baja energía + agradable',
          },
        ],
        note: 'Modelo conceptual · Nomenclatura pendiente de validación científica',
      },
      principles: {
        eyebrow: 'Por qué funciona',
        title: 'Cinco segundos, confianza y continuidad.',
        items: [
          {
            title: 'Ligera por diseño',
            text: 'Responder debe sentirse natural, no como otra tarea pendiente.',
          },
          {
            title: 'Anónima por principio',
            text: 'La organización observa el conjunto, no a la persona.',
          },
          {
            title: 'Continua por utilidad',
            text: 'La frecuencia permite ver cambios, no solo una fotografía aislada.',
          },
          {
            title: 'Clara para actuar',
            text: 'La lectura final ayuda a priorizar dónde escuchar o intervenir.',
          },
        ],
      },
      validation: {
        eyebrow: 'Referencias y validación',
        title: 'Una base científica que debe poder explicarse.',
        text: 'Este bloque queda preparado para incorporar las fuentes, metodología de validación y especialistas que el cliente apruebe.',
        items: ['Marco científico', 'Validación del modelo', 'Protección del anonimato'],
      },
      cta: {
        title: 'Una mejor escucha empieza con una experiencia más simple.',
        text: 'Descubre cómo se adapta la metodología Pulse a la realidad de tu equipo.',
      },
    },
    product: {
      seo: {
        title: 'Producto',
        description:
          'Conoce Pulse: participación simple, señales anónimas y visión agregada para equipos de RR. HH. y liderazgo.',
      },
      hero: {
        eyebrow: 'Producto',
        title: 'Menos ruido.',
        accent: 'Más señales que importan.',
        description:
          'Pulse organiza el estado emocional del equipo en una experiencia sencilla para las personas y una lectura clara para la organización.',
        action: 'Ver Pulse en una demo',
      },
      showcase: {
        eyebrow: 'Visión global',
        title: 'Entiende cómo está el equipo sin invadir su espacio.',
        text: 'Pulse traduce las respuestas en una lectura agregada que ayuda a reconocer evolución, prioridades y posibles señales de desgaste.',
        checks: [
          'Estado general y evolución en el tiempo.',
          'Patrones emocionales presentados con contexto.',
          'Información compartida para alinear decisiones.',
        ],
        note: 'La interfaz y las métricas definitivas están pendientes de validación con el cliente.',
      },
      flow: {
        eyebrow: 'Cómo funciona',
        title: 'Tres pasos. Cinco segundos. Una visión clara.',
        text: 'Una experiencia simple para el equipo y una lectura más profunda para la organización.',
        items: [
          {
            title: 'El equipo responde',
            text: 'Una interacción breve permite compartir cómo se siente cada persona sin interrumpir su jornada.',
          },
          {
            title: 'Recogida anónima',
            text: 'Las respuestas se agregan para proteger a la persona y revelar patrones, no identidades.',
          },
          {
            title: 'Visión global',
            text: 'Pulse organiza la evolución y los focos de atención para orientar decisiones con contexto.',
          },
        ],
      },
      benefits: {
        eyebrow: 'Beneficios antes que funciones',
        title: 'Un producto fácil de responder y fácil de entender.',
        items: [
          {
            title: 'Participación sin fricción',
            text: 'Una interacción pensada para completarse en segundos y convivir con la jornada del equipo.',
          },
          {
            title: 'Lectura agregada',
            text: 'Privacidad para el equipo y contexto para decidir.',
          },
          {
            title: 'Tendencias comprensibles',
            text: 'Distingue señales puntuales de patrones que requieren atención.',
          },
          {
            title: 'Prioridades compartidas',
            text: 'RR. HH. y liderazgo parten de una visión común.',
          },
        ],
      },
      detail: {
        eyebrow: 'Una visión más profunda',
        title: 'Del dato a la decisión, sin perder el contexto.',
        tabs: [
          {
            label: 'Dashboard',
            title: 'Una visión global del estado del equipo.',
            text: 'El panel reúne tendencias y señales agregadas en un espacio preparado para orientar la atención.',
            points: ['Evolución temporal', 'Lectura por patrones', 'Prioridades visibles'],
          },
          {
            label: 'Cómo interpretar',
            title: 'Gráficos que explican, no que decoran.',
            text: 'Cada visualización debe ayudar a entender qué cambia, por qué importa y qué conversación puede activar.',
            points: ['Contexto en cada señal', 'Lenguaje comprensible', 'Sin exposición individual'],
          },
          {
            label: 'Informes mensuales',
            title: 'Un resumen para convertir señales en acción.',
            text: 'La propuesta contempla informes periódicos que sinteticen evolución y posibles focos de atención.',
            points: ['Resumen ejecutivo', 'Patrones destacados', 'Próximos pasos'],
          },
          {
            label: 'Implementación',
            title: 'Una incorporación simple para el equipo.',
            text: 'La implementación se plantea como un proceso acompañado, con comunicación clara y una adopción progresiva.',
            points: ['Preparación', 'Lanzamiento', 'Seguimiento'],
          },
        ],
        note: 'Funciones y alcance exactos pendientes de validación con el cliente.',
      },
      split: {
        teamEyebrow: 'Para el equipo',
        teamTitle: 'Responder sin pensarlo demasiado.',
        teamText:
          'Una experiencia breve, clara y respetuosa que reduce la fatiga de encuesta.',
        question: '¿Cómo está tu energía?',
        companyEyebrow: 'Para la organización',
        companyTitle: 'Decidir con una imagen completa.',
        companyText:
          'Una visión agregada para orientar medidas sin convertir el bienestar en vigilancia.',
        signal: 'Señal destacada',
        signalText: 'La conexión del equipo evoluciona positivamente',
        signalAction: 'Revisar tendencia en la próxima lectura →',
      },
      cta: {
        title: 'Conoce el producto en contexto.',
        text: 'Te mostramos la experiencia del equipo y la visión agregada de Pulse en una conversación breve.',
      },
    },
    company: {
      seo: {
        title: 'Empresa',
        description:
          'Conoce la visión de Pulse: ayudar a las organizaciones a escuchar antes, cuidar mejor y decidir con más contexto.',
      },
      hero: {
        eyebrow: 'Empresa',
        title: 'Equipos más escuchados.',
        accent: 'Organizaciones más conscientes.',
        description:
          'Pulse nace para acortar la distancia entre cómo se siente un equipo y cuándo una organización consigue verlo.',
        action: 'Habla con Pulse',
      },
      purpose: {
        eyebrow: 'De dónde venimos',
        title: 'Pulse nace para hacer visible lo que las organizaciones suelen descubrir tarde.',
        paragraphs: [
          'Muchas organizaciones quieren cuidar a sus equipos, pero reciben la información tarde, fragmentada o difícil de convertir en una decisión.',
          'Pulse propone una relación distinta con el bienestar: más frecuente, más ligera y más conectada con las decisiones cotidianas.',
        ],
        note: 'Historia de origen, personas fundadoras y fecha de lanzamiento pendientes de confirmar con el cliente.',
      },
      manifestoEyebrow: 'Nuestro propósito',
      manifesto:
        'Creemos que una señal pequeña, escuchada a tiempo, puede cambiar una conversación, una decisión y la experiencia de todo un equipo.',
      manifestoBy: 'La visión de Pulse',
      values: {
        eyebrow: 'Misión, visión y valores',
        title: 'Un propósito que se convierte en una forma concreta de actuar.',
        items: [
          {
            title: 'Misión',
            text: 'Ayudar a las organizaciones a detectar antes el desgaste y convertir la escucha en decisiones más humanas.',
          },
          {
            title: 'Visión',
            text: 'Que comprender el estado emocional del equipo forme parte natural de cómo se dirige una organización.',
          },
          {
            title: 'Valores',
            text: 'Rigor, confianza, privacidad y claridad para hacer útil la complejidad sin reducirla a un número.',
          },
        ],
      },
      audience: {
        eyebrow: 'Por qué Pulse',
        title: 'Una forma más temprana, ligera y útil de escuchar.',
        text: 'Pulse une participación simple, privacidad y contexto para que cuidar al equipo no dependa de descubrir el problema demasiado tarde.',
        groups: [
          'Escucha frecuente, no una fotografía anual',
          'Señales agregadas sin exposición individual',
          'Contexto útil para orientar decisiones',
        ],
      },
      cta: {
        title: 'Construyamos una organización que escucha a tiempo.',
        text: 'Cuéntanos qué necesita tu equipo y descubre si Pulse encaja en tu contexto.',
      },
    },
    demo: {
      seo: {
        title: 'Pide una demo',
        description:
          'Solicita una demostración de Pulse y descubre cómo convertir señales emocionales en decisiones claras.',
      },
      hero: {
        eyebrow: 'Pide una demo',
        title: 'Descubre qué está diciendo tu equipo',
        accent: 'antes de verlo.',
        text: 'En una conversación breve te enseñamos la experiencia Pulse y exploramos cómo puede encajar en tu organización.',
      },
      points: [
        {
          title: 'Conoce la metodología.',
          text: 'Cómo recogemos señales sin añadir fricción al equipo.',
        },
        {
          title: 'Explora el producto.',
          text: 'Una vista conceptual de la experiencia y la visión agregada.',
        },
        {
          title: 'Valora el encaje.',
          text: 'Hablamos de tu contexto, prioridades y próximos pasos.',
        },
      ],
      form: {
        heading: 'Cuéntanos un poco sobre ti',
        subheading: 'Te responderemos cuando el canal comercial esté activo.',
        name: 'Nombre y apellidos',
        namePlaceholder: 'Tu nombre',
        email: 'Email profesional',
        emailPlaceholder: 'nombre@empresa.com',
        company: 'Empresa',
        companyPlaceholder: 'Tu empresa',
        size: 'Tamaño del equipo',
        select: 'Selecciona',
        sizes: ['1–25 personas', '26–100 personas', '101–500 personas', 'Más de 500'],
        message: '¿Qué te gustaría mejorar?',
        messagePlaceholder: 'Cuéntanos brevemente el contexto de tu equipo',
        consent: 'Acepto la política de privacidad',
        consentPending: '(texto legal pendiente de incorporar)',
        submit: 'Solicitar demo',
        note: 'Este formulario es una maqueta y todavía no envía información.',
      },
      success: {
        eyebrow: 'Flujo de demostración',
        title: 'El diseño del formulario está listo.',
        text: 'La solicitud no se ha enviado. Falta conectar el canal comercial que el cliente elija antes de publicar.',
      },
      after: {
        title: '¿Qué ocurre después?',
        items: [
          'Una conversación sin compromiso',
          'Una demo adaptada a tu contexto',
          'Próximos pasos claros',
        ],
      },
    },
  },
  ca: {
    common: {
      nav: {
        methodology: 'Metodologia',
        product: 'Producte',
        company: 'Empresa',
        demo: 'Demana una demo',
        dashboard: 'Accés dashboard',
      },
      language: {
        label: 'Canviar idioma',
        menu: 'Selecciona un idioma',
      },
      a11y: {
        home: 'Pulse, inici',
        menu: 'Obrir o tancar la navegació',
        primaryNav: 'Navegació principal',
        footerNav: 'Navegació del peu',
        skipToContent: 'Saltar al contingut principal',
      },
      actions: {
        demo: 'Demana una demo',
        discover: 'Descobreix-ne més',
        product: 'Veure producte',
        back: 'Tornar al formulari',
        backToTop: 'Tornar a dalt',
      },
      error: {
        notFoundEyebrow: 'Pàgina no trobada',
        notFoundTitle: 'Aquest senyal encara no existeix.',
        notFoundText:
          'L’adreça pot haver canviat o la pàgina encara no està disponible. Pots tornar a l’inici o demanar una demo.',
        genericEyebrow: 'Alguna cosa no ha anat bé',
        genericTitle: 'Necessitem un moment.',
        genericText:
          'No hem pogut carregar aquesta pàgina. Torna a l’inici i continua explorant Pulse.',
        home: 'Tornar a l’inici',
      },
      footer: {
        description:
          'Senyals emocionals clars per cuidar les persones i protegir el rendiment.',
        explore: 'Explora',
        contact: 'Contacte',
        email: '[Email corporatiu pendent de confirmar]',
        legal: '[Avís legal i privacitat pendents]',
        closing: 'Benestar mesurable. Decisions humanes.',
      },
      dashboardMissing: 'Configura NUXT_PUBLIC_DASHBOARD_URL',
      mockup: {
        aria: 'Representació conceptual de la vista agregada de Pulse',
        period: 'Aquesta setmana',
        state: "Estat de l'equip",
        stable: 'Estable',
        trend: 'Tendència global',
        change: '+6 punts aquest mes',
        signals: 'Senyals detectats',
        energy: 'Energia',
        focus: 'Focus',
        connection: 'Connexió',
        insight: 'Insight de la setmana',
        insightText: "L'energia millora; convé revisar la càrrega de l'equip.",
        note: 'Mockup conceptual · Sense dades reals',
      },
      cta: {
        eyebrow: 'El següent pas',
        title: 'Comença a escoltar abans que sigui massa tard.',
        text: 'T’ensenyem com Pulse pot convertir senyals emocionals en decisions útils per a la teva organització.',
      },
    },
    home: {
      seo: {
        title: 'Benestar real per a equips',
        description:
          'Pulse detecta senyals de desgast, desconnexió i benestar abans que afectin el rendiment.',
      },
      hero: {
        eyebrow: 'Benestar que ajuda a decidir',
        title: "Detecta el desgast del teu equip abans que",
        accent: 'afecti el rendiment.',
        lead: "Pulse converteix l'estat emocional real del teu equip en senyals clars per a RR. HH., lideratge i direcció.",
        how: 'Com funciona',
        trust: [
          { value: '5 s', label: 'per respondre' },
          { value: '100%', label: 'visió agregada' },
          { value: '1 senyal', label: 'per començar a actuar' },
        ],
        note: 'Dades orientatives · Pendents de validació amb el client',
        positive: 'Senyal positiu aquesta setmana',
        risk: 'Risc de desconnexió',
      },
      problem: {
        eyebrow: 'El problema comença abans de veure’s',
        title: 'La teva empresa probablement està perdent això sense saber-ho.',
        intro:
          'Quan falten senyals primerencs, el cost humà i el cost de negoci avancen junts.',
        cards: [
          {
            number: '01',
            title: 'Desgast invisible',
            text: 'El cansament emocional s’acumula en silenci fins a convertir-se en rotació, baixes o pèrdua de focus.',
          },
          {
            number: '02',
            title: 'Decisions tardanes',
            text: 'Sense senyals freqüents, RR. HH. i lideratge actuen quan el problema ja és evident.',
          },
          {
            number: '03',
            title: 'Escolta que no activa',
            text: 'Una enquesta anual explica el passat. L’equip necessita una escolta lleugera per decidir en el present.',
          },
        ],
      },
      methodology: {
        eyebrow: 'La metodologia Pulse',
        title: 'Escoltem el teu equip. Detectem patrons.',
        accent: 'Et donem decisions clares.',
        link: 'Descobreix la metodologia',
        steps: [
          {
            tag: "1. L'equip respon",
            title: 'Cinc segons per dir com està.',
            text: 'Una interacció simple i recurrent redueix la fricció i facilita una participació natural.',
          },
          {
            tag: '2. Pulse detecta',
            title: 'Senyals anònims, patrons útils.',
            text: 'La informació s’observa de manera agregada per identificar canvis sense exposar ningú.',
          },
          {
            tag: '3. Tu decideixes',
            title: 'Context clar per actuar millor.',
            text: 'L’organització veu tendències i prioritats per orientar converses i mesures concretes.',
          },
        ],
      },
      product: {
        eyebrow: 'Una lectura diferent',
        title: 'No mesurem satisfacció. Mesurem estat emocional real.',
        intro:
          'Pulse redueix la distància entre el que viu l’equip i el que l’organització necessita saber per cuidar-lo.',
        link: 'Explora el producte',
        benefits: [
          {
            title: 'Recollida anònima.',
            text: 'Sense exposició individual ni converses forçades.',
          },
          {
            title: 'Senyals continus.',
            text: 'Una lectura més propera al moment real de l’equip.',
          },
          {
            title: 'Visió global.',
            text: 'Menys soroll i més context per prioritzar decisions.',
          },
        ],
        comparisonTitle: 'D’una fotografia puntual a un senyal continu',
        comparisonAccent: 'Pulse és l’evolució',
        columns: ['Què canvia', 'Enquesta tradicional', 'Apps de benestar', 'Pulse'],
        rows: [
          ['Freqüència', 'Puntual', 'Variable', 'Contínua'],
          ['Fricció per a l’equip', 'Alta', 'Mitjana', 'Molt baixa'],
          ['Lectura emocional', 'Superficial', 'Parcial', 'En context'],
          ['Visió organitzativa', 'Retrospectiva', 'Fragmentada', 'Accionable'],
        ],
      },
      trust: {
        eyebrow: 'Confiança abans que promeses',
        title: 'La credibilitat es construeix amb dades reals.',
        text: 'L’estructura queda preparada per incorporar estudis, casos i testimonis quan el client els aprovi. Fins aleshores, Pulse no inventa resultats.',
        items: [
          'Base científica pendent de documentar',
          'Casos reals pendents d’aprovació',
          'Mètriques d’impacte pendents de validar',
        ],
      },
      faq: {
        eyebrow: 'Preguntes freqüents',
        title: 'L’essencial, abans de demanar una demo.',
        items: [
          {
            question: 'Pulse identifica persones concretes?',
            answer:
              'No. La proposta es basa en una lectura agregada i anònima. Els criteris definitius d’anonimat s’han de validar amb el client.',
          },
          {
            question: 'Quant triga l’equip a respondre?',
            answer:
              'L’experiència està dissenyada per resoldre’s en uns cinc segons. Aquesta dada s’ha de confirmar amb el producte final.',
          },
          {
            question: 'Pulse substitueix les converses amb l’equip?',
            answer:
              'No. Pulse aporta senyals i context perquè RR. HH. i lideratge puguin conversar i actuar millor.',
          },
          {
            question: 'On es consulta la informació?',
            answer:
              'Al dashboard extern de Pulse. Aquesta web corporativa només hi enllaça i no emmagatzema informació de l’equip.',
          },
        ],
      },
    },
    methodology: {
      seo: {
        title: 'Metodologia',
        description:
          'Descobreix com Pulse recull senyals anònims, detecta patrons emocionals i ofereix una visió agregada.',
      },
      hero: {
        eyebrow: 'Metodologia',
        title: 'No mesurem satisfacció.',
        accent: 'Mesurem estat emocional real.',
        description:
          'Una metodologia d’escolta contínua que transforma respostes simples en una visió emocional útil, agregada i accionable.',
      },
      journey: {
        eyebrow: 'Tres moments, una visió',
        title: 'D’un senyal individual a un patró útil per a l’equip.',
        steps: [
          {
            eyebrow: "L'equip respon",
            title: 'Un senyal ràpid i fàcil de compartir.',
            text: 'Cada interacció recull l’estat del moment amb una mecànica breu. Sense formularis llargs.',
          },
          {
            eyebrow: 'Pulse connecta els punts',
            title: 'Les respostes es converteixen en patrons.',
            text: 'La lectura agregada permet observar evolució i possibles zones de tensió sense assenyalar persones.',
          },
          {
            eyebrow: 'L’organització decideix',
            title: 'Un senyal clar orienta el següent pas.',
            text: 'RR. HH. i lideratge reben una visió compartida per prioritzar converses i acompanyar l’equip.',
          },
        ],
        question: 'Com arribes avui?',
        choices: ['Amb energia', 'En equilibri', 'Necessito aire'],
        example: 'Exemple conceptual · Copy pendent de validar',
        priority: 'Prioritat suggerida',
        priorityText: 'Revisar la càrrega percebuda de l’equip',
        priorityDetail:
          'Senyal agregat en evolució durant les últimes setmanes.',
      },
      model: {
        eyebrow: 'El model',
        title: 'Dos eixos per comprendre l’estat emocional real.',
        text: 'El model organitza els senyals en dos eixos senzills: energia i agradabilitat. Així permet observar estats diferents sense reduir-los a “bé” o “malament”.',
        energy: 'Energia',
        pleasantness: 'Agradabilitat',
        selected: 'Estat seleccionat',
        quadrants: [
          {
            title: 'Tensió i conflicte',
            subtitle: 'Alta energia + desagradable',
          },
          {
            title: 'Energia amb focus',
            subtitle: 'Alta energia + agradable',
          },
          {
            title: 'Desconnexió i desgast',
            subtitle: 'Baixa energia + desagradable',
          },
          {
            title: 'Calma sense impuls',
            subtitle: 'Baixa energia + agradable',
          },
        ],
        note: 'Model conceptual · Nomenclatura pendent de validació científica',
      },
      principles: {
        eyebrow: 'Per què funciona',
        title: 'Cinc segons, confiança i continuïtat.',
        items: [
          {
            title: 'Lleugera per disseny',
            text: 'Respondre ha de sentir-se natural, no com una altra tasca pendent.',
          },
          {
            title: 'Anònima per principi',
            text: 'L’organització observa el conjunt, no la persona.',
          },
          {
            title: 'Contínua per utilitat',
            text: 'La freqüència permet veure canvis, no només una fotografia aïllada.',
          },
          {
            title: 'Clara per actuar',
            text: 'La lectura final ajuda a prioritzar on escoltar o intervenir.',
          },
        ],
      },
      validation: {
        eyebrow: 'Referències i validació',
        title: 'Una base científica que s’ha de poder explicar.',
        text: 'Aquest bloc queda preparat per incorporar les fonts, la metodologia de validació i els especialistes que el client aprovi.',
        items: ['Marc científic', 'Validació del model', 'Protecció de l’anonimat'],
      },
      cta: {
        title: 'Una millor escolta comença amb una experiència més simple.',
        text: 'Descobreix com s’adapta la metodologia Pulse a la realitat del teu equip.',
      },
    },
    product: {
      seo: {
        title: 'Producte',
        description:
          'Coneix Pulse: participació simple, senyals anònims i visió agregada per a RR. HH. i lideratge.',
      },
      hero: {
        eyebrow: 'Producte',
        title: 'Menys soroll.',
        accent: 'Més senyals que importen.',
        description:
          'Pulse organitza l’estat emocional de l’equip en una experiència senzilla per a les persones i una lectura clara per a l’organització.',
        action: 'Veure Pulse en una demo',
      },
      showcase: {
        eyebrow: 'Visió global',
        title: 'Entén com està l’equip sense envair el seu espai.',
        text: 'Pulse tradueix les respostes en una lectura agregada que ajuda a reconèixer evolució, prioritats i possibles senyals de desgast.',
        checks: [
          'Estat general i evolució en el temps.',
          'Patrons emocionals presentats amb context.',
          'Informació compartida per alinear decisions.',
        ],
        note: 'La interfície i les mètriques definitives estan pendents de validació amb el client.',
      },
      flow: {
        eyebrow: 'Com funciona',
        title: 'Tres passos. Cinc segons. Una visió clara.',
        text: 'Una experiència simple per a l’equip i una lectura més profunda per a l’organització.',
        items: [
          {
            title: 'L’equip respon',
            text: 'Una interacció breu permet compartir com se sent cada persona sense interrompre la jornada.',
          },
          {
            title: 'Recollida anònima',
            text: 'Les respostes s’agreguen per protegir la persona i revelar patrons, no identitats.',
          },
          {
            title: 'Visió global',
            text: 'Pulse organitza l’evolució i els focus d’atenció per orientar decisions amb context.',
          },
        ],
      },
      benefits: {
        eyebrow: 'Beneficis abans que funcions',
        title: 'Un producte fàcil de respondre i fàcil d’entendre.',
        items: [
          {
            title: 'Participació sense fricció',
            text: 'Una interacció pensada per completar-se en segons.',
          },
          {
            title: 'Lectura agregada',
            text: 'Privacitat per a l’equip i context per decidir.',
          },
          {
            title: 'Tendències comprensibles',
            text: 'Distingeix senyals puntuals de patrons que requereixen atenció.',
          },
          {
            title: 'Prioritats compartides',
            text: 'RR. HH. i lideratge parteixen d’una visió comuna.',
          },
        ],
      },
      detail: {
        eyebrow: 'Una visió més profunda',
        title: 'De la dada a la decisió, sense perdre el context.',
        tabs: [
          {
            label: 'Dashboard',
            title: 'Una visió global de l’estat de l’equip.',
            text: 'El panell reuneix tendències i senyals agregats en un espai preparat per orientar l’atenció.',
            points: ['Evolució temporal', 'Lectura per patrons', 'Prioritats visibles'],
          },
          {
            label: 'Com interpretar',
            title: 'Gràfics que expliquen, no que decoren.',
            text: 'Cada visualització ajuda a entendre què canvia, per què importa i quina conversa pot activar.',
            points: ['Context en cada senyal', 'Llenguatge comprensible', 'Sense exposició individual'],
          },
          {
            label: 'Informes mensuals',
            title: 'Un resum per convertir senyals en acció.',
            text: 'La proposta contempla informes periòdics que sintetitzen l’evolució i els possibles focus d’atenció.',
            points: ['Resum executiu', 'Patrons destacats', 'Pròxims passos'],
          },
          {
            label: 'Implementació',
            title: 'Una incorporació simple per a l’equip.',
            text: 'La implementació es planteja com un procés acompanyat, amb comunicació clara i adopció progressiva.',
            points: ['Preparació', 'Llançament', 'Seguiment'],
          },
        ],
        note: 'Funcions i abast exactes pendents de validació amb el client.',
      },
      split: {
        teamEyebrow: 'Per a l’equip',
        teamTitle: 'Respondre sense pensar-hi massa.',
        teamText:
          'Una experiència breu, clara i respectuosa que redueix la fatiga d’enquesta.',
        question: 'Com està la teva energia?',
        companyEyebrow: 'Per a l’organització',
        companyTitle: 'Decidir amb una imatge completa.',
        companyText:
          'Una visió agregada per orientar mesures sense convertir el benestar en vigilància.',
        signal: 'Senyal destacat',
        signalText: 'La connexió de l’equip evoluciona positivament',
        signalAction: 'Revisar tendència en la propera lectura →',
      },
      cta: {
        title: 'Coneix el producte en context.',
        text: 'Et mostrem l’experiència de l’equip i la visió agregada de Pulse en una conversa breu.',
      },
    },
    company: {
      seo: {
        title: 'Empresa',
        description:
          'Coneix la visió de Pulse: ajudar les organitzacions a escoltar abans, cuidar millor i decidir amb més context.',
      },
      hero: {
        eyebrow: 'Empresa',
        title: 'Equips més escoltats.',
        accent: 'Organitzacions més conscients.',
        description:
          'Pulse neix per escurçar la distància entre com se sent un equip i quan una organització aconsegueix veure-ho.',
        action: 'Parla amb Pulse',
      },
      purpose: {
        eyebrow: 'D’on venim',
        title: 'Pulse neix per fer visible allò que les organitzacions acostumen a descobrir tard.',
        paragraphs: [
          'Moltes organitzacions volen cuidar els seus equips, però reben la informació tard, fragmentada o difícil de convertir en una decisió.',
          'Pulse proposa una relació diferent amb el benestar: més freqüent, més lleugera i més connectada amb les decisions quotidianes.',
        ],
        note: 'Història d’origen, persones fundadores i data de llançament pendents de confirmar amb el client.',
      },
      manifestoEyebrow: 'El nostre propòsit',
      manifesto:
        'Creiem que un senyal petit, escoltat a temps, pot canviar una conversa, una decisió i l’experiència de tot un equip.',
      manifestoBy: 'La visió de Pulse',
      values: {
        eyebrow: 'Missió, visió i valors',
        title: 'Un propòsit que es converteix en una manera concreta d’actuar.',
        items: [
          {
            title: 'Missió',
            text: 'Ajudar les organitzacions a detectar abans el desgast i convertir l’escolta en decisions més humanes.',
          },
          {
            title: 'Visió',
            text: 'Que comprendre l’estat emocional de l’equip formi part natural de com es dirigeix una organització.',
          },
          {
            title: 'Valors',
            text: 'Rigor, confiança, privacitat i claredat per fer útil la complexitat sense reduir-la a un número.',
          },
        ],
      },
      audience: {
        eyebrow: 'Per què Pulse',
        title: 'Una manera més primerenca, lleugera i útil d’escoltar.',
        text: 'Pulse uneix participació simple, privacitat i context perquè cuidar l’equip no depengui de descobrir el problema massa tard.',
        groups: [
          'Escolta freqüent, no una fotografia anual',
          'Senyals agregats sense exposició individual',
          'Context útil per orientar decisions',
        ],
      },
      cta: {
        title: 'Construïm una organització que escolta a temps.',
        text: 'Explica’ns què necessita el teu equip i descobreix si Pulse encaixa en el teu context.',
      },
    },
    demo: {
      seo: {
        title: 'Demana una demo',
        description:
          'Demana una demostració de Pulse i descobreix com convertir senyals emocionals en decisions clares.',
      },
      hero: {
        eyebrow: 'Demana una demo',
        title: 'Descobreix què està dient el teu equip',
        accent: 'abans de veure-ho.',
        text: 'En una conversa breu t’ensenyem l’experiència Pulse i explorem com pot encaixar en la teva organització.',
      },
      points: [
        {
          title: 'Coneix la metodologia.',
          text: 'Com recollim senyals sense afegir fricció a l’equip.',
        },
        {
          title: 'Explora el producte.',
          text: 'Una vista conceptual de l’experiència i la visió agregada.',
        },
        {
          title: 'Valora l’encaix.',
          text: 'Parlem del teu context, prioritats i pròxims passos.',
        },
      ],
      form: {
        heading: 'Explica’ns una mica sobre tu',
        subheading: 'Et respondrem quan el canal comercial estigui actiu.',
        name: 'Nom i cognoms',
        namePlaceholder: 'El teu nom',
        email: 'Email professional',
        emailPlaceholder: 'nom@empresa.com',
        company: 'Empresa',
        companyPlaceholder: 'La teva empresa',
        size: 'Mida de l’equip',
        select: 'Selecciona',
        sizes: ['1–25 persones', '26–100 persones', '101–500 persones', 'Més de 500'],
        message: 'Què t’agradaria millorar?',
        messagePlaceholder: 'Explica’ns breument el context del teu equip',
        consent: 'Accepto la política de privacitat',
        consentPending: '(text legal pendent d’incorporar)',
        submit: 'Demanar demo',
        note: 'Aquest formulari és una maqueta i encara no envia informació.',
      },
      success: {
        eyebrow: 'Flux de demostració',
        title: 'El disseny del formulari està llest.',
        text: 'La sol·licitud no s’ha enviat. Falta connectar el canal comercial que el client triï abans de publicar.',
      },
      after: {
        title: 'Què passa després?',
        items: [
          'Una conversa sense compromís',
          'Una demo adaptada al teu context',
          'Pròxims passos clars',
        ],
      },
    },
  },
  en: {
    common: {
      nav: {
        methodology: 'Methodology',
        product: 'Product',
        company: 'Company',
        demo: 'Book a demo',
        dashboard: 'Dashboard access',
      },
      language: {
        label: 'Change language',
        menu: 'Select a language',
      },
      a11y: {
        home: 'Pulse, home',
        menu: 'Open or close navigation',
        primaryNav: 'Primary navigation',
        footerNav: 'Footer navigation',
        skipToContent: 'Skip to main content',
      },
      actions: {
        demo: 'Book a demo',
        discover: 'Discover more',
        product: 'View product',
        back: 'Back to the form',
        backToTop: 'Back to top',
      },
      error: {
        notFoundEyebrow: 'Page not found',
        notFoundTitle: 'This signal does not exist yet.',
        notFoundText:
          'The address may have changed or the page is not available yet. You can return home or book a demo.',
        genericEyebrow: 'Something went wrong',
        genericTitle: 'We need a moment.',
        genericText:
          'We could not load this page. Return home and continue exploring Pulse.',
        home: 'Back to home',
      },
      footer: {
        description:
          'Clear emotional signals to care for people and protect performance.',
        explore: 'Explore',
        contact: 'Contact',
        email: '[Corporate email pending confirmation]',
        legal: '[Legal notice and privacy pending]',
        closing: 'Measurable wellbeing. Human decisions.',
      },
      dashboardMissing: 'Configure NUXT_PUBLIC_DASHBOARD_URL',
      mockup: {
        aria: 'Conceptual representation of the Pulse aggregate view',
        period: 'This week',
        state: 'Team status',
        stable: 'Stable',
        trend: 'Overall trend',
        change: '+6 points this month',
        signals: 'Signals detected',
        energy: 'Energy',
        focus: 'Focus',
        connection: 'Connection',
        insight: 'Insight of the week',
        insightText: 'Energy is improving; the team workload should be reviewed.',
        note: 'Concept mockup · No real data',
      },
      cta: {
        eyebrow: 'The next step',
        title: 'Start listening before it is too late.',
        text: 'See how Pulse can turn emotional signals into useful decisions for your organisation.',
      },
    },
    home: {
      seo: {
        title: 'Real wellbeing for teams',
        description:
          'Pulse detects early signs of strain, disconnection and wellbeing before they affect team performance.',
      },
      hero: {
        eyebrow: 'Wellbeing that supports decisions',
        title: 'Detect team strain before it',
        accent: 'affects performance.',
        lead: 'Pulse turns your team’s real emotional state into clear signals for HR, leadership and management.',
        how: 'How it works',
        trust: [
          { value: '5 sec', label: 'to respond' },
          { value: '100%', label: 'aggregate view' },
          { value: '1 signal', label: 'to start acting' },
        ],
        note: 'Indicative data · Pending client validation',
        positive: 'Positive signal this week',
        risk: 'Disconnection risk',
      },
      problem: {
        eyebrow: 'The problem starts before it shows',
        title: 'Your company may already be losing this without knowing it.',
        intro:
          'When early signals are missing, the human and business costs move together.',
        cards: [
          {
            number: '01',
            title: 'Invisible strain',
            text: 'Emotional fatigue builds quietly until it becomes turnover, absence or loss of focus.',
          },
          {
            number: '02',
            title: 'Late decisions',
            text: 'Without frequent signals, HR and leadership act only when the problem is already visible.',
          },
          {
            number: '03',
            title: 'Listening without action',
            text: 'An annual survey explains the past. Teams need lightweight listening to support decisions now.',
          },
        ],
      },
      methodology: {
        eyebrow: 'The Pulse methodology',
        title: 'We listen to your team. We detect patterns.',
        accent: 'We give you clear decisions.',
        link: 'Discover the methodology',
        steps: [
          {
            tag: '1. The team responds',
            title: 'Five seconds to share how they feel.',
            text: 'A simple recurring interaction reduces friction and supports natural participation.',
          },
          {
            tag: '2. Pulse detects',
            title: 'Anonymous signals, useful patterns.',
            text: 'Information is viewed in aggregate to detect change without exposing anyone.',
          },
          {
            tag: '3. You decide',
            title: 'Clear context for better action.',
            text: 'The organisation sees trends and priorities to guide conversations and action.',
          },
        ],
      },
      product: {
        eyebrow: 'A different perspective',
        title: 'We do not measure satisfaction. We measure real emotional state.',
        intro:
          'Pulse closes the gap between what teams experience and what organisations need to know to care for them.',
        link: 'Explore the product',
        benefits: [
          {
            title: 'Anonymous input.',
            text: 'No individual exposure or forced conversations.',
          },
          {
            title: 'Continuous signals.',
            text: 'A view that stays closer to the team’s real moment.',
          },
          {
            title: 'A global view.',
            text: 'Less noise and more context to prioritise decisions.',
          },
        ],
        comparisonTitle: 'From a snapshot to a continuous signal',
        comparisonAccent: 'Pulse is the evolution',
        columns: ['What changes', 'Traditional survey', 'Wellbeing apps', 'Pulse'],
        rows: [
          ['Frequency', 'Occasional', 'Variable', 'Continuous'],
          ['Team friction', 'High', 'Medium', 'Very low'],
          ['Emotional reading', 'Surface-level', 'Partial', 'In context'],
          ['Organisational view', 'Retrospective', 'Fragmented', 'Actionable'],
        ],
      },
      trust: {
        eyebrow: 'Trust before promises',
        title: 'Credibility is built on real evidence.',
        text: 'The structure is ready for approved studies, cases and testimonials. Until then, Pulse will not invent results.',
        items: [
          'Scientific basis pending documentation',
          'Real cases pending approval',
          'Impact metrics pending validation',
        ],
      },
      faq: {
        eyebrow: 'Frequently asked questions',
        title: 'The essentials before booking a demo.',
        items: [
          {
            question: 'Does Pulse identify individual people?',
            answer:
              'No. The proposal is based on anonymous aggregate insight. The final anonymity criteria must be validated with the client.',
          },
          {
            question: 'How long does it take to respond?',
            answer:
              'The experience is designed to take around five seconds. This claim must be confirmed with the final product.',
          },
          {
            question: 'Does Pulse replace conversations with the team?',
            answer:
              'No. Pulse provides signals and context so HR and leadership can have better conversations and take better action.',
          },
          {
            question: 'Where is the information viewed?',
            answer:
              'In the external Pulse dashboard. This corporate website only links to it and stores no team information.',
          },
        ],
      },
    },
    methodology: {
      seo: {
        title: 'Methodology',
        description:
          'Discover how Pulse collects anonymous signals, detects emotional patterns and provides aggregate insight.',
      },
      hero: {
        eyebrow: 'Methodology',
        title: 'We do not measure satisfaction.',
        accent: 'We measure real emotional state.',
        description:
          'A continuous listening methodology that turns simple responses into useful, aggregate and actionable emotional insight.',
      },
      journey: {
        eyebrow: 'Three moments, one view',
        title: 'From an individual signal to a useful team pattern.',
        steps: [
          {
            eyebrow: 'The team responds',
            title: 'A quick, easy signal to share.',
            text: 'Each interaction captures the moment through a brief experience. No long forms or disruptive questions.',
          },
          {
            eyebrow: 'Pulse connects the dots',
            title: 'Responses become patterns.',
            text: 'Aggregate insight reveals change and potential tension without pointing to individuals.',
          },
          {
            eyebrow: 'The organisation decides',
            title: 'A clear signal guides the next step.',
            text: 'HR and leadership share one view to prioritise conversations, review dynamics and support the team.',
          },
        ],
        question: 'How are you arriving today?',
        choices: ['Energised', 'Balanced', 'I need space'],
        example: 'Concept example · Copy pending validation',
        priority: 'Suggested priority',
        priorityText: 'Review the team’s perceived workload',
        priorityDetail: 'Aggregate signal evolving over the last few weeks.',
      },
      model: {
        eyebrow: 'The model',
        title: 'Two axes for understanding real emotional state.',
        text: 'The model organises signals on two simple axes: energy and pleasantness. This reveals different states without reducing them to “good” or “bad”.',
        energy: 'Energy',
        pleasantness: 'Pleasantness',
        selected: 'Selected state',
        quadrants: [
          {
            title: 'Tension and conflict',
            subtitle: 'High energy + unpleasant',
          },
          {
            title: 'Focused energy',
            subtitle: 'High energy + pleasant',
          },
          {
            title: 'Disconnection and strain',
            subtitle: 'Low energy + unpleasant',
          },
          {
            title: 'Calm without momentum',
            subtitle: 'Low energy + pleasant',
          },
        ],
        note: 'Concept model · Terminology pending scientific validation',
      },
      principles: {
        eyebrow: 'Why it works',
        title: 'Five seconds, trust and continuity.',
        items: [
          {
            title: 'Lightweight by design',
            text: 'Responding should feel natural, not like another pending task.',
          },
          {
            title: 'Anonymous by principle',
            text: 'The organisation sees the whole, not the individual.',
          },
          {
            title: 'Continuous by purpose',
            text: 'Frequency reveals change, not just an isolated snapshot.',
          },
          {
            title: 'Clear enough to act',
            text: 'The final view helps prioritise where to listen or intervene.',
          },
        ],
      },
      validation: {
        eyebrow: 'References and validation',
        title: 'A scientific basis that can be explained.',
        text: 'This section is ready for the sources, validation methodology and specialists approved by the client.',
        items: ['Scientific framework', 'Model validation', 'Anonymity protection'],
      },
      cta: {
        title: 'Better listening starts with a simpler experience.',
        text: 'Discover how the Pulse methodology can adapt to your team.',
      },
    },
    product: {
      seo: {
        title: 'Product',
        description:
          'Discover Pulse: simple participation, anonymous signals and aggregate insight for HR and leadership.',
      },
      hero: {
        eyebrow: 'Product',
        title: 'Less noise.',
        accent: 'More signals that matter.',
        description:
          'Pulse organises team emotional state into a simple experience for people and a clear view for the organisation.',
        action: 'See Pulse in a demo',
      },
      showcase: {
        eyebrow: 'A global view',
        title: 'Understand the team without invading their space.',
        text: 'Pulse turns responses into aggregate insight that helps reveal change, priorities and early signs of strain.',
        checks: [
          'Overall state and change over time.',
          'Emotional patterns presented in context.',
          'Shared information to align decisions.',
        ],
        note: 'The final interface and metrics are pending client validation.',
      },
      flow: {
        eyebrow: 'How it works',
        title: 'Three steps. Five seconds. One clear view.',
        text: 'A simple experience for the team and a deeper reading for the organisation.',
        items: [
          {
            title: 'The team responds',
            text: 'A brief interaction lets each person share how they feel without disrupting their day.',
          },
          {
            title: 'Anonymous collection',
            text: 'Responses are aggregated to protect individuals and reveal patterns, not identities.',
          },
          {
            title: 'A global view',
            text: 'Pulse organises trends and areas of attention to guide decisions with context.',
          },
        ],
      },
      benefits: {
        eyebrow: 'Benefits before features',
        title: 'Easy to respond to. Easy to understand.',
        items: [
          {
            title: 'Frictionless participation',
            text: 'An interaction designed to take seconds and fit into the working day.',
          },
          {
            title: 'Aggregate insight',
            text: 'Privacy for the team and context for decisions.',
          },
          {
            title: 'Understandable trends',
            text: 'Separate one-off signals from patterns that need attention.',
          },
          {
            title: 'Shared priorities',
            text: 'HR and leadership start from one common view.',
          },
        ],
      },
      detail: {
        eyebrow: 'A deeper view',
        title: 'From data to decisions, without losing context.',
        tabs: [
          {
            label: 'Dashboard',
            title: 'A global view of team state.',
            text: 'The dashboard brings trends and aggregate signals together in one place designed to direct attention.',
            points: ['Change over time', 'Pattern-based view', 'Visible priorities'],
          },
          {
            label: 'How to interpret',
            title: 'Charts that explain, not decorate.',
            text: 'Every visual should clarify what is changing, why it matters and which conversation it can activate.',
            points: ['Context for every signal', 'Clear language', 'No individual exposure'],
          },
          {
            label: 'Monthly reports',
            title: 'A summary that turns signals into action.',
            text: 'The proposal includes periodic reports that summarise change and potential areas of attention.',
            points: ['Executive summary', 'Highlighted patterns', 'Next steps'],
          },
          {
            label: 'Implementation',
            title: 'A simple introduction for the team.',
            text: 'Implementation is designed as a supported process with clear communication and progressive adoption.',
            points: ['Preparation', 'Launch', 'Follow-up'],
          },
        ],
        note: 'Exact features and scope pending client validation.',
      },
      split: {
        teamEyebrow: 'For the team',
        teamTitle: 'Respond without overthinking it.',
        teamText:
          'A brief, clear and respectful experience that reduces survey fatigue.',
        question: 'How is your energy?',
        companyEyebrow: 'For the organisation',
        companyTitle: 'Decide with the full picture.',
        companyText:
          'Aggregate insight to guide action without turning wellbeing into surveillance.',
        signal: 'Highlighted signal',
        signalText: 'Team connection is moving in a positive direction',
        signalAction: 'Review the trend in the next reading →',
      },
      cta: {
        title: 'See the product in context.',
        text: 'We will show you the team experience and Pulse aggregate view in a short conversation.',
      },
    },
    company: {
      seo: {
        title: 'Company',
        description:
          'Discover the Pulse vision: helping organisations listen earlier, care better and decide with more context.',
      },
      hero: {
        eyebrow: 'Company',
        title: 'Teams that feel heard.',
        accent: 'Organisations that see clearly.',
        description:
          'Pulse was created to close the gap between how a team feels and when an organisation is able to see it.',
        action: 'Talk to Pulse',
      },
      purpose: {
        eyebrow: 'Where we come from',
        title: 'Pulse was created to reveal what organisations often discover too late.',
        paragraphs: [
          'Many organisations want to care for their teams, but receive information late, fragmented or difficult to turn into a decision.',
          'Pulse offers a different relationship with wellbeing: more frequent, lighter and more connected to everyday decisions.',
        ],
        note: 'Origin story, founders and launch date pending client confirmation.',
      },
      manifestoEyebrow: 'Our purpose',
      manifesto:
        'We believe a small signal, heard in time, can change a conversation, a decision and the experience of an entire team.',
      manifestoBy: 'The Pulse vision',
      values: {
        eyebrow: 'Mission, vision and values',
        title: 'A purpose translated into a concrete way of acting.',
        items: [
          {
            title: 'Mission',
            text: 'Help organisations detect strain earlier and turn listening into more human decisions.',
          },
          {
            title: 'Vision',
            text: 'Make understanding a team’s emotional state a natural part of how an organisation is led.',
          },
          {
            title: 'Values',
            text: 'Rigour, trust, privacy and clarity to make complexity useful without reducing it to a number.',
          },
        ],
      },
      audience: {
        eyebrow: 'Why Pulse',
        title: 'An earlier, lighter and more useful way to listen.',
        text: 'Pulse combines simple participation, privacy and context so caring for a team does not depend on finding the problem too late.',
        groups: [
          'Frequent listening, not an annual snapshot',
          'Aggregate signals without individual exposure',
          'Useful context to guide decisions',
        ],
      },
      cta: {
        title: 'Let’s build an organisation that listens in time.',
        text: 'Tell us what your team needs and discover whether Pulse fits your context.',
      },
    },
    demo: {
      seo: {
        title: 'Book a demo',
        description:
          'Book a Pulse demo and discover how to turn emotional signals into clear decisions.',
      },
      hero: {
        eyebrow: 'Book a demo',
        title: 'Discover what your team is saying',
        accent: 'before it becomes visible.',
        text: 'In a short conversation, we will show you the Pulse experience and explore how it could fit your organisation.',
      },
      points: [
        {
          title: 'Understand the methodology.',
          text: 'How we collect signals without adding friction for the team.',
        },
        {
          title: 'Explore the product.',
          text: 'A concept view of the experience and aggregate insight.',
        },
        {
          title: 'Assess the fit.',
          text: 'We discuss your context, priorities and next steps.',
        },
      ],
      form: {
        heading: 'Tell us a little about yourself',
        subheading: 'We will respond when the commercial channel is active.',
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Work email',
        emailPlaceholder: 'name@company.com',
        company: 'Company',
        companyPlaceholder: 'Your company',
        size: 'Team size',
        select: 'Select',
        sizes: ['1–25 people', '26–100 people', '101–500 people', 'More than 500'],
        message: 'What would you like to improve?',
        messagePlaceholder: 'Tell us briefly about your team context',
        consent: 'I accept the privacy policy',
        consentPending: '(legal text pending)',
        submit: 'Request demo',
        note: 'This form is a mockup and does not send information yet.',
      },
      success: {
        eyebrow: 'Demo flow',
        title: 'The form design is ready.',
        text: 'The request has not been sent. The client’s chosen commercial channel must be connected before launch.',
      },
      after: {
        title: 'What happens next?',
        items: [
          'A no-obligation conversation',
          'A demo adapted to your context',
          'Clear next steps',
        ],
      },
    },
  },
} as const
