function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

let firstPhone = new Smartphone("Apple", "iPhone 14", 1400);
let secondPhone = new Smartphone("Samsung", "Galaxy S20", 700);

console.log(firstPhone);
console.log(secondPhone);
