
let favoriteFood = `pizza`

// Iniciamos el switch para que evalue el valor de favoriteFood.
switch (favoriteFood) {
    // Si el valor es "pizza", imprime el siguiente mensaje en consola.
    case "pizza":
        console.log("¡Te gusta la PIZZA!");
    break;
    // Si el valor es "coco", imprime el siguiente mensaje en consola.
    case "coco":
        console.log("¡Te gusta el COCO!");
    break;
// Si el valor no es igual a ninguno de los anteriores, imprime el siguiente mensaje en consola.    
default:
        console.log("¡Te gusta algo más!");
}