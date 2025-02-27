import {
  Folder,
  SystemFile,
} from "../../src/structural/composite/files-composite";

it("creates file system and gets size of all files", () => {
  const subFolder = new Folder([new SystemFile(50), new SystemFile(50)]);
  const srcFolder = new Folder([
    new SystemFile(50),
    new SystemFile(50),
    subFolder,
  ]);

  expect(srcFolder.getSize()).toBe(200);
});

it("pushes files to system and gets size of all files", () => {
  const srcFolder = new Folder([]);
  const subFolder = new Folder([]);

  subFolder.addElement(new SystemFile(50));
  subFolder.addElement(new SystemFile(50));
  subFolder.addElement(new SystemFile(50));

  srcFolder.addElement(subFolder);

  expect(srcFolder.getSize()).toBe(150);
});
