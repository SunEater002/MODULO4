//Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.


const invitados = ["Ana", "Berta", "Beatriz", "Daniel", "Diego", "Fabian", "Gustavo"];

function encontrarPareja(invitados) {
    let i = 0;
    let j = 1;

    while (j < invitados.length) {  // Cambiamos el bucle for por un while para evitar el uso de variables innecesarias
        if (invitados[i][0] === invitados[j][0]) { // Comparamos la primera letra de los nombres
            return [invitados[i], invitados[j]];  // Si son iguales, devolvemos el par de nombres
        }
        i++;  // Incrementamos i para comparar con el siguiente invitado
        j++;  // Incrementamos j para comparar con el siguiente invitado
    }
    return null;
}

const pareja = encontrarPareja(invitados);  // Llamamos a la función para encontrar la pareja de invitados
if (pareja) {                               
    console.log(`Los invitados que pueden sentarse juntos son: ${pareja[0]} y ${pareja[1]}`);
}
else {
    console.log("No hay invitados que puedan sentarse juntos.");
}




