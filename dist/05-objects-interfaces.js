"use strict";
// object type annotations
let user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    id: 1,
};
let product = {
    name: "Laptop",
    price: 1000,
    getDiscountedPrice(discount) {
        return this.price - discount;
    },
};
console.log(product.getDiscountedPrice(100)); // Output: 900
//# sourceMappingURL=05-objects-interfaces.js.map