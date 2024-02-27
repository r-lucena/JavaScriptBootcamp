let smartphone = {
    brand: "Apple",
    name: "iPhone 13",
    price: 1300,
};
Object.freeze(smartphone)

smartphone.price = 100
smartphone.brand = "Samsung"

console.log(smartphone);