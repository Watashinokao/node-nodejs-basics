import fsPromise from "fs/promises";
import path from "path";
const pathToFile = path.join("fs/files", "fileToRead.txt");
const read = async () => {
  try {
    const data = await fsPromise.readFile(pathToFile, "utf-8");
    console.log("\x1b[34m" + data + "\x1b[0m");
  } catch {
    console.error("\x1b[31m" + "FS operation failed" + "\x1b[0m");
  }
};

await read();
