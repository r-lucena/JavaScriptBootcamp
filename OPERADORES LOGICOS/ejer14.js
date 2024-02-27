const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

console.log(isAutumn || isSummer);
// Obtenemos el valor true porque al menos 1 de las 2 condiciones es cierta.
console.log(isSunnyDay && isSummer);
// Obtenemos el valor true porque ambas condiciones son ciertas.
console.log(!isAutumn);
// Obtenemos el valor true porque negamos el valor original "false" de la condición.
console.log(isSummer && itIsRaining);
// Obtenemos el valor false porque no se cumple una de las condiciones.
console.log(itIsRaining || isAutumn);
// Obtenemos el valor false porque no se cumple ninguna de las condiciones.
console.log(!isSummer);
// Obtenemos el valor false porque negamos el valor original "true" de la condición.