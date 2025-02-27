interface FileSystemElement {
  getSize(): number;
}

export class SystemFile implements FileSystemElement {
  constructor(size: number) {
    this.size = size;
  }

  size: number;

  getSize(): number {
    return this.size;
  }
}

export class Folder implements FileSystemElement {
  constructor(children: FileSystemElement[]) {
    this.childrenElements = children;
  }

  childrenElements: FileSystemElement[];

  addElement(element: FileSystemElement) {
    this.childrenElements.push(element);
  }

  getSize(): number {
    return this.childrenElements.reduce(
      (acc, element) => acc + element.getSize(),
      0
    );
  }
}
