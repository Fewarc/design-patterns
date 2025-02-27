interface Notifier {
  notify(): string;
}

export class BaseNotifier implements Notifier {
  notify(): string {
    return "Base";
  }
}

export class ExtendedNotifier implements Notifier {
  notify(): string {
    return "Extended";
  }
}

abstract class NotifierDecorator implements Notifier {
  constructor(wrapee: Notifier) {
    this.wrapee = wrapee;
  }

  wrapee: Notifier;

  abstract notify(): string;
}

export class EmailNotifier extends NotifierDecorator {
  notify(): string {
    return this.wrapee.notify() + " Email";
  }
}

export class SlackNotifier extends NotifierDecorator {
  notify(): string {
    return this.wrapee.notify() + " Slack";
  }
}

export class SMSNotifier extends NotifierDecorator {
  notify(): string {
    return this.wrapee.notify() + " SMS";
  }
}
