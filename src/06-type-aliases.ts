// Type alias
type Point  = {
    x: number;
    y: number;
}

let point: Point = { x: 10, y: 20 };

// Type alias for a union type
type ID = number | string;

let userId: ID = 123; // valid
let productId: ID = "abc123"; // valid

// type alias vs interface

// Interfaces can be extended, type aliases cannot

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}


// Interfaces can be declared multiple times and will merge
interface User {
    name: string;
}
interface User {
    age: number;
}


// Use interfaces for object shapes, type aliases for unions/intersections

