"use strict";
// Type assertions
let someValue = "This is a string";
let strLength = someValue.length;
// or
let strLength2 = someValue.length;
// Type guards
function processValue(value) {
    if (typeof value === "string") {
        console.log(`String value: ${value.toUpperCase()}`);
    }
    else {
        console.log(`Number value: ${value.toFixed(2)}`);
    }
}
processValue("hello");
// instanceof type guard
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
//# sourceMappingURL=09-type-assertions-guards.js.map