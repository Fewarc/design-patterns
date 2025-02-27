import {
  BaseNotifier,
  EmailNotifier,
  ExtendedNotifier,
  SlackNotifier,
  SMSNotifier,
} from "../../src/structural/decorator/notifier-decorator";

it("creates base sms notifier", () => {
  const baseNotifier = new BaseNotifier();
  const smsNotifier = new SMSNotifier(baseNotifier);

  expect(smsNotifier.notify()).toBe("Base SMS");
});

it("creates extended sms slack email notifier", () => {
  const extendedNotifier = new ExtendedNotifier();
  let notifier = new SMSNotifier(extendedNotifier);
  notifier = new SlackNotifier(notifier);
  notifier = new EmailNotifier(notifier);

  expect(notifier.notify()).toBe("Extended SMS Slack Email");
});
