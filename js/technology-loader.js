// technology-loader.js
// Script para cargar dinámicamente la sección de tecnologías

document.addEventListener('DOMContentLoaded', function() {
    loadTechnologySection();
});

async function loadTechnologySection() {
    try {
        const response = await fetch('https://amesoftco.github.io/web/sections/technology-section.html');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const htmlContent = await response.text();
        
        // Buscar el contenedor donde cargar la sección
        const container = document.getElementById('technology-container');
        
        if (container) {
            container.innerHTML = htmlContent;
            
            // Re-inicializar AOS para los nuevos elementos cargados
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
            
            console.log('✅ Sección de tecnologías cargada exitosamente');
        } else {
            console.error('❌ No se encontró el contenedor #technology-container');
        }
        
    } catch (error) {
        console.error('❌ Error al cargar la sección de tecnologías:', error);
        
        // Fallback: mostrar mensaje de error amigable
        const container = document.getElementById('technology-container');
        if (container) {
            container.innerHTML = `
                <section class="section">
                    <div class="container">
                        <div class="text-center">
                            <h2>Tecnologías que Dominamos</h2>
                            <p class="text-muted">Error al cargar el contenido. Por favor, recarga la página.</p>
                        </div>
                    </div>
                </section>
            `;
        }
    }
}
