class Person {
  // properties
  private name: string;
  protected age: number;
  public email: string;

  // constructor
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // method
  public introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old. You can call me an ${this.email}.`;
  }

  //   getter
  public getName(): string {
    return this.name;
  }

  //   setter
  public setName(name: string): void {
    this.name = name;
  }
}

class Employee {
  constructor(
    private id: number,
    public name: string,
    protected department: string,
  ) {}

  getDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

let param1 = new Person("Alice", 30, "engineer");
console.log(param1.introduce());

// Inheritance
class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    department: string,
    private teamSize: number,
  ) {
    super(id, name, department);
  }

  getTeamInfo(): string {
    return `${this.name} manages ${this.teamSize} people`;
  }
}

// Abstract classes
abstract class Shape {
  constructor(public color: string) {}

  abstract getArea(): number;

  displayColor(): void {
    console.log(`This shape is ${this.color}`);
  }
}

class Rectangle extends Shape {
  constructor(
    color: string,
    private width: number,
    private height: number,
  ) {
    super(color);
  }

  getArea(): number {
    return this.width * this.height;
  }
}
