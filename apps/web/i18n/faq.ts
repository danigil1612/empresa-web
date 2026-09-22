import type { Locale } from '~/i18n/messages'

export type FaqItem = {
  question: string
  answer: readonly string[]
}

export type FaqSection = {
  id: string
  title: string
  items: readonly FaqItem[]
}

export type FaqContent = {
  eyebrow: string
  title: string
  intro: string
  sections: readonly FaqSection[]
}

export const faqMessages: Record<Locale, FaqContent> = {
  ca: {
    eyebrow: 'Preguntes freqüents',
    title: 'Tot el que necessites saber sobre PULSE',
    intro:
      'Resolem els dubtes més habituals sobre el funcionament, la metodologia, la privacitat i la implantació de PULSE.',
    sections: [
      {
        id: 'about',
        title: 'Sobre PULSE',
        items: [
          {
            question: 'Què és exactament PULSE?',
            answer: [
              "PULSE és un sistema que permet conèixer l'estat emocional dels equips de manera contínua, anònima i agregada. A partir de milers de respostes individuals, transforma els senyals emocionals en informació útil perquè Direcció i Recursos Humans puguin detectar patrons, anticipar riscos i prendre decisions més informades.",
            ],
          },
          {
            question: 'Quin problema resol PULSE?',
            answer: [
              "Moltes organitzacions només detecten situacions com la desmotivació, els conflictes, la desconnexió o l'augment de l'absentisme quan aquestes ja tenen conseqüències.",
              'PULSE permet identificar tendències i canvis abans que es facin evidents, facilitant una actuació més ràpida i fonamentada.',
            ],
          },
          {
            question: "Quin tipus d'organitzacions poden utilitzar PULSE?",
            answer: [
              'PULSE és una solució adaptable a empreses, institucions i organitzacions de qualsevol sector que vulguin incorporar dades sobre el factor humà a la seva presa de decisions.',
            ],
          },
        ],
      },
      {
        id: 'operation',
        title: 'Funcionament',
        items: [
          {
            question: 'Quant temps necessita una persona per respondre?',
            answer: [
              'Aproximadament cinc segons.',
              "La participació està pensada perquè sigui ràpida, intuïtiva i fàcil d'incorporar al dia a dia.",
            ],
          },
          {
            question:
              'Per què PULSE utilitza un dispositiu físic i no una aplicació mòbil?',
            answer: [
              'Perquè volem que la participació sigui senzilla, immediata i natural.',
              "El dispositiu està sempre disponible dins l'organització, no depèn del mòbil personal dels treballadors i facilita que la participació es converteixi en un hàbit quotidià.",
            ],
          },
          {
            question: 'Cal instal·lar una aplicació?',
            answer: [
              'No.',
              "Les persones només interactuen amb el dispositiu PULSE instal·lat a l'organització. Els responsables disposen d'un dashboard i d'una aplicació per consultar la informació autoritzada.",
            ],
          },
          {
            question: 'Es poden analitzar diferents departaments o centres?',
            answer: [
              'Sí.',
              "PULSE permet segmentar la informació per departaments, equips, centres de treball o altres agrupacions definides per l'organització, facilitant comparatives i l'anàlisi de tendències.",
            ],
          },
          {
            question: 'Funciona amb equips en teletreball?',
            answer: [
              'PULSE està especialment dissenyat per a organitzacions amb equips presencials o híbrids que comparteixen espais de treball de manera habitual.',
            ],
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Privacitat i seguretat',
        items: [
          {
            question: 'Les respostes són realment anònimes?',
            answer: [
              'Sí.',
              "PULSE no identifica persones ni treballa amb dades individuals. Les respostes s'analitzen de forma agregada per entendre tendències col·lectives.",
            ],
          },
          {
            question: "L'empresa pot saber què ha respost una persona concreta?",
            answer: [
              'No.',
              "PULSE no és una eina de control ni d'avaluació individual. El seu objectiu és comprendre l'estat emocional dels equips, no monitoritzar les persones.",
            ],
          },
          {
            question:
              'PULSE compleix el Reglament General de Protecció de Dades (RGPD)?',
            answer: [
              'Sí.',
              'PULSE ha estat dissenyat seguint els principis de privacitat des del disseny i compleix el Reglament General de Protecció de Dades (RGPD). El sistema no identifica persones, treballa amb dades agregades i anònimes, i només les persones autoritzades poden accedir a la informació.',
            ],
          },
        ],
      },
      {
        id: 'methodology',
        title: 'Metodologia',
        items: [
          {
            question: 'En què es basa la metodologia de PULSE?',
            answer: [
              'La metodologia de PULSE combina coneixement procedent de la psicologia, la neurociència afectiva, la ciència de dades i la intel·ligència artificial per transformar senyals emocionals en informació útil per a la presa de decisions.',
            ],
          },
          {
            question: 'Per què mesureu energia i agradabilitat?',
            answer: [
              "Perquè són dues dimensions àmpliament validades per la recerca científica per descriure l'experiència afectiva.",
              "PULSE es basa en el model circumplex de l'afecte, desenvolupat per James A. Russell, que representa els estats afectius a partir de dues dimensions independents: el nivell d'activació (energia) i la valència (agradabilitat). Aquest model permet representar l'estat emocional de manera senzilla, rigorosa i comparable al llarg del temps.",
            ],
          },
          {
            question: 'PULSE avalua les persones?',
            answer: [
              'No.',
              "PULSE no fa diagnòstics, no crea perfils psicològics ni avalua el rendiment individual. Analitza patrons col·lectius per ajudar les organitzacions a comprendre millor què està passant als seus equips.",
            ],
          },
        ],
      },
      {
        id: 'implementation',
        title: 'Implantació',
        items: [
          {
            question: 'Quant temps es necessita per començar?',
            answer: [
              'La implantació és ràpida i s’adapta a cada organització. Un cop instal·lat el dispositiu i configurada la plataforma, PULSE pot començar a recollir informació des del primer dia.',
            ],
          },
          {
            question: 'Cal formar els treballadors?',
            answer: [
              "Només és necessària una breu sessió de presentació perquè totes les persones entenguin el funcionament del sistema, el seu objectiu i les garanties d'anonimat.",
            ],
          },
          {
            question: 'És complicat implantar PULSE?',
            answer: [
              'No.',
              "L'equip de PULSE acompanya tot el procés d'implantació perquè la posada en marxa sigui senzilla i amb el mínim impacte sobre el funcionament habitual de l'organització.",
            ],
          },
        ],
      },
      {
        id: 'results',
        title: 'Resultats',
        items: [
          {
            question: 'Quin tipus d’informació ofereix PULSE?',
            answer: [
              "PULSE ofereix una visió contínua de l'estat emocional de l'organització.",
              "El dashboard permet visualitzar l'evolució emocional dels equips, detectar tendències, comparar departaments o centres de treball i identificar canvis significatius que ajudin a prendre decisions més informades.",
            ],
          },
          {
            question: 'PULSE substitueix les enquestes de clima laboral?',
            answer: [
              'No.',
              "Les enquestes de clima laboral ofereixen una fotografia puntual de l'organització, normalment una o dues vegades l'any. PULSE proporciona una lectura contínua de l'estat emocional dels equips durant tot l'any, permetent detectar l'evolució i els canvis a mesura que es produeixen.",
            ],
          },
          {
            question:
              'PULSE substitueix les eines de desenvolupament de persones?',
            answer: [
              'No.',
              "Són eines amb objectius diferents. Les eines de desenvolupament ajuden les persones a conèixer millor els seus estils, competències o potencial. PULSE ajuda l'organització a entendre com evoluciona l'estat emocional dels equips i a prendre decisions basades en dades.",
            ],
          },
          {
            question:
              "PULSE substitueix l'avaluació de riscos psicosocials?",
            answer: [
              'No.',
              "PULSE no substitueix les metodologies oficials d'avaluació de riscos psicosocials. És una eina complementària que proporciona informació contínua sobre l'estat emocional dels equips i ajuda a detectar precoçment situacions que poden requerir una anàlisi més específica.",
            ],
          },
        ],
      },
      {
        id: 'common',
        title: 'Les preguntes que més ens fan',
        items: [
          {
            question: 'Què passa si els treballadors no participen?',
            answer: [
              "La participació és voluntària, però PULSE està dissenyat perquè formar-ne part sigui ràpid, senzill i natural. Quan les persones entenen el propòsit del projecte, les garanties d'anonimat i comproven que la informació es tradueix en accions, la participació acostuma a consolidar-se de manera progressiva.",
            ],
          },
          {
            question:
              'Quantes persones es necessiten perquè les dades siguin útils?',
            answer: [
              'No existeix un nombre únic.',
              "La utilitat de les dades depèn de la mida dels equips, del nivell de participació i de l'objectiu de l'anàlisi. Durant la implantació s'estableixen els criteris més adequats per garantir informació fiable i representativa.",
            ],
          },
          {
            question:
              'Què passa si detectem un canvi important en un departament?',
            answer: [
              "PULSE ajuda a detectar el canvi, però les decisions sempre corresponen a l'organització.",
              "La informació permet analitzar el context, identificar possibles causes, prioritzar actuacions i fer-ne el seguiment per valorar-ne l'evolució.",
            ],
          },
          {
            question: 'Quant costa PULSE?',
            answer: [
              'Cada organització és diferent.',
              "El cost depèn principalment de la mida de l'empresa, del nombre de dispositius i dels serveis necessaris.",
            ],
          },
        ],
      },
    ],
  },
  es: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Todo lo que necesitas saber sobre PULSE',
    intro:
      'Resolvemos las dudas más habituales sobre el funcionamiento, la metodología, la privacidad y la implantación de PULSE.',
    sections: [
      {
        id: 'about',
        title: 'Sobre PULSE',
        items: [
          {
            question: '¿Qué es exactamente PULSE?',
            answer: [
              'PULSE es un sistema que permite conocer el estado emocional de los equipos de forma continua, anónima y agregada. A partir de miles de respuestas individuales, transforma las señales emocionales en información útil para que Dirección y Recursos Humanos puedan detectar patrones, anticipar riesgos y tomar decisiones mejor fundamentadas.',
            ],
          },
          {
            question: '¿Qué problema resuelve PULSE?',
            answer: [
              'Muchas organizaciones solo detectan situaciones como la desmotivación, los conflictos, la desconexión o el aumento del absentismo cuando estas ya tienen consecuencias.',
              'PULSE permite identificar tendencias y cambios antes de que resulten evidentes, lo que facilita una actuación más rápida y fundamentada.',
            ],
          },
          {
            question: '¿Qué tipo de organizaciones pueden utilizar PULSE?',
            answer: [
              'PULSE es una solución adaptable a empresas, instituciones y organizaciones de cualquier sector que quieran incorporar datos sobre el factor humano a su toma de decisiones.',
            ],
          },
        ],
      },
      {
        id: 'operation',
        title: 'Funcionamiento',
        items: [
          {
            question: '¿Cuánto tiempo necesita una persona para responder?',
            answer: [
              'Aproximadamente cinco segundos.',
              'La participación está pensada para que sea rápida, intuitiva y fácil de incorporar al día a día.',
            ],
          },
          {
            question:
              '¿Por qué PULSE utiliza un dispositivo físico y no una aplicación móvil?',
            answer: [
              'Porque queremos que la participación sea sencilla, inmediata y natural.',
              'El dispositivo está siempre disponible dentro de la organización, no depende del móvil personal de los trabajadores y facilita que la participación se convierta en un hábito cotidiano.',
            ],
          },
          {
            question: '¿Es necesario instalar una aplicación?',
            answer: [
              'No.',
              'Las personas solo interactúan con el dispositivo PULSE instalado en la organización. Los responsables disponen de un dashboard y de una aplicación para consultar la información autorizada.',
            ],
          },
          {
            question:
              '¿Se pueden analizar distintos departamentos o centros?',
            answer: [
              'Sí.',
              'PULSE permite segmentar la información por departamentos, equipos, centros de trabajo u otras agrupaciones definidas por la organización, lo que facilita las comparativas y el análisis de tendencias.',
            ],
          },
          {
            question: '¿Funciona con equipos en teletrabajo?',
            answer: [
              'PULSE está especialmente diseñado para organizaciones con equipos presenciales o híbridos que comparten espacios de trabajo de forma habitual.',
            ],
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Privacidad y seguridad',
        items: [
          {
            question: '¿Las respuestas son realmente anónimas?',
            answer: [
              'Sí.',
              'PULSE no identifica a las personas ni trabaja con datos individuales. Las respuestas se analizan de forma agregada para comprender tendencias colectivas.',
            ],
          },
          {
            question:
              '¿Puede la empresa saber qué ha respondido una persona concreta?',
            answer: [
              'No.',
              'PULSE no es una herramienta de control ni de evaluación individual. Su objetivo es comprender el estado emocional de los equipos, no monitorizar a las personas.',
            ],
          },
          {
            question:
              '¿PULSE cumple el Reglamento General de Protección de Datos (RGPD)?',
            answer: [
              'Sí.',
              'PULSE se ha diseñado siguiendo los principios de privacidad desde el diseño y cumple el Reglamento General de Protección de Datos (RGPD). El sistema no identifica a las personas, trabaja con datos agregados y anónimos, y solo las personas autorizadas pueden acceder a la información.',
            ],
          },
        ],
      },
      {
        id: 'methodology',
        title: 'Metodología',
        items: [
          {
            question: '¿En qué se basa la metodología de PULSE?',
            answer: [
              'La metodología de PULSE combina conocimientos procedentes de la psicología, la neurociencia afectiva, la ciencia de datos y la inteligencia artificial para transformar señales emocionales en información útil para la toma de decisiones.',
            ],
          },
          {
            question: '¿Por qué PULSE mide la energía y la agradabilidad?',
            answer: [
              'Porque son dos dimensiones ampliamente validadas por la investigación científica para describir la experiencia afectiva.',
              'PULSE se basa en el modelo circumplejo del afecto, desarrollado por James A. Russell, que representa los estados afectivos a partir de dos dimensiones independientes: el nivel de activación (energía) y la valencia (agradabilidad). Este modelo permite representar el estado emocional de forma sencilla, rigurosa y comparable a lo largo del tiempo.',
            ],
          },
          {
            question: '¿PULSE evalúa a las personas?',
            answer: [
              'No.',
              'PULSE no realiza diagnósticos, no crea perfiles psicológicos ni evalúa el rendimiento individual. Analiza patrones colectivos para ayudar a las organizaciones a comprender mejor qué está ocurriendo en sus equipos.',
            ],
          },
        ],
      },
      {
        id: 'implementation',
        title: 'Implantación',
        items: [
          {
            question: '¿Cuánto tiempo se necesita para empezar?',
            answer: [
              'La implantación es rápida y se adapta a cada organización. Una vez instalado el dispositivo y configurada la plataforma, PULSE puede empezar a recoger información desde el primer día.',
            ],
          },
          {
            question: '¿Es necesario formar a los trabajadores?',
            answer: [
              'Solo es necesaria una breve sesión de presentación para que todas las personas comprendan el funcionamiento del sistema, su objetivo y las garantías de anonimato.',
            ],
          },
          {
            question: '¿Es complicado implantar PULSE?',
            answer: [
              'No.',
              'El equipo de PULSE acompaña todo el proceso de implantación para que la puesta en marcha sea sencilla y tenga el mínimo impacto sobre el funcionamiento habitual de la organización.',
            ],
          },
        ],
      },
      {
        id: 'results',
        title: 'Resultados',
        items: [
          {
            question: '¿Qué tipo de información ofrece PULSE?',
            answer: [
              'PULSE ofrece una visión continua del estado emocional de la organización.',
              'El dashboard permite visualizar la evolución emocional de los equipos, detectar tendencias, comparar departamentos o centros de trabajo e identificar cambios significativos que ayuden a tomar decisiones mejor fundamentadas.',
            ],
          },
          {
            question: '¿PULSE sustituye las encuestas de clima laboral?',
            answer: [
              'No.',
              'Las encuestas de clima laboral ofrecen una fotografía puntual de la organización, normalmente una o dos veces al año. PULSE proporciona una lectura continua del estado emocional de los equipos durante todo el año, lo que permite detectar su evolución y los cambios a medida que se producen.',
            ],
          },
          {
            question:
              '¿PULSE sustituye las herramientas de desarrollo de personas?',
            answer: [
              'No.',
              'Son herramientas con objetivos diferentes. Las herramientas de desarrollo ayudan a las personas a conocer mejor sus estilos, competencias o potencial. PULSE ayuda a la organización a comprender cómo evoluciona el estado emocional de los equipos y a tomar decisiones basadas en datos.',
            ],
          },
          {
            question:
              '¿PULSE sustituye la evaluación de riesgos psicosociales?',
            answer: [
              'No.',
              'PULSE no sustituye las metodologías oficiales de evaluación de riesgos psicosociales. Es una herramienta complementaria que proporciona información continua sobre el estado emocional de los equipos y ayuda a detectar de forma temprana situaciones que pueden requerir un análisis más específico.',
            ],
          },
        ],
      },
      {
        id: 'common',
        title: 'Las preguntas que más nos hacen',
        items: [
          {
            question: '¿Qué ocurre si los trabajadores no participan?',
            answer: [
              'La participación es voluntaria, pero PULSE está diseñado para que participar resulte rápido, sencillo y natural. Cuando las personas comprenden el propósito del proyecto y las garantías de anonimato, y comprueban que la información se traduce en acciones, la participación suele consolidarse progresivamente.',
            ],
          },
          {
            question:
              '¿Cuántas personas se necesitan para que los datos sean útiles?',
            answer: [
              'No existe una cifra única.',
              'La utilidad de los datos depende del tamaño de los equipos, del nivel de participación y del objetivo del análisis. Durante la implantación se establecen los criterios más adecuados para garantizar información fiable y representativa.',
            ],
          },
          {
            question:
              '¿Qué ocurre si detectamos un cambio importante en un departamento?',
            answer: [
              'PULSE ayuda a detectar el cambio, pero las decisiones corresponden siempre a la organización.',
              'La información permite analizar el contexto, identificar posibles causas, priorizar actuaciones y realizar su seguimiento para valorar su evolución.',
            ],
          },
          {
            question: '¿Cuánto cuesta PULSE?',
            answer: [
              'Cada organización es diferente.',
              'El coste depende principalmente del tamaño de la empresa, del número de dispositivos y de los servicios necesarios.',
            ],
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Frequently asked questions',
    title: 'Everything you need to know about PULSE',
    intro:
      'We answer the most common questions about how PULSE works, its methodology, privacy and implementation.',
    sections: [
      {
        id: 'about',
        title: 'About PULSE',
        items: [
          {
            question: 'What exactly is PULSE?',
            answer: [
              "PULSE is a system that provides an ongoing, anonymous and aggregated view of teams' emotional state. Drawing on thousands of individual responses, it turns emotional signals into useful information so that leadership and HR can identify patterns, anticipate risks and make better-informed decisions.",
            ],
          },
          {
            question: 'What problem does PULSE solve?',
            answer: [
              'Many organisations only identify issues such as disengagement, conflict, disconnection or rising absenteeism once they are already having an impact.',
              'PULSE makes it possible to identify trends and changes before they become apparent, supporting faster, more informed action.',
            ],
          },
          {
            question: 'What types of organisations can use PULSE?',
            answer: [
              'PULSE is adaptable to companies, institutions and organisations in any sector that want to incorporate human-factor data into their decision-making.',
            ],
          },
        ],
      },
      {
        id: 'operation',
        title: 'How it works',
        items: [
          {
            question: 'How long does it take someone to respond?',
            answer: [
              'Approximately five seconds.',
              'Participation is designed to be quick, intuitive and easy to incorporate into daily routines.',
            ],
          },
          {
            question:
              'Why does PULSE use a physical device rather than a mobile app?',
            answer: [
              'Because we want participation to be simple, immediate and natural.',
              "The device is always available within the organisation, does not depend on employees' personal phones and helps make participation an everyday habit.",
            ],
          },
          {
            question: 'Do people need to install an app?',
            answer: [
              'No.',
              'People only interact with the PULSE device installed at the organisation. Managers have access to a dashboard and an app where they can view authorised information.',
            ],
          },
          {
            question: 'Can different departments or sites be analysed?',
            answer: [
              'Yes.',
              'PULSE can segment information by department, team, worksite or other groupings defined by the organisation, enabling comparisons and trend analysis.',
            ],
          },
          {
            question: 'Does it work with remote teams?',
            answer: [
              'PULSE is designed primarily for organisations with on-site or hybrid teams that regularly share workspaces.',
            ],
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Privacy and security',
        items: [
          {
            question: 'Are responses truly anonymous?',
            answer: [
              'Yes.',
              'PULSE does not identify individuals or work with individual-level data. Responses are analysed in aggregate to understand collective trends.',
            ],
          },
          {
            question: 'Can the company see how a specific person responded?',
            answer: [
              'No.',
              "PULSE is not an employee monitoring or individual assessment tool. Its purpose is to understand teams' emotional state, not to monitor individuals.",
            ],
          },
          {
            question:
              'Does PULSE comply with the General Data Protection Regulation (GDPR)?',
            answer: [
              'Yes.',
              'PULSE was designed according to privacy-by-design principles and complies with the General Data Protection Regulation (GDPR). The system does not identify individuals, works with aggregated and anonymous data, and only authorised people can access the information.',
            ],
          },
        ],
      },
      {
        id: 'methodology',
        title: 'Methodology',
        items: [
          {
            question: "What is PULSE's methodology based on?",
            answer: [
              "PULSE's methodology combines insights from psychology, affective neuroscience, data science and artificial intelligence to turn emotional signals into useful decision-making information.",
            ],
          },
          {
            question: 'Why measure energy and pleasantness?',
            answer: [
              'Because they are two dimensions widely validated by scientific research for describing affective experience.',
              "PULSE is based on James A. Russell's circumplex model of affect, which represents affective states along two independent dimensions: activation (energy) and valence (pleasantness). This model makes it possible to represent emotional state in a simple, rigorous way that can be compared over time.",
            ],
          },
          {
            question: 'Does PULSE assess individuals?',
            answer: [
              'No.',
              'PULSE does not make diagnoses, create psychological profiles or assess individual performance. It analyses collective patterns to help organisations better understand what is happening within their teams.',
            ],
          },
        ],
      },
      {
        id: 'implementation',
        title: 'Implementation',
        items: [
          {
            question: 'How long does it take to get started?',
            answer: [
              'Implementation is quick and tailored to each organisation. Once the device is installed and the platform configured, PULSE can start collecting information from day one.',
            ],
          },
          {
            question: 'Do employees need training?',
            answer: [
              'Only a brief introduction is needed so everyone understands how the system works, its purpose and the anonymity safeguards.',
            ],
          },
          {
            question: 'Is PULSE difficult to implement?',
            answer: [
              'No.',
              "The PULSE team supports the entire implementation process to ensure a straightforward rollout with minimal disruption to the organisation's normal operations.",
            ],
          },
        ],
      },
      {
        id: 'results',
        title: 'Results',
        items: [
          {
            question: 'What kind of information does PULSE provide?',
            answer: [
              "PULSE provides an ongoing view of the organisation's emotional state.",
              "The dashboard shows how teams' emotional state evolves, helps identify trends, compare departments or worksites, and detect meaningful changes to support better-informed decisions.",
            ],
          },
          {
            question: 'Does PULSE replace employee climate surveys?',
            answer: [
              'No.',
              "Employee climate surveys provide a snapshot of the organisation, typically once or twice a year. PULSE provides an ongoing view of teams' emotional state throughout the year, making it possible to track its evolution and detect changes as they happen.",
            ],
          },
          {
            question: 'Does PULSE replace employee development tools?',
            answer: [
              'No.',
              "They serve different purposes. Development tools help people gain a better understanding of their styles, skills or potential. PULSE helps the organisation understand how teams' emotional state is evolving and make data-driven decisions.",
            ],
          },
          {
            question: 'Does PULSE replace psychosocial risk assessments?',
            answer: [
              'No.',
              "PULSE does not replace official psychosocial risk assessment methods. It is a complementary tool that provides ongoing information about teams' emotional state and helps flag situations early that may require more specific analysis.",
            ],
          },
        ],
      },
      {
        id: 'common',
        title: 'Frequently asked questions',
        items: [
          {
            question: 'What happens if employees do not participate?',
            answer: [
              'Participation is voluntary, but PULSE is designed to make taking part quick, simple and natural. When people understand the purpose of the project and the anonymity safeguards, and see that the information leads to action, participation tends to build steadily over time.',
            ],
          },
          {
            question: 'How many people are needed for the data to be useful?',
            answer: [
              'There is no single number.',
              'The usefulness of the data depends on team size, participation levels and the purpose of the analysis. During implementation, the most appropriate criteria are established to ensure reliable, representative information.',
            ],
          },
          {
            question:
              'What happens if we detect a significant change in a department?',
            answer: [
              'PULSE helps detect the change, but all decisions remain with the organisation.',
              'The information makes it possible to analyse the context, identify possible causes, prioritise actions and monitor them to assess how the situation develops.',
            ],
          },
          {
            question: 'How much does PULSE cost?',
            answer: [
              'Every organisation is different.',
              'The cost depends primarily on company size, the number of devices and the services required.',
            ],
          },
        ],
      },
    ],
  },
}
