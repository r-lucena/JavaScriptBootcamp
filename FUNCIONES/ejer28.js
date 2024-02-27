// Creamos la función "sayHelloName" y le agregamos como parámetro la variable "name".
function sayHelloName(name) {
  // Se devuelve la concatenación del string "Hello" con el parámetro "name".
  return "Hello " + name;
}
// Creamos la variable "name" con nuestro nombre dentro.
let name = "Rubén";
// Creamos la variable "greeting" para dar nombre a nuestra función "sayHelloName".
let greeting = sayHelloName(name);
// Utilizamos un console.log para imprimir en consola la variable "greeting".
console.log(greeting);
