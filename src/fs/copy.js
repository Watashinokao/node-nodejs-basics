import fsPromise from "fs/promises";
import path from "path";
const copy = async (pathFolder, pathCopyFolder) => {
  try {
    const filesInFolder = await fsPromise.readdir(pathFolder, {
      withFileTypes: true,
    });
    await fsPromise.mkdir(pathCopyFolder);
    for (const file of filesInFolder) {
      if (file.isDirectory()) {
        let newPathFolder = path.join(
          pathFolder,
          path.basename(file.name, path.extname(file.name))
        );
        let newPathCopyFolder = path.join(
          pathCopyFolder,
          path.basename(file.name, path.extname(file.name))
        );
        await copy(newPathFolder, newPathCopyFolder);
      }
      if (file.isFile()) {
        await fsPromise.copyFile(
          path.join(pathFolder, file.name),
          path.join(pathCopyFolder, file.name)
        );
      }
    }
  } catch {
    console.error("\x1b[31m" + "FS operation failed" + "\x1b[0m");
  }
};

await copy("fs/files", "fs/files-copy");
