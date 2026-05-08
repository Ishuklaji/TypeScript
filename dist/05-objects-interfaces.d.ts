interface User {
    name: string;
    age: number;
    email?: string;
    readonly id: number;
}
declare let user: User;
interface Product {
    name: string;
    price: number;
    getDiscountedPrice(discount: number): number;
}
declare let product: Product;
//# sourceMappingURL=05-objects-interfaces.d.ts.map