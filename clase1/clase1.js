//Imagina que eres parte del equipo encargado de actualizar una aplicación antigua (la cual se muestra en el documento adjunto) para planificar viajes. Los usuarios deben poder registrar destinos de viaje, la fecha en que desean viajar, y calcular el costo total estimado del viaje en función de las opciones de alojamiento y transporte que elijan.


//1.- Registrar destinos: Llamar a registrarDestino(destino, fecha, transporte) para agregar destinos al sistema.

//Registrar destino de viaje

omar = {
    nombre: "Omar",
    destinos: "CDMX",
    fechaViaje: "2026-10-01",
    transporte : "Avion",
    tiempoViaje: 3, //en horas
}

julieta = {
    nombre: "Julieta",
    destinos: "Guadalajara",
    fechaViaje: "2025-09-02",
    transporte : "Camion",
    tiempoViaje: 5,
}

beatriz = {
    nombre: "Beatriz",
    destinos: "Monterrey",
    fechaViaje: "2024-08-03",
    transporte : "Avion",
    tiempoViaje: 8,
}

//Calcular el costo: El costo se calcula con la función calcularCosto(), la cual toma el destino y el transporte como parámetros.

let calcularCosto = (destino, transporte) => {
    let costo = 0;
    if (destino.tiempoViaje <= 3 && transporte == "Avion") {
        costo = 1000;
    } else if (destino.tiempoViaje > 3 && transporte == "Avion") {
        costo = 2000;
    } else if (destino.tiempoViaje <= 5 && transporte == "Camion") {
        costo = 500;
    } else if (destino.tiempoViaje > 5 && transporte == "Camion") {
        costo = 1000;
    }
    return costo;
}

//let costoOmar = calcularCosto(omar, omar.transporte);
//let costoJulieta = calcularCosto(julieta, julieta.transporte);
//console.log(`El costo estimado para ${omar.nombre} es de $${costoOmar} pesos mexicanos`);
//console.log(`El costo estimado para ${julieta.nombre} es de $${costoJulieta} pesos mexicanos`);

//3.- Mostrar el itinerario: Llamar a mostrarItinerario() para recorrer todos los viajes guardados y mostrar sus detalles.

let itinerario = [];
let mostrarItinerario = () => {
    itinerario.push(omar);
    itinerario.push(julieta);
    itinerario.push(beatriz);
    for (let i = 0; i < itinerario.length; i++) {
        console.log(`Itinerario ${i + 1}:`);
        console.log(`Persona: ${itinerario[i].nombre}`);
        console.log(`Destino: ${itinerario[i].destinos}`);
        console.log(`Fecha de viaje: ${itinerario[i].fechaViaje}`);
        console.log(`Transporte: ${itinerario[i].transporte}`);
        console.log(`Tiempo de viaje: ${itinerario[i].tiempoViaje} horas`);
        console.log(`Costo estimado: $${calcularCosto(itinerario[i], itinerario[i].transporte)} pesos mexicanos`);
        console.log("");
    }
}

mostrarItinerario();