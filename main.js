document.addEventListener('DOMContentLoaded', () => {
    //SELECTORES
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    const btns = document.querySelectorAll('.lang-btn');
    const dot = document.getElementById('dot');
    const switcher = document.getElementById('lang-switcher');
    const spaContent = document.getElementById('spa-content');

    //DICCIONARIO DE TRADUCCIONES 
    window.translations = {
        es: {
            "nav-servicios": "SERVICIOS",
            "nav-proyectos": "PROYECTOS",
            "nav-sobre": "SOBRE MÍ",
            "nav-blog": "BLOG",
            "nav-contacto": "CONTACTO",
            "hero-line1": "Diseño Web",
            "hero-line2": "Freelance",
            "hero-sub": "Diseño web y SEO estratégico para negocios en Barcelona",
            "method-title": "Metodología",
            "contact-title": "Contacto",
            //TITULOS-META
            "title-index-meta": "CC Designs | Diseño Web y SEO Freelance en Barcelona",
            "title-about-meta": "Sobre Mí | CC Designs",
            "title-blog-meta": "Blog | CC Designs",
            "title-aviso-legal-meta": "Aviso Legal | CC Designs",
            "title-privacidad-meta": "Política de Privacidad | CC Designs",
            "title-cookies-meta": "Política de Cookies | CC Designs",
            //DESCRIPCIONES-META
            "description-index-meta": "Diseño web profesional y estrategias SEO en Barcelona. Ayudo a pymes y autónomos a potenciar su presencia digital con webs de alto rendimiento y posicionamiento orgánico.",
            "description-about-meta": "Conoce mi metodología de trabajo y cómo ayudo a negocios de Barcelona a destacar con webs de alto rendimiento.",
            "description-blog-meta": "Artículos y guías sobre diseño web, estrategias SEO y mantenimiento técnico para potenciar la visibilidad online de tu negocio en Barcelona.",
            "description-aviso-legal-meta": "Información general y condiciones de uso del sitio web de CC Designs, conforme a la normativa LSSI-CE.",
            "description-privacidad-meta": "Política de privacidad y protección de datos de CC Designs. Conoce cómo se tratan tus datos personales según el RGPD.",
            "description-cookies-meta": "Información detallada sobre el uso de cookies en CC Designs para mejorar tu experiencia de navegación.",
            // HERO
            "hero-title-1": "Diseño Web",
            "hero-title-2": "Freelance",
            "hero-subtext": "Diseño web y SEO estratégico para negocios en Barcelona",
            "hero-btn-proyectos": "Proyectos",
            "hero-btn-contacto": "Contacto",
            "hero-scroll": "Explorar",
            //METOLODOGIA
            "method-title": "Metodología",
            "method-tagline": "Un proceso estructurado para una web de alto rendimiento",
            "method-1-t": "Consultoría y Análisis",
            "method-1-p": "Definir los objetivos para identificar oportunidades y maximizar tu presencia en buscadores.",
            "method-2-t": "Propuesta y Estructura",
            "method-2-p": "Diseño de una navegación intuitiva y optimizada para convertir cada visita en una oportunidad de negocio.",
            "method-3-t": "Diseño Web y SEO",
            "method-3-p": "Creación de una interfaz optimizada para garantizar una imagen coherente y profesional de tu marca.",
            "method-4-t": "Entrega y Lanzamiento",
            "method-4-p": "Tests de rendimiento final y entrega de una guía detallada para gestionar tu sitio con total autonomía.",
            //SERVICIOS
            "services-title": "Servicios",
            "services-tagline": "Soluciones digitales con enfoque estratégico",
            "ser-1-t": "Diseño Web UI/UX",
            "ser-1-p": "Creación de interfaces que reflejan tu identidad de marca, asegurando una experiencia óptima en cualquier dispositivo.",
            "ser-tag-responsive": "Responsive",
            "ser-2-t": "SEO y Copywriting",
            "ser-2-p": "Estrategias de posicionamiento y redacción de contenidos para atraer tráfico cualificado y convertir visitas en clientes reales.",
            "ser-tag-seo-local": "SEO Local",
            "ser-tag-gbp": "Perfil de empresa",
            "ser-tag-copy": "Redacción Estratégica",
            "ser-3-t": "Mantenimiento Web",
            "ser-3-p": "Soporte técnico continuo y optimización para que tu sitio web sea siempre rápido, seguro, esté actualizado y libre de errores.",
            "ser-tag-updates": "Actualizaciones",
            "ser-4-t": "Identidad Visual",
            "ser-4-p": "Soluciones visuales, logotipos y estilos corporativos para convertir la imagen de tu negocio en su mejor carta de presentación.",
            "ser-tag-branding": "Branding Corporativo",
            "ser-tag-manual": "Manual de Identidad",
            //CTA
            "cta-title": "¿Hablamos de tu proyecto?",
            "cta-tagline": "Diseño y SEO para que tu negocio destaque",
            "cta-btn": "Empieza ahora",
            //PROYECTOS
            "proj-title": "Proyectos",
            "proj-tagline": "Colaboraciones recientes",
            "proj-explore": "Explorar",
            "proj-1-t": "Concepto: Estudio de Arquitectura",
            "proj-1-p": "Interfaz optimizada para la navegación visual del portafolio, priorizando la estética y la experiencia de usuario.",
            "proj-2-t": "Espacio de Eventos",
            "proj-2-p": "Participación en el rediseño de web para emblemática torre en Pedralbes, con una estructura organizada y navegación fluida.",
            "proj-3-t": "Concepto: Centro de Estética",
            "proj-3-p": "Interfaz 3D y desenfoque dinámico para priorizar la lectura central, con un sistema de gestión de reservas directo.",
            "proj-4-t": "Artículos para blogs",
            "proj-4-p": "Redacción de más de 120 artículos optimizados para mejorar la autoridad de dominio y el ranking orgánico en Google.",
            "proj-5-t": "Concepto: Restaurante de Autor",
            "proj-5-p": "Landing page para el sector gastronómico, diseñado para priorizar la conversión a través de la gestión de reservas.",
            "proj-6-t": "Concepto: Portafolio de Fotografía",
            "proj-6-p": "Prioriza la atmósfera visual y la conexión directa en redes sociales para fomentar una conversión orgánica.",
            "proj-7-t": "Concepto: Tienda de decoración",
            "proj-7-p": "Interfaz e-commerce optimizado con puntos de venta interactivos para la visualización directa de productos.",
            "proj-8-t": "Construcción y Reformas",
            "proj-8-p": "Interfaz corporativa para servicios de construcción, optimizada con SEO local para la captación de clientes.",
            //FAQ
            "faq-title": "Preguntas Frecuentes",
            "faq-tagline": "Resolviendo tus dudas antes de empezar",
            "faq-1-q": "¿Cuánto tiempo tarda en estar lista una web?",
            "faq-1-a": "El plazo de entrega suele oscilar entre 5 días y 4 semanas. Este tiempo depende directamente de la complejidad del proyecto y de la agilidad en la entrega de los materiales necesarios para el desarrollo.",
            "faq-2-q": "¿Necesito contratar el hosting por mi cuenta?",
            "faq-2-a": "El coste del alojamiento es independiente al presupuesto del proyecto. Puedo asesorarte para seleccionar el proveedor más eficiente según tus necesidades.",
            "faq-3-q": "¿Mi web aparecerá en la primera página de Google?",
            "faq-3-a": "Cada sitio se entrega con una optimización SEO técnica de base. Diseño una arquitectura de contenidos estratégica para maximizar tu visibilidad orgánica.",
            "faq-4-q": "¿Podré editar los contenidos yo mismo?",
            "faq-4-a": "Absolutamente. Tras el lanzamiento, recibirás una guía para administrar tus contenidos con total libertad.",
            //CONTACTO
            "contact-title": "Contacto",
            "contact-tagline": "Hablemos sobre tu próximo proyecto",
            "form-name": "Nombre",
            "form-name-ph": "Tu nombre",
            "form-email": "Email",
            "form-email-ph": "hola@tuempresa.com",
            "form-msg": "Mensaje",
            "form-msg-ph": "Cuéntame sobre tu idea...",
            "form-privacy": "He leído y acepto la",
            "form-privacy-link": "política de privacidad",
            "form-submit": "Enviar Mensaje",
            //FOOTER
            "footer-desc": "DISEÑO WEB & SEO EN BARCELONA",
            "footer-aviso": "Aviso Legal",
            "footer-privacidad": "Privacidad",
            "footer-cookies": "Cookies",
            //COOKIE-BANNER
            "cookie-text": "Este sitio utiliza cookies para optimizar la experiencia de navegación y el análisis estadístico del sitio. Al aceptar, das tu consentimiento al uso de las mismas.",
            "cookie-more": "Leer más",
            "cookie-reject": "Rechazar",
            "cookie-accept": "Aceptar",
            //WHATSAPP
            "whatsapp-text": "Cuéntame tu proyecto",
            //SOBRE-MI
            "nav-sobre": "SOBRE MÍ",
            "about-title": "Sobre mi",
            "about-tagline": "Creatividad estratégica y base técnica",
            "about-p1": "Mi metodología une la base técnica de mi formación en sistemas con el enfoque como diseñadora creativa. Trabajar en una agencia de Barcelona me dio la experiencia de formar parte del equipo técnico desarrollando sitios con WordPress y Elementor Pro para una gran variedad de clientes.",
            "about-p2": "También he gestionado estrategias de SEO y redacción de contenidos, con más de 120 artículos optimizados que ayudan a los negocios a subir posiciones en Google de forma orgánica.",
            "about-p3": "En CC Designs, me tomo cada trabajo como algo propio, buscando que el resultado no sea solo una web estética, sino una herramienta que ayude a impulsar tu negocio.",
            "about-trayectoria": "Trayectoria",
            "about-trayectoria-p": "Experiencia mixta en agencia y proyectos freelance.",
            "about-herramientas": "Herramientas",
            "about-servicios": "Servicios",
            "about-servicios-p": "Diseño web, SEO, copywriting y mantenimiento técnico.",
            "about-ubicacion": "Ubicación",
            "about-ubicacion-p": "Barcelona, España (disponible en remoto).",
            //CTA-SOBRE-MI
            "about-cta-t": "¿Tienes una idea en mente?",
            "about-cta-p": "Hablemos sobre cómo puedo ayudarte a impulsarla",
            "about-cta-btn": "Contactar ahora",
            //BLOG
            "blog-title": "Artículos",
            "blog-tagline": "Filtra por categoría para explorar",
            //FILTROS-BLOG
            "filter-all": "Todos",
            "filter-ui": "UI/UX",
            "filter-seo": "SEO",
            "filter-maint": "Mantenimiento",
            //POSTS-BLOG
            "blog-post1-t": "¿Qué es el SEO local y por qué tu negocio lo necesita?",
            "blog-post1-p": "SEO local para pymes en Barcelona: El 46% de las búsquedas en Google son locales. Si tu negocio no está optimizado, pierdes clientes.",
            "blog-post2-t": "Diseño web para pymes en Barcelona: guía práctica",
            "blog-post2-p": "¿Tu sitio web trabaja tanto como tú? Descubre por qué un diseño web profesional es la clave para aumentar tus ventas.",
            "blog-post3-t": "Mantenimiento web: guía de 10 pasos para tu negocio",
            "blog-post3-p": "Aprende a evitar errores técnicos y fallos de seguridad con esta guía diseñada para que tu negocio funcione siempre rápido.",
            "blog-post4-t": "El uso de la psicología del color en el diseño UX/UI",
            "blog-post4-p": "¿Qué transmiten los colores de tu web? Descubre cómo la psicología del color transforma la experiencia de tus visitas.",
            "blog-post5-t": "AEO y GEO: Los pilares innegociables de la autoridad digital",
            "blog-post5-p": "Optimización para IA: Cómo adaptar tu contenido para que los motores de respuesta (AEO) y generativos (GEO) te recomienden.",
            "blog-post6-t": "¿Qué chatbot necesita tu empresa en 2026?",
            "blog-post6-p": "Descubre cómo elegir el chatbot ideal para mejorar la atención al cliente y reforzar la autoridad de tu marca en cada interacción.",
            //AVISO LEGAL
            "legal-title": "Aviso Legal",
            "legal-tagline": "CONDICIONES GENERALES DE USO Y CUMPLIMIENTO LSSI-CE",
            "legal-s1-t": "I. INFORMACIÓN GENERAL",
            "legal-s1-p1": "En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:",
            "legal-s1-p2": "La titularidad de este sitio web, https://ccdesigns.eu, (en adelante, Sitio Web) la ostenta:",
            "legal-s1-owner": "Titular:",
            "legal-s1-nif": "NIF:",
            "legal-s1-address": "Dirección:",
            "legal-s1-email": "Email de contacto:",
            "legal-s2-t": "II. TÉRMINOS Y CONDICIONES GENERALES DE USO",
            "legal-s2-st1": "El objeto de las condiciones: El Sitio Web",
            "legal-s2-p1": "El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).",
            "legal-s2-p2": "CC Designs se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web. El Usuario reconoce y acepta que en cualquier momento CC Designs pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.",
            "legal-s2-st2": "El Usuario",
            "legal-s2-p3": "El acceso, la navegación y uso del Sitio Web confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web.",
            "legal-s2-p4": "Este Sitio Web de CC Designs no se dirige a menores de edad. CC Designs declina cualquier responsabilidad por el incumplimiento de este requisito. El Sitio Web está dirigido principalmente a Usuarios residentes en España.",
            "legal-s3-t": "III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB",
            "legal-s3-p1": "CC Designs no garantiza la continuidad, disponibilidad y utilidad del Sitio Web. CC Designs hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso sea ininterrumpido o esté libre de error.",
            "legal-s3-p2": "Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio Web esté libre de error o cause un daño al sistema informático del Usuario.",
            "legal-s4-t": "IV. POLÍTICA DE ENLACES",
            "legal-s4-p1": "El Sitio Web de CC Designs pone o puede poner a disposición de los Usuarios medios de enlace que permiten acceder a sitios web pertenecientes y/o gestionados por terceros. CC Designs no ofrece ni comercializa por sí ni por medio de terceros los productos y/o servicios disponibles en dichos sitios enlazados.",
            "legal-s5-t": "V. PROPIEDAD INTELECTUAL E INDUSTRIAL",
            "legal-s5-p1": "CC Designs por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública de la totalidad o parte de los contenidos de esta página web con fines comerciales sin la autorización de CC Designs.",
            "legal-s6-t": "VI. ACCIONES LEGALES, LEGISLACIÓN Y JURISDICCIÓN",
            "legal-s6-p1": "CC Designs se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web. La relación entre el Usuario y CC Designs se regirá por la normativa vigente en el territorio español, sometiéndose a los jueces y tribunales de la ciudad de Barcelona.",
            "legal-update": "Última actualización:",
            "legal-date": "18 de marzo de 2026",
            //PPRIVACIDAD
            "privacy-title": "Privacidad",
            "privacy-tagline": "POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS",
            "privacy-section1-title": "I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS",
            "privacy-section1-p1": "Respetando lo establecido en la legislación vigente, CC Designs (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.",
            "privacy-laws-title": "Leyes que incorpora esta política de privacidad",
            "privacy-laws-p1": "Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:",
            "privacy-law-rgpd": "El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).",
            "privacy-law-lopd": "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).",
            "privacy-law-rdlopd": "El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).",
            "privacy-law-lssi": "La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).",
            "privacy-resp-title": "Identidad del responsable del tratamiento de los datos personales",
            "privacy-resp-intro": "El responsable del tratamiento de los datos personales recogidos en CC Designs es:",
            "privacy-resp-label-name": "Responsable:",
            "privacy-resp-label-nif": "NIF:",
            "privacy-resp-label-address": "Dirección:",
            "privacy-resp-city": "Barcelona, España",
            "privacy-resp-label-email": "Email de contacto:",
            "privacy-register-title": "Registro de Datos de Carácter Personal",
            "privacy-register-p1": "En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por CC Designs, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre CC Designs y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.",
            "privacy-principles-title": "Principios aplicables al tratamiento de los datos personales",
            "privacy-principles-intro": "El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018:",
            "privacy-principle-loyalty": "Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.",
            "privacy-principle-purpose": "Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.",
            "privacy-principle-minimization": "Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.",
            "privacy-principle-accuracy": "Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.",
            "privacy-principle-storage": "Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.",
            "privacy-principle-integrity": "Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.",
            "privacy-principle-accountability": "Principio de responsabilidad proactiva: el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.",
            "privacy-categories-title": "Categorías, Base legal y Fines del tratamiento",
            "privacy-categories-label": "Categorías de datos personales:",
            "privacy-categories-desc": "Las categorías de datos que se tratan en CC Designs son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.",
            "privacy-basis-label": "Base legal para el tratamiento de los datos personales:",
            "privacy-basis-desc": "La base legal para el tratamiento de los datos personales es el consentimiento. CC Designs se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.",
            "privacy-basis-withdraw": "El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.",
            "privacy-purposes-label": "Fines del tratamiento a que se destinan los datos personales:",
            "privacy-purposes-desc": "Los datos personales son recabados y gestionados por CC Designs con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.",
            "privacy-purposes-extra": "Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de CC Designs, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.",
            "privacy-retention-title": "Retención, Destinatarios y Menores",
            "privacy-retention-label": "Períodos de retención de los datos personales:",
            "privacy-retention-desc": "Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: 12 meses, o hasta que el Usuario solicite su supresión.",
            "privacy-destined-label": "Destinatarios de los datos personales:",
            "privacy-destined-desc": "Los datos personales del Usuario no serán compartidos con terceros, salvo obligación legal o para la prestación de servicios técnicos necesarios para el funcionamiento del sitio (como hosting o analítica). Específicamente, para la gestión y envío de los formularios de contacto, CC Designs utiliza la plataforma Formspree (Formspree, Inc.). Este servicio actúa como encargado del tratamiento y sus servidores se encuentran ubicados en Estados Unidos, contando con las garantías de seguridad adecuadas para la transferencia internacional de datos.",
            "privacy-minors-label": "Datos personales de menores de edad:",
            "privacy-minors-desc": "Los servicios de CC Designs están dirigidos a profesionales y empresas, no estando destinados a menores de edad. De acuerdo con la normativa vigente, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales. En el caso de menores de 14 años, se requerirá el consentimiento de padres o tutores para dicho tratamiento.",
            "privacy-security-title": "Secreto y seguridad de los datos personales",
            "privacy-security-p1": "CC Designs se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.",
            "privacy-security-p2": "Sin embargo, debido a que CC Designs no puede garantizar la inexpugnabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas.",
            "privacy-rights-title": "Derechos derivados del tratamiento de los datos personales",
            "privacy-rights-intro": "El Usuario podrá ejercer frente al Responsable del tratamiento los siguientes derechos:",
            "privacy-right-access-t": "Derecho de acceso:",
            "privacy-right-access-p": "Obtener confirmación de si se están tratando sus datos y obtener información sobre los mismos.",
            "privacy-right-rectification-t": "Derecho de rectificación:",
            "privacy-right-rectification-p": "Modificar datos inexactos o incompletos.",
            "privacy-right-erasure-t": "Derecho de supresión (\"el derecho al olvido\"):",
            "privacy-right-erasure-p": "Obtener la supresión de datos cuando ya no sean necesarios o el consentimiento sea retirado.",
            "privacy-right-limitation-t": "Derecho a la limitación del tratamiento:",
            "privacy-right-limitation-p": "Limitar el uso de los datos en casos específicos previstos por la ley.",
            "privacy-right-portability-t": "Derecho a la portabilidad de los datos:",
            "privacy-right-portability-p": "Recibir los datos en un formato estructurado para transmitirlos a otro responsable.",
            "privacy-right-opposition-t": "Derecho de oposición:",
            "privacy-right-opposition-p": "Oponerse a que se lleve a cabo el tratamiento de sus datos.",
            "privacy-right-automated-t": "Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado:",
            "privacy-right-automated-p": "Incluida la elaboración de perfiles.",
            "privacy-rights-contact-p": "Para ejercer sus derechos, el Usuario debe enviar comunicación escrita con referencia \"RGPD-ccdesigns.eu\", especificando nombre, apellidos y adjuntando copia de DNI a:",
            "privacy-rights-email-label": "Email:",
            "privacy-rights-complaint": "En caso de considerar que existe una infracción, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (https://www.aepd.es/).",
            "privacy-accept-title": "II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD",
            "privacy-accept-p1": "Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad. El uso del Sitio Web implicará la aceptación de la misma.",
            "privacy-accept-p2": "CC Designs se reserva el derecho a modificar su Política de Privacidad de acuerdo a su propio criterio o motivado por un cambio legislativo. Los cambios no serán notificados de forma explícita, por lo que se recomienda consultar esta página periódicamente.",
            "privacy-update-label": "Última actualización:",
            "privacy-update-date": "18 de marzo de 2026",
            //COOKIES
            "cookies-title": "Cookies",
            "cookies-tagline": "POLÍTICA DE COOKIES Y NAVEGACIÓN",
            "cookies-intro-p1": "El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario para que el servidor recuerde cierta información que posteriormente únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.",
            "cookies-intro-p2": "Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, personalizar su experiencia y ayudar a identificar y resolver errores.",
            "cookies-intro-p3": "Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario.",
            "cookies-own-title": "Cookies propias",
            "cookies-own-p1": "Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por CC Designs para el mejor funcionamiento del Sitio Web.",
            "cookies-own-p2": "La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.",
            "cookies-table-name": "Nombre",
            "cookies-table-duration": "Duración",
            "cookies-table-description": "Descripción",
            "cookies-own-duration-1": "1 año",
            "cookies-own-desc-1": "Cookie técnica necesaria que almacena el estado de consentimiento del usuario respecto a las cookies.",
            "cookies-third-title": "Cookies de terceros",
            "cookies-third-p1": "Son cookies utilizadas y gestionadas por entidades externas que proporcionan a CC Designs servicios para mejorar el Sitio Web y la experiencia del usuario. Son cookies utilizadas y gestionadas por entidades externas que proporcionan a CC Designs servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web.",
            "cookies-third-p2": "Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web. En este sitio se utilizan etiquetas JavaScript de GA4 (Google Analytics 4):",
            "cookies-third-duration-ga": "2 años",
            "cookies-third-desc-ga": "Se usa para distinguir a los usuarios de forma anónima.",
            "cookies-third-duration-gaid": "2 años",
            "cookies-third-desc-gaid": "Se usa para mantener el estado de la sesión y realizar el seguimiento de eventos.",
            "cookies-third-info": "La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita. Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.",
            "cookies-third-link-text": "Puede obtener más información sobre el tratamiento de datos de Analytics en el siguiente enlace:",
            "cookies-third-link-anchor": "Medidas de protección de datos de Google",
            "cookies-manage-title": "Disable, reject and delete cookies",
            "cookies-manage-p1": "The User can disable, reject and delete the cookies installed on their device through their browser settings (Chrome, Firefox, Safari, Explorer, etc.). If the User rejects the use of cookies, they may continue to use the Website, although the use of some of its features may be limited.",
            "cookies-manage-title": "Deshabilitar, rechazar y eliminar cookies",
            "cookies-manage-p1": "El Usuario puede deshabilitar, rechazar y eliminar las cookies instaladas en su dispositivo mediante la configuración de su navegador (Chrome, Firefox, Safari, Explorer, etc.). Si rechaza el uso de cookies, podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.",
            //ARTICULOS
            "link-chatbots-post": "chatbot-empresa-2026.html",
            "link-aeo-post": "aeo-respuestas-ia.html",
            "link-color-post": "psicologia-color.html",
            "link-maintenance-post": "mantenimiento-web-guia.html",
            "link-design-post": "diseno-web-barcelona.html",
            "link-seo-post": "seo-local-barcelona.html",

        },
        en: {
            "nav-servicios": "SERVICES",
            "nav-proyectos": "PROJECTS",
            "nav-sobre": "ABOUT ME",
            "nav-blog": "BLOG",
            "nav-contacto": "CONTACT",
            "hero-line1": "Web Design",
            "hero-line2": "Freelance",
            "hero-sub": "Strategic web design and SEO for businesses in Barcelona",
            "method-title": "Methodology",
            "contact-title": "Contact",
            //TITULOS-META
            "title-index-meta": "CC Designs | Freelance Web Design & SEO in Barcelona",
            "title-about-meta": "About Me | CC Designs",
            "title-blog-meta": "Blog | CC Designs",
            "title-aviso-legal-meta": "Legal Notice | CC Designs",
            "title-privacidad-meta": "Privacy Policy | CC Designs",
            "title-cookies-meta": "Cookies Policy | CC Designs",
            //DESCRIPCIONES-META
            "description-index-meta": "Professional web design and SEO strategies in Barcelona. I help SMEs and freelancers boost their digital presence with high-performance websites and organic positioning.",
            "description-about-meta": "Learn about my work methodology and how I help Barcelona businesses stand out with high-performance websites.",
            "description-blog-meta": "Articles and guides on web design, SEO strategies, and technical maintenance to boost your business's online visibility in Barcelona.",
            "description-aviso-legal-meta": "General information and terms of use of the CC Designs website, in compliance with LSSI-CE regulations.",
            "description-privacidad-meta": "CC Designs privacy and data protection policy. Learn how your personal data is processed according to the GDPR.",
            "description-cookies-meta": "Detailed information about the use of cookies at CC Designs to improve your browsing experience.",
            // HERO
            "hero-title-1": "Web Design",
            "hero-title-2": "Freelance",
            "hero-subtext": "Strategic web design and SEO for businesses in Barcelona",
            "hero-btn-proyectos": "Projects",
            "hero-btn-contacto": "Contact",
            "hero-scroll": "Explore",
            //METODOLOGIA
            "method-title": "Methodology",
            "method-tagline": "A structured process for a high-performance website",
            "method-1-t": "Consulting & Analysis",
            "method-1-p": "Defining strategic goals to identify opportunities and maximize your search engine visibility.",
            "method-2-t": "Proposal & Structure",
            "method-2-p": "Designing an intuitive navigation and optimized structure to turn every visit into an opportunity.",
            "method-3-t": "Web Design & SEO",
            "method-3-p": "Creating an optimized interface to ensure a consistent and professional image for your brand.",
            "method-4-t": "Delivery & Launch",
            "method-4-p": "Conducting tests before launch and providing a guide for autonomous site management.",
            //SERVICIOS
            "services-title": "Services",
            "services-tagline": "Digital solutions with a strategic approach",
            "ser-1-t": "UI/UX Web Design",
            "ser-1-p": "Creating interfaces that reflect your brand identity, ensuring an optimal experience on any device.",
            "ser-tag-responsive": "Responsive",
            "ser-2-t": "SEO & Copywriting",
            "ser-2-p": "Positioning strategies and content writing to attract qualified traffic and turn visits into real customers.",
            "ser-tag-seo-local": "Local SEO",
            "ser-tag-gbp": "Business Profile",
            "ser-tag-copy": "Strategic Writing",
            "ser-3-t": "Web Maintenance",
            "ser-3-p": "Continuous technical support and optimization so your website is always fast, secure, up-to-date, and error-free.",
            "ser-tag-updates": "Updates",
            "ser-4-t": "Visual Identity",
            "ser-4-p": "Visual solutions, logos, and corporate styles to turn your business image into its best first impression.",
            "ser-tag-branding": "Corporate Branding",
            "ser-tag-manual": "Identity Manual",
            //CTA
            "cta-title": "Let's talk about your project",
            "cta-tagline": "Web design and SEO to elevate your brand",
            "cta-btn": "Start now",
            //PROYECTOS
            "proj-title": "Projects",
            "proj-tagline": "Recent collaborations",
            "proj-explore": "Explore",
            "proj-1-t": "Concept: Architecture Studio",
            "proj-1-p": "Optimized interface for visual portfolio navigation, prioritizing aesthetics and user experience.",
            "proj-2-t": "Events Venue",
            "proj-2-p": "Participation in the web redesign for an iconic tower in Pedralbes, with an organized structure and smooth navigation.",
            "proj-3-t": "Concept: Aesthetics Center",
            "proj-3-p": "3D interface and dynamic blur to prioritize central reading, with a direct booking management system.",
            "proj-4-t": "Blog Articles",
            "proj-4-p": "Over 120 optimized articles written to improve domain authority and organic Google ranking.",
            "proj-5-t": "Concept: Designer Restaurant",
            "proj-5-p": "Landing page for the gastronomic sector, designed to prioritize conversion through reservation management.",
            "proj-6-t": "Concept: Photography Portfolio",
            "proj-6-p": "Prioritizes visual atmosphere and direct social media connection to foster organic conversion.",
            "proj-7-t": "Concept: Decoration Store",
            "proj-7-p": "E-commerce interface optimized with interactive hotspots for direct product visualization.",
            "proj-8-t": "Construction and Renovations",
            "proj-8-p": "Corporate interface for construction services, optimized with local SEO for lead generation.",
            //FAQ
            "faq-title": "Frequently Asked Questions",
            "faq-tagline": "Solving your doubts before starting",
            "faq-1-q": "How long does it take for a website to be ready?",
            "faq-1-a": "The delivery time usually ranges between 5 days and 4 weeks. This depends on project complexity and material delivery speed.",
            "faq-2-q": "Do I need to hire the hosting on my own?",
            "faq-2-a": "The hosting cost is independent. I can advise you on selecting the most efficient provider for your needs.",
            "faq-3-q": "Will my website appear on the first page of Google?",
            "faq-3-a": "Every site is delivered with technical SEO optimization to maximize your organic visibility.",
            "faq-4-q": "Will I be able to edit the content myself?",
            "faq-4-a": "Absolutely. After the launch, you will receive a guide to manage your content with total freedom.",
            //CONTACTO
            "contact-title": "Contact",
            "contact-tagline": "Let's talk about your next project",
            "form-name": "Name",
            "form-name-ph": "Your name",
            "form-email": "Email",
            "form-email-ph": "hello@yourcompany.com",
            "form-msg": "Message",
            "form-msg-ph": "Tell me about your idea...",
            "form-privacy": "I have read and accept the",
            "form-privacy-link": "privacy policy",
            "form-submit": "Send Message",
            //FOOTER
            "footer-desc": "WEB DESIGN & SEO IN BARCELONA",
            "footer-aviso": "Legal Notice",
            "footer-privacidad": "Privacy Policy",
            "footer-cookies": "Cookies",
            //COOKIE-BANNER
            "cookie-text": "This site uses cookies to optimize your browsing experience and for statistical analysis. By accepting, you consent to their use.",
            "cookie-more": "Read more",
            "cookie-reject": "Reject",
            "cookie-accept": "Accept",
            //WHATSAPP
            "whatsapp-text": "Start your project",
            //SOBRE-MI
            "nav-sobre": "ABOUT ME",
            "about-title": "About Me",
            "about-tagline": "Strategic creativity with technical foundation",
            "about-p1": "My methodology combines a technical systems background with my perspective as a creative designer. Working at a Barcelona-based agency gave me the experience of being part of the technical team, developing WordPress and Elementor Pro websites across various industries.",
            "about-p2": "I have also managed SEO strategies and content writing, with over 120 optimized articles helping businesses climb Google rankings organically.",
            "about-p3": "At CC Designs, I treat every project as my own, ensuring the result isn't just an aesthetic website, but a powerful tool to help drive your business forward.",
            "about-trayectoria": "Experience",
            "about-trayectoria-p": "Mixed experience in agency and freelance projects.",
            "about-herramientas": "Tools",
            "about-servicios": "Services",
            "about-servicios-p": "Web design, SEO, copywriting, and technical maintenance.",
            "about-ubicacion": "Location",
            "about-ubicacion-p": "Based in Barcelona, Spain (remote available).",
            //CTA-SOBRE-MI
            "about-cta-t": "Have an idea in mind?",
            "about-cta-p": "Let's talk about how I can help you boost it",
            "about-cta-btn": "Contact now",
            //BLOG
            "blog-title": "Articles",
            "blog-tagline": "Filter by category to explore",
            //FILTROS-BLOG
            "filter-all": "All",
            "filter-ui": "UI/UX",
            "filter-seo": "SEO",
            "filter-maint": "Maintenance",
            //POSTS-BLOG
            "blog-post1-t": "What is local SEO and why does your business need it?",
            "blog-post1-p": "Local SEO for SMEs in Barcelona: 46% of Google searches are local. If your business is not optimized, you lose customers.",
            "blog-post2-t": "Web design for SMEs in Barcelona: a practical guide",
            "blog-post2-p": "Is your website working as hard as you are? Discover why professional web design is the key to increasing your sales.",
            "blog-post3-t": "Web maintenance: 10-step guide for your business",
            "blog-post3-p": "Learn how to avoid technical errors and security flaws with this guide designed to keep your business running fast.",
            "blog-post4-t": "Color psychology in UX/UI: How it influences user behavior",
            "blog-post4-p": "What do your website's colors evoke? Discover how color psychology shapes the user experience.",
            "blog-post5-t": "Why AEO and GEO are non-negotiable for digital authority",
            "blog-post5-p": "AI optimization: How to adapt your content so answer engines (AEO) and generative engines (GEO) recommend you.",
            "blog-post6-t": "Choosing the right chatbot for your business in 2026",
            "blog-post6-p": "Discover how to choose the perfect chatbot to enhance customer support and strengthen your brand authority.",
            //AVISO-LEGAL
            "legal-title": "Legal Notice",
            "legal-tagline": "GENERAL CONDITIONS OF USE AND LSSI-CE COMPLIANCE",
            "legal-s1-t": "I. GENERAL INFORMATION",
            "legal-s1-p1": "In compliance with the information duty set forth in Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE) of July 11, the following general information data for this website are provided below:",
            "legal-s1-p2": "The ownership of this website, https://ccdesigns.eu, (hereinafter, Website) is held by:",
            "legal-s1-owner": "Owner:",
            "legal-s1-nif": "Tax ID (NIF):",
            "legal-s1-address": "Address:",
            "legal-s1-email": "Contact Email:",
            "legal-s2-t": "II. GENERAL TERMS AND CONDITIONS OF USE",
            "legal-s2-st1": "The object of the conditions: The Website",
            "legal-s2-p1": "The purpose of these General Conditions of Use (hereinafter, Conditions) is to regulate access to and use of the Website. For the purposes of these Conditions, Website shall be understood as: the external appearance of the screen interfaces, both statically and dynamically, i.e., the navigation tree; and all elements integrated both in the screen interfaces and in the navigation tree (hereinafter, Contents) and all those online services or resources that may be offered to Users (hereinafter, Services).",
            "legal-s2-p2": "CC Designs reserves the right to modify, at any time and without prior notice, the presentation and configuration of the Website. The User acknowledges and accepts that at any time CC Designs may interrupt, deactivate and/or cancel any of these elements integrated into the Website or access to them.",
            "legal-s2-st2": "The User",
            "legal-s2-p3": "Access, navigation, and use of the Website confer the status of User, whereby all the Conditions established herein, as well as their subsequent modifications, are accepted from the start of navigation. The User assumes responsibility for the correct use of the Website.",
            "legal-s2-p4": "This CC Designs Website is not directed at minors. CC Designs declines any responsibility for failure to comply with this requirement. The Website is primarily directed at Users residing in Spain.",
            "legal-s3-t": "III. ACCESS AND NAVIGATION ON THE WEBSITE",
            "legal-s3-p1": "CC Designs does not guarantee the continuity, availability, and utility of the Website. CC Designs will do everything possible for the proper functioning of the Website; however, it is not responsible for nor does it guarantee that access will be uninterrupted or error-free.",
            "legal-s3-p2": "Nor is it responsible for or does it guarantee that the content or software accessible through this Website is error-free or causes damage to the User's computer system.",
            "legal-s4-t": "IV. LINKS POLICY",
            "legal-s4-p1": "The CC Designs Website provides or may provide Users with linking means that allow access to websites belonging to and/or managed by third parties. CC Designs does not offer or market, by itself or through third parties, the products and/or services available on such linked sites.",
            "legal-s5-t": "V. INTELLECTUAL AND INDUSTRIAL PROPERTY",
            "legal-s5-p1": "CC Designs, by itself or as an assignee, is the owner of all intellectual and industrial property rights of the Website, as well as the elements contained therein. The reproduction, distribution, and public communication of all or part of the contents of this website for commercial purposes without the authorization of CC Designs are expressly prohibited.",
            "legal-s6-t": "VI. LEGAL ACTIONS, LEGISLATION AND JURISDICTION",
            "legal-s6-p1": "CC Designs reserves the right to file civil or criminal actions deemed necessary for the improper use of the Website. The relationship between the User and CC Designs shall be governed by the current regulations in Spanish territory, submitting to the judges and courts of the city of Barcelona.",
            "legal-update": "Last update:",
            "legal-date": "March 18, 2026",
            //PRIVACIDAD
            "privacy-title": "Privacy",
            "privacy-tagline": "PRIVACY POLICY AND DATA PROTECTION",
            "privacy-section1-title": "I. PRIVACY POLICY AND DATA PROTECTION",
            "privacy-section1-p1": "In compliance with current legislation, CC Designs (hereinafter, also Website) undertakes to adopt the necessary technical and organizational measures, according to the level of security appropriate to the risk of the data collected.",
            "privacy-laws-title": "Laws incorporated into this privacy policy",
            "privacy-laws-p1": "This privacy policy is adapted to current Spanish and European regulations regarding the protection of personal data on the internet. Specifically, it respects the following rules:",
            "privacy-law-rgpd": "Regulation (EU) 2016/679 of the European Parliament and of the Council, of April 27, 2016, on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (GDPR).",
            "privacy-law-lopd": "Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital rights (LOPD-GDD).",
            "privacy-law-rdlopd": "Royal Decree 1720/2007, of December 21, approving the Regulations for the development of Organic Law 15/1999, of December 13, on the Protection of Personal Data (RDLOPD).",
            "privacy-law-lssi": "Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce (LSSI-CE).",
            "privacy-resp-title": "Identity of the person responsible for processing personal data",
            "privacy-resp-intro": "The person responsible for the processing of personal data collected at CC Designs is:",
            "privacy-resp-label-name": "Responsible:",
            "privacy-resp-label-nif": "Tax ID:",
            "privacy-resp-label-address": "Address:",
            "privacy-resp-city": "Barcelona, Spain",
            "privacy-resp-label-email": "Contact Email:",
            "privacy-register-title": "Personal Data Registry",
            "privacy-register-p1": "In compliance with the provisions of the GDPR and the LOPD-GDD, we inform you that the personal data collected by CC Designs through the forms on its pages will be incorporated and processed in our file in order to facilitate, streamline and fulfill the commitments established between CC Designs and the User or the maintenance of the relationship established in the forms that the latter fills out, or to respond to a request or query. Likewise, in accordance with the provisions of the GDPR and the LOPD-GDD, unless the exception provided for in article 30.5 of the GDPR applies, a record of processing activities is maintained that specifies, according to its purposes, the processing activities carried out and other circumstances established in the GDPR.",
            "privacy-principles-title": "Principles applicable to the processing of personal data",
            "privacy-principles-intro": "The processing of the User's personal data will be subject to the following principles set out in Article 5 of the GDPR and in Article 4 et seq. of Organic Law 3/2018:",
            "privacy-principle-loyalty": "Principle of lawfulness, fairness and transparency: the User's consent will be required at all times after completely transparent information on the purposes for which personal data are collected.",
            "privacy-principle-purpose": "Principle of purpose limitation: personal data will be collected for specified, explicit and legitimate purposes.",
            "privacy-principle-minimization": "Principle of data minimization: the personal data collected will be only those strictly necessary in relation to the purposes for which they are processed.",
            "privacy-principle-accuracy": "Principle of accuracy: personal data must be accurate and always kept up to date.",
            "privacy-principle-storage": "Principle of storage limitation: personal data will only be kept in a way that allows the identification of the User for the time necessary for the purposes of their processing.",
            "privacy-principle-integrity": "Principle of integrity and confidentiality: personal data will be processed in a way that guarantees its security and confidentiality.",
            "privacy-principle-accountability": "Principle of proactive responsibility: the Data Controller will be responsible for ensuring that the above principles are complied with.",
            "privacy-categories-title": "Categories, Legal Basis and Purposes of processing",
            "privacy-categories-label": "Categories of personal data:",
            "privacy-categories-desc": "The categories of data processed in CC Designs are only identifying data. In no case are special categories of personal data processed within the meaning of Article 9 of the GDPR.",
            "privacy-basis-label": "Legal basis for the processing of personal data:",
            "privacy-basis-desc": "The legal basis for the processing of personal data is consent. CC Designs undertakes to obtain the express and verifiable consent of the User for the processing of their personal data for one or more specific purposes.",
            "privacy-basis-withdraw": "The User shall have the right to withdraw their consent at any time. It will be as easy to withdraw consent as it is to give it. As a general rule, the withdrawal of consent will not condition the use of the Website.",
            "privacy-purposes-label": "Purposes of the processing for which the personal data are intended:",
            "privacy-purposes-desc": "Personal data are collected and managed by CC Designs for the purpose of facilitating, streamlining and fulfilling the commitments established between the Website and the User or the maintenance of the relationship established in the forms that the latter fills out or to attend to a request or query.",
            "privacy-purposes-extra": "Likewise, the data may be used for a commercial purpose of personalization, operational and statistical purposes, and activities specific to the corporate object of CC Designs, as well as for the extraction, storage of data and marketing studies to adapt the Content offered to the User, as well as to improve the quality, operation and navigation of the Website.",
            "privacy-retention-title": "Retention, Recipients and Minors",
            "privacy-retention-label": "Retention periods of personal data:",
            "privacy-retention-desc": "Personal data will only be retained for the minimum time necessary for the purposes of its processing and, in any case, only during the following period: 12 months, or until the User requests its deletion.",
            "privacy-destined-label": "Recipients of personal data:",
            "privacy-destined-desc": "The User's personal data will not be shared with third parties, except for legal obligation or for the provision of technical services necessary for the operation of the site (such as hosting or analytics). Specifically, for the management and sending of contact forms, CC Designs uses the platform Formspree (Formspree, Inc.). This service acts as a treatment manager and its servers are located in the United States, with adequate security guarantees for the international transfer of data.",
            "privacy-minors-label": "Personal data of minors:",
            "privacy-minors-desc": "The services of CC Designs are aimed at professionals and companies, and are not intended for minors. In accordance with current regulations, only those over 14 years of age may grant their consent for the processing of their personal data. In the case of children under 14 years of age, the consent of parents or guardians will be required for such processing.",
            "privacy-security-title": "Secrecy and security of personal data",
            "privacy-security-p1": "CC Designs undertakes to adopt the necessary technical and organizational measures, according to the level of security appropriate to the risk of the data collected, in order to guarantee the security of personal data and prevent the accidental or unlawful destruction, loss or alteration of personal data transmitted, stored or otherwise processed, or the unauthorized communication or access to such data.",
            "privacy-security-p2": "However, because CC Designs cannot guarantee the invulnerability of the internet or the total absence of hackers or others who fraudulently access personal data, the Data Controller undertakes to notify the User without undue delay when a personal data security breach occurs that is likely to pose a high risk to the rights and freedoms of natural persons.",
            "privacy-rights-title": "Rights derived from the processing of personal data",
            "privacy-rights-intro": "The User may exercise the following rights against the Data Controller:",
            "privacy-right-access-t": "Right of access:",
            "privacy-right-access-p": "To obtain confirmation as to whether or not their data is being processed and to obtain information about it.",
            "privacy-right-rectification-t": "Right to rectification:",
            "privacy-right-rectification-p": "To modify inaccurate or incomplete data.",
            "privacy-right-erasure-t": "Right to erasure (\"the right to be forgotten\"):",
            "privacy-right-erasure-p": "To obtain the deletion of data when it is no longer necessary or consent is withdrawn.",
            "privacy-right-limitation-t": "Right to restriction of processing:",
            "privacy-right-limitation-p": "To limit the use of data in specific cases provided for by law.",
            "privacy-right-portability-t": "Right to data portability:",
            "privacy-right-portability-p": "To receive the data in a structured format to transmit it to another controller.",
            "privacy-right-opposition-t": "Right to object:",
            "privacy-right-opposition-p": "To object to the processing of their data being carried out.",
            "privacy-right-automated-t": "Right not to be subject to a decision based solely on automated processing:",
            "privacy-right-automated-p": "Including profiling.",
            "privacy-rights-contact-p": "To exercise their rights, the User must send a written communication with the reference \"RGPD-ccdesigns.eu\", specifying name, surname and attaching a copy of their ID to:",
            "privacy-rights-email-label": "Email:",
            "privacy-rights-complaint": "If the User considers that there is an infringement, they have the right to file a claim before the Spanish Data Protection Agency (https://www.aepd.es/).",
            "privacy-accept-title": "II. ACCEPTANCE AND CHANGES IN THIS PRIVACY POLICY",
            "privacy-accept-p1": "It is necessary for the User to have read and agree with the conditions on the protection of personal data contained in this Privacy Policy. The use of the Website will imply acceptance of it.",
            "privacy-accept-p2": "CC Designs reserves the right to modify its Privacy Policy according to its own criteria or motivated by a legislative change. Changes will not be explicitly notified, so it is recommended to consult this page periodically.",
            "privacy-update-label": "Last update:",
            "privacy-update-date": "March 18, 2026",
            //COOKIES
            "cookies-title": "Cookies",
            "cookies-tagline": "COOKIES POLICY AND BROWSING",
            "cookies-intro-p1": "Access to this Website may involve the use of cookies. Cookies are small amounts of information that are stored in the browser used by each User so that the server remembers certain information that only the server that implemented it will subsequently read. Cookies facilitate navigation, make it more user-friendly, and do not damage the navigation device.",
            "cookies-intro-p2": "Cookies are automatic procedures for collecting information relating to the preferences determined by the User during their visit to the Website in order to recognize them as a User, personalize their experience and help identify and resolve errors.",
            "cookies-intro-p3": "Cookies that allow a person to be identified are considered personal data. Therefore, the Privacy Policy described above will apply to them. In this sense, the User's consent will be necessary for their use.",
            "cookies-own-title": "First-party cookies",
            "cookies-own-p1": "These are cookies that are sent to the User's computer or device and managed exclusively by CC Designs for the best operation of the Website.",
            "cookies-own-p2": "The information collected is used to improve the quality of the Website and its Content and your experience as a User. These cookies allow the User to be recognized as a recurring visitor to the Website and to adapt the content to offer content that fits their preferences.",
            "cookies-table-name": "Name",
            "cookies-table-duration": "Duration",
            "cookies-table-description": "Description",
            "cookies-own-duration-1": "1 year",
            "cookies-own-desc-1": "Necessary technical cookie that stores the user's consent status regarding cookies.",
            "cookies-third-title": "Third-party cookies",
            "cookies-third-p1": "These are cookies used and managed by external entities that provide CC Designs with services to improve the Website and the user experience. They are cookies used and managed by external entities that provide CC Designs with services requested by the latter to improve the Website and the user experience when browsing the Website.",
            "cookies-third-p2": "The main objectives for which third-party cookies are used are to obtain access statistics and analyze browsing information, that is, how the User interacts with the Website. GA4 (Google Analytics 4) JavaScript tags are used on this site:",
            "cookies-third-duration-ga": "2 years",
            "cookies-third-desc-ga": "Used to distinguish users anonymously.",
            "cookies-third-duration-gaid": "2 years",
            "cookies-third-desc-gaid": "Used to maintain session state and track events.",
            "cookies-third-info": "The information obtained refers, for example, to the number of pages visited, the language, the place of the IP address from which the User accesses, the number of Users who access, the frequency and repetition of visits, the visit time, the browser used, the operator or type of device from which the visit is made. This information is used to improve the Website, and detect new needs to offer Users optimal quality Content and/or service. In any case, the information is collected anonymously and Website trend reports are prepared without identifying individual users.",
            "cookies-third-link-text": "You can obtain more information about the processing of Analytics data at the following link:",
            "cookies-third-link-anchor": "Google data protection measures",
            "cookies-manage-title": "Disable, reject and delete cookies",
            "cookies-manage-p1": "The User can disable, reject and delete the cookies installed on their device through their browser settings (Chrome, Firefox, Safari, Explorer, etc.). If the User rejects the use of cookies, they may continue to use the Website, although the use of some of its features may be limited.",
            //ARTICULOS
            "link-chatbots-post": "en/business-chatbot-2026.html",
            "link-aeo-post": "en/aeo-ai-optimization.html",
            "link-color-post": "en/color-psychology.html",
            "link-maintenance-post": "en/web-maintenance-guide.html",
            "link-design-post": "en/web-design-barcelona.html",
            "link-seo-post": "en/local-seo-barcelona.html",
        }
    };

    //LÓGICA DE IDIOMAS (SPA)
    function moveDot(btn) {
        if (!btn || !dot || !switcher) return;
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const rect = btn.getBoundingClientRect();
        const parentRect = switcher.getBoundingClientRect();
        const x = (rect.left - parentRect.left) + (rect.width / 2) - 2;
        dot.style.transform = `translateX(${x}px)`;
    }

    function changeLanguage(lang) {
        const isBlogIndex = window.location.pathname.endsWith('/blog/') || window.location.pathname.endsWith('/blog/index.html');
        const prefix = isBlogIndex ? '' : (window.location.pathname.includes('/blog/') ? '../' : '');

        document.documentElement.lang = lang; //

        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            const translation = translations[lang][key];

            if (translation) {
                if (el.tagName.toLowerCase() === 'title') {
                    document.title = translation;
                }
                else if (el.tagName.toLowerCase() === 'meta') {
                    el.setAttribute('content', translation);
                }
                else {
                    el.textContent = translation;
                }
            }
        });

        document.querySelectorAll('[data-placeholder]').forEach(el => {
            const key = el.getAttribute('data-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-href]').forEach(el => {
            const key = el.getAttribute('data-href');
            if (translations[lang][key]) {
                el.href = prefix + translations[lang][key];
            }
        });

        localStorage.setItem('preferredLang', lang);
    }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (btn.classList.contains('active')) return;

            moveDot(btn);

            if (spaContent) {
                spaContent.style.opacity = '0';
                setTimeout(() => {
                    changeLanguage(lang);
                    spaContent.style.opacity = '1';
                }, 300);
            } else {
                changeLanguage(lang);
            }
        });
    });

    //MENÚ MÓVIL
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const navbar = document.querySelector('.navbar');
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            navbar.classList.toggle('menu-open');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.querySelector('.navbar');
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
            navbar.classList.remove('menu-open');
        });
    });

    //SCROLL SPY
    function scrollActive() {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

            if (targetLink) {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    document.querySelector('.nav-links a[href*="contacto"]')?.classList.add('active');
                } else if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    targetLink.classList.add('active');
                } else {
                    targetLink.classList.remove('active');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    //INICIALIZACIÓN
    const init = () => {
        const currentLang = localStorage.getItem('preferredLang') || 'es';
        const activeBtn = document.querySelector(`.lang-btn[data-lang="${currentLang}"]`);

        moveDot(activeBtn);
        changeLanguage(currentLang);
        scrollActive();

        setTimeout(() => {
            if (dot) dot.classList.add('smooth');
        }, 100);
    };

    window.addEventListener('resize', init);
    setTimeout(init, 150);


});



//ANIMACIÓN REVEAL
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));



// PROYECTOS SLIDER
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('sliderTrack');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (!track || !nextBtn || !prevBtn || slides.length === 0) return;

    let currentIndex = 0;
    let isTransitioning = false;

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'side', 'show-info');
            if (index === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.add('side');
            }
        });

        const activeSlide = slides[currentIndex];
        const slideWidth = activeSlide.offsetWidth;
        const style = window.getComputedStyle(activeSlide);
        const marginLeft = parseFloat(style.marginLeft) || 0;
        const marginRight = parseFloat(style.marginRight) || 0;
        const totalBlockWidth = slideWidth + marginLeft + marginRight;

        const windowCenter = window.innerWidth / 2;
        const offset = windowCenter - (currentIndex * totalBlockWidth) - (totalBlockWidth / 2);

        track.style.transition = 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
        track.style.transform = `translateX(${offset}px)`;

        prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        nextBtn.style.opacity = currentIndex === slides.length - 1 ? '0.3' : '1';
    }

    // Botones
    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            if (index === currentIndex) {
                slide.classList.toggle('show-info');
            } else {
                currentIndex = index;
                updateSlider();
            }
        });
    });

    //(Swipe)
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) nextBtn.click();
        else if (touchEndX - touchStartX > 50) prevBtn.click();
    });

    window.addEventListener('resize', updateSlider);
    setTimeout(updateSlider, 150);
});


//WHATSAPP
const whatsappPullout = document.getElementById('whatsapp-pullout');

if (whatsappPullout) {
    whatsappPullout.addEventListener('click', function (e) {
        if (e.target.closest('.pullout-tab')) {
            this.classList.toggle('active');
        }

        if (e.target.closest('.pullout-content')) {
            setTimeout(() => this.classList.remove('active'), 500);
        }
    });

    document.addEventListener('click', (e) => {
        if (!whatsappPullout.contains(e.target)) {
            whatsappPullout.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    function updateConsent(status) {
        gtag('consent', 'update', {
            'analytics_storage': status === 'granted' ? 'granted' : 'denied'
        });
        localStorage.setItem('cookieConsent', status);
        banner.classList.remove('show');
    }

    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 2000);
    } else if (savedConsent === 'granted') {
        updateConsent('granted');
    }

    acceptBtn.addEventListener('click', () => updateConsent('granted'));
    rejectBtn.addEventListener('click', () => updateConsent('denied'));
});




