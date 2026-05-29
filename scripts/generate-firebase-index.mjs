import { readdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const staticDir = ".vercel/output/static";
const assetsDir = join(staticDir, "assets");

async function main() {
  const files = await readdir(assetsDir);

  const cssFile = files.find((f) => /^styles-.*\.css$/.test(f));
  const indexJsCandidates = files.filter((f) => /^index-.*\.js$/.test(f));

  if (!cssFile || indexJsCandidates.length === 0) {
    throw new Error("Could not find generated CSS/JS assets to build Firebase index.html");
  }

  // Use the largest index chunk as app entry.
  const withSize = await Promise.all(
    indexJsCandidates.map(async (file) => ({ file, size: (await stat(join(assetsDir, file))).size }))
  );
  withSize.sort((a, b) => b.size - a.size);
  const entryJs = withSize[0].file;

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Shanzster</title>
    <link rel="stylesheet" href="/assets/${cssFile}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${entryJs}"></script>
  </body>
</html>
`;

  await writeFile(join(staticDir, "index.html"), html, "utf8");
  console.log(`Generated Firebase index.html with ${entryJs} and ${cssFile}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
