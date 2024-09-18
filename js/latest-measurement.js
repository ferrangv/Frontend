// Función para obtener la última medición desde el backend
async function getLatestMeasurement() {
    try {
        const response = await fetch('http://localhost:3000/ultima-medicion'); 
        if (!response.ok) {
            throw new Error('Error en la solicitud al backend');
        }
        const data = await response.json();
        document.getElementById('latest-measurement').innerHTML = `Última medición:<br>${data.medicion}, Valor: ${data.valor}`;

    } catch (error) {
        console.error('Error al obtener la medición:', error);
        document.getElementById('latest-measurement').textContent = 'Error al cargar la última medición.';
    }
}

// Llamar a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    getLatestMeasurement(); // Ejecutar inmediatamente al cargar la página

    // Ejecutar la función cada 30 segundos (30000 milisegundos)
    setInterval(getLatestMeasurement, 30000);
});

