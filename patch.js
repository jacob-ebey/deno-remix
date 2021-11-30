let fsp = require("fs/promises");

async function patch() {
  let pkgPath = require.resolve("@remix-run/server-runtime/package.json");
  let pkgJson = require(pkgPath);
  pkgJson.module = "./browser/index.js";
  await fsp.writeFile(pkgPath, JSON.stringify(pkgJson, null, 2), "utf-8");
}

patch().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
