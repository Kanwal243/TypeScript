class Product {
  constructor(
    private _id: number,
    private _name: string,
    private _price: number
  ) {}
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

  set name(newName: string) {
    if (!newName) {
      throw new Error("Name cannot be empty");
    }
    this._name = newName;
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
