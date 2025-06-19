// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Project data
const projectData = {
    kerbrum: {
        title: "Kerbrum",
        subtitle: "Plataforma de Gestión Empresarial",
        image: "assets/img/portfolio/job1.png",
        description: "Kerbrum es una solución integral de gestión empresarial que revoluciona la forma en que las empresas manejan sus procesos administrativos. La plataforma incluye módulos de contabilidad, recursos humanos, inventario, CRM y reportes analíticos en tiempo real.",
        challenge: "El cliente necesitaba una solución que unificara múltiples sistemas heredados en una sola plataforma, reduciendo costos operativos y mejorando la eficiencia del equipo.",
        solution: "Desarrollamos una arquitectura modular usando Angular para el frontend y .NET Core para el backend, con SQL Server como base de datos principal. Implementamos microservicios para garantizar escalabilidad y mantenibilidad.",
        technologies: ["Angular 15", ".NET Core 6", "SQL Server", "Azure", "TypeScript", "C#", "Entity Framework", "SignalR"],
        features: [
            "Dashboard ejecutivo con KPIs en tiempo real",
            "Módulo de contabilidad con reportes automatizados",
            "Sistema de gestión de inventario con alertas inteligentes",
            "CRM integrado con seguimiento de leads",
            "Portal de empleados con gestión de horarios",
            "API REST para integraciones con terceros"
        ],
        team: [
            { name: "Carlos Mendez", role: "Tech Lead & Backend Developer" },
            { name: "Ana Rodriguez", role: "Frontend Developer" },
            { name: "Luis Torres", role: "Database Architect" },
            { name: "Maria Gonzalez", role: "UX/UI Designer" }
        ],
        duration: "8 meses",
        client: "Empresa Manufacturera",
        results: [
            "Reducción del 40% en tiempo de procesos administrativos",
            "Mejora del 60% en la precisión de reportes financieros",
            "Aumento del 25% en productividad del equipo",
            "ROI positivo en 6 meses"
        ]
    },
    oprosol: {
        title: "Oprosol",
        subtitle: "Sitio Web Corporativo",
        image: "assets/img/portfolio/job2.png",
        description: "Sitio web corporativo moderno y responsivo desarrollado para Oprosol, empresa líder en soluciones industriales. El sitio incluye catálogo de productos, sistema de contacto y área de noticias corporativas.",
        challenge: "Crear una presencia web profesional que transmitiera confianza y expertise técnico, con enfoque en la generación de leads cualificados.",
        solution: "Desarrollamos un sitio web responsive con HTML5, CSS3 y JavaScript vanilla, optimizado para velocidad y SEO, con un diseño limpio y profesional.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "PHP", "MySQL"],
        features: [
            "Diseño responsive optimizado para móviles",
            "Catálogo de productos con filtros avanzados",
            "Formularios de contacto inteligentes",
            "Sistema de noticias corporativas",
            "Optimización SEO completa",
            "Integración con Google Analytics"
        ],
        team: [
            { name: "Gabriel Jiménez", role: "Frontend Developer" },
            { name: "Sandra López", role: "Diseñadora Web" }
        ],
        duration: "2 meses",
        client: "Oprosol Ltda.",
        results: [
            "300% aumento en tráfico web orgánico",
            "150% más consultas comerciales",
            "Score de 92+ en Google PageSpeed",
            "Reducción del 40% en tasa de rebote"
        ]
    },
    eden: {
        title: "Edén",
        subtitle: "Aplicación Web Interactiva",
        image: "assets/img/portfolio/job3.png",
        description: "Edén es una aplicación web innovadora que combina tecnologías modernas para ofrecer una experiencia de usuario excepcional. La plataforma gestiona contenido dinámico y facilita la interacción entre usuarios.",
        challenge: "Desarrollar una aplicación web escalable que manejara grandes volúmenes de datos y proporcionara una experiencia de usuario fluida en tiempo real.",
        solution: "Implementamos una arquitectura MERN (MongoDB, Express, React, Node.js) con componentes reutilizables y estado global manejado con Redux.",
        technologies: ["React 18", "Node.js", "Express", "MongoDB", "Redux", "Socket.io", "JWT", "Stripe API"],
        features: [
            "Interfaz de usuario interactiva con React",
            "Autenticación segura con JWT",
            "Chat en tiempo real con Socket.io",
            "Sistema de pagos integrado",
            "Dashboard de análiticas avanzadas",
            "API RESTful bien documentada"
        ],
        team: [
            { name: "Diego Ramírez", role: "Full-Stack Developer Lead" },
            { name: "Carolina Mejía", role: "React Developer" },
            { name: "Andrés Silva", role: "Backend Developer" }
        ],
        duration: "6 meses",
        client: "StartUp Tecnológica",
        results: [
            "10,000+ usuarios activos en el primer mes",
            "99.8% de uptime del sistema",
            "Tiempo de carga menor a 2 segundos",
            "Escalabilidad para 50,000+ usuarios concurrentes"
        ]
    },
    cultural: {
        title: "Cultural Deportivo Leonesa",
        subtitle: "Aplicación Móvil Oficial del Club",
        image: "assets/img/portfolio/job4.png",
        description: "Aplicación móvil oficial del Cultural Deportivo Leonesa que conecta a los aficionados con el club. Incluye noticias, estadísticas, transmisiones en vivo y tienda oficial del equipo.",
        challenge: "Crear una app que mantuviera a los fanáticos comprometidos durante toda la temporada, con contenido actualizado en tiempo real y funcionalidades sociales.",
        solution: "Desarrollamos una aplicación nativa con Flutter que se sincroniza con APIs deportivas en tiempo real y Firebase para notificaciones push y autenticación.",
        technologies: ["Flutter 3.0", "Dart", "Firebase", "APIs Deportivas", "Cloud Functions", "FCM", "Stripe", "Analytics"],
        features: [
            "Noticias y actualizaciones del club en tiempo real",
            "Estadísticas detalladas de jugadores y partidos",
            "Transmisiones en vivo de partidos",
            "Tienda oficial integrada",
            "Notificaciones push personalizadas",
            "Red social para aficionados",
            "Calendario de partidos con recordatorios"
        ],
        team: [
            { name: "Fernando Castro", role: "Flutter Developer Lead" },
            { name: "Isabel Torres", role: "Mobile UI/UX Designer" },
            { name: "Roberto Silva", role: "Backend Developer" }
        ],
        duration: "5 meses",
        client: "Cultural Deportivo Leonesa",
        results: [
            "25,000+ descargas en el primer mes",
            "4.6 estrellas en App Store y Google Play",
            "80% de retención de usuarios después de 30 días",
            "300% aumento en engagement de aficionados"
        ]
    },
    asat: {
        title: "Asat Salud",
        subtitle: "Aplicación de Salud Digital",
        image: "assets/img/portfolio/job5.png",
        description: "Asat Salud es una aplicación móvil integral para el manejo de salud personal. Permite a los usuarios llevar un registro médico digital, recordatorios de medicamentos y citas médicas virtuales.",
        challenge: "Desarrollar una app de salud que cumpliera con regulaciones HIPAA, fuera intuitiva para usuarios de todas las edades y manejara datos sensibles de manera segura.",
        solution: "Implementamos Flutter con cifrado end-to-end, integración con HealthKit/Google Fit, y un backend seguro en Firebase con autenticación biométrica.",
        technologies: ["Flutter 3.0", "Dart", "Firebase", "HealthKit", "Google Fit", "Biometric Auth", "Cloud Healthcare API"],
        features: [
            "Registro médico digital seguro",
            "Recordatorios inteligentes de medicamentos",
            "Integración con dispositivos de salud",
            "Citas médicas virtuales",
            "Análisis de datos de salud con IA",
            "Compartir información con médicos",
            "Seguimiento de síntomas y medicamentos"
        ],
        team: [
            { name: "Patricia Morales", role: "Flutter Developer" },
            { name: "Dr. Carlos Vega", role: "Consultor Médico" },
            { name: "Ana Ruiz", role: "Security Specialist" }
        ],
        duration: "7 meses",
        client: "Asat Healthcare",
        results: [
            "15,000+ pacientes registrados",
            "95% satisfacción del usuario",
            "Certificación HIPAA completa",
            "40% reducción en citas perdidas"
        ]
    },
    "2e": {
        title: "2E Ingeniería",
        subtitle: "Sitio Web de Ingeniería",
        image: "assets/img/portfolio/job6.png",
        description: "Sitio web profesional para 2E Ingeniería, empresa especializada en proyectos de infraestructura. Incluye portafolio de proyectos, servicios y sistema de contacto para clientes corporativos.",
        challenge: "Crear un sitio web que proyectara seriedad y expertise técnico, con un portafolio visual impactante de proyectos de ingeniería.",
        solution: "Desarrollamos un sitio con WordPress personalizado, galería de proyectos optimizada y formularios de contacto para diferentes tipos de servicios.",
        technologies: ["WordPress", "PHP", "MySQL", "ACF", "Elementor", "WP Rocket", "Yoast SEO"],
        features: [
            "Portafolio visual de proyectos",
            "Galería de imágenes optimizada",
            "Formularios de contacto segmentados",
            "Blog técnico integrado",
            "Optimización SEO avanzada",
            "Panel de administración personalizado"
        ],
        team: [
            { name: "Miguel Santos", role: "WordPress Developer" },
            { name: "Laura Vargas", role: "Diseñadora Web" }
        ],
        duration: "3 meses",
        client: "2E Ingeniería",
        results: [
            "250% aumento en consultas comerciales",
            "Mejor posicionamiento en Google",
            "Reducción del 50% en tiempo de carga",
            "Aumento del 60% en tiempo de permanencia"
        ]
    },
    pediatras: {
        title: "Pediatras",
        subtitle: "Plataforma de Gestión Empresarial",
        image: "assets/img/portfolio/job7.png",
        description: "Kerbrum es una solución integral de gestión empresarial que revoluciona la forma en que las empresas manejan sus procesos administrativos. La plataforma incluye módulos de contabilidad, recursos humanos, inventario, CRM y reportes analíticos en tiempo real.",
        challenge: "El cliente necesitaba una solución que unificara múltiples sistemas heredados en una sola plataforma, reduciendo costos operativos y mejorando la eficiencia del equipo.",
        solution: "Desarrollamos una arquitectura modular usando Angular para el frontend y .NET Core para el backend, con SQL Server como base de datos principal. Implementamos microservicios para garantizar escalabilidad y mantenibilidad.",
        technologies: ["Angular 15", ".NET Core 6", "SQL Server", "Azure", "TypeScript", "C#", "Entity Framework", "SignalR"],
        features: [
            "Dashboard ejecutivo con KPIs en tiempo real",
            "Módulo de contabilidad con reportes automatizados",
            "Sistema de gestión de inventario con alertas inteligentes",
            "CRM integrado con seguimiento de leads",
            "Portal de empleados con gestión de horarios",
            "API REST para integraciones con terceros"
        ],
        team: [
            { name: "Carlos Mendez", role: "Tech Lead & Backend Developer" },
            { name: "Ana Rodriguez", role: "Frontend Developer" },
            { name: "Luis Torres", role: "Database Architect" },
            { name: "Maria Gonzalez", role: "UX/UI Designer" }
        ],
        duration: "8 meses",
        client: "Empresa Manufacturera",
        results: [
            "Reducción del 40% en tiempo de procesos administrativos",
            "Mejora del 60% en la precisión de reportes financieros",
            "Aumento del 25% en productividad del equipo",
            "ROI positivo en 6 meses"
        ]
    },
    livintugeda: {
        title: "Livin Tugeda",
        subtitle: "Plataforma de Gestión Empresarial",
        image: "assets/img/portfolio/job8.png",
        description: "Kerbrum es una solución integral de gestión empresarial que revoluciona la forma en que las empresas manejan sus procesos administrativos. La plataforma incluye módulos de contabilidad, recursos humanos, inventario, CRM y reportes analíticos en tiempo real.",
        challenge: "El cliente necesitaba una solución que unificara múltiples sistemas heredados en una sola plataforma, reduciendo costos operativos y mejorando la eficiencia del equipo.",
        solution: "Desarrollamos una arquitectura modular usando Angular para el frontend y .NET Core para el backend, con SQL Server como base de datos principal. Implementamos microservicios para garantizar escalabilidad y mantenibilidad.",
        technologies: ["Angular 15", ".NET Core 6", "SQL Server", "Azure", "TypeScript", "C#", "Entity Framework", "SignalR"],
        features: [
            "Dashboard ejecutivo con KPIs en tiempo real",
            "Módulo de contabilidad con reportes automatizados",
            "Sistema de gestión de inventario con alertas inteligentes",
            "CRM integrado con seguimiento de leads",
            "Portal de empleados con gestión de horarios",
            "API REST para integraciones con terceros"
        ],
        team: [
            { name: "Carlos Mendez", role: "Tech Lead & Backend Developer" },
            { name: "Ana Rodriguez", role: "Frontend Developer" },
            { name: "Luis Torres", role: "Database Architect" },
            { name: "Maria Gonzalez", role: "UX/UI Designer" }
        ],
        duration: "8 meses",
        client: "Empresa Manufacturera",
        results: [
            "Reducción del 40% en tiempo de procesos administrativos",
            "Mejora del 60% en la precisión de reportes financieros",
            "Aumento del 25% en productividad del equipo",
            "ROI positivo en 6 meses"
        ]
    },
    lamce: {
        title: "Lamce",
        subtitle: "Sitio Web Corporativo",
        image: "assets/img/portfolio/job9.png",
        description: "Sitio web corporativo moderno y responsivo desarrollado para Oprosol, empresa líder en soluciones industriales. El sitio incluye catálogo de productos, sistema de contacto y área de noticias corporativas.",
        challenge: "Crear una presencia web profesional que transmitiera confianza y expertise técnico, con enfoque en la generación de leads cualificados.",
        solution: "Desarrollamos un sitio web responsive con HTML5, CSS3 y JavaScript vanilla, optimizado para velocidad y SEO, con un diseño limpio y profesional.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "PHP", "MySQL"],
        features: [
            "Diseño responsive optimizado para móviles",
            "Catálogo de productos con filtros avanzados",
            "Formularios de contacto inteligentes",
            "Sistema de noticias corporativas",
            "Optimización SEO completa",
            "Integración con Google Analytics"
        ],
        team: [
            { name: "Gabriel Jiménez", role: "Frontend Developer" },
            { name: "Sandra López", role: "Diseñadora Web" }
        ],
        duration: "2 meses",
        client: "Oprosol Ltda.",
        results: [
            "300% aumento en tráfico web orgánico",
            "150% más consultas comerciales",
            "Score de 92+ en Google PageSpeed",
            "Reducción del 40% en tasa de rebote"
        ]
    },
    cronos: {
        title: "Cronos",
        subtitle: "Aplicación de Gestión de Tiempo",
        image: "assets/img/portfolio/job10.png",
        description: "Cronos es una aplicación móvil diseñada para optimizar la gestión del tiempo y aumentar la productividad personal y empresarial. Incluye seguimiento de tareas, análisis de productividad y reportes detallados.",
        challenge: "Crear una app de productividad que fuera simple de usar pero poderosa en funcionalidades, con capacidad de trabajo offline y sincronización en la nube.",
        solution: "Desarrollamos con Flutter una app que combina SQLite para almacenamiento local con Firebase para sincronización, usando algoritmos de análisis de productividad.",
        technologies: ["Flutter 3.0", "Dart", "SQLite", "Firebase", "Provider", "Charts", "Local Notifications"],
        features: [
            "Seguimiento de tiempo por tareas",
            "Análisis de productividad con gráficos",
            "Modo Pomodoro integrado",
            "Sincronización multi-dispositivo",
            "Reportes semanales y mensuales",
            "Integración con calendarios",
            "Notificaciones inteligentes"
        ],
        team: [
            { name: "Sebastián Moreno", role: "Flutter Developer" },
            { name: "Daniela Rojas", role: "UX/UI Designer" }
        ],
        duration: "4 meses",
        client: "Productivity Solutions",
        results: [
            "20,000+ usuarios activos",
            "4.5 estrellas en tiendas de apps",
            "Aumento del 35% en productividad reportada",
            "85% de usuarios utilizan la app diariamente"
        ]
    },
    srendip: {
        title: "Srendip",
        subtitle: "Aplicación de Descubrimiento",
        image: "assets/img/portfolio/job11.png",
        description: "Srendip es una aplicación móvil innovadora que ayuda a los usuarios a descubrir lugares únicos y experiencias auténticas en su ciudad. Combina geolocalización, recomendaciones personalizadas y comunidad.",
        challenge: "Desarrollar una app que ofreciera recomendaciones precisas basadas en ubicación, preferencias del usuario y comportamiento de la comunidad.",
        solution: "Implementamos algoritmos de machine learning para recomendaciones, integración profunda con Google Maps y un sistema de gamificación para fomentar la participación.",
        technologies: ["Flutter 3.0", "Dart", "Google Maps API", "Firebase", "ML Kit", "Cloud Functions", "Algolia Search"],
        features: [
            "Descubrimiento basado en geolocalización",
            "Recomendaciones personalizadas con IA",
            "Sistema de reviews y fotos",
            "Gamificación con puntos y badges",
            "Mapa interactivo con filtros",
            "Chat y comunidad de usuarios",
            "Integración con redes sociales"
        ],
        team: [
            { name: "Andrea Morales", role: "Flutter Developer Lead" },
            { name: "Javier Herrera", role: "ML Engineer" },
            { name: "Carmen Ruiz", role: "Product Designer" }
        ],
        duration: "8 meses",
        client: "Tourism Tech Startup",
        results: [
            "50,000+ lugares indexados",
            "30,000+ usuarios activos mensuales",
            "4.7 estrellas en App Store",
            "Expansión a 5 ciudades principales"
        ]
    },
    fundacion: {
        title: "Fundación Albeiro Vargas y Ángeles Custodios",
        subtitle: "Sitio Web para Fundación",
        image: "assets/img/portfolio/job12.png",
        description: "Sitio web institucional para la Fundación Albeiro Vargas y Ángeles Custodios, enfocado en transparencia, comunicación efectiva con donantes y promoción de actividades sociales.",
        challenge: "Crear un sitio web que transmitiera confianza y transparencia, facilitara las donaciones online y mantuviera informada a la comunidad sobre las actividades de la fundación.",
        solution: "Desarrollamos un sitio WordPress con diseño emotivo, sistema de donaciones seguro, galería de actividades y blog de noticias con enfoque en storytelling.",
        technologies: ["WordPress", "PHP", "MySQL", "PayPal API", "WooCommerce", "Mailchimp", "Google Analytics"],
        features: [
            "Sistema de donaciones online seguro",
            "Galería de proyectos y actividades",
            "Blog de noticias e historias",
            "Newsletter automático",
            "Transparencia financiera",
            "Formularios de voluntariado",
            "Integración con redes sociales"
        ],
        team: [
            { name: "Natalia Peña", role: "WordPress Developer" },
            { name: "Ricardo Álvarez", role: "Diseñador Web" }
        ],
        duration: "3 meses",
        client: "Fundación Albeiro Vargas",
        results: [
            "400% aumento en donaciones online",
            "200+ nuevos voluntarios registrados",
            "Mayor transparencia y confianza",
            "Mejora en comunicación con donantes"
        ]
    }
};

// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

    filters.forEach(filter => {
        filter.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all filters
            filters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.querySelector('.portfolio-item').style.opacity = '1';
                        item.querySelector('.portfolio-item').style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.querySelector('.portfolio-item').style.opacity = '0';
                    item.querySelector('.portfolio-item').style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Function to open project modal
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    document.getElementById('projectModalLabel').textContent = project.title;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-12">
                <img src="${project.image}" alt="${project.title}" class="project-detail-image">
            </div>
        </div>
        
        <div class="row">
            <div class="col-12">
                <h4 class="text-dark mb-3">${project.subtitle}</h4>
                <p class="lead text-muted mb-4">${project.description}</p>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-md-6">
                <h5 class="text-dark mb-3">📋 Información del Proyecto</h5>
                <ul class="list-unstyled">
                    <li><strong>Cliente:</strong> ${project.client}</li>
                    <li><strong>Duración:</strong> ${project.duration}</li>
                    <li><strong>Equipo:</strong> ${project.team.length} profesionales</li>
                </ul>
            </div>
            <div class="col-md-6">
                <h5 class="text-dark mb-3">👥 Equipo de Trabajo</h5>
                <ul class="list-unstyled">
                    ${project.team.map(member => `<li><strong>${member.name}</strong> - ${member.role}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="detail-tech-stack">
            <h5 class="text-dark mb-3">🛠️ Stack Tecnológico</h5>
            <div class="tech-list">
                ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <h5 class="text-dark mb-3">🎯 Desafío</h5>
                <p class="text-muted">${project.challenge}</p>
                
                <h5 class="text-dark mb-3 mt-4">💡 Solución</h5>
                <p class="text-muted">${project.solution}</p>
            </div>
            <div class="col-md-6">
                <h5 class="text-dark mb-3">✨ Características Principales</h5>
                <ul class="text-muted">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="mt-4 p-3 bg-light rounded">
            <h5 class="text-dark mb-3">📊 Resultados Obtenidos</h5>
            <ul class="mb-0 text-success">
                ${project.results.map(result => `<li><strong>${result}</strong></li>`).join('')}
            </ul>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}

// Make function available globally
window.openProjectModal = openProjectModal;
