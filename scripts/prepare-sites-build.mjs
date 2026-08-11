import { copyFile, mkdir, readdir, rename } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const buildOutputDirectory = resolve(projectDirectory, "dist");
const clientOutputDirectory = resolve(buildOutputDirectory, "client");
const serverOutputDirectory = resolve(buildOutputDirectory, "server");

await Promise.all([
  mkdir(clientOutputDirectory, { recursive: true }),
  mkdir(serverOutputDirectory, { recursive: true }),
]);

const clientEntries = (await readdir(buildOutputDirectory, { withFileTypes: true })).filter(
  (entry) => entry.name !== "client" && entry.name !== "server",
);

await Promise.all(
  clientEntries.map((entry) =>
    rename(resolve(buildOutputDirectory, entry.name), resolve(clientOutputDirectory, entry.name)),
  ),
);

await Promise.all([
  copyFile(resolve(projectDirectory, "server", "index.js"), resolve(serverOutputDirectory, "index.js")),
  copyFile(resolve(clientOutputDirectory, "index.html"), resolve(clientOutputDirectory, "404.html")),
]);
