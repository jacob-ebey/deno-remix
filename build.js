let { build: esbuild, formatMessages } = require("esbuild");

async function build() {
  let result = await esbuild({
    entryPoints: ["./deno/entry.ts"],
    outdir: "./dist",
    format: "esm",
    bundle: true,
    watch: process.env.NODE_ENV === "development",
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      ),
    },
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
