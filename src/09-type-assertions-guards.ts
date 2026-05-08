// Type assertions
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;

// or
let strLength2: number = (<string>someValue).length;

// Type guards
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
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

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}