document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    
    // Función para ocultar el loader
    const hideLoader = () => {
        if(loader) {
            loader.style.display = 'none';
            document.body.classList.remove("not-loaded");
        }
    };

    // Ocultar loader inmediatamente al cargar
    hideLoader();
    
    // Limpiar timeout de respaldo si existe
    const backupTimeout = setTimeout(hideLoader, 5000);
    clearTimeout(backupTimeout);
});