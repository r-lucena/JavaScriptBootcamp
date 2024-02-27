let primitiva = 5;

if (typeof primitiva === "string") {
  console.log(`This variable is a string`);
} else if (typeof primitiva === `number`) {
  console.log(`This variable is a number`);
} else if (typeof primitiva === `boolean`) {
  console.log(`This variable is a boolean`);
} else console.log(`Variable type no studied yet`);

switch (typeof primitiva) {
  case "string":
    return console.log("esto es un string");
    break;
}
switch (typeof primitiva) {
  case "number":
    return console.log("esto es un number");
    break;
}
switch (typeof primitiva) {
  case "boolean":
    return console.log("esto es un boolean");
    break;
}
