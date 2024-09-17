// Función para obtener la última medición desde el backend
async function getLatestMeasurement() {
    try {
        const response = await fetch('http://localhost:3000/ultima-medicion'); // Ajusta la URL si es necesario
        if (!response.ok) {
            throw new Error('Error en la solicitud al backend');
        }
        const data = await response.json();
        document.getElementById('latest-measurement').textContent = `Última medición: ${data.medicion}, Valor: ${data.valor}`;
    } catch (error) {
        console.error('Error al obtener la medición:', error);
        document.getElementById('latest-measurement').textContent = 'Error al cargar la última medición.';
    }
}

// Llamar a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', getLatestMeasurement);
