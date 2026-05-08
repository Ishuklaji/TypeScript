"use strict";
// Primitives
let userName = "Ish";
let age = 25;
let isActive = true;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
// Tuples
let person = ["Alice", 30];
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
// Any
let randomValue = 42;
randomValue = "Now I'm a string!";
// unknown
let unknownValue = "Could be anything";
unknownValue = 123; // Still valid, but we need to check the type before using it
unknownValue = true; // Still valid, but we need to check the type before using it
function subscribe(message) {
    console.log(`Subscribed with message: ${message}`);
}
// Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
//# sourceMappingURL=02-basic-types.js.map