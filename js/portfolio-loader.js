// Portfolio Loader - Carga dinámicamente la sección del portafolio
class PortfolioLoader {
    constructor() {
        this.portfolioContainer = null;
        this.isLoaded = false;
    }

    // Método principal para cargar el portafolio
    async loadPortfolio() {
        try {
            // Verificar si ya está cargado
            if (this.isLoaded) {
                console.log('Portfolio ya está cargado');
                return;
            }

            // Buscar el contenedor donde se cargará el portafolio
            this.portfolioContainer = document.getElementById('portfolio-container');
            
            if (!this.portfolioContainer) {
                throw new Error('No se encontró el contenedor #portfolio-container en el DOM');
            }

            // Mostrar indicador de carga
            this.showLoading();

            // Cargar el HTML del portafolio
            const portfolioHTML = await this.fetchPortfolioHTML();
            
            // Insertar el HTML en el contenedor
            this.portfolioContainer.innerHTML = portfolioHTML;

            // Cargar los estilos CSS si no están ya cargados
            await this.loadCSS();

            // Cargar y ejecutar el JavaScript del portafolio
            await this.loadJavaScript();

            // Inicializar AOS después de cargar el contenido
            this.initializeAOS();

            this.isLoaded = true;
            console.log('Portfolio cargado exitosamente');

        } catch (error) {
            console.error('Error cargando el portfolio:', error);
            this.showError(error.message);
        }
    }

    // Cargar el HTML de la sección del portafolio
    async fetchPortfolioHTML() {
        const response = await fetch('sections/portfolio-section.html');
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - Verificar que el archivo sections/portfolio-section.html exista`);
        }
        
        return await response.text();
    }

    // Cargar los estilos CSS del portafolio
    async loadCSS() {
        return new Promise((resolve, reject) => {
            // Verificar si el CSS ya está cargado
            const existingLink = document.querySelector('link[href*="portfolio-styles.css"]');
            if (existingLink) {
                resolve();
                return;
            }

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'css/portfolio-styles.css';
            
            link.onload = () => resolve();
            link.onerror = () => reject(new Error('Error cargando portfolio-styles.css'));
            
            document.head.appendChild(link);
        });
    }

    // Cargar el JavaScript del portafolio
    async loadJavaScript() {
        return new Promise((resolve, reject) => {
            // Verificar si el script ya está cargado
            const existingScript = document.querySelector('script[src*="portfolio-script.js"]');
            if (existingScript) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'js/portfolio-script.js';
            
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Error cargando portfolio-script.js'));
            
            document.body.appendChild(script);
        });
    }

    // Inicializar AOS después de cargar el contenido
    initializeAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.refresh(); // Refrescar AOS para detectar nuevos elementos
        }
    }

    // Mostrar indicador de carga
    showLoading() {
        this.portfolioContainer.innerHTML = `
            <div class="portfolio-loading text-center py-5">
                <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
                <p class="mt-3 text-muted">Cargando portafolio...</p>
            </div>
        `;
    }

    // Mostrar error de carga
    showError(message) {
        this.portfolioContainer.innerHTML = `
            <div class="portfolio-error text-center py-5">
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Error al cargar el portafolio</h4>
                    <p>${message}</p>
                    <hr>
                    <p class="mb-0">
                        <button class="btn btn-outline-danger" onclick="portfolioLoader.loadPortfolio()">
                            Intentar de nuevo
                        </button>
                    </p>
                </div>
            </div>
        `;
    }

    // Método para descargar el portafolio (útil para SPA)
    unloadPortfolio() {
        if (this.portfolioContainer) {
            this.portfolioContainer.innerHTML = '';
        }
        this.isLoaded = false;
    }
}

// Crear instancia global del cargador de portafolio
const portfolioLoader = new PortfolioLoader();

// Auto-cargar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si existe el contenedor del portafolio
    const portfolioContainer = document.getElementById('portfolio-container');
    
    if (portfolioContainer) {
        // Cargar automáticamente
        portfolioLoader.loadPortfolio();
    }
});

// Función para cargar manualmente (útil para navegación por pestañas o lazy loading)
function loadPortfolioSection() {
    portfolioLoader.loadPortfolio();
}

// Función para cargar cuando el elemento sea visible (Intersection Observer)
function initLazyPortfolioLoad() {
    const portfolioContainer = document.getElementById('portfolio-container');
    
    if (!portfolioContainer) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !portfolioLoader.isLoaded) {
                portfolioLoader.loadPortfolio();
                observer.unobserve(entry.target); // Dejar de observar después de cargar
            }
        });
    }, {
        threshold: 0.1 // Cargar cuando el 10% del elemento sea visible
    });

    observer.observe(portfolioContainer);
}
