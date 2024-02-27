function printName(name) {
  console.log(name);
}

function sayHelloName(callback) {
  console.log("Hello");
  callback();
}
sayHelloName(function () {
  printName("Rubén");
});
