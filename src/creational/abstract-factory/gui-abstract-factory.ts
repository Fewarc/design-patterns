interface GUIElement {
  click(): string;
}

abstract class Button implements GUIElement {
  abstract click(): string;
}

abstract class Checkbox implements GUIElement {
  abstract click(): string;
}

class WindowsButton implements Button {
  click(): string {
    return "Clicked a windows button";
  }
}

class WindowsCheckbox implements Checkbox {
  click(): string {
    return "Clicked a windows checkbox";
  }
}

class IOSButton implements Button {
  click(): string {
    return "Clicked an ios button";
  }
}

class IOSCheckbox implements Checkbox {
  click(): string {
    return "Cicked an ios checkbox";
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WindowsGUIFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class IOSGUIFactory implements GUIFactory {
  createButton(): Button {
    return new IOSButton();
  }

  createCheckbox(): Checkbox {
    return new IOSCheckbox();
  }
}

type OS = "windows" | "IOS";

export class CrossPlatformApp {
  constructor(os: OS) {
    this.guiFactory =
      os === "IOS" ? new IOSGUIFactory() : new WindowsGUIFactory();
    this.button = this.guiFactory.createButton();
    this.checkbox = this.guiFactory.createCheckbox();
  }

  private guiFactory: GUIFactory;
  private button: Button;
  private checkbox: Checkbox;

  clickButton(): string {
    return this.button.click();
  }

  clickCheckbox(): string {
    return this.checkbox.click();
  }
}
