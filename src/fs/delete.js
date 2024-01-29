import fsPromise from "fs/promises";
import path from "path";
const pathToFile = path.join("fs/files", "fileToRemove.txt");
const remove = async () => {
  try {
    await fsPromise.unlink(pathToFile);
  } catch {
    console.error("\x1b[31m" + "FS operation failed" + "\x1b[0m");
  }
};

await remove();
