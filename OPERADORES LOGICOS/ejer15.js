// Valor del pin
let pin = 2004

// Comprobamos si el valor de pin está dentro del rango especificado.
if (pin > 999 && pin <= 10000) {
    // Si está dentro de dicho rango, la consola imprimirá:
console.log('Pin is valid');
} else  {
    // Si se encuentra fuera del rango especificado, la consola imprimirá:
    console.log('Pin is invalid');
}