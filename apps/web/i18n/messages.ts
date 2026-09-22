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
        home: 'Home',
        methodology: 'Cómo trabajamos',
        product: 'Qué ofrecemos',
        company: 'Quiénes somos',
        demo: 'Pide una demo',
        dashboard: 'Acceso clientes',
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
        product: 'Ver qué ofrecemos',
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
        title: "Empieza a detectar lo que hoy todavía no ves.",
        text: "Descubre cómo PULSE se adapta a la realidad de tu organización.",
      },
    },
    home: {
      seo: {
        title: 'Bienestar real para equipos',
        description:
          'Pulse detecta señales de desgaste, desconexión y bienestar antes de que afecten al rendimiento del equipo.',
      },
      hero: {
        eyebrow: 'Información para tomar mejores decisiones',
        title: 'Detecta el desgaste emocional de tu equipo',
        accent: 'antes de que afecte al rendimiento.',
        lead: 'PULSE transforma las respuestas de los equipos en información continua para que dirección y RR. HH. detecten tendencias, anticipen riesgos y tomen decisiones con más criterio.',
        how: 'Cómo funciona',
        positive: 'Señal positiva esta semana',
        risk: 'Riesgo de desconexión',
        metrics: [
          { value: '5 s', label: 'Tiempo de respuesta' },
          { value: '100%', label: 'Respuestas anónimas' },
          { value: '365 días', label: 'Información continua' },
        ],
      },
      problem: {
        eyebrow: 'Las primeras señales',
        title: 'Cada organización envía señales. Saber interpretarlas marca la diferencia.',
        intro: "Ignorar las primeras señales tiene un doble coste: para las personas y para la organización.",
        cards: [
          {
            number: '01',
            title: 'Desgaste invisible',
            text: 'El desgaste emocional se acumula en silencio. Cuando se hace visible, a menudo ya impacta en la rotación, el absentismo o el rendimiento.',
          },
          {
            number: '02',
            title: 'Información insuficiente',
            text: 'Sin información continua, RR. HH. y la dirección suelen actuar cuando el problema ya es evidente.',
          },
          {
            number: '03',
            title: 'Más contexto, mejores decisiones',
            text: 'Entender la evolución emocional de los equipos permite decidir con más criterio y en el momento adecuado.',
          },
        ],
      },
      introduction: {
        eyebrow: 'Somos Pulse',
        title: 'Escuchar mejor cambia la forma de cuidar y decidir.',
        text: 'Ayudamos a las empresas a entender cómo está realmente su equipo, detectar señales antes de que se conviertan en problemas y tomar decisiones con una visión más clara.',
        link: 'Conoce quiénes somos',
      },
      methodology: {
        eyebrow: 'Así trabajamos',
        title: 'Escuchamos a tu equipo. Detectamos patrones.',
        accent: "Aportamos contexto para decidir.",
        link: 'Conoce cómo trabajamos',
        steps: [
          {
            "tag": "1. El equipo responde",
            "title": "Cinco segundos para decir cómo te sientes.",
            "text": "Una interacción rápida y sencilla que facilita que la participación se convierta en un hábito."
          },
          {
            "tag": "2. Pulse detecta",
            "title": "Señales anónimas, patrones útiles.",
            "text": "Las respuestas se analizan de forma agregada para identificar tendencias y cambios sin exponer a nadie."
          },
          {
            "tag": "3. La organización decide",
            "title": "Contexto claro para actuar mejor.",
            "text": "La organización dispone de información para priorizar conversaciones, orientar decisiones e impulsar acciones concretas."
          }
        ],
      },
      product: {
        eyebrow: 'Qué ofrecemos',
        title: "Más que una encuesta. Una lectura continua del estado emocional.",
        intro:
          "PULSE transforma la experiencia diaria de los grupos en información útil para entender lo que está pasando dentro de la organización.",
        link: 'Descubre qué ofrecemos',
        benefits: [
          {
            "title": "Recogida anónima",
            "text": "Las respuestas se recogen de forma anónima y se analizan de forma agrupada."
          },
          {
            "title": "Señales continuas",
            "text": "Una lectura continua que permite observar la evolución de los departamentos a lo largo del tiempo."
          },
          {
            "title": "Visión global",
            "text": "La información agregada facilita una comprensión más completa de la organización."
          }
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
        text: "PULSE nace con un compromiso claro: construir credibilidad a partir de la evidencia. Los estudios, casos y resultados se incorporarán progresivamente a medida que sean validados.",
        items: [
          {
            "title": "Fundamentos científicos",
            "subtitle": "Basados en modelos e investigaciones de referencia.",
            "detail": "PULSE se fundamenta en modelos e investigaciones de referencia en psicología afectiva, comportamiento organizacional, neurociencia y ciencia de datos. Nuestra metodología integra este conocimiento para ofrecer una lectura práctica del estado emocional de las organizaciones, manteniendo siempre el vínculo con la evidencia científica disponible."
          },
          {
            "title": "Metodología propia",
            "subtitle": "Una propuesta desarrollada para responder a la realidad de las organizaciones.",
            "detail": "La metodología PULSE es una propuesta propia que adapta distintas aportaciones de la literatura científica a la realidad de las organizaciones. Combina la recogida continua de datos, una experiencia de uso sencilla y modelos de análisis que transforman las señales emocionales en información útil para la toma de decisiones."
          },
          {
            "title": "Validación continua",
            "subtitle": "Mejoramos y validamos la metodología con cada implantación.",
            "detail": "PULSE es un proyecto en evolución. Cada implantación aporta nuevos datos y aprendizajes que nos permiten seguir validando, ajustando y mejorando la metodología. A medida que dispongamos de nuevos estudios, casos reales y resultados, los compartiremos con el mismo compromiso de rigor y transparencia que inspiró el desarrollo del proyecto."
          }
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
        title: 'Cómo trabajamos',
        description:
          'Así trabaja Pulse para escuchar al equipo, detectar patrones e interpretar señales que ayudan a decidir.',
      },
      hero: {
        eyebrow: 'Explora nuestro proceso',
        title: "Así trabajamos para entender el estado",
        accent: "de tu equipo.",
        description:
          "Empezamos escuchando de forma sencilla. Después transformamos estas señales en información clara para entender qué está pasando y tomar mejores decisiones.",
      },
      process: {
        eyebrow: "Lo importante es escuchar",
        title: "Cuatro pasos para pasar de una señal a una decisión con contexto.",
        text: "Una experiencia sencilla para los equipos e información útil para RR. HH. y la dirección.",
        steps: [
          {
            "title": "Escuchamos",
            "text": "El equipo responde en pocos segundos, sin formularios largos ni interrumpir su jornada."
          },
          {
            "title": "Detectamos",
            "text": "Las señales individuales y anónimas se convierten en patrones colectivos, nunca en perfiles personales."
          },
          {
            "title": "Interpretamos",
            "text": "PULSE identifica tendencias, cambios y posibles señales de alerta que conviene observar."
          },
          {
            "title": "Facilitamos decisiones",
            "text": "La organización dispone de información clara para orientar conversaciones, prioridades y decisiones."
          }
        ],
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
        text: "PULSE interpreta cada respuesta a partir de dos ejes: energía y agradabilidad. Este modelo se despliega en un vocabulario de 100 estados afectivos que permite describir con más precisión la experiencia emocional, manteniendo una respuesta simple y rápida.",
        energy: 'Energía',
        pleasantness: 'Agradabilidad',
        selected: 'Estado seleccionado',
        quadrants: [
          {
            "title": "Tensión y conflicto",
            "subtitle": "Alta energía + estado desagradable"
          },
          {
            "title": "Energía con foco",
            "subtitle": "Alta energía + estado agradable"
          },
          {
            "title": "Desconexión y desgaste",
            "subtitle": "Baja energía + estado desagradable"
          },
          {
            "title": "Calma sin impulso",
            "subtitle": "Baja energía + estado agradable"
          }
        ],
        note: 'Referencia conceptual: modelo circumplejo del afecto de James A. Russell · La aplicación específica de Pulse debe validarse y documentarse.',
      },
      principles: {
        eyebrow: 'Por qué funciona',
        title: 'Cinco segundos, confianza y continuidad.',
        items: [
          {
            "title": "Ligera por diseño",
            "text": "Responder debe sentirse natural, no como otra tarea pendiente."
          },
          {
            "title": "Anónima por principio",
            "text": "La organización observa el conjunto, no a la persona."
          },
          {
            "title": "Continua por definición",
            "text": "La frecuencia permite ver cambios, no solo una fotografía aislada."
          },
          {
            "title": "Clara para actuar",
            "text": "La lectura facilita priorizar conversaciones, decisiones y actuaciones."
          }
        ],
      },
      validation: {
        eyebrow: "Fundamentos y validación",
        title: "La base científica que hay detrás.",
        text: "PULSE integra conocimiento científico, desarrollo metodológico propio y un proceso de validación continua.",
        items: [
          {
            "label": "Marco científico",
            "title": "Modelos e investigación de referencia",
            "text": "PULSE se basa en modelos e investigaciones de referencia sobre el estudio del afecto y las emociones. El principal marco conceptual es el modelo circumplejo de James A. Russell, que describe la experiencia afectiva a partir de dos dimensiones independientes: energía (activación) y agradabilidad (valencia).\n\nEste marco se complementa con aportaciones de la investigación en inteligencia emocional (Salovey y Mayer), granularidad emocional (Lisa Feldman Barrett) y estudios normativos sobre el posicionamiento dimensional del lenguaje afectivo (Warriner, Kuperman y Brysbaert).\n\nPULSE integra este conocimiento científico en una metodología propia orientada a comprender el estado emocional de las organizaciones y facilitar una mejor toma de decisiones."
          },
          {
            "label": "Validación del modelo",
            "title": "Un proceso de mejora continua",
            "text": "La metodología PULSE se revisa y evoluciona de manera continua a partir de la experiencia de implantación en organizaciones reales. Cada proyecto aporta nuevos aprendizajes que permiten contrastar hipótesis, ajustar criterios y seguir mejorando el modelo.\n\nA medida que se disponga de nuevos estudios, casos de uso y resultados documentados, estos se incorporarán progresivamente para reforzar la evidencia disponible y seguir desarrollando la metodología con el mismo compromiso de rigor y transparencia."
          },
          {
            "label": "Anonimato y protección de datos",
            "title": "Información agregada y confidencial",
            "text": "PULSE se ha diseñado para que la información se analice siempre de forma agregada y nunca con el objetivo de identificar a personas. El sistema prioriza la confidencialidad y el anonimato como principios fundamentales de su funcionamiento.\n\nLa metodología y el tratamiento de los datos se han desarrollado de acuerdo con la normativa vigente en materia de protección de datos. Cuando el tipo de implantación lo requiera, se llevarán a cabo las evaluaciones y medidas adicionales correspondientes para garantizar el máximo nivel de protección."
          }
        ],
      },
      cta: {
        title: "Las mejores decisiones empiezan con una mejor información.",
        text: "Descubre cómo PULSE se adapta a la realidad de tu organización y acompaña una mejor toma de decisiones.",
      },
    },
    product: {
      seo: {
        title: 'Qué ofrecemos',
        description:
          'Descubre qué recibe tu organización con Pulse: escucha continua, visión global, interpretación e implementación acompañada.',
      },
      hero: {
        eyebrow: 'Descubre qué recibe tu organización',
        title: "Una nueva manera de entender el estado emocional",
        accent: "de tu organización.",
        description:
          "PULSE combina una experiencia de respuesta sencilla con información continua, visual y accionable para que RR. HH. y dirección puedan entender mejor qué está pasando en la organización.",
        action: 'Descubrirlo en una demo',
      },
      offer: {
        eyebrow: 'Lo que recibe tu organización',
        title: "Una manera completa de entender, interpretar y actuar.",
        text: "PULSE combina tecnología, metodología e información para que las señales emocionales se conviertan en decisiones mejor informadas.",
        groups: [
          {
            "title": "Escuchar sin fricción",
            "text": "Una experiencia accesible que facilita respuestas honestas y frecuentes.",
            "items": [
              {
                "title": "Escucha continua",
                "text": "Señales frecuentes para entender la evolución, no solo una fotografía anual."
              },
              {
                "title": "Tableta o quiosco",
                "text": "Un punto de participación sencillo que se integra en el día a día del equipo."
              },
              {
                "title": "Recogida anónima",
                "text": "Respuestas protegidas y sin exposición individual."
              }
            ]
          },
          {
            "title": "Comprender con perspectiva",
            "text": "La información se ordena para mostrar patrones sin perder el contexto humano.",
            "items": [
              {
                "title": "Sin exposición individual",
                "text": "La organización observa el conjunto, no a personas concretas."
              },
              {
                "title": "Visión global",
                "text": "Una lectura compartida del estado y la evolución del equipo."
              },
              {
                "title": "Dashboard de gestión",
                "text": "Tendencias y posibles focos de atención reunidos en un espacio claro."
              }
            ]
          },
          {
            "title": "Pasar a la acción",
            "text": "La información solo tiene valor cuando ayuda a tomar decisiones y orientar las actuaciones.",
            "items": [
              {
                "title": "Interpretación de datos",
                "text": "Contexto para entender qué cambia, por qué importa y qué conviene observar."
              },
              {
                "title": "Informes periódicos",
                "text": "Resúmenes de evolución, patrones destacados y próximos pasos."
              },
              {
                "title": "Orientaciones de intervención",
                "text": "Recomendaciones para facilitar la implantación de acciones preventivas y correctivas."
              }
            ]
          }
        ],
      },
      showcase: {
        eyebrow: 'Visión global',
        title: "Entiende cómo está el equipo sin exponer a las personas.",
        text: "PULSE transforma las respuestas en una lectura agregada que permite identificar tendencias, prioridades y posibles señales de desgaste.",
        checks: [
          "Información compartida entre RR. HH. y dirección.",
          "Una visión común para orientar decisiones.",
          "Información compartida para priorizar actuaciones."
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
            "label": "Quiosco interactivo",
            "title": "Una experiencia de respuesta sencilla, rápida e integrada en el día a día del equipo.",
            "text": "",
            "points": [
              "Respuesta en menos de 5 segundos",
              "Participación natural",
              "Respuestas anónimas",
              "Uso recurrente",
              "Segmentación por departamentos"
            ]
          },
          {
            "label": "Dashboard",
            "title": "Una visión clara del estado emocional de la organización.",
            "text": "",
            "points": [
              "Panel con los principales indicadores",
              "Evolución temporal de la energía y la agradabilidad",
              "Matriz de emociones",
              "Distribución por cuadrantes emocionales",
              "Análisis por departamentos",
              "Seguimiento de la participación"
            ]
          },
          {
            "label": "Informes periódicos",
            "title": "Resúmenes ejecutivos para entender la evolución y orientar las decisiones.",
            "text": "",
            "points": [
              "Resumen del periodo",
              "Interpretación de los patrones",
              "Puntos de atención",
              "Evolución respecto a periodos anteriores",
              "Conclusiones",
              "Propuestas de actuación"
            ]
          },
          {
            "label": "Recomendaciones",
            "title": "Recomendaciones inteligentes para orientar las actuaciones.",
            "text": "Estamos desarrollando un sistema de inteligencia artificial que transformará los datos recogidos en recomendaciones adaptadas a la realidad de cada organización. El objetivo es facilitar la identificación de acciones preventivas y correctivas como apoyo a la toma de decisiones de los responsables.",
            "points": []
          }
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
        title: "Descubre cómo funciona PULSE en una organización como la tuya.",
        text: "En una reunión breve te mostramos la experiencia del equipo, el dashboard de la organización y los informes que transforman las señales en información útil para decidir.",
      },
    },
    company: {
      seo: {
        title: 'Quiénes somos',
        description:
          'Conoce la historia, el propósito y la forma de entender el bienestar que impulsa a Pulse.',
      },
      hero: {
        eyebrow: 'Conoce la historia de Pulse',
        title: 'Pulse nace para ayudar a las empresas a escuchar mejor a las personas',
        accent: 'que las hacen crecer.',
        description:
          "Creemos que las organizaciones toman mejores decisiones cuando disponen de información continua, respetuosa y útil sobre cómo evolucionan sus equipos. Esta convicción es el origen de PULSE.",
        action: 'Habla con Pulse',
      },
      story: {
        items: [
          {
            "eyebrow": "Nuestra historia",
            "title": "Empezamos con una pregunta sencilla: ¿por qué seguimos escuchando demasiado tarde?",
            "text": "PULSE nace de observar una realidad compartida por muchas organizaciones: entre lo que viven las personas cada día y lo que la organización acaba sabiendo suele haber demasiada distancia. Queremos reducir esa brecha con una escucha más frecuente, ligera y útil."
          },
          {
            "eyebrow": "Por qué nació Pulse",
            "title": "Porque cuidar mejor requiere ver las señales antes de que se conviertan en problemas.",
            "text": "Las encuestas puntuales y las conversaciones aisladas no siempre muestran la evolución real del equipo. Pulse nace para aportar continuidad, contexto y una visión compartida que ayude a actuar a tiempo."
          }
        ],
        note: 'La historia definitiva, la fecha de creación y las personas fundadoras están pendientes de validación con el cliente.',
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
        "Creemos que una primera señal, escuchada a tiempo, puede cambiar una conversación, una decisión y la evolución de un equipo.",
      manifestoBy: 'La visión de Pulse',
      wellbeing: {
        eyebrow: 'Nuestra forma de entender el bienestar',
        title: 'El bienestar no es una cifra aislada ni una campaña puntual.',
        text: 'Es una realidad cambiante que se entiende mejor cuando se escucha con continuidad, privacidad y contexto.',
        items: [
          'Escuchar sin invadir el espacio de las personas.',
          'Interpretar sin reducir la experiencia humana a un único número.',
          'Acompañar decisiones que mejoren el día a día del equipo.',
        ],
      },
      values: {
        eyebrow: 'Misión, visión y valores',
        title: 'Un propósito que se convierte en una forma concreta de actuar.',
        items: [
          {
            "title": "Misión",
            "text": "Desarrollar herramientas que ayuden a las organizaciones a comprender el estado emocional de sus equipos y transformar esta información en decisiones más útiles, respetuosas y humanas."
          },
          {
            "title": "Visión",
            "text": "Que comprender el estado emocional de los equipos forme parte natural de la manera de dirigir una organización."
          },
          {
            "title": "Valores",
            "text": "Rigor científico, respeto por las personas, anonimato, transparencia y utilidad práctica."
          }
        ],
      },
      team: {
        eyebrow: 'El equipo',
        title: 'Personas que combinan bienestar, metodología y producto.',
        text: 'Este espacio está preparado para presentar al equipo de Pulse con una composición editorial, cercana y coherente con la identidad de la marca.',
        note: '[Aquí se incorporarán las personas, cargos y fotografías aprobadas por el cliente.]',
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
        title: "Empieza a construir una organización que escucha a tiempo.",
        text: "En una breve conversación te enseñaremos cómo funciona PULSE y cómo se podría aplicar a tu organización.",
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
        home: 'Home',
        methodology: 'Com treballem',
        product: 'Què oferim',
        company: 'Qui som',
        demo: 'Demana una demo',
        dashboard: 'Accés clients',
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
        product: 'Veure què oferim',
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
        title: "Comença a detectar el que avui encara no veus.",
        text: "Descobreix com PULSE s’adapta a la realitat de la teva organització.",
      },
    },
    home: {
      seo: {
        title: 'Benestar real per a equips',
        description:
          'Pulse detecta senyals de desgast, desconnexió i benestar abans que afectin el rendiment.',
      },
      hero: {
        eyebrow: 'Informació per prendre millors decisions',
        title: 'Detecta el desgast emocional del teu equip',
        accent: 'abans que afecti el rendiment.',
        lead: 'PULSE transforma les respostes dels equips en informació contínua perquè direcció i RRHH detectin tendències, anticipin riscos i prenguin decisions amb més criteri.',
        how: 'Com funciona',
        positive: 'Senyal positiu aquesta setmana',
        risk: 'Risc de desconnexió',
        metrics: [
          { value: '5 s', label: 'Temps de resposta' },
          { value: '100%', label: 'Respostes anònimes' },
          { value: '365 dies', label: 'Informació contínua' },
        ],
      },
      problem: {
        eyebrow: 'Els primers senyals',
        title: 'Cada organització envia senyals. Saber interpretar-los marca la diferència.',
        intro: "Ignorar els primers senyals té un doble cost: per a les persones i per a l’organització.",
        cards: [
          {
            number: '01',
            title: 'Desgast invisible',
            text: 'El desgast emocional s’acumula en silenci. Quan es fa visible, sovint ja impacta en la rotació, l’absentisme o el rendiment.',
          },
          {
            number: '02',
            title: 'Informació insuficient',
            text: 'Sense informació contínua, RRHH i la direcció acostumen a actuar quan el problema ja és evident.',
          },
          {
            number: '03',
            title: 'Més context, millors decisions',
            text: 'Entendre l’evolució emocional dels equips permet prendre decisions amb més criteri i en el moment adequat.',
          },
        ],
      },
      introduction: {
        eyebrow: 'Som Pulse',
        title: 'Escoltar millor canvia la manera de cuidar i decidir.',
        text: 'Ajudem les empreses a entendre com està realment el seu equip, detectar senyals abans que es converteixin en problemes i prendre decisions amb una visió més clara.',
        link: 'Coneix qui som',
      },
      methodology: {
        eyebrow: 'Així treballem',
        title: "Escoltem el teu equip. Detectem patrons.",
        accent: "Aportem context per decidir.",
        link: 'Coneix com treballem',
        steps: [
          {
            "tag": "1. L’equip respon",
            "title": "Cinc segons per dir com et sents.",
            "text": "Una interacció ràpida i senzilla que facilita que la participació esdevingui un hàbit."
          },
          {
            "tag": "2. Pulse detecta",
            "title": "Senyals anònims, patrons útils.",
            "text": "Les respostes s’analitzen de manera agregada per identificar tendències i canvis sense exposar ningú."
          },
          {
            "tag": "3. L’organització decideix",
            "title": "Context clar per actuar millor.",
            "text": "L’organització disposa d’informació per prioritzar converses, orientar decisions i impulsar accions concretes."
          }
        ],
      },
      product: {
        eyebrow: 'Què oferim',
        title: "Més que una enquesta. Una lectura contínua de l’estat emocional.",
        intro:
          "PULSE transforma l’experiència diària dels grups en informació útil per entendre el que està passant dins l’organització.",
        link: 'Descobreix què oferim',
        benefits: [
          {
            "title": "Recollida anònima",
            "text": "Les respostes es recullen de manera anònima i s’analitzen de forma agrupada."
          },
          {
            "title": "Senyals continus",
            "text": "Una lectura contínua que permet observar l’evolució dels departaments al llarg del temps."
          },
          {
            "title": "Visió global",
            "text": "La informació agregada facilita una comprensió més completa de l’organització."
          }
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
        text: "PULSE neix amb un compromís clar: construir credibilitat a partir d’evidència. Els estudis, casos i resultats s’incorporaran progressivament a mesura que siguin validats.",
        items: [
          {
            "title": "Fonaments científics",
            "subtitle": "Basats en models i investigacions de referència.",
            "detail": "PULSE es fonamenta en models i investigacions de referència en psicologia afectiva, comportament organitzacional, neurociència i ciència de dades. La nostra metodologia integra aquest coneixement per oferir una lectura pràctica de l’estat emocional de les organitzacions, mantenint sempre el vincle amb l’evidència científica disponible."
          },
          {
            "title": "Metodologia pròpia",
            "subtitle": "Una proposta desenvolupada per respondre a la realitat de les organitzacions.",
            "detail": "La metodologia PULSE és una proposta pròpia que adapta diferents aportacions de la literatura científica a la realitat de les organitzacions. Combina la recollida contínua de dades, una experiència d’ús senzilla i models d’anàlisi que transformen els senyals emocionals en informació útil per a la presa de decisions."
          },
          {
            "title": "Validació contínua",
            "subtitle": "Millorem i validem la metodologia amb cada implantació.",
            "detail": "PULSE és un projecte en evolució. Cada implantació aporta noves dades i aprenentatges que ens permeten continuar validant, ajustant i millorant la metodologia. A mesura que disposem de nous estudis, casos reals i resultats, els compartirem amb el mateix compromís de rigor i transparència que ha inspirat el desenvolupament del projecte."
          }
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
        title: 'Com treballem',
        description:
          'Així treballa Pulse per escoltar l’equip, detectar patrons i interpretar senyals que ajuden a decidir.',
      },
      hero: {
        eyebrow: 'Explora el nostre procés',
        title: "Així treballem per entendre l’estat",
        accent: "del teu equip.",
        description:
          "Comencem escoltant de manera senzilla. Després transformem aquests senyals en informació clara per entendre què està passant i prendre millors decisions.",
      },
      process: {
        eyebrow: "L’important és escoltar",
        title: "Quatre passos per passar d’un senyal a una decisió amb context.",
        text: "Una experiència senzilla per als equips i informació útil per a RRHH i la direcció.",
        steps: [
          {
            "title": "Escoltem",
            "text": "L’equip respon en pocs segons, sense formularis llargs ni interrompre la jornada."
          },
          {
            "title": "Detectem",
            "text": "Els senyals individuals i anònims es converteixen en patrons col·lectius, mai en perfils personals."
          },
          {
            "title": "Interpretem",
            "text": "PULSE identifica tendències, canvis i possibles senyals d’alerta que convé observar."
          },
          {
            "title": "Facilitem decisions",
            "text": "L’organització disposa d’informació clara per orientar converses, prioritats i decisions."
          }
        ],
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
        text: "PULSE interpreta cada resposta a partir de dos eixos: energia i agradabilitat. Aquest model es desplega en un vocabulari de 100 estats afectius que permet descriure amb més precisió l’experiència emocional, mantenint una resposta simple i ràpida.",
        energy: 'Energia',
        pleasantness: 'Agradabilitat',
        selected: 'Estat seleccionat',
        quadrants: [
          {
            "title": "Tensió i conflicte",
            "subtitle": "Alta energia + estat desagradable"
          },
          {
            "title": "Energia amb focus",
            "subtitle": "Alta energia + estat agradable"
          },
          {
            "title": "Desconnexió i desgast",
            "subtitle": "Baixa energia + estat desagradable"
          },
          {
            "title": "Calma sense impuls",
            "subtitle": "Baixa energia + estat agradable"
          }
        ],
        note: 'Referència conceptual: model circumplex de l’afecte de James A. Russell · L’aplicació específica de Pulse s’ha de validar i documentar.',
      },
      principles: {
        eyebrow: 'Per què funciona',
        title: 'Cinc segons, confiança i continuïtat.',
        items: [
          {
            "title": "Lleugera per disseny",
            "text": "Respondre ha de sentir-se natural, no com una altra tasca pendent."
          },
          {
            "title": "Anònima per principi",
            "text": "L’organització observa el conjunt, no la persona."
          },
          {
            "title": "Contínua per definició",
            "text": "La freqüència permet veure canvis, no només una fotografia aïllada."
          },
          {
            "title": "Clara per actuar",
            "text": "La lectura facilita prioritzar converses, decisions i actuacions."
          }
        ],
      },
      validation: {
        eyebrow: "Fonaments i validació",
        title: "La base científica que hi ha al darrere.",
        text: "PULSE integra coneixement científic, desenvolupament metodològic propi i un procés de validació contínua.",
        items: [
          {
            "label": "Marc científic",
            "title": "Models i recerca de referència",
            "text": "PULSE es basa en models i investigacions de referència sobre l’estudi de l’afecte i les emocions. El principal marc conceptual és el model circumplex de James A. Russell, que descriu l’experiència afectiva a partir de dues dimensions independents: energia (activació) i agradabilitat (valència).\n\nAquest marc es complementa amb aportacions de la recerca en intel·ligència emocional (Salovey i Mayer), granularitat emocional (Lisa Feldman Barrett) i estudis normatius sobre el posicionament dimensional del llenguatge afectiu (Warriner, Kuperman i Brysbaert).\n\nPULSE integra aquest coneixement científic en una metodologia pròpia orientada a comprendre l’estat emocional de les organitzacions i facilitar una millor presa de decisions."
          },
          {
            "label": "Validació del model",
            "title": "Un procés de millora contínua",
            "text": "La metodologia PULSE es revisa i evoluciona de manera contínua a partir de l’experiència d’implantació en organitzacions reals. Cada projecte aporta nous aprenentatges que permeten contrastar hipòtesis, ajustar criteris i continuar millorant el model.\n\nA mesura que es disposi de nous estudis, casos d’ús i resultats documentats, aquests s’incorporaran progressivament per reforçar l’evidència disponible i continuar desenvolupant la metodologia amb el mateix compromís de rigor i transparència."
          },
          {
            "label": "Anonimat i protecció de dades",
            "title": "Informació agregada i confidencial",
            "text": "PULSE ha estat dissenyat perquè la informació s’analitzi sempre de forma agregada i mai amb l’objectiu d’identificar persones. El sistema prioritza la confidencialitat i l’anonimat com a principis fonamentals del seu funcionament.\n\nLa metodologia i el tractament de les dades s’han desenvolupat d’acord amb la normativa vigent en matèria de protecció de dades. Quan el tipus d’implantació ho requereixi, es duran a terme les avaluacions i mesures addicionals corresponents per garantir el màxim nivell de protecció."
          }
        ],
      },
      cta: {
        title: "Les millors decisions comencen amb una millor informació.",
        text: "Descobreix com PULSE s’adapta a la realitat de la teva organització i acompanya una millor presa de decisions.",
      },
    },
    product: {
      seo: {
        title: 'Què oferim',
        description:
          'Descobreix què rep la teva organització amb Pulse: escolta contínua, visió global, interpretació i implementació acompanyada.',
      },
      hero: {
        eyebrow: 'Descobreix què rep la teva organització',
        title: "Una nova manera d’entendre l’estat emocional",
        accent: "de la teva organització.",
        description:
          "PULSE combina una experiència de resposta simple amb informació contínua, visual i accionable perquè RRHH i direcció puguin entendre millor què està passant a l’organització.",
        action: 'Descobrir-ho en una demo',
      },
      offer: {
        eyebrow: 'El que rep la teva organització',
        title: "Una manera completa d’entendre, interpretar i actuar.",
        text: "PULSE combina tecnologia, metodologia i informació perquè els senyals emocionals es converteixin en decisions més informades.",
        groups: [
          {
            "title": "Escoltar sense fricció",
            "text": "Una experiència accessible que facilita respostes honestes i freqüents.",
            "items": [
              {
                "title": "Escolta contínua",
                "text": "Senyals freqüents per entendre l’evolució, no només una fotografia anual."
              },
              {
                "title": "Tauleta o quiosc",
                "text": "Un punt de participació senzill que s’integra en el dia a dia de l’equip."
              },
              {
                "title": "Recollida anònima",
                "text": "Respostes protegides i sense exposició individual."
              }
            ]
          },
          {
            "title": "Comprendre amb perspectiva",
            "text": "La informació s’ordena per mostrar patrons sense perdre el context humà.",
            "items": [
              {
                "title": "Sense exposició individual",
                "text": "L’organització observa el conjunt, no persones concretes."
              },
              {
                "title": "Visió global",
                "text": "Una lectura compartida de l’estat i l’evolució de l’equip."
              },
              {
                "title": "Dashboard de gestió",
                "text": "Tendències i possibles focus d’atenció reunits en un espai clar."
              }
            ]
          },
          {
            "title": "Passar a l’acció",
            "text": "La informació només té valor quan ajuda a prendre decisions i orientar les actuacions.",
            "items": [
              {
                "title": "Interpretació de dades",
                "text": "Context per entendre què canvia, per què importa i què convé observar."
              },
              {
                "title": "Informes periòdics",
                "text": "Resums d’evolució, patrons destacats i pròxims passos."
              },
              {
                "title": "Orientacions d’intervenció",
                "text": "Recomanacions per facilitar la implantació d’accions preventives i correctives."
              }
            ]
          }
        ],
      },
      showcase: {
        eyebrow: 'Visió global',
        title: "Entén com està l’equip sense exposar les persones.",
        text: "PULSE transforma les respostes en una lectura agregada que permet identificar tendències, prioritats i possibles senyals de desgast.",
        checks: [
          "Informació compartida entre RRHH i direcció.",
          "Una visió comuna per orientar decisions.",
          "Informació compartida per prioritzar actuacions."
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
            "label": "Quiosc interactiu",
            "title": "Una experiència de resposta senzilla, ràpida i integrada en el dia a dia de l’equip.",
            "text": "",
            "points": [
              "Resposta en menys de 5 segons",
              "Participació natural",
              "Respostes anònimes",
              "Ús recurrent",
              "Segmentació per departaments"
            ]
          },
          {
            "label": "Dashboard",
            "title": "Una visió clara de l’estat emocional de l’organització.",
            "text": "",
            "points": [
              "Escriptori amb els principals indicadors",
              "Evolució temporal de l’energia i l’agradabilitat",
              "Matriu d’emocions",
              "Distribució per quadrants emocionals",
              "Anàlisi per departaments",
              "Seguiment de la participació"
            ]
          },
          {
            "label": "Informes periòdics",
            "title": "Resums executius per entendre l’evolució i orientar les decisions.",
            "text": "",
            "points": [
              "Resum del període",
              "Interpretació dels patrons",
              "Punts d’atenció",
              "Evolució respecte als períodes anteriors",
              "Conclusions",
              "Propostes d’actuació"
            ]
          },
          {
            "label": "Recomanacions",
            "title": "Recomanacions intel·ligents per orientar les actuacions.",
            "text": "Estem desenvolupant un sistema d’intel·ligència artificial que transformarà les dades recollides en recomanacions adaptades a la realitat de cada organització. L’objectiu és facilitar la identificació d’accions preventives i correctives com a suport a la presa de decisions dels responsables.",
            "points": []
          }
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
        title: "Descobreix com funciona PULSE en una organització com la teva.",
        text: "En una reunió breu et mostrem l’experiència de l’equip, el dashboard de l’organització i els informes que transformen els senyals en informació útil per decidir.",
      },
    },
    company: {
      seo: {
        title: 'Qui som',
        description:
          'Coneix la història, el propòsit i la manera d’entendre el benestar que impulsa Pulse.',
      },
      hero: {
        eyebrow: 'Coneix la història de Pulse',
        title: 'Pulse neix per ajudar les empreses a escoltar millor les persones',
        accent: 'que les fan créixer.',
        description:
          "Creiem que les organitzacions prenen millors decisions quan disposen d’informació contínua, respectuosa i útil sobre com evolucionen els seus equips. Aquesta convicció és l’origen de PULSE.",
        action: 'Parla amb Pulse',
      },
      story: {
        items: [
          {
            "eyebrow": "La nostra història",
            "title": "Vam començar amb una pregunta senzilla: per què continuem escoltant massa tard?",
            "text": "PULSE neix d’observar una realitat compartida per moltes organitzacions: entre el que viuen les persones cada dia i el que l’organització acaba sabent, hi ha sovint massa distància. Volem reduir aquest decalatge amb una escolta més freqüent, lleugera i útil."
          },
          {
            "eyebrow": "Per què va néixer Pulse",
            "title": "Perquè cuidar millor requereix veure els senyals abans que es converteixin en problemes.",
            "text": "Les enquestes puntuals i les converses aïllades no sempre mostren l’evolució real de l’equip. Pulse neix per aportar continuïtat, context i una visió compartida que ajudi a actuar a temps."
          }
        ],
        note: 'La història definitiva, la data de creació i les persones fundadores estan pendents de validació amb el client.',
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
        "Creiem que un primer senyal, escoltat a temps, pot canviar una conversa, una decisió i l’evolució d’un equip.",
      manifestoBy: 'La visió de Pulse',
      wellbeing: {
        eyebrow: 'La nostra manera d’entendre el benestar',
        title: 'El benestar no és una xifra aïllada ni una campanya puntual.',
        text: 'És una realitat canviant que s’entén millor quan s’escolta amb continuïtat, privacitat i context.',
        items: [
          'Escoltar sense envair l’espai de les persones.',
          'Interpretar sense reduir l’experiència humana a un únic número.',
          'Acompanyar decisions que millorin el dia a dia de l’equip.',
        ],
      },
      values: {
        eyebrow: 'Missió, visió i valors',
        title: 'Un propòsit que es converteix en una manera concreta d’actuar.',
        items: [
          {
            "title": "Missió",
            "text": "Desenvolupar eines que ajudin les organitzacions a comprendre l’estat emocional dels seus equips i transformar aquesta informació en decisions més útils, respectuoses i humanes."
          },
          {
            "title": "Visió",
            "text": "Que comprendre l’estat emocional dels equips formi part natural de la manera de dirigir una organització."
          },
          {
            "title": "Valors",
            "text": "Rigor científic, respecte per les persones, anonimat, transparència i utilitat pràctica."
          }
        ],
      },
      team: {
        eyebrow: 'L’equip',
        title: 'Persones que combinen benestar, metodologia i producte.',
        text: 'Aquest espai està preparat per presentar l’equip de Pulse amb una composició editorial, propera i coherent amb la identitat de la marca.',
        note: '[Aquí s’incorporaran les persones, els càrrecs i les fotografies aprovades pel client.]',
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
        title: "Comença a construir una organització que escolta a temps.",
        text: "En una conversa breu t’ensenyarem com funciona PULSE i com es podria aplicar a la teva organització.",
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
        home: 'Home',
        methodology: 'How we work',
        product: 'What we offer',
        company: 'Who we are',
        demo: 'Book a demo',
        dashboard: 'Client access',
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
        product: 'See what we offer',
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
        title: "Start detecting what you cannot yet see.",
        text: "Discover how PULSE adapts to the reality of your organisation.",
      },
    },
    home: {
      seo: {
        title: 'Real wellbeing for teams',
        description:
          'Pulse detects early signs of strain, disconnection and wellbeing before they affect team performance.',
      },
      hero: {
        eyebrow: 'Information for better decisions',
        title: 'Detect emotional strain in your team',
        accent: 'before it affects performance.',
        lead: 'PULSE turns team responses into continuous insight so leadership and HR can identify trends, anticipate risks and make better-informed decisions.',
        how: 'How it works',
        positive: 'Positive signal this week',
        risk: 'Disconnection risk',
        metrics: [
          { value: '5 sec', label: 'Response time' },
          { value: '100%', label: 'Anonymous responses' },
          { value: '365 days', label: 'Continuous insight' },
        ],
      },
      problem: {
        eyebrow: 'The first signals',
        title: 'Every organisation sends signals. Knowing how to read them makes the difference.',
        intro: "Ignoring the first signs has a double cost: for people and for the organisation.",
        cards: [
          {
            number: '01',
            title: 'Invisible strain',
            text: 'Emotional strain builds quietly. By the time it becomes visible, it is often already affecting turnover, absence or performance.',
          },
          {
            number: '02',
            title: 'Insufficient information',
            text: 'Without continuous insight, HR and leadership often act only once the problem is already evident.',
          },
          {
            number: '03',
            title: 'More context, better decisions',
            text: 'Understanding how teams are evolving emotionally supports better judgement and action at the right time.',
          },
        ],
      },
      introduction: {
        eyebrow: 'We are Pulse',
        title: 'Better listening changes how organisations care and decide.',
        text: 'We help companies understand how their team is really doing, detect signals before they become problems and make decisions with a clearer view.',
        link: 'Discover who we are',
      },
      methodology: {
        eyebrow: 'How we work',
        title: 'We listen to your team. We detect patterns.',
        accent: "We provide context for decisions.",
        link: 'See how we work',
        steps: [
          {
            "tag": "1. The team responds",
            "title": "Five seconds to say how you feel.",
            "text": "A quick, simple interaction that helps participation become a habit."
          },
          {
            "tag": "2. Pulse detects",
            "title": "Anonymous signals, useful patterns.",
            "text": "Responses are analysed in aggregate to identify trends and changes without exposing anyone."
          },
          {
            "tag": "3. The organisation decides",
            "title": "Clear context for better action.",
            "text": "The organisation has information to prioritise conversations, guide decisions and drive concrete action."
          }
        ],
      },
      product: {
        eyebrow: 'What we offer',
        title: "More than a survey. A continuous view of emotional state.",
        intro:
          "PULSE turns the daily experience of teams into useful information about what is happening inside the organisation.",
        link: 'Discover what we offer',
        benefits: [
          {
            "title": "Anonymous collection",
            "text": "Responses are collected anonymously and analysed as a group."
          },
          {
            "title": "Continuous signals",
            "text": "A continuous view that reveals how departments evolve over time."
          },
          {
            "title": "Organisation-wide view",
            "text": "Aggregate information supports a fuller understanding of the organisation."
          }
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
        text: "PULSE starts with a clear commitment: build credibility from evidence. Studies, cases and results will be added progressively as they are validated.",
        items: [
          {
            "title": "Scientific foundations",
            "subtitle": "Based on established models and research.",
            "detail": "PULSE draws on established models and research in affective psychology, organisational behaviour, neuroscience and data science. Our methodology brings this knowledge together to provide a practical view of organisations’ emotional state, while maintaining a link to the available scientific evidence."
          },
          {
            "title": "Our own methodology",
            "subtitle": "Developed for the reality of organisations.",
            "detail": "The PULSE methodology adapts contributions from scientific literature to the reality of organisations. It combines continuous data collection, a simple user experience and analytical models that turn emotional signals into useful information for decision-making."
          },
          {
            "title": "Continuous validation",
            "subtitle": "We improve and validate the methodology with every implementation.",
            "detail": "PULSE is an evolving project. Every implementation brings new data and learning that help us keep validating, refining and improving the methodology. As new studies, real cases and results become available, we will share them with the same commitment to rigour and transparency that inspired the project."
          }
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
        title: 'How we work',
        description:
          'See how Pulse listens to teams, detects patterns and interprets signals that support better decisions.',
      },
      hero: {
        eyebrow: 'Explore our process',
        title: "How we work to understand the state",
        accent: "of your team.",
        description:
          "We begin with simple listening. Then we turn those signals into clear information to understand what is happening and make better decisions.",
      },
      process: {
        eyebrow: "Listening comes first",
        title: "Four steps from a signal to a decision with context.",
        text: "A simple experience for teams and useful information for HR and leadership.",
        steps: [
          {
            "title": "We listen",
            "text": "The team responds in a few seconds, without long forms or interruptions to the working day."
          },
          {
            "title": "We detect",
            "text": "Individual anonymous signals become collective patterns, never personal profiles."
          },
          {
            "title": "We interpret",
            "text": "PULSE identifies trends, changes and potential warning signals worth observing."
          },
          {
            "title": "We support decisions",
            "text": "The organisation has clear information to guide conversations, priorities and decisions."
          }
        ],
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
        text: "PULSE interprets each response along two axes: energy and pleasantness. This model expands into a vocabulary of 100 affective states, allowing a more precise description of emotional experience while keeping responses simple and quick.",
        energy: 'Energy',
        pleasantness: 'Pleasantness',
        selected: 'Selected state',
        quadrants: [
          {
            "title": "Tension and conflict",
            "subtitle": "High energy + unpleasant state"
          },
          {
            "title": "Focused energy",
            "subtitle": "High energy + pleasant state"
          },
          {
            "title": "Disconnection and strain",
            "subtitle": "Low energy + unpleasant state"
          },
          {
            "title": "Calm without momentum",
            "subtitle": "Low energy + pleasant state"
          }
        ],
        note: 'Conceptual reference: James A. Russell’s circumplex model of affect · Pulse’s specific application must be validated and documented.',
      },
      principles: {
        eyebrow: 'Why it works',
        title: 'Five seconds, trust and continuity.',
        items: [
          {
            "title": "Lightweight by design",
            "text": "Responding should feel natural, not like another task."
          },
          {
            "title": "Anonymous by principle",
            "text": "The organisation sees the group, not the individual."
          },
          {
            "title": "Continuous by definition",
            "text": "Frequency reveals changes, not just a single snapshot."
          },
          {
            "title": "Clear enough to act",
            "text": "The information helps prioritise conversations, decisions and action."
          }
        ],
      },
      validation: {
        eyebrow: "Foundations and validation",
        title: "The science behind the approach.",
        text: "PULSE brings together scientific knowledge, its own methodological development and continuous validation.",
        items: [
          {
            "label": "Scientific framework",
            "title": "Established models and research",
            "text": "PULSE draws on established models and research into affect and emotion. Its principal conceptual framework is James A. Russell’s circumplex model, which describes affective experience along two independent dimensions: energy (arousal) and pleasantness (valence).\n\nThis framework is complemented by research into emotional intelligence (Salovey and Mayer), emotional granularity (Lisa Feldman Barrett) and normative studies of the dimensional position of affective language (Warriner, Kuperman and Brysbaert).\n\nPULSE integrates this scientific knowledge into its own methodology to understand the emotional state of organisations and support better decisions."
          },
          {
            "label": "Model validation",
            "title": "A process of continuous improvement",
            "text": "The PULSE methodology is continually reviewed and developed through implementation in real organisations. Every project brings new learning that helps test hypotheses, refine criteria and improve the model.\n\nAs new studies, use cases and documented results become available, they will be added progressively to strengthen the evidence and continue developing the methodology with the same commitment to rigour and transparency."
          },
          {
            "label": "Anonymity and data protection",
            "title": "Aggregate and confidential information",
            "text": "PULSE is designed so information is always analysed in aggregate and never for the purpose of identifying individuals. Confidentiality and anonymity are fundamental principles of the system.\n\nThe methodology and data processing have been developed in line with current data protection regulations. Where a particular implementation requires it, additional assessments and measures will be carried out to provide the highest level of protection."
          }
        ],
      },
      cta: {
        title: "Better decisions start with better information.",
        text: "Discover how PULSE adapts to your organisation and supports better decision-making.",
      },
    },
    product: {
      seo: {
        title: 'What we offer',
        description:
          'See what your organisation receives with Pulse: continuous listening, a global view, interpretation and supported implementation.',
      },
      hero: {
        eyebrow: 'See what your organisation receives',
        title: "A new way to understand the emotional state",
        accent: "of your organisation.",
        description:
          "PULSE combines a simple response experience with continuous, visual and actionable information so HR and leadership can better understand what is happening in the organisation.",
        action: 'Discover it in a demo',
      },
      offer: {
        eyebrow: 'What your organisation receives',
        title: "A complete way to understand, interpret and act.",
        text: "PULSE combines technology, methodology and information to turn emotional signals into better-informed decisions.",
        groups: [
          {
            "title": "Listen without friction",
            "text": "An accessible experience that encourages honest, frequent responses.",
            "items": [
              {
                "title": "Continuous listening",
                "text": "Frequent signals that reveal change, not just an annual snapshot."
              },
              {
                "title": "Tablet or kiosk",
                "text": "A simple participation point that fits into the team’s working day."
              },
              {
                "title": "Anonymous collection",
                "text": "Protected responses without individual exposure."
              }
            ]
          },
          {
            "title": "Understand with perspective",
            "text": "Information is organised to reveal patterns without losing human context.",
            "items": [
              {
                "title": "No individual exposure",
                "text": "The organisation sees the group, not specific people."
              },
              {
                "title": "Organisation-wide view",
                "text": "A shared view of the team’s state and how it evolves."
              },
              {
                "title": "Management dashboard",
                "text": "Trends and potential areas of attention together in one clear space."
              }
            ]
          },
          {
            "title": "Move into action",
            "text": "Information has value when it helps people make decisions and guide action.",
            "items": [
              {
                "title": "Data interpretation",
                "text": "Context to understand what is changing, why it matters and what to observe."
              },
              {
                "title": "Periodic reports",
                "text": "Summaries of trends, notable patterns and next steps."
              },
              {
                "title": "Intervention guidance",
                "text": "Recommendations to help implement preventive and corrective action."
              }
            ]
          }
        ],
      },
      showcase: {
        eyebrow: 'A global view',
        title: "Understand your team without exposing individuals.",
        text: "PULSE turns responses into an aggregate view that reveals trends, priorities and potential signs of strain.",
        checks: [
          "Information shared by HR and leadership.",
          "A common view to guide decisions.",
          "Shared information to prioritise action."
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
            "label": "Interactive kiosk",
            "title": "A simple, quick response experience integrated into the team’s everyday routine.",
            "text": "",
            "points": [
              "Response in under 5 seconds",
              "Natural participation",
              "Anonymous responses",
              "Recurring use",
              "Department segmentation"
            ]
          },
          {
            "label": "Dashboard",
            "title": "A clear view of the organisation’s emotional state.",
            "text": "",
            "points": [
              "Main indicators dashboard",
              "Energy and pleasantness over time",
              "Emotion matrix",
              "Distribution by emotional quadrant",
              "Department analysis",
              "Participation tracking"
            ]
          },
          {
            "label": "Periodic reports",
            "title": "Executive summaries that show how things are changing and guide decisions.",
            "text": "",
            "points": [
              "Period summary",
              "Pattern interpretation",
              "Areas of attention",
              "Comparison with previous periods",
              "Conclusions",
              "Proposed action"
            ]
          },
          {
            "label": "Recommendations",
            "title": "Intelligent recommendations to guide action.",
            "text": "We are developing an artificial intelligence system to turn collected data into recommendations adapted to each organisation. The aim is to help identify preventive and corrective actions as support for decision-makers.",
            "points": []
          }
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
        title: "Discover how PULSE works in an organisation like yours.",
        text: "In a short meeting, we will show you the team experience, the organisation dashboard and the reports that turn signals into useful information for decisions.",
      },
    },
    company: {
      seo: {
        title: 'Who we are',
        description:
          'Discover the story, purpose and view of wellbeing that drive Pulse.',
      },
      hero: {
        eyebrow: 'Discover the Pulse story',
        title: 'Pulse was created to help companies listen better to the people',
        accent: 'who make them grow.',
        description:
          "We believe organisations make better decisions when they have continuous, respectful and useful information about how their teams are evolving. That conviction is the origin of PULSE.",
        action: 'Talk to Pulse',
      },
      story: {
        items: [
          {
            "eyebrow": "Our story",
            "title": "We started with a simple question: why do organisations still listen too late?",
            "text": "PULSE grew from observing a reality shared by many organisations: there is often too much distance between what people experience every day and what their organisation eventually learns. We want to close that gap through more frequent, lightweight and useful listening."
          },
          {
            "eyebrow": "Why Pulse was created",
            "title": "Because better care requires seeing signals before they become problems.",
            "text": "Occasional surveys and isolated conversations do not always reveal how a team is really changing. Pulse was created to provide continuity, context and a shared view that helps organisations act in time."
          }
        ],
        note: 'The final origin story, founding date and founders are pending client validation.',
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
        "We believe an early signal, heard in time, can change a conversation, a decision and a team’s direction.",
      manifestoBy: 'The Pulse vision',
      wellbeing: {
        eyebrow: 'How we understand wellbeing',
        title: 'Wellbeing is not an isolated score or a one-off campaign.',
        text: 'It is a changing reality that becomes clearer through continuous, private and contextual listening.',
        items: [
          'Listen without invading people’s space.',
          'Interpret without reducing human experience to a single number.',
          'Support decisions that improve the team’s everyday experience.',
        ],
      },
      values: {
        eyebrow: 'Mission, vision and values',
        title: 'A purpose translated into a concrete way of acting.',
        items: [
          {
            "title": "Mission",
            "text": "Develop tools that help organisations understand their teams’ emotional state and turn that information into more useful, respectful and human decisions."
          },
          {
            "title": "Vision",
            "text": "Make understanding teams’ emotional state a natural part of how an organisation is led."
          },
          {
            "title": "Values",
            "text": "Scientific rigour, respect for people, anonymity, transparency and practical usefulness."
          }
        ],
      },
      team: {
        eyebrow: 'The team',
        title: 'People bringing together wellbeing, methodology and product.',
        text: 'This space is ready to present the Pulse team through a close, editorial composition that fits the brand identity.',
        note: '[Approved team members, roles and photography will be added here.]',
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
        title: "Start building an organisation that listens in time.",
        text: "In a short conversation, we will show you how PULSE works and how it could be applied in your organisation.",
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
