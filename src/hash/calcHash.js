import fsPromise from "fs/promises";
import { createHash } from "crypto";
const calculateHash = async () => {
  const data = await fsPromise.readFile(
    "hash/files/fileToCalculateHashFor.txt",
    "utf-8"
  );
  const hash = createHash("sha256");
  hash.update(data);
  console.log(hash.digest("hex"));
};

await calculateHash();
