type Point = {
    x: number;
    y: number;
};
declare let point: Point;
type ID = number | string;
declare let userId: ID;
declare let productId: ID;
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}
interface User {
    name: string;
}
interface User {
    age: number;
}
//# sourceMappingURL=06-type-aliases.d.ts.map