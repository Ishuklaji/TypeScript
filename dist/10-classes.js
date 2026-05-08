"use strict";
class Person {
    // properties
    name;
    age;
    email;
    // constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // method
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. You can contact me at ${this.email}.`;
    }
    //   getter
    getName() {
        return this.name;
    }
    //   setter
    setName(name) {
        this.name = name;
    }
}
class Employee {
    id;
    name;
    department;
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}
let param1 = new Person("Alice", 30, "engineer");
console.log(param1.introduce());
//# sourceMappingURL=10-classes.js.map