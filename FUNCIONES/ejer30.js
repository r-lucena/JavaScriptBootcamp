/**
Siguiendo con el ejercicio anterior, queremos agregar un retraso cuando vamos a imprimir nuestro "Hello" "Nombre".
Para hacer esto, utilizaremos la función de JavaScript setTimeout(), que como han visto en el video, 
toma dos parámetros: el primer parámetro es una función, el segundo son los milisegundos de retraso.
En nuestro ejercicio, queremos que la función sayHelloName contenga un setTimeout(), que imprima después de 1 segundo nuestro "Hello" "Name".
 */

setTimeout(function sayHelloName() {
  console.log("Hello");
}, 1000);

setTimeout(function printName() {
  console.log("Rubén");
}, 1000);
