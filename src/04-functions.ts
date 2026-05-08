// basic function with types
function add(a: number, b: number): number {
  return a + b;
}

// optional parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

// default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// arrow function with types
// Arrow functions
const divide = (a: number, b: number): number => a / b;

// Function types
let calculate: (x: number, y: number) => number;
calculate = add;