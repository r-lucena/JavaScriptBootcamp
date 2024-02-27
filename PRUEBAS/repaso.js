 let total = 1

 function factorialNumber(number1){
 for (let i = 1; i <= number1; i++){
     console.log();
   total = total * i

 }
 console.log(total);
 }
 factorialNumber(5)

 function multiplicationTable(number1) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${index}*${number1} = ${number1 * index} `);
  }
 }
multiplicationTable(7);
let total = 0;
function sumatoryNumber(number1) {
  for (let index = 0; index <= number1; index++) {
    if (index % 2 == 0) {
        total = total + index;
        console.log(total);
  }}
 
  }

sumatoryNumber(8)