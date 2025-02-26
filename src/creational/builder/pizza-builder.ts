import Builder from "./builder";

type PizzaCheese = "yellow cheese" | "mozarella" | "burrata" | null;
type PizzaTopping = "salami" | "pepper" | "ham" | "mushrooms" | null;
type PizzaSize = "small" | "medium" | "large";

class Pizza {
  private _cheese: PizzaCheese = null;
  private _topping: PizzaTopping = null;
  private _size: PizzaSize = "medium";

  public set cheese(newCheese: PizzaCheese) {
    this._cheese = newCheese;
  }

  public get cheese() {
    return this._cheese;
  }

  public set topping(newTopping: PizzaTopping) {
    this._topping = newTopping;
  }

  public get topping() {
    return this._topping;
  }

  public set size(newSize: PizzaSize) {
    this._size = newSize;
  }

  public get size() {
    return this._size;
  }
}

export class PizzaBuilder extends Builder<Pizza> {
  constructor() {
    super(new Pizza());
  }

  setCheese(cheese: Pizza["_cheese"]) {
    this.builtObject.cheese = cheese;
    return this;
  }

  setTopping(topping: Pizza["_topping"]) {
    this.builtObject.topping = topping;
    return this;
  }

  setSize(size: Pizza["_size"]) {
    this.builtObject.size = size;
    return this;
  }
}
