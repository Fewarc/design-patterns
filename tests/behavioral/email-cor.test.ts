import {
  Email,
  EmailAdHandler,
  EmailBlacklistHandler,
  EmailSpamHandler,
} from "../../src/behavioral/chain-of-responsibility/email-cor";

it("filters spam emails", () => {
  const email: Email = {
    from: "from@gmail.com",
    to: "to@gmail.com",
    content: "SPAM SPAM SPAM",
    target: "main",
  };

  const emailBlacklistHandler = new EmailBlacklistHandler();
  const emailAdHandler = new EmailAdHandler();
  const emailSpamHandler = new EmailSpamHandler();

  emailAdHandler.setNext(emailSpamHandler);
  emailBlacklistHandler.setNext(emailAdHandler);

  const verifiedEmail = emailBlacklistHandler.handle(email)!;

  expect(verifiedEmail.target).toBe("trash");
});

it("filters ad emails", () => {
  const email: Email = {
    from: "AD",
    to: "to@gmail.com",
    content: "text text AD text",
    target: "main",
  };

  const emailBlacklistHandler = new EmailBlacklistHandler();
  const emailSpamHandler = new EmailSpamHandler();
  const emailAdHandler = new EmailAdHandler();

  emailSpamHandler.setNext(emailAdHandler);
  emailBlacklistHandler.setNext(emailSpamHandler);

  const verifiedEmail = emailBlacklistHandler.handle(email)!;

  expect(verifiedEmail.target).toBe("trash");
});

it("filters blacklisted emails", () => {
  const email: Email = {
    from: "BLACKLISTED",
    to: "to@gmail.com",
    content: "text",
    target: "main",
  };

  const emailAdHandler = new EmailAdHandler();
  const emailSpamHandler = new EmailSpamHandler();
  const emailBlacklistHandler = new EmailBlacklistHandler();

  emailSpamHandler.setNext(emailBlacklistHandler);
  emailAdHandler.setNext(emailSpamHandler);

  const verifiedEmail = emailAdHandler.handle(email)!;

  expect(verifiedEmail.target).toBe("trash");
});

it("leaves regulare emails", () => {
  const email: Email = {
    from: "from@gmail.com",
    to: "to@gmail.com",
    content: "text",
    target: "main",
  };

  const emailAdHandler = new EmailAdHandler();
  const emailSpamHandler = new EmailSpamHandler();
  const emailBlacklistHandler = new EmailBlacklistHandler();

  emailSpamHandler.setNext(emailBlacklistHandler);
  emailAdHandler.setNext(emailSpamHandler);

  const verifiedEmail = emailAdHandler.handle(email)!;

  expect(verifiedEmail.target).toBe("main");
});
