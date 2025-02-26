import { PCBuilder } from "../src/creational/builder/pc-builder";

it("should build intel 16GB HDD 1650 PC", () => {
  const pcBuilder = new PCBuilder();
  const defualtPC = pcBuilder.build();

  expect(defualtPC.CPU).toBe("intel");
  expect(defualtPC.RAM).toBe("16GB");
  expect(defualtPC.StorageDisk).toBe("HDD");
  expect(defualtPC.GPU).toBe("1650");
});

it("should build amd 64GB SSD 3060 PC", () => {
  const pcBuilder = new PCBuilder();
  const defualtPC = pcBuilder
    .setCPU("amd")
    .setRAM(64)
    .setStorageDisk("SSD")
    .setGPU("3060")
    .build();

  expect(defualtPC.CPU).toBe("amd");
  expect(defualtPC.RAM).toBe("64GB");
  expect(defualtPC.StorageDisk).toBe("SSD");
  expect(defualtPC.GPU).toBe("3060");
});

it("should build arm 128GB SSD 3070 PC", () => {
  const pcBuilder = new PCBuilder();
  const defualtPC = pcBuilder
    .setCPU("arm")
    .setRAM(128)
    .setStorageDisk("SSD")
    .setGPU("3070")
    .build();

  expect(defualtPC.CPU).toBe("arm");
  expect(defualtPC.RAM).toBe("128GB");
  expect(defualtPC.StorageDisk).toBe("SSD");
  expect(defualtPC.GPU).toBe("3070");
});
