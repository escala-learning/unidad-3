/* =========================================================
   CURSO · Gobierno, calidad y protección de datos (Unidad 3)
   ---------------------------------------------------------
   Cliente:   Scala Learning
   Insumo:    ../insumos/DI_Unidad.docx   (escrito con la plantilla nueva de Scala)
   Audiencia: Profesionales del área de Ingeniería de Sistemas con
              mención en Ingeniería de Software, en el contexto peruano
   Duración:  [PENDIENTE · el DI no la declara]
   Preset visual: scala  (ver instituciones/scala-learning/INSTITUCION.md)
   Versión template: hibrida

   ESTADO (2026-09-29): el envío trae SOLO el Tema 1. La evaluación, el glosario
   y los temas 2 y 3 no han llegado; sus entradas quedan comentadas para que la
   SPA no ofrezca rutas sin contenido. El índice de la pantalla «Contenido de la
   unidad» sí los anuncia como pendientes, tal como lo declara el documento.
   ========================================================= */

module.exports = {

  brand: {
    // Logo negativo (blanco + arco amarillo): el que va sobre el sidebar navy.
    name: '',
    sub:  '',
    logo:       'assets/img/logos/scala-logo.svg',
    logoMobile: 'assets/img/logos/scala-sello.svg',
  },

  course: {
    code:             'UNIDAD 3',
    name:             'Gobierno, calidad y protección de datos',
    subtitle:         'Datos y Persistencia Avanzada: Diseño, Performance y Gobierno',
    duration:         '',
    iso:              '',
    licencia:         '',
    preset:           'scala',
    pdf:              '',            // sin cuaderno de aprendizaje en insumos/
    portadaFullBleed: true,
  },

  /* MENÚ · el orden ES la numeración: mover una línea renumera todo al compilar.
       - `tipo: 'especial'`  → estructurales (inicio, contenido, evaluación,
                               glosario, referencias). Llevan icono, no número.
       - `tipo: 'tema'`      → contenido temático. Numerado 1, 2, 3…
     Las secciones son los subtítulos de la pantalla; su `ancla` es el id del
     <section> en el HTML y alimenta el menú lateral. */
  menu: [
    { id: 'portada',         titulo: 'Inicio',                                    tipo: 'especial', icon: 'mdi:home-outline' },
    { id: 'temario',         titulo: 'Contenido de la unidad',                    tipo: 'especial', icon: 'mdi:map-outline' },

    { id: 'introduccion',    titulo: 'Introducción',                              tipo: 'especial', icon: 'mdi:information-variant',
      secciones: [ { titulo: 'Resultado de aprendizaje', ancla: 'resultado-de-aprendizaje' } ] },

    { id: 'tema1',           titulo: 'Gobierno de datos',                         tipo: 'tema', numero: 1,
      secciones: [ { titulo: 'Gobierno, gestión y administración de datos', ancla: 'gobierno-gestion' },
                   { titulo: 'Roles, políticas, responsabilidades y ciclo de vida del dato', ancla: 'roles-politicas' } ] },

    // Pendientes de envío (2026-09-29). Se descomentan cuando lleguen:
    // { id: 'tema2',        titulo: '[Tema 2]',                                  tipo: 'tema', numero: 2 },
    // { id: 'tema3',        titulo: '[Tema 3]',                                  tipo: 'tema', numero: 3 },
    // { id: 'evaluacion',   titulo: 'Evaluación de la unidad',                   tipo: 'especial', icon: 'mdi:clipboard-check-outline', nota: 'banco de preguntas por recibir' },
    // { id: 'glosario',     titulo: 'Glosario',                                  tipo: 'especial', icon: 'mdi:book-open-variant-outline', nota: 'por recibir' },

    { id: 'referencias',     titulo: 'Referencias',                               tipo: 'especial', icon: 'mdi:bookmark-outline' },
  ],

  /* REFERENCIAS · APA literal del DI §Referencias */
  referencias: [
    'Apache Software Foundation. (s. f.). Apache Atlas documentation. Consultado el 21 de septiembre de 2026. https://atlas.apache.org/2.3.0/index.html',
    'DAMA International. (2024). The DAMA-DMBOK 2.0 revised edition: Data management body of knowledge. Technics Publications.',
    'LexLatin. (2026, 10 de junio). Perú reforma su régimen de protección de datos personales: qué cambia para las empresas en 2026. https://lexlatin.com/reportajes/proteccion-datos-personales-peru-empresas-oficial-cumplimiento-reforma',
    'National Institute of Standards and Technology. (2020). NIST Privacy Framework: A tool for improving privacy through enterprise risk management, Version 1.0. U.S. Department of Commerce. https://www.nist.gov/privacy-framework/privacy-framework',
    'National Institute of Standards and Technology. (2025). NIST Privacy Framework 1.1 (Initial Public Draft, CSWP 40). https://csrc.nist.gov/pubs/cswp/40/nist-privacy-framework-11/ipd',
    'OpenLineage Community. (s. f.). OpenLineage documentation. Consultado el 21 de septiembre de 2026. https://openlineage.io/docs/',
    'OpenMetadata. (s. f.). Data lineage. OpenMetadata Documentation. Consultado el 21 de septiembre de 2026. https://docs.open-metadata.org/latest/how-to-guides/data-lineage',
    'Perú. Congreso de la República. (2011, 3 de julio). Ley N.º 29733, Ley de Protección de Datos Personales. Diario Oficial El Peruano.',
    'Perú. Ministerio de Justicia y Derechos Humanos. (2024, 30 de noviembre). Decreto Supremo N.º 016-2024-JUS: Reglamento de la Ley N.º 29733, Ley de Protección de Datos Personales. Diario Oficial El Peruano. https://www.gob.pe/institucion/anpd/normas-legales/6554453-n-016-2024-jus',
    'PostgreSQL Global Development Group. (2026). Row security policies. PostgreSQL 18 Documentation. Consultado el 21 de septiembre de 2026. https://www.postgresql.org/docs/18/ddl-rowsecurity.html',
    'Zaharia, M., Chowdhury, M., Das, T., Dave, A., Ma, J., McCauley, M., Franklin, M. J., Shenker, S., y Stoica, I. (2012). Resilient distributed datasets: A fault-tolerant abstraction for in-memory cluster computing. Proceedings of the 9th USENIX Symposium on Networked Systems Design and Implementation, 15–28.',
  ],

  creditos: {
    institucion: 'Scala Learning',
  },
};
