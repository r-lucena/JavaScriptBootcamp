/**
 * Declara las variables booleanas isSunnyDay y isHomeworkCompleted y asígnales un valor.
Mediante el operador ternario, imprime en la consola la frase Jesse can go out to play si ambas variables son true, en caso contrario imprime Jesse stays at home.
 */

let isSunnyDay = true
let isHomeworkCompleted = false

// Utilizamos el operador && para verificar que se cumplen ambas variables
let goPlay = isHomeworkCompleted && isSunnyDay ? 'Jesse can go out to play' : 'Jesse stays at home'

// Imprimimos el resultado de la operacion en consola
console.log(goPlay);