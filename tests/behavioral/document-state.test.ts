import {
  DocumentObj,
  PreviewState,
  PublishedState,
} from "../../src/behavioral/state/document-state";

it("cycles through document state", () => {
  const document = new DocumentObj("doc1");

  expect(document.print()).toBe("Draft: doc1");

  document.changeState(new PreviewState(document));

  expect(document.print()).toBe("Preview: doc1");

  document.changeState(new PublishedState(document));

  expect(document.print()).toBe("Published: doc1");
});
