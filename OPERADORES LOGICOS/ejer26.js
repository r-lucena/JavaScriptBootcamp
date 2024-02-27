//? Usa un bucle for para imprimir en la consola todos los números del 0 al 10 y luego su suma.

/**
 * Primero creamos la variable numérica "total" con valor de "0" antes de el loop "for".
 * Después comenzamos el loop "for" definiendo otra variable numérica "number" con valor "0".
 * Creamos la condición para que la variable "number" siempre sea igual o menor a "10".
 * Añadimos la expresión "number++" para que el valor de la variable incremente en 1 por cada iteración.
 * Por último implementamos la variable "total" para que durante cada iteración sume su valor con
 * el de la variable "number" obteniendo al final la suma total de los valores asignados
 * a dicha variable durante cada iteración como resultado de la variable "total".
 */
let total = 0;
for (let number = 0; number <= 10; number++) {
  total = total + number;
  /* Creamos un console.log dentro del loop para que por cada iteracion escriba el mensaje "Number: " y
    el valor de la variable "number".
    */
  console.log("Number: " + number);
  console.log(total);
}
/**
 * Una vez terminado el loop creamos otro console.log para que imprima el mensaje "Total: " y
 * el valor final de la variable "total".
 */
console.log("Total: " + total);
