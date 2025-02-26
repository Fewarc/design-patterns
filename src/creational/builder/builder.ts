export default abstract class Builder<T> {
  constructor(defaultObject: T) {
    this.defaultObject = defaultObject;
    this.builtObject = defaultObject;
    this.reset();
  }
  private defaultObject: T;
  protected builtObject: T;

  private reset() {
    this.builtObject = this.defaultObject;
  }

  build() {
    return this.builtObject;
  }
}
