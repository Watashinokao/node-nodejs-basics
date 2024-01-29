import fsPromise from "fs/promises";
const list = async () => {
  try {
    const files = await fsPromise.readdir("fs/files");
    console.log(files);
  } catch {
    console.error("\x1b[31m" + "FS operation failed" + "\x1b[0m");
  }
};

await list();
