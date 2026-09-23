const authors = [
  { name: 'Marc Pèrez', company: 'DISPUIG', initials: 'MP' },
  { name: 'Eva Galvan', company: 'APINDEP', initials: 'EG' },
  { name: 'Mònica Sabata', company: 'FUMH', initials: 'MS' },
]

export const testimonialMessages = {
  ca: {
    eyebrow: 'Testimonis', title: 'El que expliquen els equips.',
    previous: 'Testimoni anterior', next: 'Testimoni següent', carousel: 'Carrusel de testimonis', position: 'Testimoni',
    items: authors.map((author, index) => ({ ...author,
      role: ['Director Comercial', 'Directora', 'Directora'][index],
      quote: [
        "Des que fem servir Pulse nota que a l'equip es parla amb més sinceritat. La gent diu com està realment, no només el que es dona per fet que has de dir. Això ens ha obert converses que abans no teníem.",
        "Necessitàvem alguna cosa que no fos una càrrega més per a l'equip. Amb Pulse, en pocs segons ja està fet, i nosaltres tenim una imatge molt més real de com estem.",
        "El que més valorem és que des de l'anonimat de cadascuna de les persones de l'equip podem entendre com estem i com funcionen les nostres dinàmiques i, a partir d'aquestes informacions, millorar el clima laboral",
      ][index],
    })),
  },
  es: {
    eyebrow: 'Testimonios', title: 'Lo que cuentan los equipos.',
    previous: 'Testimonio anterior', next: 'Testimonio siguiente', carousel: 'Carrusel de testimonios', position: 'Testimonio',
    items: authors.map((author, index) => ({ ...author,
      role: ['Director Comercial', 'Directora', 'Directora'][index],
      quote: [
        'Desde que usamos Pulse noto que en el equipo se habla con más sinceridad. La gente dice cómo está realmente, no solo lo que se da por hecho que hay que decir. Esto nos ha abierto conversaciones que antes no teníamos.',
        'Necesitábamos algo que no fuera una carga más para el equipo. Con Pulse, en pocos segundos ya está hecho, y nosotros tenemos una imagen mucho más real de cómo estamos.',
        'Lo que más valoramos es que, desde el anonimato de cada una de las personas del equipo, podemos entender cómo estamos y cómo funcionan nuestras dinámicas y, a partir de esta información, mejorar el clima laboral.',
      ][index],
    })),
  },
  en: {
    eyebrow: 'Testimonials', title: 'What teams have to say.',
    previous: 'Previous testimonial', next: 'Next testimonial', carousel: 'Testimonial carousel', position: 'Testimonial',
    items: authors.map((author, index) => ({ ...author,
      role: ['Commercial Director', 'Director', 'Director'][index],
      quote: [
        'Since we started using Pulse, I have noticed that the team speaks more honestly. People say how they really feel, not just what they think they are expected to say. This has opened up conversations we were not having before.',
        'We needed something that would not add to the team’s workload. With Pulse, it takes just a few seconds, and we get a much more accurate picture of how we are doing.',
        'What we value most is that, while each team member remains anonymous, we can understand how we are doing and how our team dynamics work, and use this information to improve the working environment.',
      ][index],
    })),
  },
}
