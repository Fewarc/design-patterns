interface DocumentState {
  print(): string;
}

export class DraftState implements DocumentState {
  constructor(document: DocumentObj) {
    this.document = document;
  }

  document: DocumentObj;

  print(): string {
    return "Draft: " + this.document.content;
  }
}

export class PreviewState implements DocumentState {
  constructor(document: DocumentObj) {
    this.document = document;
  }

  document: DocumentObj;

  print(): string {
    return "Preview: " + this.document.content;
  }
}

export class PublishedState implements DocumentState {
  constructor(document: DocumentObj) {
    this.document = document;
  }

  document: DocumentObj;

  print(): string {
    return "Published: " + this.document.content;
  }
}

export class DocumentObj {
  constructor(value: string) {
    this.content = value;
  }

  state: DocumentState = new DraftState(this);
  content: string = "";

  changeState(state: DocumentState) {
    this.state = state;
  }

  print() {
    return this.state.print();
  }
}
