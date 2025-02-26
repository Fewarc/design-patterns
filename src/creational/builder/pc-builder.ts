import Builder from "./builder";

type CPU = "intel" | "amd" | "arm";
type RAM = 4 | 8 | 16 | 32 | 64 | 128;
type StorageDisk = "HDD" | "SSD";
type GPU = "1650" | "3050" | "3060" | "3070";

function appendSuffix(suffix: string) {
  return function <T>(target: () => T, context: ClassGetterDecoratorContext) {
    if (context.kind !== "getter") {
      throw new Error(`@appendSuffix can only be applied to getter methods.`);
    }

    return function (this: any): T {
      const result = target.call(this);
      if (typeof result === "string" || typeof result === "number") {
        return (result.toString() + suffix) as unknown as T;
      }
      return result;
    };
  };
}

function logMethod() {
  return function (target: any, context: ClassMethodDecoratorContext) {
    if (context.kind !== "method") {
      throw new Error(`@LogMethod can only be applied to methods.`);
    }

    const contextName = String(context.name);

    return function (this: any, ...args: any[]) {
      console.log(`Calling method: ${contextName} with arguments:`, args);

      // Call the original method
      const result = target.apply(this, args);

      console.log(`Method ${contextName} returned:`, result);
      return result;
    };
  };
}

class PC {
  constructor() {
    this._CPU = "intel";
    this._RAM = 16;
    this._StorageDisk = "HDD";
    this._GPU = "1650";
  }

  private _CPU: CPU;
  private _RAM: RAM;
  private _StorageDisk: StorageDisk;
  private _GPU: GPU;

  public set CPU(cpu: CPU) {
    this._CPU = cpu;
  }

  public get CPU() {
    return this._CPU;
  }

  public set RAM(ram: RAM) {
    this._RAM = ram;
  }

  @appendSuffix("GB")
  public get RAM() {
    return this._RAM;
  }

  public set StorageDisk(storageDisk: StorageDisk) {
    this._StorageDisk = storageDisk;
  }

  public get StorageDisk() {
    return this._StorageDisk;
  }

  public set GPU(gpu: GPU) {
    this._GPU = gpu;
  }

  public get GPU() {
    return this._GPU;
  }
}

export class PCBuilder extends Builder<PC> {
  constructor() {
    super(new PC());
  }

  @logMethod()
  public setCPU(cpu: CPU) {
    this.builtObject.CPU = cpu;
    return this;
  }

  public setRAM(ram: RAM) {
    this.builtObject.RAM = ram;
    return this;
  }

  public setStorageDisk(storageDisk: StorageDisk) {
    this.builtObject.StorageDisk = storageDisk;
    return this;
  }

  public setGPU(gpu: GPU) {
    this.builtObject.GPU = gpu;
    return this;
  }
}
