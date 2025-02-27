import {
  DinerMenu,
  MenuItem,
} from "../../src/behavioral/iterator/menu-iterator";

it("creates menu iterator", () => {
  const menuItems: MenuItem[] = [
    {
      name: "breakfast",
      price: 10,
    },
    {
      name: "lunch",
      price: 15,
    },
    {
      name: "dinner",
      price: 100,
    },
  ];

  const dinerMenu = new DinerMenu(menuItems);
  const dinerMenuIterator = dinerMenu.createMenuItemsIterator();

  expect(dinerMenuIterator.getNext().name).toBe("breakfast");
  expect(dinerMenuIterator.getNext().name).toBe("lunch");
  expect(dinerMenuIterator.getNext().name).toBe("dinner");
});

it("creates js native menu iterator", () => {
  const menuItems: MenuItem[] = [
    {
      name: "breakfast",
      price: 10,
    },
    {
      name: "lunch",
      price: 15,
    },
    {
      name: "dinner",
      price: 100,
    },
  ];

  function* dinerMenuGenerator(items: MenuItem[]): Generator<MenuItem> {
    for (let item of items) {
      yield item;
    }
  }

  const dinerMenuIterator = dinerMenuGenerator(menuItems);

  expect(dinerMenuIterator.next().value.name).toBe("breakfast");
  expect(dinerMenuIterator.next().value.name).toBe("lunch");
  expect(dinerMenuIterator.next().value.name).toBe("dinner");
});
