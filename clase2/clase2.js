//Imagina que eres parte del equipo encargado de crear una lista de compras utilizando un arreglo. Los usuarios deben poder añadir productos a la lista, eliminar productos y ver la lista completa de compras.

//1. Se creo una estructura de datos estilo bag para almacenar los productos de la lista de compras, utilizando un set para evitar duplicados y permitir la adición y eliminación de productos.

let producto = new Set();

producto.add("leche");
producto.add("huevo");
producto.add("jamon");
producto.add("pan");
producto.add("leche");

//2. Se creo una funcion que recorre el set y muestra la lista de compras en la consola, enumerando cada producto.

let mostrarLista = (producto) => {
    console.log("Lista de compras:");
    let index = 1;
    for (let item of producto) {
        console.log(`${index}. ${item}`);
        index++;
    }
};

//3. Se manda a llamar la funcion mostrarLista para mostrar la lista de compras en la consola.
mostrarLista(producto); 

//4. Se elimina un producto de la lista de compras utilizando el método delete del set.
producto.delete("jamon");

//5. Se manda a llamar nuevamente la funcion mostrarLista para mostrar la lista de compras actualizada en la consola.
mostrarLista(producto);