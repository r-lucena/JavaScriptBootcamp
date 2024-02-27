// function suma(a, b, callback) {
//   callback(a + b);
// }
// let cb = function (result) {
//   console.log("The result is: " + result);
// };

// suma(3, 2, cb);


// setTimeout(function () {
//   console.log("Hello!");
// }, 2500)

// let cb = function () {
//   console.log("Hello!");
// }
// setTimeout (cb, 2500)

function sayHello() {
  console.log("Hello!");
}

sayHello()// Si quiero invocar la funcion pongo parentesis y los parametros que la funcion espera recibir.
setTimeout(sayHello, 2500)// Si quiero pasar una referencia escribo el nombre de la funcion sin usar parentesis. 
// (puede ser una funcion normal o el valor de una variable que haya sido asignada con el resultado de una expresion que representa una funcion)