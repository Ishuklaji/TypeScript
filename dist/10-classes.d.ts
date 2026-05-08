declare class Person {
    private name;
    protected age: number;
    email: string;
    constructor(name: string, age: number, email: string);
    introduce(): string;
    getName(): string;
    setName(name: string): void;
}
declare class Employee {
    private id;
    name: string;
    protected department: string;
    constructor(id: number, name: string, department: string);
    getDetails(): string;
}
declare let param1: Person;
//# sourceMappingURL=10-classes.d.ts.map