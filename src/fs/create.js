import fsPromise from "fs/promises";
import { constants } from "fs";
import path from "path";
const pathToFile = path.join("fs/files", "fresh.txt");

const create = async () => {
  try {
    await fsPromise.access(pathToFile, constants.F_OK);
    console.error("\x1b[31m" + "FS operation failed" + "\x1b[0m");
  } catch {
    fsPromise.appendFile(pathToFile, "I am fresh and young");
  }
};

await create();
