// Portfolio Inline - Alternativa sin fetch para desarrollo local
class PortfolioInline {
    constructor() {
        this.isLoaded = false;
    }

    // HTML del portafolio como string (copiado de portfolio-section.html)
    getPortfolioHTML() {
        return `
        <!-- Portfolio Section -->
        <section id="portfolio" class="section">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="section-title" data-aos="fade-up">Portafolio</h2>
                    <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Proyectos destacados que reflejan nuestra experiencia y calidad</p>
                </div>
                
                <!-- Portfolio Navigation -->
                <div class="portfolio-nav" data-aos="fade-up" data-aos-delay="200">
                    <button type="button" class="portfolio-filter active" data-filter="all">Todos</button>
                    <button type="button" class="portfolio-filter" data-filter="web">Aplicaciones Web</button>
                    <button type="button" class="portfolio-filter" data-filter="mobile">Apps Móviles</button>
                    <button type="button" class="portfolio-filter" data-filter="website">Páginas Web</button>
                </div>
                
                <div class="row" id="portfolio-grid">
                    <!-- Kerbrum - Aplicación Web -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="web">
                        <div class="portfolio-item" data-aos="fade-up">
                            <div class="portfolio-link" onclick="openProjectModal('kerbrum')">
                                <div class="project-type">Aplicación Web</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fab fa-angular"></i></div>
                                    <div class="tech-icon"><i class="fas fa-database"></i></div>
                                    <div class="tech-icon"><i class="fab fa-docker"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Kerbrum</div>
                                        <div class="portfolio-caption-subheading">Plataforma de gestión empresarial integral</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">Angular</span>
                                            <span class="tech-tag">.NET Core</span>
                                            <span class="tech-tag">SQL Server</span>
                                            <span class="tech-tag">Azure</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job1.png" alt="Kerbrum - Aplicación Web" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Kerbrum</div>
                                <div class="portfolio-caption-subheading">Aplicación Web Empresarial</div>
                                <div class="project-description">
                                    Sistema integral de gestión empresarial que optimiza procesos administrativos y mejora la productividad del equipo.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">Angular</span>
                                    <span class="tech-chip">.NET Core</span>
                                    <span class="tech-chip">SQL Server</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 4 desarrolladores, 1 diseñador UX/UI
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('kerbrum')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Oprosol - Página Web -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="website">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="100">
                            <div class="portfolio-link" onclick="openProjectModal('oprosol')">
                                <div class="project-type">Página Web</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fab fa-html5"></i></div>
                                    <div class="tech-icon"><i class="fab fa-css3-alt"></i></div>
                                    <div class="tech-icon"><i class="fab fa-js"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Oprosol</div>
                                        <div class="portfolio-caption-subheading">Sitio web corporativo moderno</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">HTML5</span>
                                            <span class="tech-tag">CSS3</span>
                                            <span class="tech-tag">JavaScript</span>
                                            <span class="tech-tag">Bootstrap</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job2.png" alt="Oprosol - Página Web" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Oprosol</div>
                                <div class="portfolio-caption-subheading">Página Web Corporativa</div>
                                <div class="project-description">
                                    Sitio web corporativo responsive con diseño moderno y optimizado para conversión de leads.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">HTML5</span>
                                    <span class="tech-chip">CSS3</span>
                                    <span class="tech-chip">JavaScript</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 2 desarrolladores web, 1 diseñador
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('oprosol')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Resto de proyectos... (acortado para el ejemplo) -->
                    <!-- Puedes agregar todos los demás proyectos aquí -->

                      <!-- Edén - Aplicación Web -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="web">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="200">
                            <div class="portfolio-link" onclick="openProjectModal('eden')">
                                <div class="project-type">Aplicación Web</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fab fa-react"></i></div>
                                    <div class="tech-icon"><i class="fab fa-node-js"></i></div>
                                    <div class="tech-icon"><i class="fas fa-database"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Edén</div>
                                        <div class="portfolio-caption-subheading">Plataforma web interactiva</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">React</span>
                                            <span class="tech-tag">Node.js</span>
                                            <span class="tech-tag">MongoDB</span>
                                            <span class="tech-tag">Express</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job3.png" alt="Edén - Aplicación Web" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Edén</div>
                                <div class="portfolio-caption-subheading">Aplicación Web</div>
                                <div class="project-description">
                                    Aplicación web moderna con interfaz interactiva y funcionalidades avanzadas para gestión de contenido.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">React</span>
                                    <span class="tech-chip">Node.js</span>
                                    <span class="tech-chip">MongoDB</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 3 desarrolladores full-stack
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('eden')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Cultural Deportivo Leonesa - App Móvil -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="mobile">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="300">
                            <div class="portfolio-link" onclick="openProjectModal('cultural')">
                                <div class="project-type">App Móvil</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fas fa-mobile-alt"></i></div>
                                    <div class="tech-icon"><i class="fab fa-android"></i></div>
                                    <div class="tech-icon"><i class="fab fa-apple"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Cultural Deportivo Leonesa</div>
                                        <div class="portfolio-caption-subheading">App oficial del club de fútbol</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">Flutter</span>
                                            <span class="tech-tag">Dart</span>
                                            <span class="tech-tag">Firebase</span>
                                            <span class="tech-tag">APIs REST</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job4.png" alt="Cultural Deportivo Leonesa - App Móvil" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Cultural Deportivo Leonesa</div>
                                <div class="portfolio-caption-subheading">Aplicación Móvil Deportiva</div>
                                <div class="project-description">
                                    App oficial del club que conecta a los aficionados con noticias, estadísticas y contenido exclusivo del equipo.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">Flutter</span>
                                    <span class="tech-chip">Firebase</span>
                                    <span class="tech-chip">APIs REST</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 2 desarrolladores Flutter, 1 diseñador
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('cultural')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Asat Salud - App Móvil -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="mobile">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="400">
                            <div class="portfolio-link" onclick="openProjectModal('asat')">
                                <div class="project-type">App Móvil</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fas fa-heartbeat"></i></div>
                                    <div class="tech-icon"><i class="fas fa-mobile-alt"></i></div>
                                    <div class="tech-icon"><i class="fab fa-flutter"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Asat Salud</div>
                                        <div class="portfolio-caption-subheading">Aplicación de salud digital</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">Flutter</span>
                                            <span class="tech-tag">Dart</span>
                                            <span class="tech-tag">Firebase</span>
                                            <span class="tech-tag">HealthKit</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job5.png" alt="Asat Salud - App Móvil" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Asat Salud</div>
                                <div class="portfolio-caption-subheading">Aplicación de Salud</div>
                                <div class="project-description">
                                    Aplicación móvil para gestión de salud personal con seguimiento médico y recordatorios inteligentes.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">Flutter</span>
                                    <span class="tech-chip">Firebase</span>
                                    <span class="tech-chip">HealthKit</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 2 desarrolladores Flutter, 1 especialista en salud
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('asat')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- 2E Ingeniería - Página Web -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="website">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="500">
                            <div class="portfolio-link" onclick="openProjectModal('2e')">
                                <div class="project-type">Página Web</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fab fa-wordpress"></i></div>
                                    <div class="tech-icon"><i class="fas fa-mobile-alt"></i></div>
                                    <div class="tech-icon"><i class="fas fa-tools"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">2E Ingeniería</div>
                                        <div class="portfolio-caption-subheading">Sitio web de ingeniería profesional</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">WordPress</span>
                                            <span class="tech-tag">PHP</span>
                                            <span class="tech-tag">MySQL</span>
                                            <span class="tech-tag">CSS3</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job6.png" alt="2E Ingeniería - Página Web" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">2E Ingeniería</div>
                                <div class="portfolio-caption-subheading">Página Web Corporativa</div>
                                <div class="project-description">
                                    Sitio web profesional para empresa de ingeniería con portafolio de proyectos y formularios de contacto.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">WordPress</span>
                                    <span class="tech-chip">PHP</span>
                                    <span class="tech-chip">MySQL</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 2 desarrolladores web, 1 diseñador
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('2e')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Pediatras en Casa - Aplicación Web -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="web">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="200">
                            <div class="portfolio-link" onclick="openProjectModal('pediatras')">
                                <div class="project-type">Aplicación Web</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fab fa-react"></i></div>
                                    <div class="tech-icon"><i class="fab fa-node-js"></i></div>
                                    <div class="tech-icon"><i class="fas fa-database"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Pediatras en Casa</div>
                                        <div class="portfolio-caption-subheading">Plataforma web interactiva</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">React</span>
                                            <span class="tech-tag">Node.js</span>
                                            <span class="tech-tag">MongoDB</span>
                                            <span class="tech-tag">Express</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job7.png" alt="Pediatras en Casa - Aplicación Web" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Pediatras en Casa</div>
                                <div class="portfolio-caption-subheading">Aplicación Web</div>
                                <div class="project-description">
                                    Aplicación web moderna con interfaz interactiva y funcionalidades avanzadas para gestión de contenido.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">HTML/CSS</span>
                                    <span class="tech-chip">.NET/C#</span>
                                    <span class="tech-chip">SQL Server</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 3 desarrolladores full-stack
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('pediatras')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Livin Tugeda - Aplicación Web -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="web">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="200">
                            <div class="portfolio-link" onclick="openProjectModal('livintugeda')">
                                <div class="project-type">Aplicación Web</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fab fa-react"></i></div>
                                    <div class="tech-icon"><i class="fab fa-node-js"></i></div>
                                    <div class="tech-icon"><i class="fas fa-database"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Livin Tugeda</div>
                                        <div class="portfolio-caption-subheading">Plataforma web interactiva</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">React</span>
                                            <span class="tech-tag">Node.js</span>
                                            <span class="tech-tag">MongoDB</span>
                                            <span class="tech-tag">Express</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job8.png" alt="Livin Tugeda - Aplicación Web" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Livin Tugeda</div>
                                <div class="portfolio-caption-subheading">Aplicación Web</div>
                                <div class="project-description">
                                    Aplicación web moderna con interfaz interactiva y funcionalidades avanzadas para gestión de contenido.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">HTML/CSS</span>
                                    <span class="tech-chip">.NET/C#</span>
                                    <span class="tech-chip">SQL Server</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 3 desarrolladores full-stack
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('livintugeda')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Lamce - Página Web -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="website">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="500">
                            <div class="portfolio-link" onclick="openProjectModal('lamce')">
                                <div class="project-type">Página Web</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fab fa-wordpress"></i></div>
                                    <div class="tech-icon"><i class="fas fa-mobile-alt"></i></div>
                                    <div class="tech-icon"><i class="fas fa-tools"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Lamce</div>
                                        <div class="portfolio-caption-subheading">Sitio web de ingeniería profesional</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">WordPress</span>
                                            <span class="tech-tag">PHP</span>
                                            <span class="tech-tag">MySQL</span>
                                            <span class="tech-tag">CSS3</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job9.png" alt="Lamce - Página Web" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Lamce</div>
                                <div class="portfolio-caption-subheading">Página Web Corporativa</div>
                                <div class="project-description">
                                    Sitio web profesional para empresa de ingeniería con portafolio de proyectos y formularios de contacto.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">WordPress</span>
                                    <span class="tech-chip">PHP</span>
                                    <span class="tech-chip">MySQL</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 2 desarrolladores web, 1 diseñador
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('lamce')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Cronos - App Móvil -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="mobile">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="600">
                            <div class="portfolio-link" onclick="openProjectModal('cronos')">
                                <div class="project-type">App Móvil</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fas fa-mobile-alt"></i></div>
                                    <div class="tech-icon"><i class="fab fa-android"></i></div>
                                    <div class="tech-icon"><i class="fas fa-clock"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Cronos</div>
                                        <div class="portfolio-caption-subheading">Aplicación de gestión de tiempo</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">Flutter</span>
                                            <span class="tech-tag">Dart</span>
                                            <span class="tech-tag">SQLite</span>
                                            <span class="tech-tag">Notifications</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job10.png" alt="Cronos - App Móvil" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Cronos</div>
                                <div class="portfolio-caption-subheading">Aplicación Móvil</div>
                                <div class="project-description">
                                    App móvil para gestión eficiente del tiempo con funciones de seguimiento y productividad.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">Flutter</span>
                                    <span class="tech-chip">SQLite</span>
                                    <span class="tech-chip">Notifications</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 2 desarrolladores Flutter
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('cronos')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Srendip - App Móvil -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="mobile">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="700">
                            <div class="portfolio-link" onclick="openProjectModal('srendip')">
                                <div class="project-type">App Móvil</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fas fa-mobile-alt"></i></div>
                                    <div class="tech-icon"><i class="fab fa-flutter"></i></div>
                                    <div class="tech-icon"><i class="fas fa-map-marked-alt"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Srendip</div>
                                        <div class="portfolio-caption-subheading">Aplicación de descubrimiento y ubicación</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">Flutter</span>
                                            <span class="tech-tag">Dart</span>
                                            <span class="tech-tag">Google Maps</span>
                                            <span class="tech-tag">Firebase</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job11.png" alt="Srendip - App Móvil" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Srendip</div>
                                <div class="portfolio-caption-subheading">Aplicación Móvil</div>
                                <div class="project-description">
                                    Aplicación móvil innovadora que ayuda a los usuarios a descubrir lugares y experiencias únicas.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">Flutter</span>
                                    <span class="tech-chip">Google Maps</span>
                                    <span class="tech-chip">Firebase</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 3 desarrolladores Flutter, 1 diseñador UX
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('srendip')">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <!-- Fundación Albeiro Vargas - Página Web -->
                    <div class="col-lg-4 col-sm-6 mb-4 portfolio-item-wrapper" data-category="website">
                        <div class="portfolio-item" data-aos="fade-up" data-aos-delay="800">
                            <div class="portfolio-link" onclick="openProjectModal('fundacion')">
                                <div class="project-type">Página Web</div>
                                <div class="tech-icons">
                                    <div class="tech-icon"><i class="fab fa-wordpress"></i></div>
                                    <div class="tech-icon"><i class="fas fa-mobile-alt"></i></div>
                                    <div class="tech-icon"><i class="fas fa-heart"></i></div>
                                </div>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <div class="portfolio-caption-heading">Fundación Albeiro Vargas</div>
                                        <div class="portfolio-caption-subheading">Sitio web para fundación social</div>
                                        <div class="portfolio-tech-stack">
                                            <span class="tech-tag">WordPress</span>
                                            <span class="tech-tag">PHP</span>
                                            <span class="tech-tag">MySQL</span>
                                            <span class="tech-tag">Bootstrap</span>
                                        </div>
                                        <div class="mt-3">
                                            <i class="fas fa-external-link-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-fluid" src="https://amesoftco.github.io/web/assets/img/portfolio/job12.png" alt="Fundación Albeiro Vargas - Página Web" />
                            </div>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Fundación Albeiro Vargas</div>
                                <div class="portfolio-caption-subheading">Página Web</div>
                                <div class="project-description">
                                    Sitio web institucional para fundación con enfoque en transparencia y comunicación con donantes.
                                </div>
                                <div class="tech-stack-chips">
                                    <span class="tech-chip">WordPress</span>
                                    <span class="tech-chip">PHP</span>
                                    <span class="tech-chip">Bootstrap</span>
                                </div>
                                <div class="project-team">
                                    <strong>Equipo:</strong> 2 desarrolladores web, 1 diseñador
                                </div>
                                <button type="button" class="btn-see-more" onclick="openProjectModal('fundacion')">Ver detalles</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <!-- Portfolio CTA -->
                <div class="portfolio-cta" data-aos="fade-up" data-aos-delay="700">
                    <h3 class="mb-3">¿Tienes un proyecto en mente?</h3>
                    <p class="lead mb-4">Trabajemos juntos para convertir tu idea en una solución digital exitosa. Nuestro equipo está listo para hacer realidad tu visión.</p>
                    <a href="#contact" class="btn-portfolio-cta">Conversemos sobre tu proyecto</a>
                </div>
            </div>
        </section>

        <!-- Project Detail Modal -->
        <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="projectModalLabel">Detalles del Proyecto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- Dynamic content will be loaded here -->
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    // Cargar el portafolio sin fetch
    loadPortfolio() {
        const container = document.getElementById('portfolio-container');
        
        if (!container) {
            console.error('No se encontró #portfolio-container');
            return;
        }

        if (this.isLoaded) {
            console.log('Portfolio ya está cargado');
            return;
        }

        try {
            // Insertar HTML
            container.innerHTML = this.getPortfolioHTML();

            // Cargar CSS y JS
            this.loadCSS();
            this.loadJS();

            // Refrescar AOS
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }

            this.isLoaded = true;
            console.log('Portfolio cargado exitosamente');

        } catch (error) {
            console.error('Error cargando portfolio:', error);
        }
    }

    // Cargar CSS
    loadCSS() {
        const existingLink = document.querySelector('link[href*="portfolio-styles.css"]');
        if (existingLink) return;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/portfolio-styles.css';
        document.head.appendChild(link);
    }

    // Cargar JS
    loadJS() {
        const existingScript = document.querySelector('script[src*="portfolio-script.js"]');
        if (existingScript) return;

        const script = document.createElement('script');
        script.src = 'js/portfolio-script.js';
        document.body.appendChild(script);
    }
}

// Instancia global
const portfolioInline = new PortfolioInline();

// Auto-cargar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolio-container');
    
    if (portfolioContainer) {
        portfolioInline.loadPortfolio();
    }
});

// Función para cargar manualmente
function loadPortfolioInline() {
    portfolioInline.loadPortfolio();
}
