"use strict";
class Product {
    constructor(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
    }
    //   public getId(): number {
    //     return this.id;
    //   }
    get id() {
        return this._id;
    }
    //   public getName(): string {
    //     return this.name;
    //   }
    get name() {
        return this._name;
    }
    //   public getPrice(): number {
    //     return this.price;
    //   }
    get price() {
        return this._price;
    }
}
const product1 = new Product(1, "abc", 100);
// console.log(product1.getName());
console.log(product1.name);
//# sourceMappingURL=app.js.map