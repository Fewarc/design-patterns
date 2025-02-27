interface CustomIterator<T> {
  getNext(): T;
  hasNext(): boolean;
}

export interface MenuItem {
  name: string;
  price: number;
}

interface Menu {
  menuItems: MenuItem[];
  createMenuItemsIterator(): CustomIterator<MenuItem>;
}

class MenuItemsIterator implements CustomIterator<MenuItem> {
  constructor(items: MenuItem[]) {
    this.menuItems = items;
  }

  menuItems: MenuItem[];
  index: number = 0;

  getNext(): MenuItem {
    const menuItem = this.menuItems[this.index];
    this.index++;
    return menuItem;
  }

  hasNext(): boolean {
    return this.menuItems.length > this.index;
  }
}

export class DinerMenu implements Menu {
  constructor(items: MenuItem[]) {
    this.menuItems = items;
  }

  menuItems: MenuItem[];

  createMenuItemsIterator(): CustomIterator<MenuItem> {
    return new MenuItemsIterator(this.menuItems);
  }
}
