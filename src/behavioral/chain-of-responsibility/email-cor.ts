interface Handler<T> {
  setNext(handler: Handler<T>): void;
  handle(request: T): void;
}

type EmailTarget = "main" | "trash";

export interface Email {
  from: string;
  to: string;
  content: string;
  target: EmailTarget;
}

abstract class EmailHandler implements Handler<Email> {
  next: Handler<Email> | null = null;

  setNext(handler: Handler<Email>): void {
    this.next = handler;
  }

  abstract verifyEmail(email: Email): Email;

  handle(email: Email): void | Email {
    const verifiedEmail = this.verifyEmail(email);
    if (this.next) {
      return this.next.handle(verifiedEmail);
    } else return verifiedEmail;
  }
}

export class EmailSpamHandler extends EmailHandler {
  verifyEmail(email: Email): Email {
    if (email.content.includes("SPAM")) {
      return { ...email, target: "trash" };
    } else return email;
  }
}

export class EmailBlacklistHandler extends EmailHandler {
  verifyEmail(email: Email): Email {
    if (email.from === "BLACKLISTED") {
      return { ...email, target: "trash" };
    } else return email;
  }
}

export class EmailAdHandler extends EmailHandler {
  verifyEmail(email: Email): Email {
    if (email.content.includes("AD") && email.from === "AD") {
      return { ...email, target: "trash" };
    } else return email;
  }
}
