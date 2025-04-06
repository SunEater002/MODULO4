//Eres el encargado de gestionar los datos de una tienda online. Tienes un listado de productos con información como nombre, precio y categoría. Tu tarea será filtrar los productos por precio, ordenarlos alfabéticamente y generar una lista con los nombres.

//1. Crea un arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Manzana", precio: 15, categoria: "Fruta" },
    { nombre: "Pantalla", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Tennis", precio: 50, categoria: "Calzado" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//2 . Filtra los productos que tengan un precio menor a 100 y guárdalos en un nuevo arreglo.
const menoresDe100 = productos.filter(precio => precio.precio < 100);
//console.log(menoresDe100);


let mostrarLista = (menoresDe100) => {
    console.log("Lista de productos menores de $100:");
    let index = 1;
    for (let item of menoresDe100) {
        console.log(` ${index}. ${item.nombre} - $${item.precio}`);
        index++;
    }
};
mostrarLista(menoresDe100);

//3. Ordena el arreglo de productos alfabéticamente por nombre.
const ordenAlfabetico = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
//console.log(ordenAlfabetico);

//4. Genera una nueva lista con los nombres de los productos.
let mostrarNombres = (ordenAlfabetico) => {
    console.log("Nombres de los productos:");
    let index = 1;
    for (let item of ordenAlfabetico) {
        console.log(` ${index}. ${item.nombre}`);
        index++;
    }
}
mostrarNombres(ordenAlfabetico);

//5. Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);    

//6. Usa reduce() para calcular el precio total de todos los productos.
const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(`El precio total de todos los productos es: $${precioTotal}`);