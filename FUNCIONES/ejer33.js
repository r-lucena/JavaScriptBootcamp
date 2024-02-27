/**
 * Arregla la función de manera que no obtengamos errores en la consola.
Además, explica brevemente por qué actualmente la función es incorrecta..
function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
  }

  console.log(personName + sport);
}
 */

function canPlay() {
let sport = " Football";
let personName; // Definimos la variable fuera del bloque "if" 

if (true) {
    personName = "Cosimo";
}
 console.log(personName + sport);
}

canPlay() // Invocamos la funcion canPlay 

/**
 * La función era incorrecta porque la variable "personName"
 * no estaba definida dentro de la función, dando error a la hora de
 * usarla dentro del bloque "if", además habia que invocar la
 * función canPlay al final del codigo para poder ejecutarlo.
 */