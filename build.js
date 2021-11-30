let { build: esbuild, formatMessages } = require("esbuild");
let { builtinModules } = require("module");

function isBareModuleId(id) {
  return (
    !id.startsWith(".") &&
    !id.startsWith("~") &&
    !require("path").isAbsolute(id)
  );
}

function getNpmPackageName(id) {
  let split = id.split("/");
  let packageName = split[0];
  if (packageName.startsWith("@")) packageName += `/${split[1]}`;
  return packageName;
}

async function build() {
  let result = await esbuild({
    entryPoints: ["./deno/entry.ts"],
    outdir: "./dist",
    format: "esm",
    platform: "neutral",
    mainFields: ["module", "browser", "main"],
    bundle: true,
    watch: process.env.NODE_ENV === "development",
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      ),
    },
    plugins: [
      {
        name: "deno-dependencies",
        setup(build) {
          build.onResolve({ filter: /.*/ }, ({ path }) => {
            if (path.startsWith("http://") || path.startsWith("https://")) {
              return {
                path,
                external: true,
              };
            }

            if (
              isBareModuleId(path) &&
              path !== "remix" &&
              !path.startsWith("@remix-run/")
              // TODO: figure out why esm.sh can't resolve @remix-run/react
              // !path.startsWith("@remix-run/react")
            ) {
              let packageName = getNpmPackageName(path);

              if (builtinModules.includes(packageName)) {
                return {
                  path: `https://deno.land/std/node/${path}.ts`,
                  external: true,
                };
              } else {
                let importPath = path.slice(packageName.length);
                let pkgPath = require.resolve(`${packageName}/package.json`);
                let pkg = require(pkgPath);

                // console.log(`https://esm.sh/${packageName}@${pkg.version}${importPath}`)
                return {
                  path: `https://esm.sh/${packageName}@${pkg.version}${importPath}?no-check`,
                  external: true,
                };
              }
            }
          });
        },
      },
    ],
  });

  if (result.errors.length) {
    let messages = await formatMessages(result.errors, { kind: "error" });
    messages.forEach((message) => console.error(message));

    console.log("Built failed");
    return process.exit(1);
  }

  if (result.warnings.length) {
    let messages = await formatMessages(result.errors, { kind: "warning" });
    messages.forEach((message) => console.warn(message));

    console.log("Built with warnings");
    return;
  }

  console.log("Build successful");
}

build().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
