// interface
interface User {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number; // readonly property
}

// object type annotations
let user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  id: 1,
};

// user.id = 2; // Error: Cannot assign to 'id' because it is read-only

// interface with methods
interface Product {
  name: string;
  price: number;
  getDiscountedPrice(discount: number): number; // method signature
}

let product: Product = {
  name: "Laptop",
  price: 1000,
  getDiscountedPrice(discount: number): number {
    return this.price - discount;
  },
};

console.log(product.getDiscountedPrice(100)); // Output: 900
