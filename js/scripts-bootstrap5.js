// js/scripts-bootstrap5.js - VERSIÓN COMPLETAMENTE ARREGLADA
(function() {
    "use strict";

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // ============================================
    // SCROLLSPY ARREGLADO COMPLETAMENTE
    // ============================================
    
    // Función para manejar la navegación activa manualmente
    function updateActiveNavLink() {
        const sections = ['home', 'about', 'services', 'technology', 'portfolio', 'team', 'contact'];
        const navLinks = document.querySelectorAll('#navbarNav .nav-link');
        const scrollPosition = window.scrollY + 100; // Offset para mejor detección
        
        let currentSection = 'home'; // Por defecto
        
        // Buscar qué sección está visible
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
                currentSection = sections[i];
                break;
            }
        }
        
        // Remover clase active de todos los enlaces
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Agregar clase active al enlace correcto
        const activeLink = document.querySelector(`#navbarNav .nav-link[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Usar scroll event para actualizar navegación activa
    document.addEventListener('scroll', updateActiveNavLink);
    
    // Ejecutar al cargar la página
    updateActiveNavLink();

    // ============================================
    // CERRAR MENU MOBILE AL HACER CLICK
    // ============================================
    
    // Obtener el botón toggler y el collapse
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    
    // Obtener todos los enlaces del menú
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    
    // Función para cerrar el menú
    function closeNavbar() {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    }
    
    // Agregar event listener a cada enlace del menú
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            const targetHref = this.getAttribute('href');
            
            // Solo procesar enlaces internos
            if (targetHref && targetHref.startsWith('#')) {
                e.preventDefault();
                
                // Cerrar menú en móvil
                if (navbarToggler && getComputedStyle(navbarToggler).display !== 'none') {
                    closeNavbar();
                }
                
                // Smooth scroll
                const targetElement = document.querySelector(targetHref);
                if (targetElement) {
                    const navbarHeight = document.querySelector('#mainNav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Actualizar navegación activa después del scroll
                    setTimeout(() => {
                        updateActiveNavLink();
                    }, 100);
                }
            }
        });
    });

    // Contact form handling (si tienes formulario de contacto)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario enviado');
            
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const message = document.getElementById('message')?.value;
            
            if (name && email && message) {
                alert('¡Mensaje enviado correctamente!');
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos');
            }
        });
    }

})();
