// Primitives
let userName: string = "Ish";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Tuples
let person: [string, number] = ["Alice", 30];

// Enums
enum Color {
  Red,
  Green,
  Blue
}
let favoriteColor: Color = Color.Green  ;

// Any
let randomValue: any = 42;
randomValue = "Now I'm a string!";

// unknown
let unknownValue: unknown = "Could be anything";
unknownValue = 123; // Still valid, but we need to check the type before using it
unknownValue = true; // Still valid, but we need to check the type before using it


function subscribe(message: string): void {
  console.log(`Subscribed with message: ${message}`);
}


// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;