const firstName = "Mario";
const lastName = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(age == average); /**He utilizado el operador de igualdad ya que las dos variables coinciden en el valor. 
(También daria true si utilizamos el Operador de Igualdad Estricta ya que tambien son del mismo tipo) */
console.log(examsCompleted > yearsCompleted); // He utilizado el operador > ya que el valor de la primera variable es superior al de la segunda. 
console.log(isGraduated != firstYearCompleted); // He utilizado el operador != ya que la primera variable tiene un valor opuesto a la segunda.
console.log(firstName === lastName); // He utilizado el Operador de Igualdad Estricta ya que a pesar de que las dos variables son tipo String no poseen el mismo valor.
console.log(examsCompleted<yearsCompleted); // He utilizado el operador < ya que la primera variable tiene un valor mayor a la segunda.
console.log(average<=examsCompleted); // He utilizado el operador <= ya que la primera variable tiene un valor mayor a la segunda.