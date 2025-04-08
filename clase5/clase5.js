//Estás desarrollando una herramienta para ayudar a escritores a identificar la palabra más larga en un texto. El usuario ingresa un párrafo, y tu tarea es encontrar esa palabra utilizando la técnica Sliding Window. Este problema simplifica la lógica para que los alumnos practiquen cómo manejar cadenas de texto con ventanas deslizantes.

const oracion = "Algunos especialistas consideran que las oraciones únicamente son aquellas que poseen un sujeto, un verbo y un predicado, y denotan una acción completa.";

function palabraMasLarga(oracion) {
    const palabras = oracion.split(' '); // Dividir el texto en palabras usando espacio como separador
    let palabraMasLarga = ''; // Inicializar la palabra más larga
    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i]; // Obtener la palabra actual
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra; // Actualizar la palabra más larga
        }
    }
    return palabraMasLarga; // Devolver la palabra más larga
}

console.log(palabraMasLarga(oracion)); // Resultado esperado: "programación"