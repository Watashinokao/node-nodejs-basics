import fsPromise from "fs/promises";
import path from "path";
const rename = async () => {
  try {
    await fsPromise.rename(
      path.join("fs/files", "wrongFilename.txt"),
      path.join("fs/files", "properFilename.md")
    );
  } catch (error) {
    console.error("\x1b[31m" + "FS operation failed" + "\x1b[0m", error);
  }
};

await rename();
