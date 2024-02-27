// Imprime en la consola todos los números pares del 0 al 20.

/**
 * Para este ejercicio he creado un loop "for" con una variable numérica de valor "0".
 * Despues añadimos la condición de que la variable "number" sea igual o menor a "20".
 * Seguidamente, con el "Operador de Asignación de Adición" creamos la expresión "number += 2" que
 * incrementa en 2 cada iteracion, consiguiendo que el resultado siempre sea par.
*/
for(let number = 0; number <= 20; number += 2 ){
   // Imprimimos la variable number en la consola con el mensaje "Even Number: "
    console.log("Even Number: " + number);
}