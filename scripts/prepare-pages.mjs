import fs from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");
const lpDir = path.join(outDir, "lp");
const publicAssetsDir = path.resolve(process.cwd(), "public", "assets");
const outAssetsDir = path.join(outDir, "assets");
const keepLpRoutes = new Set(["cacao-fruit", "cacao-fruit-v2"]);
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const pagesBasePath = repositoryName ? `/${repositoryName}` : "";
const shouldRewriteForPages = process.env.GITHUB_ACTIONS === "true" && Boolean(repositoryName);

const redirectHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Dira Fruit Solutions</title>
  <meta http-equiv="refresh" content="0; url=./lp/cacao-fruit/" />
  <script>location.replace("./lp/cacao-fruit/")</script>
</head>
<body></body>
</html>
`;

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function removeIfExists(targetPath) {
  await fs.rm(targetPath, { recursive: true, force: true });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function rewriteAssetPathsForPages(baseDir) {
  const entries = await fs.readdir(baseDir, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(baseDir, entry.name);
    if (entry.isDirectory()) {
      await rewriteAssetPathsForPages(entryPath);
      continue;
    }

    if (!/\.(html|css|js|txt)$/i.test(entry.name)) {
      continue;
    }

    const original = await fs.readFile(entryPath, "utf8");
    const assetPattern = /(["'(:])\/assets\//g;
    const urlPattern = /url\(\/assets\//g;
    const nextContent = original
      .replace(assetPattern, `$1${pagesBasePath}/assets/`)
      .replace(urlPattern, `url(${pagesBasePath}/assets/`);

    const duplicatePattern = new RegExp(`${escapeRegExp(pagesBasePath)}${escapeRegExp(pagesBasePath)}/assets/`, "g");
    const normalized = nextContent.replace(duplicatePattern, `${pagesBasePath}/assets/`);

    if (normalized !== original) {
      await fs.writeFile(entryPath, normalized, "utf8");
    }
  }
}

async function main() {
  const stat = await fs.stat(outDir).catch(() => null);
  if (!stat || !stat.isDirectory()) {
    throw new Error("Missing ./out directory. Run `next build` first.");
  }

  await ensureDir(lpDir);

  const lpEntries = await fs.readdir(lpDir, { withFileTypes: true });
  await Promise.all(
    lpEntries
      .filter((entry) => entry.isDirectory() && !keepLpRoutes.has(entry.name))
      .map((entry) => removeIfExists(path.join(lpDir, entry.name)))
  );

  for (const requiredRoute of keepLpRoutes) {
    const routePath = path.join(lpDir, requiredRoute);
    const routeStat = await fs.stat(routePath).catch(() => null);
    if (!routeStat || !routeStat.isDirectory()) {
      throw new Error(`Missing required route in out/: /lp/${requiredRoute}`);
    }
  }

  const topLevelEntries = await fs.readdir(outDir, { withFileTypes: true });
  const keepTopLevel = new Set(["_next", "lp", "assets", "index.html", "404.html"]);
  await Promise.all(
    topLevelEntries
      .filter((entry) => !keepTopLevel.has(entry.name))
      .map((entry) => removeIfExists(path.join(outDir, entry.name)))
  );

  const publicAssetsStat = await fs.stat(publicAssetsDir).catch(() => null);
  if (publicAssetsStat && publicAssetsStat.isDirectory()) {
    await removeIfExists(outAssetsDir);
    await fs.cp(publicAssetsDir, outAssetsDir, { recursive: true });
  } else {
    throw new Error("Missing public/assets directory required by /lp/cacao-fruit");
  }

  if (shouldRewriteForPages) {
    await rewriteAssetPathsForPages(outDir);
  }

  await fs.writeFile(path.join(outDir, "index.html"), redirectHtml, "utf8");
  await fs.writeFile(path.join(outDir, "404.html"), redirectHtml, "utf8");

  console.log("Prepared GitHub Pages artifact with only:");
  console.log("- /lp/cacao-fruit");
  console.log("- /lp/cacao-fruit-v2");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
